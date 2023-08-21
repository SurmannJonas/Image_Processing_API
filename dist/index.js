"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import express, { Request, Response } from 'express';
var express_1 = __importDefault(require("express"));
var index_1 = __importDefault(require("./routes/index"));
//import csvtojson from "csvtojson";
var app = (0, express_1.default)();
var port = 3000;
// Localhost connected
app.use('/api', index_1.default);
// start the Express server
app.listen(port, function () {
    console.log("server started at http://localhost:".concat(port));
});
var myFunc = function (num) {
    return num * num;
};
exports.default = myFunc;
