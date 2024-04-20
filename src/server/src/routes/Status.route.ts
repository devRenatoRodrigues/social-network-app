import { Request, Router, Response } from 'express';
import { UserController } from '../controllers';
import { validateStatus, validateToken } from '../middlewares';

const userController = new UserController();

const router = Router();

router.patch(
    '/',

    validateStatus,
    validateToken,
    (req: Request, res: Response) => userController.updateStatus(req, res),
);

export default router;