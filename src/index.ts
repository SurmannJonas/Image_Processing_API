import express from "express";
import routes from './routes/index';
import fs from "fs";
import { promises as fsPromises } from "fs";


const app = express();
const port = 3000;


// Localhost connected
app.use('/api', routes);

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});

//Test function for Jasmine Testing
const myFunc = (num: number): number => {
  return num * num;
};

export default myFunc;
