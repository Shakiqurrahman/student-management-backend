import { model, Schema } from 'mongoose';
import { TGurdian, TStudent } from './studentInterface';

const gurdianSchema = new Schema<TGurdian>({
    gurdianName: String,
    gurdianRelation : {
        enum : ['Father', 'Mother', 'Brother', 'Sister', 'Other'],
    },
    gurdianNumber: Number,
});

const studentModel = new Schema<TStudent>(
    {
        fullName: {
            type: String,
            required: true,
        },
        studentId: String,
        profile: String,
        email: {
            type: String,
            trim: true,
            lowercase: true,
        },
        gender : {
            type: String,
            enum: ['Male', 'Female', 'Other'],
            required: true,
        },
        phone : Number,
        dateOfBirth : Date,
        presentAddress: {
            type: String,
            required: true,
        },
        permanentAddress: {
            type: String,
            required: true,
        },
        gurdian : gurdianSchema,
        department : String,
    },
    { timestamps : true},
);

export const Student = model<TStudent>('Student', studentModel);
