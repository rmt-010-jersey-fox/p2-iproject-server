'use strict';
const { bcryptPass, cekPass } = require("../helpers/bcrypt")
let pass = bcryptPass("admin")


module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Pets', [
      {
        name: 'KITTY',
        imageUrl: 'https://cdn.idntimes.com/content-images/post/20200303/1-17b763f032b2396d91d33582a4707d79.jpg',
        description: 'Umur 1 Tahun 3 Bulan, Sangat jinak',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'BRUNO',
        imageUrl: 'https://asset.kompas.com/crops/FtgR1HeSCrOP0nYcVq81C4-hUkw=/67x55:1806x1215/750x500/data/photo/2021/03/21/6056bfa61251c.jpg',
        description: 'Umur 7 Bulan, Pemberani dan Tidak sombong',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'HACKTOV',
        imageUrl: 'https://ichef.bbci.co.uk/news/640/cpsprodpb/11D81/production/_114298037_dingo1.jpg',
        description: 'Umur 1 Tahun 2 Bulan, Penyayang dan Suka tidur siang',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'DAYMAU',
        imageUrl: 'https://cjoutback.com/wp-content/uploads/2020/04/white-bengal-tiger-406994-640-f7a03f0bdbf4d54c6e5ef1d13a241cfe-640x400.jpg',
        description: 'Umur 2 Tahun 1 Bulan, humoris dan Makan Sayur',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'JACKY',
        imageUrl: 'https://image.shutterstock.com/image-photo/funny-bulldog-isolated-on-white-260nw-334064696.jpg',
        description: 'Umur 1 Tahun 1 Bulan, Pelari yang Hebat',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Pets', null, {});

  }
};
