import { asyncHandler } from "../utils/asyncHandler.js";
import { apiError } from "../utils/apiError.js";
import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

const authToken = asyncHandler(async (req, res, next) => {
  try {
    const token =
      req.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer ", "");

    console.log("Token: ", token); // TBR

    if (!token) {
      throw new apiError(401, "Unauthorized access.");
    }

    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    const user = await User.findById(decodedToken?._id).select(
      "-password -refreshToken"
    );

    if (!user) {
      throw new apiError(401, "Invalid access token.");
    }

    req.user = user;
    next();
  } catch (error) {
    console.log("Inside authToken catch block"); // TBR
    throw new apiError(401, "Error: Invalid access token.");
  }
});

export { authToken };
