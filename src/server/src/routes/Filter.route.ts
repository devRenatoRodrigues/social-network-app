import { Request, Router, Response } from 'express';
import { UserController } from '../controllers';
import { validateStatus, validateToken } from '../middlewares';

const userController = new UserController();

const router = Router();

router.get(
    '/:status',
    validateToken,
    (req: Request, res: Response) => userController.findByStatus(req, res),
);

export default router;