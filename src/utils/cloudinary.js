import { v2 as cloudinary } from "cloudinary"
import fs from "fs"

// configuring cloudinary:
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async function (localFilePath) {
    try {
        if (!localFilePath) return null;
        const option = {
            resource_type: "auto"
        }
        const response = await cloudinary.uploader.upload(localFilePath, option);
        console.log("File is Uploaded on Cloudinary!!", response.url);
        return response;
    } catch (error) {
        // remove the locally saved temp file as the upload operation got failed
        fs.unlinkSync(localFilePath);
        return null;
    }
};

export { uploadOnCloudinary };