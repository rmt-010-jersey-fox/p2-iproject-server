const { BookUser, Book, User } = require('../models')

class favouriteBookController {
    static addWishlist(req, res, next) {
        let userId = req.loggedUser.id
        let { bookId } = req.body
        BookUser.findOne({ where: { bookId, userId } })
            .then(data => {
                if (data) {
                    next({ status: 400, message: 'buku sudah dimasukan ke dalam wish list' })
                }
                else {
                    return BookUser.create({ bookId, userId })
                }
            })
            .then(data => {
                res.status(200).json(data)
            })
            .catch(next)
    }
    static showWishList(req, res, next) {
        let userId = req.loggedUser.id
        User.findOne({ where: { id: userId }, include: [Book] })
            .then(data => {
                res.status(200).json(data.Books)
            })
            .catch(next)
    }
    static delete(req, res, next) {
        let userId = req.loggedUser.id
        let bookId = req.params.id
        BookUser.destroy({ where: { userId, bookId } })
            .then(data => {
                res.status(200).json(`Buku berhasil dihapus`)
            })
            .catch(next)
    }
}

module.exports = favouriteBookController