import multer from "multer";
import express from "express";

import { upload } from "../controllers/uploadController.js";

const UploadRouter = express.Router();

const uploader = multer({
  storage: multer.diskStorage({}),
  limits: { fileSize: 500000 },
});

UploadRouter.post("/", uploader.single("file"), upload);

export default UploadRouter;
