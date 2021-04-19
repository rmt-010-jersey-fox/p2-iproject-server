'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
	class Cat extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Cat.belongsTo(models.User, { foreignKey: 'UserId' })
			Cat.hasMany(models.Photo, { foreignKey: 'CatId' })
		}
	}
	Cat.init(
		{
			description: {
				type: DataTypes.STRING,
				validate: {
					notEmpty: {
						msg: 'should not be empty',
					},
				},
			},
			UserId: DataTypes.INTEGER,
			avatarUrl: {
				type: DataTypes.STRING,
				validate: {
					notEmpty: {
						msg: 'should not be empty',
					},
				},
			},
		},
		{
			sequelize,
			modelName: 'Cat',
		}
	)
	return Cat
}
