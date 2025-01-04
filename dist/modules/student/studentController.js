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
exports.studentControllers = exports.getStudentsTotal = void 0;
const http_status_1 = __importDefault(require("http-status"));
const asyncHandler_1 = __importDefault(require("../../utils/asyncHandler"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const studentService_1 = require("./studentService");
const studentValidation_1 = require("./studentValidation");
const createStudent = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const validatedData = studentValidation_1.studentValidation.createStudentValidation.parse(req.body);
    const student = yield studentService_1.studentServices.createStudentIntoDB(validatedData);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.CREATED,
        success: true,
        message: 'Student created successfully.',
        data: student,
    });
}));
const getStudents = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const students = yield studentService_1.studentServices.getAllStudentsFromDB();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Students retrieved successfully.',
        data: students,
    });
}));
exports.getStudentsTotal = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const totalStudents = yield studentService_1.studentServices.getTotalStudentsFromDB();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Total students number retrieved successfully.',
        data: totalStudents,
    });
}));
const getStudentById = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { studentId } = req.params;
    const student = yield studentService_1.studentServices.getStudentByIdFromDB(studentId);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Student retrieved successfully.',
        data: student,
    });
}));
const updateStudentById = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { studentId } = req.params;
    const validatedData = studentValidation_1.studentValidation.updateStudentValidation.parse(req.body);
    const updatedStudent = yield studentService_1.studentServices.updateStudentInDB(studentId, validatedData);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Student updated successfully.',
        data: updatedStudent,
    });
}));
const deleteStudentById = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { studentId } = req.params;
    yield studentService_1.studentServices.deleteStudentFromDB(studentId);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Student deleted successfully.',
    });
}));
exports.studentControllers = {
    createStudent,
    getStudents,
    getStudentsTotal: exports.getStudentsTotal,
    getStudentById,
    updateStudentById,
    deleteStudentById,
};
