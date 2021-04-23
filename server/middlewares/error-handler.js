const errorHandler = function (err, req, res, next) {
	if (err.name === 'SequelizeValidationError') {
		let arr = []
		err.errors.forEach((element) => {
			arr.push(element.message)
		})
		res.status(400).json({
			message: arr,
		})
	} else if (err.name === 'Bad Request' || err.name === 'call failed') {
		res.status(400).json({
			message: err.message,
		})
	} else if (err.name === 'Not Found') {
		res.status(404).json({
			message: err.message,
		})
	} else if (err.name === 'Unauthorized') {
		let message =
			err.message ||
			'Authorization error, you are not allowed to do this to other user Task '
		res.status(401).json({
			message: message,
		})
	} else {
		let message = err.message || 'internal server error'
		res.status(500).json({
			message: message,
		})
	}
}

module.exports = errorHandler
