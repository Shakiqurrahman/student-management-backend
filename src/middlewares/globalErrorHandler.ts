import { NextFunction, Request, Response } from 'express';
import { config } from '../config/config';

const globalErrorHandler = (
    error: any,
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    const statusCode = 500;
    const message = error.message || 'Something went wrong!';

    res.status(statusCode).json({
        success: false,
        message: message,
        errorStack: config.node_env === 'dev' ? error.stack : {},
    });
};

export default globalErrorHandler;
