'use strict';
const { bcryptPass, cekPass } = require("../helpers/bcrypt")
let pass = bcryptPass("admin")


module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Users', [
      {
        email: 'admin@mail.com',
        password: bcryptPass("admin"),
        role: "admin",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'costumer@mail.com',
        password: bcryptPass("costumer"),
        role: "costumer",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Users', null, {});

  }
};
