import {
    CreationOptional,
    Model,
    DataTypes,
} from 'sequelize';
import db from '.';
import SequelizeUser from './SequelizeUser.model';

class SequelizeFriendship extends Model {
    declare id: CreationOptional<number>;
    declare userId: number;
    declare friendId: number;
}

SequelizeFriendship.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    friendId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
},
    {
        sequelize: db,
        modelName: 'friendships',
        tableName: 'friendships',
        timestamps: false,
    });

SequelizeUser.belongsToMany(SequelizeUser, {
    through: SequelizeFriendship,
    as: 'friends',
    foreignKey: 'userId'
});
SequelizeUser.belongsToMany(SequelizeUser, {
    through: SequelizeFriendship,
    as: 'friendOf',
    foreignKey: 'friendId'
});

export default SequelizeFriendship;
