import { z } from 'zod';

export const userSchemaValidation = z.object({
    fullName: z.string().min(1, 'fullName is required'),
    userName: z.string().min(1, 'userName is required'),
    email: z
        .string()
        .email('Invalid email format')
        .min(1, 'userName is required'),
    password: z.string().min(8, 'Password must be at least 8 characters long'),
    role: z.enum(['USER', 'ADMIN']).default('USER'),
});

export const loginSchemaValidation = z.object({
    userName: z.string().optional(),
    email: z.string().email('Invalid email format').optional(),
    password: z.string().min(8, 'Password must be at least 8 characters long'),
});
