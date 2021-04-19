'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn('Animes', 'UserId', {
      type: Sequelize.INTEGER,
      reference: {
        key: "id",
        model: "Users"
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE"
    },)
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn("Animes", "UserId", {})
  }
};
