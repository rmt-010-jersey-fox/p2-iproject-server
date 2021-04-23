"use strict";
const { hashPassword } = require("../helpers/bcrypt");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Patients", [
      {
        email: "putra@mail.com",
        password: hashPassword("123123"),
        first_name: "Riski",
        last_name: "Putra",
        birthdate: "1998-02-22",
        address: "Jl. Menuju Kekayaan, No.1",
        ktp: "1029384756",
        phone: "08123125894",
        gender: "Pria",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Patients", null);
  },
};
