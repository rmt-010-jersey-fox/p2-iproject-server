'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Bookings', {
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
          key: "id"
        },
        onUpdate : "CASCADE",
        onDelete : "CASCADE"
      },
      BuddyMaterialId: {
        type: Sequelize.INTEGER,
        references : {
          model : "BuddyMaterials",
          key: "id"
        },
        onUpdate : "CASCADE",
        onDelete : "CASCADE"
      },
      BuddyScheduleId: {
        type: Sequelize.INTEGER,
        references : {
          model : "BuddySchedules",
          key: "id"
        },
        onUpdate : "CASCADE",
        onDelete : "CASCADE"
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
    await queryInterface.dropTable('Bookings');
  }
};