'use strict'
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('Photos', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			imageUrl: {
				type: Sequelize.STRING,
			},
			caption: {
				type: Sequelize.STRING,
			},
			CatId: {
				type: Sequelize.INTEGER,
				references: {
					model: 'Cats',
					key: 'id',
				},
				onUpdate: 'cascade',
				onDelete: 'cascade',
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		})
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('Photos')
	},
}
