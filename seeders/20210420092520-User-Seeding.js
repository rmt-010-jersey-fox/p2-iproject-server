'use strict';
const { hashPsw } = require('../helper/bcrypt')
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
          email : "emil@mail.com",
          password : hashPsw("cobadong"),
          role : "student",
          first_name : "Emil",
          createdAt: new Date(),
          updatedAt: new Date(),
          last_name: "K"
        },
        {
          email : "kul@mail.com",
          password : hashPsw("cobadong"),
          role : "student",
          first_name : "Kulin",
          createdAt: new Date(),
          updatedAt: new Date(),
          last_name: "LA"
        },
        {
          email : "ris@mail.com",
          password : hashPsw("cobadong"),
          role : "student",
          first_name : "Riska",
          createdAt: new Date(),
          updatedAt: new Date(),
          last_name: "Azmy"
        },
        {
          email : "abuddy@mail.com",
          password : hashPsw("cobadong"),
          role : "buddy",
          first_name : "Fadel",
          createdAt: new Date(),
          updatedAt: new Date(),
          last_name: "Majid"
        },
        {
          email : "bbuddy@mail.com",
          password : hashPsw("cobadong"),
          role : "buddy",
          first_name : "Amilio",
          updatedAt: new Date(),
          createdAt: new Date(),        
          last_name: "Saja"
        },
        {
          email : "cbuddy@mail.com",
          password : hashPsw("cobadong"),
          role : "buddy",
          first_name : "Niki",
          updatedAt: new Date(),
          createdAt: new Date(),        
          last_name: "Rising"
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
      await queryInterface.bulkDelete('Users', null, {} )
  }
};
