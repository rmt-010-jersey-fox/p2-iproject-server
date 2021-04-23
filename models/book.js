'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Book.belongsToMany(models.User, { through: models.BookUser, foreignKey: 'isbn' })
    }
  };
  Book.init({
    category: DataTypes.STRING,
    isbn: {
      type : DataTypes.STRING,
      primaryKey: true,
    },
    publisher: DataTypes.STRING,
    description: DataTypes.STRING,
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    bookImage: DataTypes.STRING,
    productURL: DataTypes.STRING,
    status: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};