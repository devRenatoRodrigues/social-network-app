import { Router } from 'express';
import userRouter from './User.route';


const router = Router();

router.use('/login', userRouter);

export default router;