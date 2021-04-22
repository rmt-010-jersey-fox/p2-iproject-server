'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    
     await queryInterface.bulkInsert('Memes', [{
      title: 'First test to the moon',
      image_url: 'http://apimeme.com/meme?meme=Star-Wars-Yoda&top=Lulus+dengan+status+TA&bottom=Sebuah+kesulitan',
      likes: 5,
      reported: 0,
      UserId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
       }], {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Memes', null, {});
  }
};
