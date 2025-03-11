import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";

import cloudinary from "../config/cloudinary.js";

const UPLOAD_FOLDER_NAME = "uploads";
const ALLOWEDED_FORMATS = ["jpg", "png", "jpeg"];

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: UPLOAD_FOLDER_NAME,
    allowed_formats: ALLOWEDED_FORMATS,
    public_id: (req, file) => `${Date.now()}-${file.originalname}`, // Unique filename
  },
});

const upload = multer({ storage });
export { upload };
