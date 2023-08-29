"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import the 'app' module from the '../index' file
var index_1 = __importDefault(require("../index"));
// Import the 'sharp' module from the '../utilities/sharpModule' file
var sharpModule_1 = __importDefault(require("../utilities/sharpModule"));
// Import the 'supertest' module
var supertest_1 = __importDefault(require("supertest"));
// Create a request object using 'supertest' and pass in the 'app' module
var request = (0, supertest_1.default)(index_1.default);
// Import the 'path' module
var path_1 = __importDefault(require("path"));
// Start describing the test suite
describe("Endpoint Test", function () {
    // Start describing the test case
    it("should return the expected response", function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request.get("/api")];
                case 1:
                    response = _a.sent();
                    // Assert that the response status is 200
                    expect(response.status).toBe(200);
                    // Assert that the response text is equal to 'Main API Route'
                    expect(response.text).toEqual("Main API Route");
                    return [2 /*return*/];
            }
        });
    }); });
    // Start describing the test case
    it("should return the expected response", function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request.get("/api/images?filename=fjord&height=200&width=300")];
                case 1:
                    response = _a.sent();
                    // Assert that the response status is 200
                    expect(response.status).toBe(200);
                    return [2 /*return*/];
            }
        });
    }); });
});
describe("Testing image processing", function () {
    // Define the input image path
    var inputImage = path_1.default.join(__dirname, "../../images/full/fjord.jpeg"); // Filename of input image
    var inputImageWrong = path_1.default.join(__dirname, "../../images/full/wrong_fjord.jpeg"); // Wrong filename of input image
    // Define the desired width and height for resizing
    var width = 500;
    var height = 500;
    it("Throws a missing input error if the wrong filename is provided", function () { return __awaiter(void 0, void 0, void 0, function () {
        var error, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    error = undefined;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    // Test that an error is thrown when the wrong filename is provided
                    return [4 /*yield*/, (0, sharpModule_1.default)(inputImageWrong, width, height)];
                case 2:
                    // Test that an error is thrown when the wrong filename is provided
                    _a.sent();
                    fail("Promise should have been rejected"); // fail the test if the promise is not rejected
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _a.sent();
                    error = err_1; // Explicitly type 'err' as 'Error'
                    return [3 /*break*/, 4];
                case 4:
                    expect(error).toBeInstanceOf(Error);
                    expect(error.message).toBe("Input file is missing: ".concat(inputImageWrong));
                    return [2 /*return*/];
            }
        });
    }); });
    it("Resolves successfully when provided the right filename, height, and width parameters", function () { return __awaiter(void 0, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, sharpModule_1.default)(inputImage, width, height)];
                case 1:
                    result = _a.sent();
                    expect(result).toBeDefined(); // assertion for resolved value
                    return [2 /*return*/];
            }
        });
    }); });
});
