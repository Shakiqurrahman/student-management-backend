import { model, Schema } from 'mongoose';
import { TGurdian, TStudent } from './studentInterface';

const gurdianSchema = new Schema<TGurdian>({
    gurdianName: String,
    gurdianRelation: {
        type: String,
        enum: ['Father', 'Mother', 'Brother', 'Sister', 'Other'],
    },
    gurdianNumber: String,
});

const studentModel = new Schema<TStudent>(
    {
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
    },
    { timestamps: true },
);

export const Student = model<TStudent>('Student', studentModel);
