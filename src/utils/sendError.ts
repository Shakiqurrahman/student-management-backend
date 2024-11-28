import { Response } from 'express';

type TError = {
    statusCode: number;
    success: boolean;
    message?: string;
};
const sendError = (res: Response, error: TError) => {
    res.status(error?.statusCode).json({
        success: error?.success,
        message: error?.message,
    });
};

export default sendError;
