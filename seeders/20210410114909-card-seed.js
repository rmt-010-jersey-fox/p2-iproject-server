'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Cards", [
      {
        front: "楽しい",
        back: "(tano-shii) Menyenangkan",
        mastery: 3,
        due: "2021-04-04",
        DeckId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        front: "行く",
        back: "(i-ku) Pergi",
        mastery: 2,
        due: "2021-04-12",
        DeckId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        front: "面白い",
        back: "(omo-shiro-i) Menarik",
        mastery: 6,
        due: "2021-06-12",
        DeckId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        front: "私",
        back: "(watashi) Saya, aku",
        mastery: 1,
        due: "2021-04-12",
        DeckId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        front: "元気",
        back: "(gen-ki) Baik, sehat",
        mastery: 0,
        due: "2021-04-01",
        DeckId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        front: "Arduous",
        back: "Sulit/susah/menantang",
        mastery: 0,
        due: "2021-04-01",
        DeckId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        front: "Ardent",
        back: "(dengan) bersemangat, bergairah, antusias",
        mastery: 0,
        due: "2021-04-01",
        DeckId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        front: "Inept",
        back: "Tidak pandai/kompeten (dalam melakukan sesuatu)",
        mastery: 0,
        due: "2021-04-01",
        DeckId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Cards", null, {})
  }
};
