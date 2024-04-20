import { Model, QueryInterface, DataTypes } from 'sequelize';
import { IUser, UserStatus } from '../../interfaces/User.interface';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<IUser>>('users', {
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
      }
    });
  },

  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('users');
  },
};