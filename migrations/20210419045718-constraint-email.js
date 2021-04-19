'use strict';

module.exports = {
  up:  (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('Users', {
      fields: ['email'],
      type : 'unique',
      name : 'unique_constraint_email'
    })
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  down:  (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint('Users', 'unique_constraint_email')
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
