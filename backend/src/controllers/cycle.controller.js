import { asyncHandler } from "../utils/asyncHandler.js";
import { apiError } from "../utils/apiError.js";
import { apiResponse } from "../utils/apiResponse.js";
import { Cycle } from "../models/cycle.model.js";
import { uploadToCloudinary } from "../utils/cloudinary.js";

const uploadCycleDetails = asyncHandler(async (req, res) => {
  const user = req.user;

  if (!user) {
    throw new apiError(401, "User not logged in.");
  }

  const { model, rentRate } = req.body;

  console.log("Cycle model: ", model); // TBR
  console.log("Cycle rent rate: ", rentRate); // TBR

  if (!model) {
    throw new apiError(400, "Model is required.");
  }

  const cycleImagelocalPath = req.file?.path;

  console.log("Cycle imae local path: ", cycleImagelocalPath); // TBR

  if (!cycleImagelocalPath) {
    throw new apiError(400, "Cycle imae local path not found.");
  }

  const image = await uploadToCloudinary(cycleImagelocalPath);

  if (!image) {
    throw new apiError(400, "Could not upload cycle image to cloudinary.");
  }

  const cycle = await Cycle.create({
    model,
    owner: req.user._id,
    rentRate: rentRate ? rentRate : 0,
    image: image.url,
  });

  const createdCycleInstance = await Cycle.findById(cycle._id);

  if (!createdCycleInstance) {
    throw new apiError(500, "Could not upload cycle details.");
  }

  res
    .status(201)
    .json(
      new apiResponse(
        200,
        createdCycleInstance,
        "Cycle details uploaded successfully."
      )
    );
});

export { uploadCycleDetails };
