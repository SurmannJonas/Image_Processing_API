import express from "express";
import images from './api/images';

const routes = express.Router();

// Main API
routes.get('/', (req, res) => {
  res.send('Main API Route');
});

routes.use('/images', images);

export default routes;
