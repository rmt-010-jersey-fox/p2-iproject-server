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
      address: "Cikarang, Jawa Barat",
      bank_account: "BCA 123456 a/n Indo Rent",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Tangerang IRC",
      pic: "Bpk. Anis",
      phone: "123456789",
      email: "irc@mail.com",
      address: "Tangerang, Jawa Barat",
      bank_account: "BCA 123456 a/n Tangerang IRC",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Boy Rent",
      pic: "Bpk. Dadang",
      phone: "123123123",
      email: "boy@mail.com",
      address: "Yogyakarta",
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
      address: "Solo",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Angkasa Rental Mobil",
      pic: "Bpk. Nardi",
      phone: "789789789",
      email: "angkasa@mail.com",
      bank_account: "BCA 123456 a/n Angkasa Rental Mobil",
      address: "Surabaya",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Jakarta Rent",
      pic: "Bpk. Yahya",
      phone: "987678543123",
      email: "jakartarent@mail.com",
      bank_account: "BCA 123456 a/n Jakarta Rent",
      address: "Jakarta Pusat",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Avis Rent",
      pic: "Bpk. Danar",
      phone: "192837465",
      email: "avis@mail.com",
      bank_account: "BCA 123456 a/n Avis Rent",
      address: "Padang",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Autotranz Rent",
      pic: "Bpk. Cipto",
      phone: "0912873465",
      email: "autotrenz@mail.com",
      bank_account: "BCA 123456 a/n Autotranz Rent",
      address: "Bandung, Jawa Barat",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Movvby Rent",
      pic: "Bpk. Putu",
      phone: "132547698",
      email: "movvby@mail.com",
      bank_account: "BCA 123456 a/n Movvby Rent",
      address: "Bali",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Trust Rent",
      pic: "Bpk. Jordan",
      phone: "0897564231",
      email: "trust@mail.com",
      bank_account: "BCA 123456 a/n Trust Rent",
      address: "NTT",
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
