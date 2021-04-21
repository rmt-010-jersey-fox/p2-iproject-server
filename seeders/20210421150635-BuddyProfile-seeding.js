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
     await queryInterface.bulkInsert('BuddyProfiles', [
       {
         UserId : 4,
         GithubUser : 'fadelmajid',
         GitlabUser : '',
         skill : 'Backend development with Node.js, written & verbal communication'
       },
       {
        UserId : 5,
        GithubUser : 'amilioasmaramis',
        GitlabUser : '',
        skill : 'Front-end development with Vue.js, critical thinking and problem solving'
      },
      {
        UserId : 6,
        GithubUser : 'ekhaer',
        GitlabUser : '',
        skill : 'Software testing & debugging; Specialty: Python, Javascript'
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
     await queryInterface.bulkDelete('BuddyProfiles', null, {} )
  }
};
