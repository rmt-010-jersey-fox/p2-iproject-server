'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('Barbers', {
      fields: ['BarberShopId'],
      type: 'foreign key',
      name: 'barbershop_to_barber',
      references: { //Required field
        table: 'BarberShops',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('Barbers','barbershop_to_barber')
  }
};
