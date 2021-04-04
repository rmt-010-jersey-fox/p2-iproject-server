'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FinanceDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  FinanceDetail.init({
    TransactionsType: DataTypes.STRING,
    date: DataTypes.DATE,
    amount: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER,
    FinanceId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'FinanceDetail',
  });
  return FinanceDetail;
};