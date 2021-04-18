function errorHandler(err, req, res, next) {
    if (err.name == "SequelizeValidationError") {
        res.status(400).json(err.errors[0].message)
    }
    else if (err.name === 'SequelizeUniqueConstraintError') {
        res.status(400).json({ message: err.errors[0].message });
    }
    else {
        res.status(err.status || 500).json(err.message || 'internal server error')
    }
}

module.exports = { errorHandler }