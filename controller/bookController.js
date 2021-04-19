const { Book } = require('../models')

class BookController {
    static findAll(req, res, next) {
        let category = req.params.category
        // console.log(req.body);
        Book.findAll({ where: { category , status : 'new'}})
            .then(data => {
                res.status(200).json(data)
            })
            .catch(next)
    }
    static findOne(req, res, next) {
        let id = req.params.id
        Book.findOne({ where: { id } })
            .then(data => {
                res.status(200).json(data)
            })
            .catch(next)
    }
    static delete(req, res, next) {
        let id = req.params.id
        Book.destroy({ where: { id } })
            .then(data => {
                res.status(200).json(`berhasil delete buku id ${id}`)
            })
            .catch(next)
    }
}

module.exports = BookController;