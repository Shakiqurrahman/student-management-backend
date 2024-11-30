import { Router } from 'express';
import { studentControllers } from './studentController';

const router = Router();

router.post('/create-student', studentControllers.createStudent);
router.get('/', studentControllers.getStudents);
router.get('/total', studentControllers.getStudentsTotal);
router.get('/:studentId', studentControllers.getStudentById);
router.put('/:studentId', studentControllers.updateStudentById);
router.delete('/:studentId', studentControllers.deleteStudentById);

export const studentRoutes = router;
