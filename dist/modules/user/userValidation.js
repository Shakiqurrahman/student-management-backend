"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginSchemaValidation = exports.userSchemaValidation = void 0;
const zod_1 = require("zod");
exports.userSchemaValidation = zod_1.z.object({
    fullName: zod_1.z.string().min(1, 'fullName is required'),
    userName: zod_1.z.string().min(1, 'userName is required'),
    email: zod_1.z
        .string()
        .email('Invalid email format')
        .min(1, 'userName is required'),
    password: zod_1.z.string().min(8, 'Password must be at least 8 characters long'),
    role: zod_1.z.enum(['USER', 'ADMIN']).default('USER'),
});
exports.loginSchemaValidation = zod_1.z.object({
    userName: zod_1.z.string().optional(),
    email: zod_1.z.string().email('Invalid email format').optional(),
    password: zod_1.z.string().min(8, 'Password must be at least 8 characters long'),
});
