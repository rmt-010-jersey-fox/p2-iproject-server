'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
	class ChatRoom extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			ChatRoom.belongsTo(models.User, { foreignKey: 'UserId' })
		}
	}
	ChatRoom.init(
		{
			title: {
				type: DataTypes.STRING,
				validate: {
					notEmpty: {
						msg: 'should not be empty',
					},
				},
			},
			status: {
				type: DataTypes.BOOLEAN,
				validate: {
					notEmpty: {
						msg: 'should not be empty',
					},
				},
			},
			UserId: {
				type: DataTypes.INTEGER,
				validate: {
					notEmpty: {
						msg: 'should not be empty',
					},
				},
			},
		},
		{
			sequelize,
			modelName: 'ChatRoom',
		}
	)
	ChatRoom.addHook('beforeCreate', (chatRoom) => {
		chatRoom.status = false
	})
	return ChatRoom
}
