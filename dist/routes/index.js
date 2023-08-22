"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var images_1 = __importDefault(require("./api/images"));
var routes = express_1.default.Router();
// Create the main API route
routes.get('/', function (req, res) {
    res.send('Main API Route');
});
// Use the '/images' route for handling image-related requests
routes.use('/images', images_1.default);
// Export the routes object as the default export of this module
exports.default = routes;
