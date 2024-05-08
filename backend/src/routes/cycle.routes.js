import { Router } from "express";
import { uploadCycleDetails } from "../controllers/cycle.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { authToken } from "../middlewares/auth.middleware.js";

const router = Router();

router
  .route("/upload-cycle-details")
  .post(authToken, upload.single("cycleImage"), uploadCycleDetails);

export default router;
