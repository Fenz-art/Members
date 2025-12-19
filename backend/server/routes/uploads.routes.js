import express from "express";
import multer from "multer";
import { uploadAvatar } from "../controllers/uploadsController.ts";

const router = express.Router();

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 } // 5MB
});

router.post("/avatar", upload.single("avatar"), uploadAvatar);

export default router;
