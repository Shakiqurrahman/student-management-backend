import httpStatus from 'http-status';
import asyncHandler from '../../utils/asyncHandler';
import sendResponse from '../../utils/sendResponse';
import { userServices } from './userServices';
import { loginSchemaValidation, userSchemaValidation } from './userValidation';

const registerUser = asyncHandler(async (req, res) => {
    const validatedData = userSchemaValidation.parse(req.body);
    const result = await userServices.registerUserIntoDB(validatedData);

    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: 'User successfully registered!',
        data: { ...result.user, accessToken: result.accessToken },
    });
});

const loginUser = asyncHandler(async (req, res) => {
    const validatedData = loginSchemaValidation.parse(req.body);

    const result = await userServices.loginUserFromDB(validatedData);

    sendResponse(res, {
        statusCode: httpStatus.ACCEPTED,
        success: true,
        message: 'User login successfully!',
        data: { ...result.user, accessToken: result.accessToken },
    });
});

export const userController = {
    registerUser,
    loginUser,
};
