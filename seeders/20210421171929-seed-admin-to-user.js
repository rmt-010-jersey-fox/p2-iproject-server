'use strict';
const { hash } = require('../helpers/bcrypt')

module.exports = {
    up: async(queryInterface, Sequelize) => {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
        await queryInterface.bulkInsert('Users', [{
            name: 'admin',
            email: 'admin@mail.com',
            password: hash('admin123'),
            level: 0,
            createdAt: new Date(),
            updatedAt: new Date()
        }], {});
    },

    down: async(queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    }
};