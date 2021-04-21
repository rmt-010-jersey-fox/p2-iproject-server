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
      FinanceDetail.belongsTo(models.User)
      FinanceDetail.belongsTo(models.Finance) 
    }
  };
  FinanceDetail.init({
    TransactionsType: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'please choose your transaction types income / outcome'
        },
        isIn: {
          args: [['income', 'outcome']],
          msg: "Must be income or outcome"
        }
      }
    },
    date: {
      type: DataTypes.DATE,
      notEmpty: {
        msg: 'Date cant empty'
      }
    },
    amount: {
      type: DataTypes.INTEGER,
      notEmpty: {
        msg: 'Amount cant empty'
      }
    },
    UserId: DataTypes.INTEGER,
    FinanceId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'FinanceDetail',
  });
  return FinanceDetail;
};