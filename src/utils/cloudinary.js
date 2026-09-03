import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

// config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    console.log("File uploaded successfully:", response.url);

    // remove file from server after upload
    fs.unlinkSync(localFilePath);

    return response;

  } catch (error) {
    fs.unlinkSync(localFilePath);
    console.log("Cloudinary upload error:", error);
    return null;
  }
};

export { uploadOnCloudinary };