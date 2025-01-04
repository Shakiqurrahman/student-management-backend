"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const studentRoute_1 = require("../modules/student/studentRoute");
const userRoute_1 = require("../modules/user/userRoute");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: '/users',
        route: userRoute_1.userRoutes,
    },
    {
        path: '/students',
        route: studentRoute_1.studentRoutes,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
