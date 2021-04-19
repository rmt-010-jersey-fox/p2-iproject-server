'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Finance extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Finance.belongsToMany(models.User, { through: 'FinanceDetail'})
    }
  };
  Finance.init({
    name: {
      type: DataTypes.STRING,
      notEmpty: {
        msg: 'Please insert name account'
      }
    },
    UserId: DataTypes.INTEGER,
    saldo: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Finance',
  });
  return Finance;
};