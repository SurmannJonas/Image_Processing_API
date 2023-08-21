import express from 'express';
import { resizeJpeg } from '../../utilities/sharpModule';
//import generateSemiTransparentRedJpeg from '../../utilities/sharpModule';

const images = express.Router();

images.get('/', (req, res, next) => {
  console.log(`/images was visited:`, req.originalUrl);
  next();
});

images.get('/api/images', async (req, res) => {
  const { filename, width, height } = req.query;

  try {
    // Generate the semi-transparent red image using the imported function
    await resizeJpeg(Number(width), Number(height), `processed-images/${filename}-${width}x${height}.jpeg`);

    // Send the processed image as a response
    res.sendFile(`processed-images/${filename}-${width}x${height}.jpeg`);
  } catch (error) {
    // Handle any errors that occur during image processing
    res.status(500).json({ error: 'Failed to process the image' });
  }
});

export default images;
