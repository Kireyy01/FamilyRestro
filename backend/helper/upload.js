import cloudinary from "../config/cloudinary.js";

const uploadFile = async (filePath) => {
  try {
    const result = await cloudinary.uploader.upload(filePath);
    return result;
  } catch (error) {
    console.log(error.message);
  }
};

export { uploadFile };
