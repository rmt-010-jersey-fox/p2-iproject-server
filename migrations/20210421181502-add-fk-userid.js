'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Animes', 'UserId', Sequelize.INTEGER)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Animes', 'UserId')
  }
};
