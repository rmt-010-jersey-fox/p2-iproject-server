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
   await queryInterface.bulkInsert('Diseases', [
    {
        name: "Cancer",
        level_of_risk: "high",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: "Influenza",
        level_of_risk: "low",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: "Diarrhea",
        level_of_risk: "medium",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: "COVID-19",
        level_of_risk: "high",
        createdAt: new Date(),
        updatedAt: new Date()
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
     await queryInterface.bulkDelete('Diseases', null, {});
  }
};
