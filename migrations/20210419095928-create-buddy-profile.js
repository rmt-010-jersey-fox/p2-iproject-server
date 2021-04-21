'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('BuddyProfiles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      UserId: {
        type: Sequelize.INTEGER,
        references : {
          model : "Users",
          key : "id"
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      GithubUser: {
        type: Sequelize.STRING
      },
      GitlabUser: {
        type: Sequelize.STRING
      },
      skill: {
        type: Sequelize.TEXT
      },
      rate: {
        type: Sequelize.INTEGER
      },
      rating: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('BuddyProfiles');
  }
};