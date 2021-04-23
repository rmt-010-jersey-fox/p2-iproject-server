'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('BuddyMaterials', [
        {
          UserId : 4,
          MaterialId : 1,
          createdAt: new Date(),
          updatedAt : new Date()
        },
        {
          UserId : 4,
          MaterialId : 2,
          createdAt: new Date(),
          updatedAt : new Date()
        },
        {
          UserId : 4,
          MaterialId : 3,
          createdAt: new Date(),
          updatedAt : new Date()
        },
        {
          UserId : 4,
          MaterialId : 4,
          createdAt: new Date(),
          updatedAt : new Date()
        },
        {
          UserId : 5,
          MaterialId : 1,
          createdAt: new Date(),
          updatedAt : new Date()
        },
        {
          UserId : 5,
          MaterialId : 4,
          createdAt: new Date(),
          updatedAt : new Date()
        },
        {
          UserId : 6,
          MaterialId : 1,
          createdAt: new Date(),
          updatedAt : new Date()
        },
        {
          UserId : 6,
          MaterialId : 3,
          createdAt: new Date(),
          updatedAt : new Date()
        },
        {
          UserId : 6,
          MaterialId : 4,
          createdAt: new Date(),
          updatedAt : new Date()
        }
     ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('BuddyMaterials', null, {} )
  }
};
