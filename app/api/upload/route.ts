import type { NextApiRequest, NextApiResponse } from "next";
import cloudinary from "cloudinary";

// Configure Cloudinary with your credentials
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const { image } = req.body;

      if (!image) {
        return res.status(400).json({ error: "No image provided" });
      }

      // Upload the image to Cloudinary
      const result = await cloudinary.v2.uploader.upload(image, {
        folder: "your-folder-name", // Optional: specify a folder in Cloudinary
      });

      // Return the image URL
      return res.status(200).json({ url: result.secure_url });
    } catch (error) {
      console.error("Error uploading image to Cloudinary:", error);
      return res
        .status(500)
        .json({ error: "Error uploading image to Cloudinary" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
