'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('Services', {
      fields: ['BarberShopId'],
      type: 'foreign key',
      name: 'fkbarbershop_to_service',
      references: { //Required field
        table: 'BarberShops',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('Services','fkbarbershop_to_service')
  }
};
