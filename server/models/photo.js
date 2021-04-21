'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
	class Photo extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Photo.belongsTo(models.Cat, { foreignKey: 'CatId' })
		}
	}
	Photo.init(
		{
			imageUrl: {
				type: DataTypes.STRING,
				validate: {
					notEmpty: {
						msg: 'imageUrl should not be empty',
					},
				},
			},
			caption: {
				type: DataTypes.STRING,
				validate: {
					notEmpty: {
						msg: 'caption should not be empty',
					},
				},
			},
			CatId: {
				type: DataTypes.INTEGER,
				validate: {
					notEmpty: {
						msg: 'CatId should not be empty',
					},
				},
			},
		},
		{
			sequelize,
			modelName: 'Photo',
		}
	)
	Photo.addHook('beforeCreate', (cat) => {
		cat.caption = 'no caption'
	})
	return Photo
}
