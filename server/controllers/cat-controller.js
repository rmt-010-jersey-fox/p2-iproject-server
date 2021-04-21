const { Photo, Cat } = require('../models')
class CatController {
	static async addPhoto(req, res, next) {
		const { CatId, imageUrl, caption } = req.body
		try {
			let photo = await Photo.create({
				CatId: CatId,
				imageUrl,
				caption,
			})
			res.status(201).json({
				message: 'successfully added photo',
			})
		} catch (error) {
			next(error)
		}
	}
	static async getPhotos(req, res, next) {
		const { id, email, username } = req.userAuth
		const { CatId } = req.body
		try {
			let photos = await Photo.findAll({
				where: {
					CatId,
				},
			})
			res.status(200).json({
				photos,
			})
		} catch (error) {
			next(error)
		}
	}
	static async addCat(req, res, next) {
		const { id, email, username } = req.userAuth
		const { avatarUrl, description, imageUrl } = req.body
		try {
			let cat = await Cat.create({
				UserId: id,
				avatarUrl,
				description,
			})
			let photo = await Photo.create({
				CatId: cat.id,
				imageUrl,
			})
			res.status(201).json({
				cat,
			})
		} catch (error) {
			next(error)
		}
	}
	static async deleteCat(req, res, next) {
		const { id, email, username } = req.userAuth
		const CatId = req.params.id
		try {
			let deleted = await Cat.destroy({
				where: {
					id: CatId,
				},
			})
			if (!deleted) {
				next({
					message: 'failed to delete',
				})
			} else {
				res.status(200).json({
					message: 'Successfully delete cat',
				})
			}
		} catch (error) {
			next(error)
		}
	}
}

module.exports = CatController
