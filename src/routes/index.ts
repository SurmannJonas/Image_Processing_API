import express from "express";
import images from './api/images';

const routes = express.Router();

// Create the main API route
routes.get('/', (req, res) => {
  res.send('Main API Route');
});

// Use the '/images' route for handling image-related requests
routes.use('/images', images);

// Export the routes object as the default export of this module
export default routes;
