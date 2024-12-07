import AppError from '../../errors/AppError';
import { TUser } from './userInterface';
import { User } from './userModel';
import httpStatus from 'http-status';

const registerUserIntoDB = async (
    payload: TUser,
): Promise<{ user: Omit<TUser, 'password'>; accessToken: string }> => {
    const existingUser = await User.findOne({
        $or: [{ email: payload.email }, { userName: payload.userName }],
    });

    if (existingUser) {
        throw new AppError(httpStatus.CONFLICT, `User already exists.`);
    }

    const newUser = await User.create(payload);
    const { password, ...user } = newUser.toObject();
    const accessToken = await newUser.generateAccessToken();

    return { user, accessToken };
};

const loginUserFromDB = async (
    payload: Partial<TUser>,
): Promise<{ user: Omit<TUser, 'password'>; accessToken: string }> => {
    const user = await User.findOne({
        $or: [{ email: payload.email }, { userName: payload.userName }],
    });

    if (!user || !(await user.comparePassword(payload.password as string))) {
        throw new AppError(httpStatus.EXPECTATION_FAILED, 'Invalid credentials.');
    }

    const { password, ...cleanedUser } = user.toObject();
    const accessToken = await user.generateAccessToken();

    return { user: cleanedUser, accessToken };
};

export const userServices = {
    registerUserIntoDB,
    loginUserFromDB,
};
