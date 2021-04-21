function errorHandler(err, req, res, next) {
    if (err) {
        switch (err.name) {
            case 'ErrorCreateEmail':
                res.status(400).json({ name: err.name, message: "Email Already Used" })
                break;
            case 'ErrorCreateUsername':
                res.status(400).json({ name: err.name, message: "Username Already Used" })
                break;
            case 'SequelizeValidationError':
                res.status(400).json({ name: err.name, message: err.message })
                break;
            case 'Error400':
                res.status(400).json({ name: err.name, message: 'Bad Request' })
                break;
            case 'Error401':
                res.status(401).json({ name: err.name, message: 'Invalid Email or Password' })
                break
            case 'Error403':
                res.status(403).json({ name: err.name, message: 'Authorization Error' })
                break
            case 'Error404':
                res.status(404).json({ name: err.name, message: 'Anime Not Found' })
                break
            case 'JsonWebTokenError':
                res.status(401).json({ name: err.name, message: 'Access Token Error' })
            case 'SequelizeUniqueConstraintError':
                res.status(400).json({ name: err.name, message: err.message })
            default:
                res.status(500).json({ name: err.name, message: 'Internal Server Error' })

        }
    }
}

module.exports = {
    errorHandler
}