const { BookUser, Book, User } = require('../models')

class favouriteBookController {
    static addWishlist(req, res, next) {
        let userId = req.loggedUser.id
        let { isbn } = req.body
        BookUser.findOne({ where: { isbn, userId } })
            .then(data => {
                if (data) {
                    next({ status: 400, message: 'buku sudah dimasukan ke dalam wish list' })
                }
                else {
                    return BookUser.create({ isbn, userId })
                }
            })
            .then(data => {
                res.status(200).json(data)
            })
            .catch(next)
    }
    static showWishList(req, res, next) {
        let userId = req.loggedUser.id
        // console.log(userId);
        User.findOne({ where: { id: userId }, include: [Book] })
            .then(data => {
                res.status(200).json(data.Books)
            })
            .catch(next)
    }
    static delete(req, res, next) {
        let userId = req.loggedUser.id
        let isbn = req.params.id
        // console.log(userId, isbn);
        BookUser.destroy({ where: { userId, isbn } })
            .then(data => {
                res.status(200).json(`Buku berhasil dihapus`)
            })
            .catch(next)
    }
}

module.exports = favouriteBookController