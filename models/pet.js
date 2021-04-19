'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Pet.belongsTo(models.User)
    }
  };
  Pet.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    imageUrl: DataTypes.STRING,
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    UserId: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }
  }, {
    sequelize,
    modelName: 'Pet'
  });
  return Pet;
};