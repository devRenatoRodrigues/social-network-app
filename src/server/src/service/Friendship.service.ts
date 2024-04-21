import SequelizeUser from '../database/models/SequelizeUser.model';
import { IFriendRequestResponse, IUserStatusResponse } from '../interfaces';
import { FriendRequest } from '../models';
import { FriendShipModel } from '../models/Friendship.model';

export class FriendShipService {
    constructor(
        private _friendshipModel = new FriendShipModel(),
        private _UserModel = SequelizeUser,
    ) { }

    public async undoFriendShip(userId: number, friendId: number): Promise<void> {
        await this._friendshipModel.delete({ userId: friendId, friendId: userId });
    }

    public async getAllFriends(userId: number): Promise<IUserStatusResponse[]> {

        const friendShips = await this._friendshipModel.findAllByUserId(userId);
        const friends = await this._UserModel.findAll({
            where: {
                id: friendShips
            }
        });

        return friends.map(friend => ({
            username: friend.username,
            email: friend.email,
            status: friend.status
        }));


    }
}