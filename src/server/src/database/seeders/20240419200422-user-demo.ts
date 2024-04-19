import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('users', [
      {
        username: 'Alice Cooper',
        email: 'alice_cooper@mail.com',
        password: 'my_secret'
      },
      {
        username: 'Uncle Bob',
        email: 'uncle_bob@mail.com',
        password: 'secret_user',
      },
    ], {});
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('users', {});
  },
}