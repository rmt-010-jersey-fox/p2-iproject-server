function errHandler(err, req, res, next) {
    if (err.name === 'Invalid Token') {
        res.status(401).json({message: 'Invalid Token'})
    } else if (err.name === 'Please login first') {
        res.status(401).json({message: 'Please login first'})
    } else if (err.name === 'User not found') {
        res.status(404).json({message: 'User not found'})
    } else if (err) {
        console.log(err);
    }
}

module.exports = errHandler;