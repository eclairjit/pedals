import { asyncHandler } from "../utils/asyncHandler.js";
import { apiError } from "../utils/apiError.js";
import { apiResponse } from "../utils/apiResponse.js";
import { User } from "../models/user.model.js";
import { uploadToCloudinary } from "../utils/cloudinary.js";
import jwt from "jsonwebtoken";

const generateAccessAndRefreshToken = async (userId) => {
  try {
    const user = await User.findById(userId);

    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken;

    await user.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error) {
    throw new apiError(500, "Could not generate access and refresh tokens.");
  }
};

const options = {
  httpOnly: true,
  secure: true,
};

const registerUser = asyncHandler(async (req, res) => {
  const { username, email, phoneNumber, password } = req.body;

  console.log(username); //TBR
  console.log(email); //TBR
  console.log(phoneNumber); //TBR
  console.log(password); //TBR

  if (
    [username, email, phoneNumber, password].some(
      (field) => field?.trim() === ""
    )
  ) {
    throw new apiError(400, "All fields are required.");
  }

  const existingUser = await User.findOne({
    $or: [{ email }, { username }],
  });

  if (existingUser) {
    throw new apiError(409, "User already exists.");
  }

  const avatarLocalPath = req.file?.path;

  console.log("avatarLocalPath: ", avatarLocalPath); //TBR

  if (!avatarLocalPath) {
    throw new apiError(400, "Avatar local path not found.");
  }

  console.log("Before upploading to cloudinary."); //TBR

  const avatar = await uploadToCloudinary(avatarLocalPath);

  console.log("After uploading to cloudinary. avatar: ", avatar); //TBR

  if (!avatar) {
    throw new apiError(400, "Could not upload avatar to cloudinary.");
  }

  const user = await User.create({
    username,
    email,
    phoneNumber,
    password,
    avatar: avatar.url,
  });

  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  if (!createdUser) {
    throw new apiError(500, "Could not create user.");
  }

  return res
    .status(201)
    .json(new apiResponse(201, createdUser, "User created successfully."));
});

const loginUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  if (!username) {
    throw new apiError(400, "Username is required.");
  }

  if (!password) {
    throw new apiError(400, "Password is required.");
  }

  const user = await User.findOne({ username });

  if (!user) {
    throw new apiError(404, "User does not exist!");
  }

  const isPasswordVerified = await user.isPasswordCorrect(password);

  if (!isPasswordVerified) {
    throw new apiError(401, "Invalid credentials.");
  }

  const { accessToken, refreshToken } = await generateAccessAndRefreshToken(
    user._id
  );

  const loggedInUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
      new apiResponse(
        200,
        {
          user: loggedInUser,
          accessToken,
          refreshToken,
        },
        "User logged in successfully"
      )
    );
});

const logoutUser = asyncHandler(async (req, res) => {
  const id = req.user._id;

  await User.findByIdAndUpdate(
    id,
    {
      $set: {
        refreshToken: undefined,
      },
    },
    {
      new: true,
    }
  );

  return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new apiResponse(200, {}, "User logged out successfully."));
});

const refreshAccessToken = asyncHandler(async (req, res) => {
  const receivedRefreshToken =
    req.cookies.refreshToken || req.body.refreshToken;

  console.log("Received refresh token: ", receivedRefreshToken); //TBR

  if (!receivedRefreshToken) {
    throw new apiError(400, "Refresh token not found.");
  }

  try {
    console.log("Inside refreshAccessToken try block."); //TBR

    const decodedToken = jwt.verify(
      receivedRefreshToken,
      process.env.REFRESH_TOKEN_SECRET
    );

    console.log("Decoded token: ", decodedToken); //TBR

    const user = await User.findById(decodedToken?._id);

    console.log("User: ", user); //TBR

    if (!user) {
      throw new apiError(401, "Invalid refresh token.");
    }

    console.log("Comparing refresh tokens."); //TBR

    if (receivedRefreshToken !== user.refreshToken) {
      throw new apiError(401, "Invalid refresh token.");
    }

    const { accessToken, newRefreshToken } =
      await generateAccessAndRefreshToken(user._id);

    console.log("Generated new access token: ", accessToken); //TBR
    console.log("Generated new refresh token: ", newRefreshToken); //TBR

    return res
      .status(200)
      .cookie("accessToken", accessToken, options)
      .cookie("refreshToken", newRefreshToken, options)
      .json(
        new apiResponse(
          200,
          {
            accessToken,
            refreshToken: newRefreshToken,
          },
          "Access token refreshed successfully."
        )
      );
  } catch (error) {
    console.log("Inside refreshAccessToken catch block."); //TBR
    throw new apiError(401, "Invalid refresh token.");
  }
});

const getCurrentUser = asyncHandler(async (req, res) => {
  return res
    .status(200)
    .json(
      new apiResponse(
        200,
        req.user,
        "Current user details fetched successfully."
      )
    );
});

export {
  registerUser,
  loginUser,
  logoutUser,
  refreshAccessToken,
  getCurrentUser,
};
