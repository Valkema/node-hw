import express from 'express';

import {
 createStudent,
 deleteStudent,
 updateStudent,
 getStudent,
} from '../controllers/student';

const studentRouter = express.Router();


studentRouter.post('/', createStudent);

studentRouter.patch('/:groupId', updateStudent);

studentRouter.get('/:groupId', getStudent);

studentRouter.delete('/:groupId', deleteStudent);

export default studentRouter;