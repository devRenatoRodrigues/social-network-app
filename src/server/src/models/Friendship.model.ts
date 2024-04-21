import SequelizeFriendship from "../database/models/SequelizeFriendship.model";
import SequelizeUser from "../database/models/SequelizeUser.model";
import { IUser } from "../interfaces";


export interface IFriendship {
    userId: number;
    friendId: number;
}

interface IUndoFriendship {
    message: string;
    friendship: IFriendship;
}

export class FriendShipModel {
    private _model = SequelizeFriendship;

    async create(friendship: IFriendship): Promise<void> {
        await this._model.create({
            userId: friendship.userId,
            friendId: friendship.friendId
        });
    };

    async delete(friendship: IFriendship): Promise<IUndoFriendship> {
        const undoFriendship = await this._model.destroy({
            where: {
                userId: friendship.userId,
                friendId: friendship.friendId
            }
        });
        if (!undoFriendship) throw new Error('Friendship not found');
        return { message: 'Friendship deleted', friendship };

    };

    async findAllByUserId(userId: number): Promise<number[]> {
        const friendships = await this._model.findAll({
            where: {
                userId
            }
        });
        return friendships.map(friendship => friendship.friendId);
    }
}