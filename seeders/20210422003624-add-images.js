'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Images", [
      {
        imgUrl: "https://cdn.pixabay.com/photo/2014/02/05/19/58/blue-259458_960_720.jpg",
        category: "fantasy",
        description: "Light blue sky",
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        imgUrl: "https://cdn.pixabay.com/photo/2016/12/08/21/21/skyscrapers-1893201_960_720.jpg",
        category: "buildings",
        description: "Awesome skyscrapers",
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        imgUrl: "https://cdn.pixabay.com/photo/2016/10/22/17/46/mountains-1761292_960_720.jpg",
        category: "nature",
        description: "Long walk at the mountains",
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Images", null, {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
