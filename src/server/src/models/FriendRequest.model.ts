import SequelizeFriendRequest from "../database/models/SequelizeFriendRequest.model";
import { FriendRequestStatus, IFriendRequest, IFriendRequestResponse, IFriendRequests } from "../interfaces";


export class FriendRequest {
    private _model = SequelizeFriendRequest;

    async create(senderId: number, receiverId: number): Promise<IFriendRequestResponse> {
        await this._model.create({ senderId, receiverId });
        return { senderId, receiverId, status: FriendRequestStatus.PENDING };
    }

    async updateStatus(senderId: number, receiverId: number, status: string): Promise<void> {
        await this._model.update({ status }, { where: { senderId, receiverId } });
    }

    async findAllByStatus(senderId: IFriendRequest['senderId']): Promise<IFriendRequests[] | null> {
        const friendRequest = await this._model.findAll({ where: { senderId } });
        if (!friendRequest) return null;
        return friendRequest.map(friendRequest => {
            const { receiverId, status } = friendRequest;
            return { receiverId, status };
        });
    }

}