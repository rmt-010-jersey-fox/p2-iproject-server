const { Book, BookUser } = require('../models')

function authorization(req, res, next) {
    let bookId = req.params.id
    BookUser.findOne({ where: { bookId, userId: req.loggedUser.id } })
        .then(book => {
            if (book) {
                next()
            }
            else {
                next({ status: 401, message: 'Unauthorize' })
            }
        })
        .catch(next)
}

module.exports = authorization