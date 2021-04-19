const { Book, BookUser } = require('../models')

function authorization(req, res, next) {
    let isbn = req.params.id
    BookUser.findOne({ where: { isbn, userId: req.loggedUser.id } })
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