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
exports.studentServices = void 0;
const http_status_1 = __importDefault(require("http-status"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
const studentModel_1 = require("./studentModel");
const createStudentIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const student = yield studentModel_1.Student.create(payload);
    return student;
});
const getAllStudentsFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const students = yield studentModel_1.Student.find();
    return students;
});
const getTotalStudentsFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const totalStudents = yield studentModel_1.Student.countDocuments();
    return totalStudents;
});
const getStudentByIdFromDB = (studentId) => __awaiter(void 0, void 0, void 0, function* () {
    const student = yield studentModel_1.Student.findById(studentId);
    if (!student) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, 'Student not found.');
    }
    return student;
});
const updateStudentInDB = (studentId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const student = yield studentModel_1.Student.findByIdAndUpdate(studentId, payload, {
        new: true,
    });
    if (!student) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, 'Student not found.');
    }
    return student;
});
const deleteStudentFromDB = (studentId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield studentModel_1.Student.findByIdAndDelete(studentId);
    if (!result) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, 'Student not found');
    }
});
exports.studentServices = {
    createStudentIntoDB,
    getAllStudentsFromDB,
    getTotalStudentsFromDB,
    getStudentByIdFromDB,
    updateStudentInDB,
    deleteStudentFromDB,
};
