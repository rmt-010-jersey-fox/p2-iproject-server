'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('Appointments', {
      fields: ['BarberShopId'],
      type: 'foreign key',
      name: 'fkbarbershop_to_appointment',
      references: { //Required field
        table: 'BarberShops',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('Appointments','fkbarbershop_to_appointment')
  }
};
