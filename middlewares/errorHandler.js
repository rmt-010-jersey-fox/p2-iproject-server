module.exports = (err, req, res, next) => {
    if(err.name === 'Invalid email/password') {
        res.status(401).json({message: "Invalid email/password"})
    }
    else if (err.name === 'Invalid JWT') {
        res.status(401).json({message: 'Invalid Access Token'})
    }
    else if (err.name === 'jwt must be provided') {
        res.status(401).json({message: 'Please login first'})
    }
    else if (err.name === 'SequelizeValidationError') {
        const message = []
        err.errors.forEach(error => {
            message.push(error.message)
        })
        res.status(400).json({message})
    }
    else if (err.name === 'JsonWebTokenError') {
        res.status(401).json({message: "invalid token"})
    }
    else if (err.message === 'Unauthorized') {
        res.status(401).json({message: "Unauthorized"})
    }
    else if (err.name === 'error data type') {
        res.status(401).json({message: "error data type"})
    }
    else {
        res.status(500).json({message: err.message || 'Internal Server Error'})
    }
} 