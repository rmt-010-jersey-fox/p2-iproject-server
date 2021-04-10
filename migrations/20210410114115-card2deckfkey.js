'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('Cards', {
      fields: ['DeckId'],
      type: 'foreign key',
      name: 'fkeycard2deck',
      references: {
        table: 'Decks',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint("Cards", "fkeycard2deck", {})
  }
};
