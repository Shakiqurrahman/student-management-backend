"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentValidation = void 0;
const zod_1 = require("zod");
const GuardianSchema = zod_1.z.object({
    gurdianName: zod_1.z.string().min(1, 'Guardian name is required'),
    gurdianRelation: zod_1.z.enum(['Father', 'Mother', 'Brother', 'Sister', 'Other']),
    gurdianNumber: zod_1.z.string(),
});
const createStudentValidation = zod_1.z.object({
    fullName: zod_1.z.string().min(1, 'Full name is required'),
    profile: zod_1.z.string().url().optional(),
    email: zod_1.z.string().email('Invalid email format').optional(),
    phone: zod_1.z.string().optional(),
    gender: zod_1.z.enum(['Male', 'Female', 'Other']),
    dateOfBirth: zod_1.z.string(),
    presentAddress: zod_1.z.string().min(1, 'Present address is required'),
    permanentAddress: zod_1.z.string().min(1, 'Permanent address is required'),
    gurdian: GuardianSchema,
    department: zod_1.z.string().min(1, 'Department is required'),
});
const updateStudentValidation = createStudentValidation.partial();
exports.studentValidation = {
    createStudentValidation,
    updateStudentValidation,
};
