import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { TStudent } from './studentInterface';
import { Student } from './studentModel';

const createStudentIntoDB = async (
    studentData: TStudent,
): Promise<TStudent> => {
    const student = await Student.create(studentData);
    return student;
};

const getAllStudentsFromDB = async (): Promise<TStudent[]> => {
    const students = await Student.find();
    return students;
};

const getTotalStudentsFromDB = async (): Promise<number> => {
    const totalStudents = await Student.countDocuments();
    return totalStudents;
};

const getStudentByIdFromDB = async (studentId: string): Promise<TStudent> => {
    const student = await Student.findById(studentId);
    if (!student) {
        throw new AppError(httpStatus.NOT_FOUND, 'Student not found.');
    }
    return student;
};

const updateStudentInDB = async (
    studentId: string,
    updatedStudentData: Partial<TStudent>,
): Promise<TStudent> => {
    const student = await Student.findByIdAndUpdate(
        studentId,
        updatedStudentData,
        { new: true },
    );
    if (!student) {
        throw new AppError(httpStatus.NOT_FOUND, 'Student not found.');
    }
    return student;
};

const deleteStudentFromDB = async (studentId: string): Promise<void> => {
    const result = await Student.findByIdAndDelete(studentId);

    if (!result) {
        throw new AppError(httpStatus.NOT_FOUND, 'Student not found');
    }
};

export const studentServices = {
    createStudentIntoDB,
    getAllStudentsFromDB,
    getTotalStudentsFromDB,
    getStudentByIdFromDB,
    updateStudentInDB,
    deleteStudentFromDB,
};
