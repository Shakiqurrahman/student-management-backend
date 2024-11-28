import { Request, Response, Router } from 'express';
import httpStatus from 'http-status';
import sendResponse from '../../utils/sendResponse';
import { userController } from './userController';

const router = Router();

router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);

export const userRoute = router;
