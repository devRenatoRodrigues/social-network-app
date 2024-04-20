import { IFriendRequestResponse } from '../interfaces';
import { FriendRequest } from '../models';

export class FriendRequestService {
    constructor(
        private _friendRequestModel = new FriendRequest(),
    ) { }

    public async sendFriendRequest(senderId: number, receiverId: number): Promise<IFriendRequestResponse> {
        await this._friendRequestModel.create(senderId, receiverId);
        return { senderId, receiverId, status: 'pending' };

    }

    public async acceptFriendRequest(senderId: number, receiverId: number): Promise<IFriendRequestResponse> {
        await this._friendRequestModel.updateStatus(senderId, receiverId, 'accepted');
        return { senderId, receiverId, status: 'accepted' };
    }

    public async rejectFriendRequest(senderId: number, receiverId: number): Promise<IFriendRequestResponse> {
        await this._friendRequestModel.updateStatus(senderId, receiverId, 'rejected');
        return { senderId, receiverId, status: 'rejected' };
    }

    public async findFriendRequests(senderId: number): Promise<{ receiverId: number, status: string }[] | null> {
        return await this._friendRequestModel.findAllByStatus(senderId);
    }

}