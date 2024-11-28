import { Router } from 'express';
import { userRoute } from '../modules/user/userRoute';

const router = Router();

const moduleRoutes = [
    {
        path: '/users',
        route: userRoute,
    },
    // {
    //     path: '/students',
    //     // route: studentRoute,
    // },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
