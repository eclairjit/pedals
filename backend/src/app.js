import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static("public"));

//importing routes
import userRouter from "./routes/user.routes.js";
import cycleRouter from "./routes/cycle.routes.js";
import verifyRouter from "./routes/OTPverification.route.js";

//declaring routes
app.use("/api/v1/users", userRouter);
app.use("/api/v1/cycle", cycleRouter);
app.use("/api/v1/verify", verifyRouter);

export default app;
