import dotenv from 'dotenv';
dotenv.config();

export const config = {
    node_env: process.env.NODE_ENV,
    port: process.env.PORT,
    mongodb_uri: process.env.MONGODB_URI,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET,
    access_token_expiry: process.env.ACCESS_TOKEN_EXPIRY,
};
