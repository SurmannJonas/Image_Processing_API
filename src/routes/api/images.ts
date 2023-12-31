import express from "express";
import resizeImage from "../../utilities/sharpModule";
import path from "path";
import fs from "fs";
import util from "util";

const images = express.Router();
const statAsync = util.promisify(fs.stat);

// Endpoint for resizing and serving images
images.get("/", async (req, res) => {
  try {
    // Get the filename, width, and height from the request query parameters
    const filename = req.query.filename as unknown as string;
    const width = parseInt(req.query.width as unknown as string);
    const height = parseInt(req.query.height as unknown as string);

    // Check if filename, width, and height are provided
    if (!filename || !width || !height) {
      throw new Error("Missing filename, width, or height");
    }

    // Check if width and height are valid numbers
    if (isNaN(width) || isNaN(height) || width <= 0 || height <= 0) {
      throw new Error("Invalid width or height");
    }

    // Define the paths for the original and resized images
    const pathImage = path.resolve(
      __dirname,
      "../../../images/full/" + filename + ".jpeg",
    );
    const outputPath = path.resolve(
      __dirname,
      "../../../src/routes/api/" + filename + "-" + height + "-" + width + ".jpeg",
    );

    //Caching mechanism - If a resized image already exists, this file is taken, instead of generating a new resized image
    try {
      // Check if the resized image already exists
      await statAsync(outputPath);
      console.log("The file exists.");

    } catch (err) {
      console.log("The file does not exist.");

      // Resize the image using the resizeImage function
      const resizedImage = await resizeImage(pathImage, width, height);

      // Save the resized image to the output path
      await fs.promises.writeFile(outputPath, resizedImage);
    }

    // Send the resized image as a response
    res.sendFile(outputPath);
    console.log("Resized image saved successfully!");
  } catch (error) {
    console.log("Filename NOT found or NOT correct");
    throw error;
  }
});

export default images;
