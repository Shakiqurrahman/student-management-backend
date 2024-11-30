import { Router } from 'express';
import { studentRoutes } from '../modules/student/studentRoute';
import { userRoutes } from '../modules/user/userRoute';

const router = Router();

const moduleRoutes = [
    {
        path: '/users',
        route: userRoutes,
    },
    {
        path: '/students',
        route: studentRoutes,
    },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
