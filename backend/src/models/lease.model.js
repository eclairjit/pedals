import mongoose from "mongoose";

const leaseSchema = new mongoose.Schema(
  {
    lender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    borrower: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export const Lease = mongoose.model("Lease", leaseSchema);
