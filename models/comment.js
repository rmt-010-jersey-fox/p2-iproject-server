'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Comment.belongsTo(models.User, {foreignKey: "userId"});
      Comment.belongsTo(models.Image, {foreignKey: "imageId"});
    }
  };
  Comment.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    content: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "CONTENT MUST NOT EMPTY"
        }
      }
    },
    imageId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};