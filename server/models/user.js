'use strict'
const { Model } = require('sequelize')
const { hashPassword } = require('../helpers/bcrypt')
module.exports = (sequelize, DataTypes) => {
	class User extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			User.hasMany(models.Cat, { foreignKey: 'UserId' })
			User.hasOne(models.ChatRoom, { foreignKey })
		}
	}
	User.init(
		{
			username: {
				type: DataTypes.STRING,
				validate: {
					notEmpty: {
						msg: 'should not be empty',
					},
				},
			},
			email: {
				type: DataTypes.STRING,
				validate: {
					notEmpty: {
						msg: 'should not be empty',
					},
					isEmail: {
						msg: 'should be email',
					},
				},
			},
			password: {
				type: DataTypes.STRING,
				validate: {
					notEmpty: {
						msg: 'should not be empty',
					},
					min: {
						args: [6],
						msg: 'minimum 6 character',
					},
				},
			},
			avatarUrl: {
				type: DataTypes.STRING,
				validate: {
					notEmpty: {
						msg: 'should not be empty',
					},
				},
			},
			location: {
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
			modelName: 'User',
		}
	)

	User.addHook('beforeCreate', (user) => {
		user.password = hashPassword(user.password)
		user.avatarUrl = `https://avatars.dicebear.com/api/bottle/${user.username}.svg`
	})
	return User
}
