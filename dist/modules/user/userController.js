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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const config_1 = require("../../config/config");
const asyncHandler_1 = __importDefault(require("../../utils/asyncHandler"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const userServices_1 = require("./userServices");
const userValidation_1 = require("./userValidation");
const registerUser = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const validatedData = userValidation_1.userSchemaValidation.parse(req.body);
    const result = yield userServices_1.userServices.registerUserIntoDB(validatedData);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.CREATED,
        success: true,
        message: 'User successfully registered!',
        data: Object.assign(Object.assign({}, result.user), { accessToken: result.accessToken }),
    });
}));
const loginUser = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const validatedData = userValidation_1.loginSchemaValidation.parse(req.body);
    const result = yield userServices_1.userServices.loginUserFromDB(validatedData);
    res.cookie('accessToken', result.accessToken, {
        httpOnly: true,
        secure: config_1.config.NODE_ENV === 'production',
        // sameSite: 'strict',
        maxAge: 7 * 24 * 60 * 60 * 1000, // Cookie expiration time (1 week)
    });
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.ACCEPTED,
        success: true,
        message: 'User login successfully!',
        data: Object.assign(Object.assign({}, result.user), { accessToken: result.accessToken }),
    });
}));
exports.userController = {
    registerUser,
    loginUser,
};
