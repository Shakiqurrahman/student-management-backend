import dotenv from 'dotenv';
dotenv.config();

export const config = {
    node_env: process.env.NODE_ENV,
    port: process.env.PORT,
    mongodb_uri: process.env.MONGODB_URI,
};
