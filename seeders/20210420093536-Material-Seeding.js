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
     await queryInterface.bulkInsert('Materials', [
       {
         topic: "Programming Concept",
         description : "This subject introduces the fundamental concepts of computing programming, and how to solve simple problems using high-level procedural language, with a specific emphasis on data manipulation, transformation, and visualisation of data.",
         duration: 80,
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
        topic: "Object Oriented Software Development",
        description : "Developing medium and large scale software systems requires analysis and design prior to implementation. This subject introduces students to software design, with specific focus on object-oriented design, and the implementation of designs using an object-oriented programming language. ",
        duration: 80,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        topic: "Object Oriented Software Development",
        description : "A core discipline in data science, is prevalent across Science, Technology, the Social Sciences, and Medicine; it drives many of the products we use daily such as banner ad selection, email spam filtering, and social media newsfeeds. Machine Learning is concerned with making accurate, computationally efficient, interpretable and robust inferences from data.",
        duration: 80,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        topic: "Database Systems",
        description : "The subject introduces key topics in modern information organisation, particularly with regard to structured databases. Topics covered may include: the managerial view of data, information and knowledge; conceptual, logical and physical data modelling; normalisation and de-normalisation; the SQL language; data integrity; transaction processing, data warehousing, web services and organisational memory technologies",
        duration: 80,
        createdAt: new Date(),
        updatedAt: new Date()
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
    
  }
};
