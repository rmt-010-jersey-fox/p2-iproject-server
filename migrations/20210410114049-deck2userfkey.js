'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('Decks', {
      fields: ['UserId'],
      type: 'foreign key',
      name: 'fkeydeck2user',
      references: {
        table: 'Users',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint("Decks", "fkeydeck2user", {})
  }
};
