'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addConstraint('Tournaments', {
      fields: ['UserId'],
      type: 'foreign key',
      name: 'custom_fkey_constraint_UsersId-Tournament',
      references: { //Required field
        table: 'Users',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
    await queryInterface.addConstraint('Teams', {
      fields: ['TournamentId'],
      type: 'foreign key',
      name: 'custom_fkey_constraint_Team-TournamentId',
      references: { //Required field
        table: 'Tournaments',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
    await queryInterface.addConstraint('Brackets', {
      fields: ['TournamentId'],
      type: 'foreign key',
      name: 'custom_fkey_constraint_Bracket-TournamentId',
      references: { //Required field
        table: 'Tournaments',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
    await queryInterface.addConstraint('Brackets', {
      fields: ['TeamId'],
      type: 'foreign key',
      name: 'custom_fkey_constraint_Bracket-TeamId',
      references: { //Required field
        table: 'Teams',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
