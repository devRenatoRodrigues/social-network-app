import {
    CreationOptional,
    Model,
    DataTypes,
} from 'sequelize';
import db from '.';
import SequelizeUser from './SequelizeUser.model';

class SequelizeFriendRequest extends Model {
    declare id: CreationOptional<number>;
    declare senderId: number;
    declare receiverId: number;
    declare status: string;
}

SequelizeFriendRequest.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    senderId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    receiverId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'pending',
    },
},
    {
        sequelize: db,
        modelName: 'friend_requests',
        tableName: 'friend_requests',
        timestamps: false,
    });

SequelizeFriendRequest.belongsTo(SequelizeUser, {
    foreignKey: 'senderId',
    as: 'sender'
});

SequelizeFriendRequest.belongsTo(SequelizeUser, {
    foreignKey: 'receiverId',
    as: 'receiver'
});

export default SequelizeFriendRequest;