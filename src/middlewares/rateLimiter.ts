import rateLimit from 'express-rate-limit';

export const rateLimiter = rateLimit({
    windowMs: 3 * 60 * 1000, // 3 minutes
    max: 50,
    message: 'Too many requests, please try again later.',
    standardHeaders: true,
    legacyHeaders: false,
});
