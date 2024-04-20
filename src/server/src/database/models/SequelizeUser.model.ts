import {
    CreationOptional,
    InferAttributes,
    InferCreationAttributes,
    Model,
    DataTypes,
} from 'sequelize';
import db from '.';
import { UserStatus } from '../../interfaces/User.interface';

class SequelizeUser extends Model<InferAttributes<SequelizeUser>,
    InferCreationAttributes<SequelizeUser>> {
    declare id: CreationOptional<number>;

    declare username: string;

    declare email: string;

    declare password: string;

    declare status: UserStatus;
}
SequelizeUser.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: DataTypes.ENUM(UserStatus.ONLINE, UserStatus.OFFLINE, UserStatus.BUSY, UserStatus.AWAY),
        allowNull: false,
        defaultValue: UserStatus.OFFLINE,
    },
},
    {
        sequelize: db,
        modelName: 'users',
        tableName: 'users',
        timestamps: false,
    });

export default SequelizeUser;