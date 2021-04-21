function errHandler (err, req, res, next) {
    if (err.name === 'SequelizeValidationError') {
        const arr = []
        for (let i = 0; i < err.errors.length; i++) {
            arr.push(err.errors[i].message)
        }
        const message = arr.join(', ')
        res.status(400).json({
            message: message
        })
    } else if (err.name === 'SequelizeUniqueConstraintError') {
        const arr = []
        for (let i = 0; i < err.errors.length; i++) {
            arr.push(err.errors[i].message)
        }
        const message = arr.join(', ')
        res.status(400).json({
            message: message
        })
    } else if (err.name === 'JsonWebTokenError') {
        res.status(401).json({
            message: 'not authenticated'
        })
    } else if (err.status) {
        res.status(err.status).json({
            message: err.message
        })
    } else {
        console.log(err)
        res.status(500).json({
            message: 'internal server error'
        })
    }
}

module.exports = errHandler