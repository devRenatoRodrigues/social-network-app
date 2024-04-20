import { Request, Router, Response } from 'express';
import { validateLoginFields } from '../middlewares';
import { UserController } from '../controllers/';

const userController = new UserController();

const router = Router();

router.post(
    '/',
    validateLoginFields,
    (req: Request, res: Response) => userController.login(req, res),
);

export default router;