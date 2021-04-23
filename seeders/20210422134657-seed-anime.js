'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Animes', [
      {
        id: 1,
        name: "Boku no hero academia",
        imageURL: "https://cdn.myanimelist.net/r/160x220/images/anime/1911/113611.webp?s=5e6ea240ce92efa0bdc5f15b9d632600",
        episodes: 0,
        totalEpisodes: 24,
        status: "On-Going",
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 1
      },
      {
        id: 2,
        name: "Fumetsu no anata e",
        imageURL: "https://cdn.myanimelist.net/r/160x220/images/anime/1134/111757.webp?s=8a1ad6c9ccf448c6b1ca5b3f58f75acb",
        episodes: 0,
        totalEpisodes: 24,
        status: "On-Going",
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 1
      },
      {
        id: 3,
        name: "Tokyo Ravangers",
        imageURL: "https://cdn.myanimelist.net/r/160x220/images/anime/1493/113949.webp?s=7d55cfcb83402b877a7820accf7ab721",
        episodes: 0,
        totalEpisodes: 24,
        status: "On-Going",
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 1
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Animes', null, {})
  }
};
