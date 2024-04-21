import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    queryInterface.bulkInsert('friendships', [
      {
        userId: 1,
        friendId: 2,
      },
      {
        userId: 1,
        friendId: 3,
      },
      {
        userId: 2,
        friendId: 3,
      },
    ]);
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('friendships', {});
  },
}