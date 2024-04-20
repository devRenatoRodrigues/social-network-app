import { Router } from 'express';
import loginRouter from './Login.route';
import statusRouter from './Status.route';
import filterRouter from './Filter.route';
import friendRequestRouter from './FriendRequest.route';


const router = Router();

router.use('/login', loginRouter);

router.use('/status', statusRouter);

router.use('/filter', filterRouter);

router.use('/friend-request', friendRequestRouter);

export default router;