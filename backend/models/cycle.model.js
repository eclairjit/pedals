import mongoose from "mongoose";

const cycleSchema = new mongoose.Schema(
    {
        model: {
            type: String,
            required: true,
            trim: true,
        },
        image: {
            type: String,
            required: true,
        },
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Lender",
            required: true,
        },
        rentRate: {
            type: Number,
            default: 0,
        }
    },
    { timestamps: true }
)

export const Cycle = mongoose.model("Cycle", cycleSchema);