"use strict";
const bcrypt = require("bcrypt");
const salt = bcrypt.genSaltSync(8);
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Users", [
      {
        email: "jim@mail.com",
        password: bcrypt.hashSync("jim", salt),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    await queryInterface.bulkInsert("Comments", [
      {
        comment: "there you go",
        UserId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Users", null, {});
    await queryInterface.bulkDelete("Comments", null, {});
  },
};
