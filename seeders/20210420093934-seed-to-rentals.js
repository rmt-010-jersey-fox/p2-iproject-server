'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   return queryInterface.bulkInsert('Rentals', [
    {
      name: "Indo Rent",
      pic: "Bpk. Bambang",
      phone: "0987654321",
      email: "indorent@mail.com",
      address: "Aceh - Banda Aceh",
      bank_account: "BCA 123456 a/n Indo Rent",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Tangerang IRC",
      pic: "Bpk. Anis",
      phone: "123456789",
      email: "irc@mail.com",
      address: "Sumatera Utara - Medan",
      bank_account: "BCA 123456 a/n Tangerang IRC",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Boy Rent",
      pic: "Bpk. Dadang",
      phone: "123123123",
      email: "boy@mail.com",
      address: "Sumatera Barat - Padang",
      bank_account: "BCA 123456 a/n Boy Rent",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Hastin Jaya",
      pic: "Bpk. Ruly",
      phone: "456456456",
      email: "hastinj@mail.com",
      bank_account: "BCA 123456 a/n Hastin Jaya",
      address: "Riau - Pekanbaru",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Angkasa Rental Mobil",
      pic: "Bpk. Nardi",
      phone: "789789789",
      email: "angkasa@mail.com",
      bank_account: "BCA 123456 a/n Angkasa Rental Mobil",
      address: "Kepulauan Riau - Tanjungpinang",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Jakarta Rent",
      pic: "Bpk. Yahya",
      phone: "987678543123",
      email: "jakartarent@mail.com",
      bank_account: "BCA 123456 a/n Jakarta Rent",
      address: "DKI Jakarta - Jakarta",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Avis Rent",
      pic: "Bpk. Danar",
      phone: "192837465",
      email: "avis@mail.com",
      bank_account: "BCA 123456 a/n Avis Rent",
      address: "Jambi",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Autotranz Rent",
      pic: "Bpk. Cipto",
      phone: "0912873465",
      email: "autotrenz@mail.com",
      bank_account: "BCA 123456 a/n Autotranz Rent",
      address: "Sumatera Selatan - Palembang",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Movvby Rent",
      pic: "Bpk. Putu",
      phone: "132547698",
      email: "movvby@mail.com",
      bank_account: "BCA 123456 a/n Movvby Rent",
      address: "Bali - Denpasar",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Trust Rent",
      pic: "Bpk. Jordan",
      phone: "0897564231",
      email: "trust@mail.com",
      bank_account: "BCA 123456 a/n Trust Rent",
      address: "Kepulauan Bangka Belitung - Pangkal Pinang",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Anyer Rent",
      pic: "Bpk. Dodi",
      phone: "67492019",
      email: "anyer@mail.com",
      bank_account: "BCA 123456 a/n Anyer Rent",
      address: "Banten - Serang",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Lembang Rent",
      pic: "Bpk. Kevin",
      phone: "1234509876",
      email: "lembang@mail.com",
      bank_account: "BCA 123456 a/n Lembang Rent",
      address: "Jawa Barat - Bandung",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Kaloka Rent",
      pic: "Bpk. Kaloka",
      phone: "1200098723",
      email: "kaloka@mail.com",
      bank_account: "BCA 123456 a/n Kaloka Rent",
      address: "Jawa Tengah - Semarang",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Panen Rent",
      pic: "Bpk. Toyo",
      phone: "66688995",
      email: "panen@mail.com",
      bank_account: "BCA 123456 a/n Panen Rent",
      address: "DI Yogyakarta - Yogyakarta",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Bolang Rent",
      pic: "Bpk. Jordi",
      phone: "22233445",
      email: "bolang@mail.com",
      bank_account: "BCA 123456 a/n Bolang Rent",
      address: "Jawa Timur - Surabaya",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Wisata Indah Rent",
      pic: "Bpk. Made",
      phone: "000778899",
      email: "wisata@mail.com",
      bank_account: "BCA 123456 a/n Wisata Indah Rent",
      address: "Nusa Tenggara Barat - Mataram",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Palangka Rent",
      pic: "Bpk. Danang",
      phone: "555663388",
      email: "danang@mail.com",
      bank_account: "BCA 123456 a/n Palangka Rent",
      address: "Kalimantan Tengah - Palangkaraya",
      createdAt: new Date(),
      updatedAt: new Date()
    }
   ])
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Rentals', null)
  }
};
