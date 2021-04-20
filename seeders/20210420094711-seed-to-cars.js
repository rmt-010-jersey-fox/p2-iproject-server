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
   return queryInterface.bulkInsert('Cars', [
     {
       type: "Toyota Grand New Avanza",
       tranmisi: "Manual",
       color: "Biru",
       year: "2015",
       imgUrl: "https://ik.imagekit.io/tvlk/image/imageResource/2018/05/08/1525766956519-24ae9f224ae862371c7fa009232cba82.jpeg?tr=q-75,w-162",
       price: 325000,
       status: "available",
       RentalId: 1,
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
      type: "Toyota Alphard Transformer",
      tranmisi: "Otomatis",
      color: "Putih",
      year: "2020",
      imgUrl: "https://ik.imagekit.io/tvlk/image/imageResource/2018/05/08/1525764529094-850eae66a594614ada784a191fef3eac.jpeg?tr=q-75,w-162",
      price: 2600000,
      status: "available",
      RentalId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      type: "Toyota Agya",
      tranmisi: "Otomatis",
      color: "Putih",
      year: "2018",
      imgUrl: "https://ik.imagekit.io/tvlk/image/imageResource/2019/11/18/1574066269989-c779a57019275ef1eb7dd0694607546a.jpeg?tr=q-75,w-162",
      price: 410000,
      status: "available",
      RentalId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      type: "Daihatsu Xenia",
      tranmisi: "Manual",
      color: "Merah Maroon",
      year: "2018",
      imgUrl: "https://ik.imagekit.io/tvlk/image/imageResource/2018/09/03/1535973587223-4cdce7cb0a26e93b8b97be454d4ac0f5.jpeg?tr=q-75,w-162",
      price: 410000,
      status: "available",
      RentalId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      type: "Toyota Calya",
      tranmisi: "Manual",
      color: "Merah",
      year: "2015",
      imgUrl: "https://ik.imagekit.io/tvlk/image/imageResource/2018/09/03/1535973608106-7b8a2d2372ec024ad31279ec333fb9bd.jpeg?tr=q-75,w-162",
      price: 420000,
      status: "available",
      RentalId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      type: "Daihatsu Sigra",
      tranmisi: "Manual",
      color: "Hitam",
      year: "2019",
      imgUrl: "https://ik.imagekit.io/tvlk/image/imageResource/2019/11/18/1574066228855-7d0be2649894c6d3ca5a848635832e4c.jpeg?tr=q-75,w-162",
      price: 430000,
      status: "available",
      RentalId: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      type: "Honda Mobilio",
      tranmisi: "Manual",
      color: "Silver",
      year: "2015",
      imgUrl: "https://ik.imagekit.io/tvlk/image/imageResource/2020/01/29/1580289826906-d6c3bf86785ba0221d311117713ebe0e.jpeg?tr=q-75,w-162",
      price: 462250,
      status: "available",
      RentalId: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      type: "Suzuki Ertiga",
      tranmisi: "Manual",
      color: "Silver",
      year: "2015",
      imgUrl: "https://ik.imagekit.io/tvlk/image/imageResource/2018/09/03/1535973568438-13e5181f12048b6ec18d3e58c56f6613.jpeg?tr=q-75,w-162",
      price: 470000,
      status: "available",
      RentalId: 8,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      type: "Toyota Corolla Altis",
      tranmisi: "Otomatis",
      color: "Merah",
      year: "2020",
      imgUrl: "https://ik.imagekit.io/tvlk/image/imageResource/2019/11/20/1574238734714-e281a68f08ceece1e4aa8fc1d31143ce.jpeg?tr=q-75,w-162",
      price: 490000,
      status: "available",
      RentalId: 9,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      type: "Toyota Innova Reborn",
      tranmisi: "Otomatis",
      color: "Putih",
      year: "2020",
      imgUrl: "https://ik.imagekit.io/tvlk/image/imageResource/2018/05/08/1525764661097-e206ae2b0bc59adb98ad32a1a07b4cbd.jpeg?tr=q-75,w-162",
      price: 550000,
      status: "available",
      RentalId: 10,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      type: "Toyota Fortuner",
      tranmisi: "Otomatis",
      color: "Putih",
      year: "2020",
      imgUrl: "https://ik.imagekit.io/tvlk/image/imageResource/2018/05/08/1525767029781-afc851c4b07f0bd45d09959f920519f4.jpeg?tr=q-75,w-162",
      price: 900000,
      status: "available",
      RentalId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      type: "Toyota Grand New Avanza",
      tranmisi: "Manual",
      color: "Biru",
      year: "2015",
      imgUrl: "https://ik.imagekit.io/tvlk/image/imageResource/2018/05/08/1525766956519-24ae9f224ae862371c7fa009232cba82.jpeg?tr=q-75,w-162",
      price: 325000,
      status: "available",
      RentalId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
     type: "Toyota Alphard Transformer",
     tranmisi: "Otomatis",
     color: "Putih",
     year: "2020",
     imgUrl: "https://ik.imagekit.io/tvlk/image/imageResource/2018/05/08/1525764529094-850eae66a594614ada784a191fef3eac.jpeg?tr=q-75,w-162",
     price: 2600000,
     status: "available",
     RentalId: 3,
     createdAt: new Date(),
     updatedAt: new Date()
   },
   {
     type: "Toyota Agya",
     tranmisi: "Otomatis",
     color: "Putih",
     year: "2018",
     imgUrl: "https://ik.imagekit.io/tvlk/image/imageResource/2019/11/18/1574066269989-c779a57019275ef1eb7dd0694607546a.jpeg?tr=q-75,w-162",
     price: 410000,
     status: "available",
     RentalId: 4,
     createdAt: new Date(),
     updatedAt: new Date()
   },
   {
     type: "Daihatsu Xenia",
     tranmisi: "Manual",
     color: "Merah Maroon",
     year: "2018",
     imgUrl: "https://ik.imagekit.io/tvlk/image/imageResource/2018/09/03/1535973587223-4cdce7cb0a26e93b8b97be454d4ac0f5.jpeg?tr=q-75,w-162",
     price: 410000,
     status: "available",
     RentalId: 5,
     createdAt: new Date(),
     updatedAt: new Date()
   },
   {
     type: "Toyota Calya",
     tranmisi: "Manual",
     color: "Merah",
     year: "2015",
     imgUrl: "https://ik.imagekit.io/tvlk/image/imageResource/2018/09/03/1535973608106-7b8a2d2372ec024ad31279ec333fb9bd.jpeg?tr=q-75,w-162",
     price: 420000,
     status: "available",
     RentalId: 6,
     createdAt: new Date(),
     updatedAt: new Date()
   },
   {
     type: "Daihatsu Sigra",
     tranmisi: "Manual",
     color: "Hitam",
     year: "2019",
     imgUrl: "https://ik.imagekit.io/tvlk/image/imageResource/2019/11/18/1574066228855-7d0be2649894c6d3ca5a848635832e4c.jpeg?tr=q-75,w-162",
     price: 430000,
     status: "available",
     RentalId: 7,
     createdAt: new Date(),
     updatedAt: new Date()
   },
   {
     type: "Honda Mobilio",
     tranmisi: "Manual",
     color: "Silver",
     year: "2015",
     imgUrl: "https://ik.imagekit.io/tvlk/image/imageResource/2020/01/29/1580289826906-d6c3bf86785ba0221d311117713ebe0e.jpeg?tr=q-75,w-162",
     price: 462250,
     status: "available",
     RentalId: 8,
     createdAt: new Date(),
     updatedAt: new Date()
   },
   {
     type: "Suzuki Ertiga",
     tranmisi: "Manual",
     color: "Silver",
     year: "2015",
     imgUrl: "https://ik.imagekit.io/tvlk/image/imageResource/2018/09/03/1535973568438-13e5181f12048b6ec18d3e58c56f6613.jpeg?tr=q-75,w-162",
     price: 470000,
     status: "available",
     RentalId: 9,
     createdAt: new Date(),
     updatedAt: new Date()
   },
   {
     type: "Toyota Corolla Altis",
     tranmisi: "Otomatis",
     color: "Merah",
     year: "2020",
     imgUrl: "https://ik.imagekit.io/tvlk/image/imageResource/2019/11/20/1574238734714-e281a68f08ceece1e4aa8fc1d31143ce.jpeg?tr=q-75,w-162",
     price: 490000,
     status: "available",
     RentalId: 10,
     createdAt: new Date(),
     updatedAt: new Date()
   },
   {
     type: "Toyota Innova Reborn",
     tranmisi: "Otomatis",
     color: "Putih",
     year: "2020",
     imgUrl: "https://ik.imagekit.io/tvlk/image/imageResource/2018/05/08/1525764661097-e206ae2b0bc59adb98ad32a1a07b4cbd.jpeg?tr=q-75,w-162",
     price: 550000,
     status: "available",
     RentalId: 1,
     createdAt: new Date(),
     updatedAt: new Date()
   },
   {
     type: "Toyota Fortuner",
     tranmisi: "Otomatis",
     color: "Putih",
     year: "2020",
     imgUrl: "https://ik.imagekit.io/tvlk/image/imageResource/2018/05/08/1525767029781-afc851c4b07f0bd45d09959f920519f4.jpeg?tr=q-75,w-162",
     price: 900000,
     status: "available",
     RentalId: 2,
     createdAt: new Date(),
     updatedAt: new Date()
   },
   {
    type: "Toyota Grand New Avanza",
    tranmisi: "Manual",
    color: "Biru",
    year: "2015",
    imgUrl: "https://ik.imagekit.io/tvlk/image/imageResource/2018/05/08/1525766956519-24ae9f224ae862371c7fa009232cba82.jpeg?tr=q-75,w-162",
    price: 325000,
    status: "available",
    RentalId: 3,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
   type: "Toyota Alphard Transformer",
   tranmisi: "Otomatis",
   color: "Putih",
   year: "2020",
   imgUrl: "https://ik.imagekit.io/tvlk/image/imageResource/2018/05/08/1525764529094-850eae66a594614ada784a191fef3eac.jpeg?tr=q-75,w-162",
   price: 2600000,
   status: "available",
   RentalId: 4,
   createdAt: new Date(),
   updatedAt: new Date()
  },
  {
    type: "Toyota Agya",
    tranmisi: "Otomatis",
    color: "Putih",
    year: "2018",
    imgUrl: "https://ik.imagekit.io/tvlk/image/imageResource/2019/11/18/1574066269989-c779a57019275ef1eb7dd0694607546a.jpeg?tr=q-75,w-162",
    price: 410000,
    status: "available",
    RentalId: 5,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    type: "Daihatsu Xenia",
    tranmisi: "Manual",
    color: "Merah Maroon",
    year: "2018",
    imgUrl: "https://ik.imagekit.io/tvlk/image/imageResource/2018/09/03/1535973587223-4cdce7cb0a26e93b8b97be454d4ac0f5.jpeg?tr=q-75,w-162",
    price: 410000,
    status: "available",
    RentalId: 6,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    type: "Toyota Calya",
    tranmisi: "Manual",
    color: "Merah",
    year: "2015",
    imgUrl: "https://ik.imagekit.io/tvlk/image/imageResource/2018/09/03/1535973608106-7b8a2d2372ec024ad31279ec333fb9bd.jpeg?tr=q-75,w-162",
    price: 420000,
    status: "available",
    RentalId: 7,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    type: "Daihatsu Sigra",
    tranmisi: "Manual",
    color: "Hitam",
    year: "2019",
    imgUrl: "https://ik.imagekit.io/tvlk/image/imageResource/2019/11/18/1574066228855-7d0be2649894c6d3ca5a848635832e4c.jpeg?tr=q-75,w-162",
    price: 430000,
    status: "available",
    RentalId: 8,
    createdAt: new Date(),
    updatedAt: new Date()
  },
    {
      type: "Honda Mobilio",
      tranmisi: "Manual",
      color: "Silver",
      year: "2015",
      imgUrl: "https://ik.imagekit.io/tvlk/image/imageResource/2020/01/29/1580289826906-d6c3bf86785ba0221d311117713ebe0e.jpeg?tr=q-75,w-162",
      price: 462250,
      status: "available",
      RentalId: 9,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      type: "Suzuki Ertiga",
      tranmisi: "Manual",
      color: "Silver",
      year: "2015",
      imgUrl: "https://ik.imagekit.io/tvlk/image/imageResource/2018/09/03/1535973568438-13e5181f12048b6ec18d3e58c56f6613.jpeg?tr=q-75,w-162",
      price: 470000,
      status: "available",
      RentalId: 10,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      type: "Toyota Corolla Altis",
      tranmisi: "Otomatis",
      color: "Merah",
      year: "2020",
      imgUrl: "https://ik.imagekit.io/tvlk/image/imageResource/2019/11/20/1574238734714-e281a68f08ceece1e4aa8fc1d31143ce.jpeg?tr=q-75,w-162",
      price: 490000,
      status: "available",
      RentalId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      type: "Toyota Innova Reborn",
      tranmisi: "Otomatis",
      color: "Putih",
      year: "2020",
      imgUrl: "https://ik.imagekit.io/tvlk/image/imageResource/2018/05/08/1525764661097-e206ae2b0bc59adb98ad32a1a07b4cbd.jpeg?tr=q-75,w-162",
      price: 550000,
      status: "available",
      RentalId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      type: "Toyota Fortuner",
      tranmisi: "Otomatis",
      color: "Putih",
      year: "2020",
      imgUrl: "https://ik.imagekit.io/tvlk/image/imageResource/2018/05/08/1525767029781-afc851c4b07f0bd45d09959f920519f4.jpeg?tr=q-75,w-162",
      price: 900000,
      status: "available",
      RentalId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      type: "Toyota Grand New Avanza",
      tranmisi: "Manual",
      color: "Biru",
      year: "2015",
      imgUrl: "https://ik.imagekit.io/tvlk/image/imageResource/2018/05/08/1525766956519-24ae9f224ae862371c7fa009232cba82.jpeg?tr=q-75,w-162",
      price: 325000,
      status: "available",
      RentalId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
    type: "Toyota Alphard Transformer",
    tranmisi: "Otomatis",
    color: "Putih",
    year: "2020",
    imgUrl: "https://ik.imagekit.io/tvlk/image/imageResource/2018/05/08/1525764529094-850eae66a594614ada784a191fef3eac.jpeg?tr=q-75,w-162",
    price: 2600000,
    status: "available",
    RentalId: 5,
    createdAt: new Date(),
    updatedAt: new Date()
    },
    {
    type: "Toyota Agya",
    tranmisi: "Otomatis",
    color: "Putih",
    year: "2018",
    imgUrl: "https://ik.imagekit.io/tvlk/image/imageResource/2019/11/18/1574066269989-c779a57019275ef1eb7dd0694607546a.jpeg?tr=q-75,w-162",
    price: 410000,
    status: "available",
    RentalId: 6,
    createdAt: new Date(),
    updatedAt: new Date()
    },
    {
    type: "Daihatsu Xenia",
    tranmisi: "Manual",
    color: "Merah Maroon",
    year: "2018",
    imgUrl: "https://ik.imagekit.io/tvlk/image/imageResource/2018/09/03/1535973587223-4cdce7cb0a26e93b8b97be454d4ac0f5.jpeg?tr=q-75,w-162",
    price: 410000,
    status: "available",
    RentalId: 7,
    createdAt: new Date(),
    updatedAt: new Date()
    },
    {
    type: "Toyota Calya",
    tranmisi: "Manual",
    color: "Merah",
    year: "2015",
    imgUrl: "https://ik.imagekit.io/tvlk/image/imageResource/2018/09/03/1535973608106-7b8a2d2372ec024ad31279ec333fb9bd.jpeg?tr=q-75,w-162",
    price: 420000,
    status: "available",
    RentalId: 8,
    createdAt: new Date(),
    updatedAt: new Date()
    },
    {
    type: "Daihatsu Sigra",
    tranmisi: "Manual",
    color: "Hitam",
    year: "2019",
    imgUrl: "https://ik.imagekit.io/tvlk/image/imageResource/2019/11/18/1574066228855-7d0be2649894c6d3ca5a848635832e4c.jpeg?tr=q-75,w-162",
    price: 430000,
    status: "available",
    RentalId: 9,
    createdAt: new Date(),
    updatedAt: new Date()
    },
    {
    type: "Honda Mobilio",
    tranmisi: "Manual",
    color: "Silver",
    year: "2015",
    imgUrl: "https://ik.imagekit.io/tvlk/image/imageResource/2020/01/29/1580289826906-d6c3bf86785ba0221d311117713ebe0e.jpeg?tr=q-75,w-162",
    price: 462250,
    status: "available",
    RentalId: 10,
    createdAt: new Date(),
    updatedAt: new Date()
    },
    {
    type: "Suzuki Ertiga",
    tranmisi: "Manual",
    color: "Silver",
    year: "2015",
    imgUrl: "https://ik.imagekit.io/tvlk/image/imageResource/2018/09/03/1535973568438-13e5181f12048b6ec18d3e58c56f6613.jpeg?tr=q-75,w-162",
    price: 470000,
    status: "available",
    RentalId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
    },
    {
    type: "Toyota Corolla Altis",
    tranmisi: "Otomatis",
    color: "Merah",
    year: "2020",
    imgUrl: "https://ik.imagekit.io/tvlk/image/imageResource/2019/11/20/1574238734714-e281a68f08ceece1e4aa8fc1d31143ce.jpeg?tr=q-75,w-162",
    price: 490000,
    status: "available",
    RentalId: 2,
    createdAt: new Date(),
    updatedAt: new Date()
    },
    {
    type: "Toyota Innova Reborn",
    tranmisi: "Otomatis",
    color: "Putih",
    year: "2020",
    imgUrl: "https://ik.imagekit.io/tvlk/image/imageResource/2018/05/08/1525764661097-e206ae2b0bc59adb98ad32a1a07b4cbd.jpeg?tr=q-75,w-162",
    price: 550000,
    status: "available",
    RentalId: 3,
    createdAt: new Date(),
    updatedAt: new Date()
    },
    {
    type: "Toyota Fortuner",
    tranmisi: "Otomatis",
    color: "Putih",
    year: "2020",
    imgUrl: "https://ik.imagekit.io/tvlk/image/imageResource/2018/05/08/1525767029781-afc851c4b07f0bd45d09959f920519f4.jpeg?tr=q-75,w-162",
    price: 900000,
    status: "available",
    RentalId: 4,
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
    return queryInterface.bulkDelete('Cars', null)
  }
};
