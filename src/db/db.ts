import mongoose from 'mongoose';
import { config } from '../config/config';

export const connectDb = async () => {
    try {
        mongoose.connect(config.mongodb_uri as string);
    } catch (error) {
        console.log('MongoDB connection Failed : ', error);
        process.exit(1); //current process will stop!! - [node js]
    }
};
