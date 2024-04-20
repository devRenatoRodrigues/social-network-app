import { Request, Router, Response } from 'express';
import { FriendRequestController } from '../controllers';
import { validateStatus, validateToken } from '../middlewares';

const friendRequestController = new FriendRequestController();

const router = Router();

router.post(
    '/send',
    validateToken,
    (req: Request, res: Response) => friendRequestController.sendFriendRequest(req, res),
);

router.post(
    '/accept',
    validateToken,
    (req: Request, res: Response) => friendRequestController.acceptFriendRequest(req, res),
);

router.post(
    '/reject',
    validateToken,
    (req: Request, res: Response) => friendRequestController.rejectFriendRequest(req, res),
);

router.get(
    '/find',
    validateToken,
    (req: Request, res: Response) => friendRequestController.findFriendRequests(req, res),
);

export default router;