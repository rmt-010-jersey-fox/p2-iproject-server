const { Book, User } = require('../models')

class BookController {
    static findAll(req, res, next) {
        let category = req.params.category
        // console.log(category);
        Book.findAll({ where: { category, status: 'new' } })
            .then(data => {
                res.status(200).json(data)
            })
            .catch(next)
    }
    static oneBook(req, res, next) {
        let isbn = req.params.isbn
        Book.findOne({ where: { isbn: isbn } })
            .then(data => {
                if (data) {
                    res.status(200).json(data)
                }
                else {
                    next({ status: 404, message: 'data not found' })
                }
            })
            .catch(next)
    }
}

module.exports = BookController;