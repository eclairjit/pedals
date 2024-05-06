import { asyncHandler } from "../utils/asyncHandler.js";
import { apiError } from "../utils/apiError.js";
import { apiResponse } from "../utils/apiResponse.js";
import { User } from "../models/user.model.js";
import { uploadToCloudinary } from "../utils/cloudinary.js";

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

export { registerUser };
