//import express, { Request, Response } from 'express';
import express from "express";
import routes from './routes/index';
import fs from "fs";
import { promises as fsPromises } from "fs"; // Add this line to import fsPromises
//import csvtojson from "csvtojson";

const app = express();
const port = 3000;


// Localhost connected
app.use('/api', routes);

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});


const myFunc = (num: number): number => {
  return num * num;
};

export default myFunc;
