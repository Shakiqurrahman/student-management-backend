import { TUser } from './userInterface';
import { User } from './userModel';

const registerUserIntoDB = async (
    userData: TUser,
): Promise<{ user: Omit<TUser, 'password'>; accessToken: string }> => {
    const existingUser = await User.findOne({
        $or: [{ email: userData.email }, { userName: userData.userName }],
    });

    if (existingUser) {
        throw new Error(`User already exists.`);
    }

    const newUser = await User.create(userData);
    const { password, ...user } = newUser.toObject();
    const accessToken = await newUser.generateAccessToken();

    return { user, accessToken };
};

const loginUserFromDB = async (
    userData: Partial<TUser>,
): Promise<{ user: Omit<TUser, 'password'>; accessToken: string }> => {
    const user = await User.findOne({
        $or: [{ email: userData.email }, { userName: userData.userName }],
    });

    if (!user || !(await user.comparePassword(userData.password as string))) {
        throw new Error('Invalid credentials.');
    }

    const { password, ...cleanedUser } = user.toObject();
    const accessToken = await user.generateAccessToken();

    return { user: cleanedUser, accessToken };
};

export const userServices = {
    registerUserIntoDB,
    loginUserFromDB,
};
