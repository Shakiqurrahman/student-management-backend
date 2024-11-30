import { z } from 'zod';

const GuardianSchema = z.object({
    gurdianName: z.string().min(1, 'Guardian name is required'),
    gurdianRelation: z.enum(['Father', 'Mother', 'Brother', 'Sister', 'Other']),
    gurdianNumber: z.string(),
});

const createStudentValidation = z.object({
    fullName: z.string().min(1, 'Full name is required'),
    profile: z.string().url().optional(),
    email: z.string().email('Invalid email format').optional(),
    phone: z.string().optional(),
    gender: z.enum(['Male', 'Female', 'Other']),
    dateOfBirth: z.string(),
    presentAddress: z.string().min(1, 'Present address is required'),
    permanentAddress: z.string().min(1, 'Permanent address is required'),
    gurdian: GuardianSchema,
    department: z.string().min(1, 'Department is required'),
});

const updateStudentValidation = createStudentValidation.partial();

export const studentValidation = {
    createStudentValidation,
    updateStudentValidation,
};
