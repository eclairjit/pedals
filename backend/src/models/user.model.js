import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    phoneNumber: {
      type: String,
      required: true,
      trim: true,
    },
    landmark: {
      type: String,
      enum: [
        "aquamarine",
        "jasper",
        "sapphire",
        "topaz",
        "diamond",
        "nlhc",
        "nac",
        "rosaline",
        "ruby",
        "gjlt",
        "heritage",
        "penman",
        "sac",
      ],
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "inactive",
    },
    lender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Lender",
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
