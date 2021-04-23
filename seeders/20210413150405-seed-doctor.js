'use strict';
let doctor = require('../for-seed/doctor-seed.json')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    doctor.forEach(el => {
      el.createdAt = new Date()
      el.updatedAt = new Date()
    })
    await queryInterface.bulkInsert('Doctors', doctor)
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('Doctors', null, {});
  }
};
