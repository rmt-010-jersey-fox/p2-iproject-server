'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Books', {
      // id: {
        // allowNull: false,
        // autoIncrement: true,
        // primaryKey: true,
        // type: Sequelize.INTEGER
      // },
      isbn: {
        unique : true,
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      category: {
        type: Sequelize.STRING
      },
      publisher: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING
      },
      author: {
        type: Sequelize.STRING
      },
      bookImage: {
        type: Sequelize.STRING
      },
      productURL: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Books');
  }
};