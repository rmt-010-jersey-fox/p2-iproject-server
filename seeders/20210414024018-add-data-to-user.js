'use strict';

const { hashPassword } = require("../helpers/password");

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
        password: hashPassword("1111"),
        role: "Intensive Care",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        email: "doctor2@mail.com",
        password: hashPassword("2222"),
        role: "Surgeons",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        email: "doctor3@mail.com",
        password: hashPassword("3333"),
        role: "Primary Care",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        email: "doctor4@mail.com",
        password: hashPassword("4444"),
        role: "Surgeons",
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
     await queryInterface.bulkDelete('Users', null, {});
  }
};
