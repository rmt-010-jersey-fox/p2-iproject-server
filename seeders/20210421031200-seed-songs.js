'use strict';

const fs = require('fs')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const data = JSON.parse(fs.readFileSync('./data/songs.json', {encoding: 'utf-8'}))
    for (let i = 0; i < data.length; i++) {
      data[i].createdAt = new Date()
      data[i].updatedAt = new Date()
    }
    queryInterface.bulkInsert('Songs', data, {})
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('Songs', null, {})
  }
};
