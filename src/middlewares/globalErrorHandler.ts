import { ErrorRequestHandler } from 'express';
import { config } from '../config/config';

type TErrorResponse = {
    message: string;
    success: boolean;
    error: any;
    stack?: string;
};

const globalErrorHandler: ErrorRequestHandler = (error, req, res, next) => {
    const statusCode = 500;
    let errorResponse: TErrorResponse;
    if (error.name === 'ZodError') {
        errorResponse = {
            message: 'Validation Failed',
            success: false,
            error: {
                name: 'ValidationError',
                errors: error.errors,
            },
            stack: config.node_env === 'dev' ? error.stack : {},
        };
    } else {
        errorResponse = {
            message: error.message || 'Something Went Wrong',
            success: false,
            error: {
                name: error.name || 'Error',
                errors: error.errors,
            },
            stack: error.stack,
        };
    }

    res.status(statusCode).json(errorResponse);
};

export default globalErrorHandler;
