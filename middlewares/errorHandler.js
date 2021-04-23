function errorHandler(err, req, res, next) {
    // let statusCode = err.statusCode
    let message = [];
    switch (err.message) {
        case 'SequelizeValidationError':
            err.error.forEach(el => {
                message.push(el.message)
            })
            res.status(400).json({
                message: message
            })
            // statusCode = 400
            break;
        case 'password salah' || 'invalid password / email':
            res.status(400).json({
                message: 'invalid email or password'
            })
            // message.push('invalid email or password')
            // statusCode = 400;
            break;
        case 'invalid access_token':
            res.status(401).json({
                message: 'invalid access_token'
            })
            // message.push('invalid access_token')
            // statusCode = 401;
            break;
        case 'already have this movie':
            res.status(401).json({
                message: 'already have this movie'
            })
            // message.push('invalid access_token')
            // statusCode = 401;
            break;
        case 'cant login wrong token':
            res.status(401).json({
                message: 'cant login wrong token'
            })
            break;
        case 'need acces token for login':
            res.status(401).json({
                message: 'need acces token for login'
            })
            break;
        default:
            res.status(500).json({
                message: 'internal server error'
            })
            // message.push('internal server error')
            // statusCode = err.statusCode || 500
            break;
    }
    // return res.status(statusCode).json({message})
}
module.exports = { errorHandler }