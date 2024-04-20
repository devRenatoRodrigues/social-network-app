import { Router } from 'express';
import loginRouter from './Login.route';
import statusRouter from './Status.route';


const router = Router();

router.use('/login', loginRouter);

router.use('/status', statusRouter);

export default router;