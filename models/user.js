'use strict';
const {
  Model
} = require('sequelize');
const {hashPassword} = require('../helpers/bcrypt')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsToMany(models.Timeline, {
        foreignKey: 'UserId',
        through: 'Favorite'
      })
      User.hasMany(models.Timeline, {
        foreignKey: 'UserId'
      })
    }
  };
  User.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    username: DataTypes.STRING,
    birth_year: DataTypes.DATE
  }, {
    hooks: {
      beforeCreate(user) {
        user.password = hashPassword(user.password)
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};