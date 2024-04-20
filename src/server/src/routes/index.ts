import { Router } from 'express';
import loginRouter from './Login.route';
import statusRouter from './Status.route';
import filterRouter from './Filter.route';


const router = Router();

router.use('/login', loginRouter);

router.use('/status', statusRouter);

router.use('/filter', filterRouter);


export default router;