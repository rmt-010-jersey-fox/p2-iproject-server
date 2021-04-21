'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Services', [
      {
        BarberShopId: 1,
        name: 'Grooming',
        description: 'Pangkas,Konsultansi,Cuci rambut,Styling',
        timeServices: 90,
        price: 65000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        BarberShopId: 1,
        name: 'Basic',
        description: 'Pangkas normal',
        timeServices: 40,
        price: 20000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        BarberShopId: 1,
        name: 'Kid',
        description: 'Pangkas anak-anak',
        timeServices: 20,
        price: 10000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        BarberShopId: 2,
        name: 'Kid',
        description: 'Pangkas anak-anak',
        timeServices: 20,
        price: 10000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        BarberShopId: 2,
        name: 'All Services',
        description: 'Pangkas,Konsultansi,Cuci rambut,Styling',
        timeServices: 90,
        price: 100000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        BarberShopId: 2,
        name: 'Standar',
        description: 'Pangkas normal',
        timeServices: 40,
        price: 20000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        BarberShopId: 3,
        name: 'Standar',
        description: 'Pangkas normal',
        timeServices: 40,
        price: 20000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        BarberShopId: 4,
        name: 'Standar',
        description: 'Pangkas normal',
        timeServices: 40,
        price: 20000,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Services', null, {});
  }
};
