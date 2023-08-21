"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resizeJpeg = void 0;
var sharp_1 = __importDefault(require("sharp"));
//import sharp, { CreateOptions } from 'sharp';
function resizeJpeg(width, height, outputPath) {
    var createOptions = {
        width: width,
        height: height,
        channels: 4,
        background: { r: 255, g: 0, b: 0, alpha: 128 },
    };
    return (0, sharp_1.default)({ create: createOptions })
        .toFormat('jpeg')
        .toFile(outputPath);
}
exports.resizeJpeg = resizeJpeg;
