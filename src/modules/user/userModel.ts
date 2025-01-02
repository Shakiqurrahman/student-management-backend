import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Document, model, Schema } from 'mongoose';
import { config } from '../../config/config';
import { TUser } from './userInterface';

interface IUserMethods {
    comparePassword(password: string): Promise<boolean>;
    generateAccessToken(): Promise<string>;
}

interface IUser extends TUser, IUserMethods, Document {}

const userModel = new Schema<IUser>(
    {
        fullName: {
            type: String,
            required: true,
        },
        userName: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
        },
        password: {
            type: String,
            required: true,
            minlength: 8,
        },
        role: {
            type: String,
            enum: ['ADMIN', 'USER'],
            default: 'USER',
        },
    },
    { timestamps: true },
);

// pre-save hook to hash the password before saving
userModel.pre('save', async function (next) {
    if (this.isModified('password') || this.isNew) {
        try {
            const salt = await bcrypt.genSalt(10);
            this.password = await bcrypt.hash(this.password, salt);
            next();
        } catch (error: any) {
            next(error);
        }
    }
});

// method to compare the password
userModel.methods.comparePassword = async function (
    password: string,
): Promise<boolean> {
    const user = this as IUser;
    return await bcrypt.compare(password, user.password);
};

// generate access token
userModel.methods.generateAccessToken = async function () {
    return jwt.sign(
        {
            _id: this._id,
            userName: this.userName,
            email: this.email,
            role: this.role,
        },
        config.access_token_secret as string,
        {
            expiresIn: config.access_token_expiry,
        },
    );
};

export const User = model<IUser>('User', userModel);
