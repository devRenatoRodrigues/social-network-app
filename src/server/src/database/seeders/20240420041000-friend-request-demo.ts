import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    queryInterface.bulkInsert('friend_requests', [{
      senderId: 1,
      receiverId: 2,
      status: 'PENDING',
    }, {
      senderId: 2,
      receiverId: 1,
      status: 'ACCEPTED',
    }, {
      senderId: 3,
      receiverId: 1,
      status: 'PENDING',
    }, {
      senderId: 3,
      receiverId: 2,
      status: 'PENDING',
    },
    ]);
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('friend_requests', {});
  },
}