'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Barbers', [
      {
        BarberShopId: 1,
        name: 'Jony',
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        BarberShopId: 1,
        name: 'Rido',
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        BarberShopId: 1,
        name: 'Wawan',
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        BarberShopId: 1,
        name: 'Aryo',
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        BarberShopId: 2,
        name: 'Rio',
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        BarberShopId: 2,
        name: 'Agus',
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        BarberShopId: 3,
        name: 'Budi',
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        BarberShopId: 3,
        name: 'Surya',
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        BarberShopId: 4,
        name: 'Kisman',
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        BarberShopId: 4,
        name: 'Rangge',
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        BarberShopId: 14,
        name: 'Sutisna',
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Barbers', null, {});
  }
};
