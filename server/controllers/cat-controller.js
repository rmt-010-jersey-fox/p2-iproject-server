const { Photo, Cat } = require()
class CatController {
	static async addPhoto(req, res, next) {
		const { catId, imageUrl, caption } = req.body
		try {
			let photo = await Photo.create({
				catId,
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
		const { catId } = req.body
		try {
			let photos = await Photo.findAll({
				where: {
					catId: catId,
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
		const { avatar, description } = req.body
		try {
			let cat = await Cat.create({
				UserId: id,
				avatar,
				description,
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
		const catId = req.params.id
		try {
			let deleted = await Cat.destroy({
				where: {
					id: catId,
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
