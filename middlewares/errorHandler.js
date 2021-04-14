function errorHandler(err, req, res, next) {
    switch (err.name) {
        case "SequelizeValidationError":
            const errorMessage = []
            if(err.errors.length > 0){
                err.errors.forEach(error => {
                    error.push(error.message)
                })
            }
            res.status(400).json({message: 'Bad Request', errorMessage})
            break;
        
        case 'Bad Request':
            console.log(err)
            res.status(400).json({ message: 'Bad Request', errors: [err.message]})
            break;

        case 'SequelizeDatabaseError':
            console.log(err)
            res.status(400).json({ message: 'Bad Request', errors: [err.message]})
            break;
        
        case 'JsonWebTokenError':
            console.log(err)
            res.status(401).json({ message: 'Bad Request', errors: [err.message]})
            break;
        
        case 'SequelizeUniqueConstraintError':
            console.log(err)
            res.status(409).json({ message: 'Conflict', errors: ['Email already registered']})
            break;
    
        default:
            console.log(err)
            const status = err.status || 500
            const message = err.message || 'Internal server error'
            res.status(status).json({ message })
            break;
    }
}

module.exports = errorHandler