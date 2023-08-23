// Import the necessary libraries
import sharp from 'sharp';


// Define the function to resize the image
async function resizeImage(inputImage: string, widthImage: number, heightImage: number): Promise<Buffer> {
  try {
    // Use the sharp library to resize the image
    const sizedImage = await sharp(inputImage)
      .resize({
        width: widthImage,
        height: heightImage
      })
      .toBuffer();

    // Return the resized image
    return sizedImage;
  } catch (error) {
    // Log any errors that occur during the resizing process
    console.log(error);
    throw error;
  }
}

// Export the resizeImage function as the default export of this module
export default resizeImage;
