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
   await queryInterface.bulkInsert('Users', [
    {
        email: "doctor1@mail.com",
        password: "1111",
        role: "doctor"
    },
    {
        email: "doctor2@mail.com",
        password: "2222",
        role: "doctor"
    },
    {
        email: "doctor3@mail.com",
        password: "3333",
        role: "doctor"
    },
    {
        email: "doctor4@mail.com",
        password: "4444",
        role: "doctor"
    },
    {
        email: "patient1@mail.com",
        password: "1111",
        role: "patient"
    },
    {
        email: "patient2@mail.com",
        password: "2222",
        role: "patient"
    },
    {
        email: "patient3@mail.com",
        password: "3333",
        role: "patient"
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
  }
};
