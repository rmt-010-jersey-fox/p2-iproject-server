'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Users",[
      {
        "username": "admin",
        "email": "syauqilenterano@gmail.com",
        "password": "$2b$08$EsMhjrlr98m7bmnbiT7L.eu/0ZbmejqW/c6ONKtf1K8BguASvmddu",
        "createdAt": new Date(),
        "updatedAt": new Date(),
      }
    ])
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Users")
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
