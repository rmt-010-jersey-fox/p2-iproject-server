'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BookUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  BookUser.init({
    isbn: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'bookId harus diisi'
        }
      }
    },
    userId: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          msg: 'userId harus diisi'
        }
      }
    },
    wished: {
      type: DataTypes.BOOLEAN,
    },
    liked: {
      type: DataTypes.BOOLEAN,
    },
    comment: {
      type: DataTypes.STRING,
    },
  }, {
    sequelize,
    modelName: 'BookUser',
  });
  return BookUser;
};