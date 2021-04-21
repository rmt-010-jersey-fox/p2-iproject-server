'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BuddyProfile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  BuddyProfile.init({
    UserId: DataTypes.INTEGER,
    GithubUser: DataTypes.STRING,
    GitlabUser: DataTypes.STRING,
    skill: DataTypes.TEXT,
    rate: DataTypes.INTEGER,
    rating: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'BuddyProfile',
  });
  return BuddyProfile;
};