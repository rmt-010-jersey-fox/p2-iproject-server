'use strict';
const hashPassword = require("../helpers/hash-password")

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Users", [
      {
        username: "lilynano",
        email: "lilynano@mail.com",
        password: hashPassword("lilily"),
        exp: 2341,
        cardsCleared: 764,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "otong322",
        email: "otong@mail.com",
        password: hashPassword("pass123"),
        exp: 0,
        cardsCleared: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Users", null, {})
  }
};
