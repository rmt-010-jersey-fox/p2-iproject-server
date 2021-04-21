'use strict';
const hashPassword = require("../helpers/hash-password")
const avatarUrlGenerator = require("../helpers/random-avatar-generator")

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Users", [
      {
        username: "lilynano",
        email: "lilynano@mail.com",
        password: hashPassword("lilily"),
        exp: 2341,
        cardsCleared: 764,
        desc: "app untuk memorization nano!",
        avatarImageUrl: "https://i.imgur.com/qjIemZX.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "otong322",
        email: "otong@mail.com",
        password: hashPassword("pass123"),
        exp: 0,
        cardsCleared: 0,
        desc: "desc kosong juga gapapa",
        avatarImageUrl: avatarUrlGenerator("otong322"),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Users", null, {})
  }
};
