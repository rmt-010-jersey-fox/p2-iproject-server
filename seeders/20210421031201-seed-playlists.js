'use strict';

const fs = require('fs')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const data = JSON.parse(fs.readFileSync('./data/playlists.json', {encoding: 'utf-8'}))
    for (let i = 0; i < data.length; i++) {
      data[i].createdAt = new Date()
      data[i].updatedAt = new Date()
    }
    await queryInterface.bulkInsert('Playlists', data, {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Playlists', null, {})
  }
};
