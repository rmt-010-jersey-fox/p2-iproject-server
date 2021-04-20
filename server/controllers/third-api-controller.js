const axios = require('axios')

class ThirdApiController {
	static async catApi(req, res, next) {
		// let api = (axios.headers.common['x-api-key'] = process.env.CAT_API) // Replace this with your API Key
		try {
			let response = await axios.get(
				'https://api.thecatapi.com/v1/images/search',
				{ params: { limit: 1, size: 'full' } },
				{
					headers: {
						'x-api-key': process.env.CAT_API,
					},
				}
			) // Ask for 1 Image, at full resolution

			let image = response.data[0] // the response is an Array, so just use the first item as the Image

			console.log('-- Image from TheCatAPI.com')
			console.log('id:', image.id)
			console.log('url:', image.url)
			res.status(200).json({
				message: 'successfully hit cat api',
				image_url: image.url,
			})
		} catch (error) {
			next(error)
		}
	}

	static async randomQuote(req, res, next) {
		try {
			let { data } = await axios.get(
				'https://api.quotable.io/random?tags=technology,famous-quotes'
			)
			res.status(200).json({
				content: data.content,
				author: data.author,
			})
		} catch (error) {
			next(error)
		}
	}
}

module.exports = ThirdApiController
