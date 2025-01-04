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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userServices = void 0;
const AppError_1 = __importDefault(require("../../errors/AppError"));
const userModel_1 = require("./userModel");
const http_status_1 = __importDefault(require("http-status"));
const registerUserIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const existingUser = yield userModel_1.User.findOne({
        $or: [{ email: payload.email }, { userName: payload.userName }],
    });
    if (existingUser) {
        throw new AppError_1.default(http_status_1.default.CONFLICT, `User already exists.`);
    }
    const newUser = yield userModel_1.User.create(payload);
    const _a = newUser.toObject(), { password } = _a, user = __rest(_a, ["password"]);
    const accessToken = yield newUser.generateAccessToken();
    return { user, accessToken };
});
const loginUserFromDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield userModel_1.User.findOne({
        $or: [{ email: payload.email }, { userName: payload.userName }],
    });
    if (!user || !(yield user.comparePassword(payload.password))) {
        throw new AppError_1.default(http_status_1.default.EXPECTATION_FAILED, 'Invalid credentials.');
    }
    const _a = user.toObject(), { password } = _a, cleanedUser = __rest(_a, ["password"]);
    const accessToken = yield user.generateAccessToken();
    return { user: cleanedUser, accessToken };
});
exports.userServices = {
    registerUserIntoDB,
    loginUserFromDB,
};
