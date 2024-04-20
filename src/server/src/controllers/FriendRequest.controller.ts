import { Request, Response } from 'express';
import mapStatusHTTP from '../utils/mapStatusHTTP.util';
import { FriendRequestService } from '../service';

export class FriendRequestController {
    constructor(
        private _friendRequestService = new FriendRequestService(),
    ) { }

    public async sendFriendRequest(req: Request, res: Response): Promise<Response> {
        const id = Number(req.body.payload.id);
        const serviceResponse = await this._friendRequestService.sendFriendRequest(id, req.body.receiverId);
        return res.status(mapStatusHTTP('CREATED')).json(serviceResponse);
    }

    public async acceptFriendRequest(req: Request, res: Response): Promise<Response> {
        const id = Number(req.body.payload.id);
        const serviceResponse = await this._friendRequestService.acceptFriendRequest(id, req.body.senderId);
        return res.status(mapStatusHTTP('SUCCESSFUL')).json(serviceResponse);
    }

    public async rejectFriendRequest(req: Request, res: Response): Promise<Response> {
        const id = Number(req.body.payload.id);
        const serviceResponse = await this._friendRequestService.rejectFriendRequest(id, req.body.senderId);
        return res.status(mapStatusHTTP('SUCCESSFUL')).json(serviceResponse);
    }

    public async findFriendRequests(req: Request, res: Response): Promise<Response> {
        const id = Number(req.body.payload.id);
        const friendRequests = await this._friendRequestService.findFriendRequests(id);
        return res.status(mapStatusHTTP('SUCCESSFUL')).json(friendRequests);
    }

}