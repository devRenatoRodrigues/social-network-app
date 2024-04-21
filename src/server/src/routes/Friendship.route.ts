import { Request, Router, Response } from 'express';
import { FriendshipController } from '../controllers';
import { validateToken } from '../middlewares';

const friendshipController = new FriendshipController();

const router = Router();

router.get(
    '/friends',
    validateToken,
    (req: Request, res: Response) => friendshipController.getAllFriends(req, res),
);

router.post(
    '/undo',
    validateToken,
    (req: Request, res: Response) => friendshipController.undoFriendship(req, res),
);

export default router;