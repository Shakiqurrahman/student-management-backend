import httpStatus from 'http-status';
import asyncHandler from '../../utils/asyncHandler';
import sendResponse from '../../utils/sendResponse';
import { studentServices } from './studentService';
import { studentValidation } from './studentValidation';

const createStudent = asyncHandler(async (req, res) => {
    const validatedData = studentValidation.createStudentValidation.parse(
        req.body,
    );

    const student = await studentServices.createStudentIntoDB(validatedData);

    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: 'Student created successfully.',
        data: student,
    });
});

const getStudents = asyncHandler(async (req, res) => {
    const students = await studentServices.getAllStudentsFromDB();

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Students retrieved successfully.',
        data: students,
    });
});

export const getStudentsTotal = asyncHandler(async (req, res) => {
    const totalStudents = await studentServices.getTotalStudentsFromDB();

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Total students number retrieved successfully.',
        data: totalStudents,
    });
});

const getStudentById = asyncHandler(async (req, res) => {
    const { studentId } = req.params;
    const student = await studentServices.getStudentByIdFromDB(studentId);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Student retrieved successfully.',
        data: student,
    });
});

const updateStudentById = asyncHandler(async (req, res) => {
    const { studentId } = req.params;
    const validatedData = studentValidation.updateStudentValidation.parse(
        req.body,
    );
    const updatedStudent = await studentServices.updateStudentInDB(
        studentId,
        validatedData,
    );

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Student updated successfully.',
        data: updatedStudent,
    });
});

const deleteStudentById = asyncHandler(async (req, res) => {
    const { studentId } = req.params;
    await studentServices.deleteStudentFromDB(studentId);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Student deleted successfully.',
    });
});

export const studentControllers = {
    createStudent,
    getStudents,
    getStudentsTotal,
    getStudentById,
    updateStudentById,
    deleteStudentById,
};
