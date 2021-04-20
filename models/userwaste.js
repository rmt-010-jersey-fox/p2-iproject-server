'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserWaste extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UserWaste.belongsTo(models.User, {foreignKey: 'UserId'})
      UserWaste.belongsTo(models.Waste, {foreignKey: 'WasteId'})
    }
  };
  UserWaste.init({
    WasteId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER,
    status: DataTypes.STRING,
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserWaste',
    hooks: {
      beforeCreate: (waste) => {
        if (!waste.status) {
          waste.status = 'Undeposited'
        }
      }
    }
  });
  return UserWaste;
};