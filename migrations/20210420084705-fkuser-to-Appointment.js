'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('Appointments', {
      fields: ['UserId'],
      type: 'foreign key',
      name: 'fkuser_to_appointment',
      references: { //Required field
        table: 'Users',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('Appointments','fkuser_to_appointment')
  }
};
