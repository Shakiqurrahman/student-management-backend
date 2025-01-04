"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
const mongoose_1 = require("mongoose");
const gurdianSchema = new mongoose_1.Schema({
    gurdianName: String,
    gurdianRelation: {
        type: String,
        enum: ['Father', 'Mother', 'Brother', 'Sister', 'Other'],
    },
    gurdianNumber: String,
});
const studentModel = new mongoose_1.Schema({
    fullName: {
        type: String,
        required: true,
    },
    profile: String,
    email: {
        type: String,
        trim: true,
        lowercase: true,
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other'],
        required: true,
    },
    phone: String,
    dateOfBirth: Date,
    presentAddress: {
        type: String,
        required: true,
    },
    permanentAddress: {
        type: String,
        required: true,
    },
    gurdian: gurdianSchema,
    department: String,
}, { timestamps: true });
exports.Student = (0, mongoose_1.model)('Student', studentModel);
