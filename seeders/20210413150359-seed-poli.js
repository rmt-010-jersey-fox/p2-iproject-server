'use strict';
let poli = require('../for-seed/poli-seed.json')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    poli.forEach(el => {
      el.createdAt = new Date()
      el.updatedAt = new Date()
    })
    await queryInterface.bulkInsert('Polis', poli)
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('People', null, {});
  }
};
