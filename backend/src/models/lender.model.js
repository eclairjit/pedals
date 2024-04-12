import mongoose from "mongoose";

const lenderSchema = new mongoose.Schema(
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
        location: {
            type: String,
        },
        status: {
            type: String,
            enum: ["available", "not available"],
            default: "not available",
        },
        borrower: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        type: {
            type: String,
            enum: ["individual", "admin"],
            default: "individual",
        },
        cycle: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Cycle",
        },
        upiId: {
            type: String,
            required: true,
            trim: true,
        }
    },
    { timestamps: true }
)

export const Lender = mongoose.model("Lender", lenderSchema);