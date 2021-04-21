'use strict';
const {hashPassword} = require('../helper/bcrypt')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('BarberShops', [
      {
        email: 'idola@mail.com',
        phone: 621298761234,
        password: hashPassword('idola'),
        name: 'Idola Barbershop',
        address: 'Jl. Raya Minas - Perawang, Perawang Bar., Kec. Tualang, Kabupaten Siak, Riau 28685',
        latitude: '0.699231',
        langitude: '101.565058',
        open: '08:15',
        closed: '21:45',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'rapi@mail.com',
        phone: 6212987234312,
        password: hashPassword('rapi'),
        name: 'Rapi Barber',
        address: 'Perawang Barat, Tualang, Siak Regency, Riau 28685',
        latitude: '0.689472',
        langitude: '101.567034',
        open: '08:00',
        closed: '22:00',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'bunut@mail.com',
        phone: 6212987209876,
        password: hashPassword('bunut'),
        name: 'Bunut Manly',
        address: 'Pinang Sebatang Timur, Tualang, Siak Regency, Riau 28685',
        latitude: '0.700614',
        langitude: '101.624423',
        open: '09:00',
        closed: '23:00',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'km5@mail.com',
        phone: 6212987209876,
        password: hashPassword('km5'),
        name: 'Km5',
        address: 'Jl. Perawang - Siak, Perawang, Kec. Tualang, Kabupaten Siak, Riau 28685',
        latitude: '0.671735',
        langitude: '101.605884',
        open: '07:15',
        closed: '18:20',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('BarberShops', null, {});
  }
};
