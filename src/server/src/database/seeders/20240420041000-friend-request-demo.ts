import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    queryInterface.bulkInsert('FriendRequests', [{
      senderId: 1,
      receiverId: 2,
      status: 'PENDING',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      senderId: 2,
      receiverId: 1,
      status: 'ACCEPTED',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      senderId: 3,
      receiverId: 1,
      status: 'PENDING',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      senderId: 3,
      receiverId: 2,
      status: 'PENDING',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    ]);
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('users', {});
  },
}