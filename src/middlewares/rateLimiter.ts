import rateLimit from 'express-rate-limit';

export const rateLimiter = rateLimit({
    windowMs: 30 * 1000, // 30 seconds
    max: 150,
    message: 'Too many requests, please try again later.',
    standardHeaders: true,
    legacyHeaders: false,
});
