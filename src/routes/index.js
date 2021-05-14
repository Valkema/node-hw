import express from 'express';
import groupstudRouter from './groupstud.js';
import studentRouter from './student.js';
import errorHandler from '../middlewares/errorHandler.js';

const router = express.Router();

router.use('/groupstud', groupstudRouter);

router.use('/student', studentRouter);

router.use(errorHandler);

export default router;