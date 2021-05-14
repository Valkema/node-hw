import express from 'express';
import {
   createGroupStud,
   updateGroupStudByPk,
   getGroupStudByPk,
   deleteGroupStudByPk,
} from '../controllers/groupstud';

const groupstudRouter = express.Router();

groupstudRouter.post('/', createGroupStud);

groupstudRouter.patch('/:groupId',  updateGroupStudByPk);

groupstudRouter.get('/:groupId', getGroupStudByPk);

groupstudRouter.delete(
  '/:groupId',
  deleteGroupStudByPk
);

export default groupstudRouter;