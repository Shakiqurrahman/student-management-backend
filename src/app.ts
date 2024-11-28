import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { Request, Response } from 'express';
import helmet from 'helmet';
import router from './routes/route';

export const app = express();

const corsOptions = {
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
};

// middlewares
app.use(express.json({ limit: '50kb' }));
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(helmet());

// routes
app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

app.use('/api/v1', router);

// Note: Global Error Handler [Always should be called in bottom]
// todo: app.use(errorHandler)
