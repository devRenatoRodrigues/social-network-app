import { Request, Response } from 'express';
import mapStatusHTTP from '../utils/mapStatusHTTP.util';
import { FriendShipService } from '../service/Friendship.service';

export class FriendshipController {
    constructor(
        private _friendshipService = new FriendShipService(),
    ) { }

    public async undoFriendship(req: Request, res: Response): Promise<Response> {
        const id = Number(req.body.payload.id);
        const serviceResponse = await this._friendshipService.undoFriendShip(id, req.body.friendId);
        return res.status(mapStatusHTTP('SUCCESSFUL')).json(serviceResponse);
    };

    public async getAllFriends(req: Request, res: Response): Promise<Response> {
        const id = Number(req.body.payload.id);
        const friends = await this._friendshipService.getAllFriends(id);
        return res.status(mapStatusHTTP('SUCCESSFUL')).json(friends);
    };

}