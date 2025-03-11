import { uploadFile } from "../helper/upload.js";

const upload = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const path = req.file.path;
    const upload = await uploadFile(path);

    res
      .status(200)
      .json({ message: "File uploaded successfully", url: upload.secure_url });
  } catch (error) {
    res.status(500).json({ message: "Upload failed", error: error.message });
  }
};

export { upload };
