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
     await queryInterface.bulkInsert('BuddySchedules', [
        {
          UserId : 4,
          time : '17.00',
          day : 'sunday',
          createdAt: new Date(),
          updatedAt: new Date(),
          status : 'available'
        },
        {
          UserId : 4,
          time : '17.00',
          day : 'monday',
          createdAt: new Date(),
          updatedAt: new Date(),
          status : 'available'
        },
        {
          UserId : 4,
          time : '17.00',
          day : 'tuesday',
          createdAt: new Date(),
          updatedAt: new Date(),
          status : 'available'
        },
        {
          UserId : 4,
          time : '17.00',
          day : 'wednesday',
          createdAt: new Date(),
          updatedAt: new Date(),
          status : 'available'
        },
        {
          UserId : 5,
          time : '17.00',
          day : 'sunday',
          createdAt: new Date(),
          updatedAt: new Date(),
          status : 'available'
        },
        {
          UserId : 5,
          time : '17.00',
          day : 'monday',
          createdAt: new Date(),
          updatedAt: new Date(),
          status : 'available'
        },
        {
          UserId : 5,
          time : '17.00',
          day : 'tuesday',
          createdAt: new Date(),
          updatedAt: new Date(),
          status : 'available'
        },
        {
          UserId : 6,
          time : '17.00',
          day : 'tuesday',
          createdAt: new Date(),
          updatedAt: new Date(),
          status : 'available'
        },
        {
          UserId : 6,
          time : '17.00',
          day : 'wednesday',
          createdAt: new Date(),
          updatedAt: new Date(),
          status : 'available'
        },
        {
          UserId : 6,
          time : '17.00',
          day : 'friday',
          createdAt: new Date(),
          updatedAt: new Date(),
          status : 'available'
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
     await queryInterface.bulkDelete('BuddySchedules', null, {} )

  }
};
