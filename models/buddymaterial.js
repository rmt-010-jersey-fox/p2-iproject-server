'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BuddyMaterial extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      BuddyMaterial.belongsTo(models.Material)
      BuddyMaterial.belongsTo(models.User)
    }
  };
  BuddyMaterial.init({
    UserId: DataTypes.INTEGER,
    MaterialId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'BuddyMaterial',
  });
  return BuddyMaterial;
};