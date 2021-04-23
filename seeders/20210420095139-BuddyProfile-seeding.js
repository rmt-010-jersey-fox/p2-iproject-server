'use strict';
// const hash
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
      // await queryInterface.bulkInsert('BuddyProfiles', [
      //   {
      //     UserId : 
      //     GithubUser :
      //     GitlabUser :
      //     skill : 
      //     rate : 300000,
      //     rating : 5,
      //     createdAt : new Date(),
      //     updatedAt : new Date()
      //   }
      // ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
