const { BookUser, Book, User } = require('../models')

class favouriteBookController {
    static addWishlist(req, res, next) {
        let userId = req.loggedUser.id
        let { isbn } = req.body
        BookUser.findOne({ where: { isbn, userId } })
            .then(data => {
                if (data && data.wished) {
                    console.log("disini");
                    next({ status: 400, message: 'buku sudah dimasukan ke dalam wish list' })
                }
                else if (data && !data.wished) {
                    return BookUser.update({ wished: true }, { where: { userId, isbn }, returning: true })
                }
                else {
                    return BookUser.create({ isbn, userId, wished: true, liked: false })
                }
            })
            .then((data) => {
                if (data[0]) {
                    let filteredData = data[1][0]
                    res.status(200).json(filteredData)
                }
                else {
                    res.status(200).json(data)
                }
            })
            .catch(next)
    }
    static showWishList(req, res, next) {
        let userId = req.loggedUser.id
        // console.log(userId);
        User.findOne({ where: { id: userId }, include: [Book] })
            .then(data => {
                let filteredData = data.Books.filter(e => {
                    return e.BookUser.wished == true
                })
                res.status(200).json(filteredData)
            })
            .catch(next)
    }
    static likeBook(req, res, next) {
        let userId = req.loggedUser.id
        let { isbn } = req.body
        BookUser.findOne({ where: { isbn, userId } })
            .then(data => {
                if (data && data.liked) {
                    next({ status: 400, message: 'buku ini sudah anda like' })
                }
                else if (data && !data.liked) {
                    return BookUser.update({ liked: true }, { where: { userId, isbn }, returning: true })
                }
                else {
                    return BookUser.create({ isbn, userId, wished: false, liked: true })
                }
            })
            .then((data) => {
                if (data[0]) {
                    let filteredData = data[1][0]
                    res.status(200).json(filteredData)
                }
                else {
                    res.status(200).json(data)
                }
            })
            .catch(next)
    }
    static dislikeBook(req, res, next) {
        let userId = req.loggedUser.id
        let { isbn } = req.body
        BookUser.update({ liked: false }, { where: { isbn, userId }, returning: true })
            .then(data => {
                let filteredData = data[1][0]
                res.status(200).json(filteredData)
            })
            .catch(next)
    }
    static commentBook(req, res, next) {
        let userId = req.loggedUser.id
        let { isbn, comment } = req.body
        BookUser.findOne({ where: { isbn, userId } })
            .then(data => {
                if (data && data.comment) {
                    next({ status: 400, message: 'buku ini sudah anda comment' })
                }
                else if (data && !data.comment) {
                    return BookUser.update({ comment: comment }, { where: { userId, isbn }, returning: true })
                }
                else {
                    return BookUser.create({ isbn, userId, wished: false, liked: false, comment: comment })
                }
            })
            .then((data) => {
                if (data[0]) {
                    let filteredData = data[1][0]
                    res.status(200).json(filteredData)
                }
                else {
                    res.status(200).json(data)
                }
            })
            .catch(next)
    }
    static findAllWishedLike(req, res, next) {
        let userId = req.loggedUser.id
        let isbn = req.params.isbn
        let liked = false
        let wished = false
        BookUser.findAll({ where: { isbn } })
            .then((data) => {
                let jumlahWish = data.filter(e => {
                    return e.wished == true
                })
                let jumlahLike = data.filter(e => {
                    return e.liked == true
                })
                data.forEach(e => {
                    if (userId == e.userId && e.liked) {
                        liked = true
                    }
                    if (userId == e.userId && e.wished) {
                        wished = true
                    }
                });
                res.status(200).json({ jumlahLike: jumlahLike.length, jumlahWish: jumlahWish.length, liked, wished })
                // res.status(200).json(data)
            })
            .catch(next)
    }
    static findAllComment(req, res, next) {
        // const Op = require('sequelize').Op;
        let userId = req.loggedUser.id
        let isbn = req.params.isbn
        Book.findOne({ where: { isbn }, include: [User] })
            .then(data => {
                let comment = []
                data.Users.forEach(e => {
                    if (e.BookUser.comment) {
                        comment.push({
                            username: e.username,
                            comment: e.BookUser.comment,
                            commented: (e.BookUser.userId == userId) ? true : false,
                        })
                    }
                });
                res.status(200).json(comment)
            })
            .catch(next)
    }
    static editComment(req, res, next) {
        let userId = req.loggedUser.id
        let {isbn, comment} = req.body
        BookUser.update({ comment }, { where: { isbn, userId }})
            .then(data => {
                res.status(200).json('komentar berhasil di update')
            })
            .catch(next)
    }
    static deleteComment(req, res, next) {
        let userId = req.loggedUser.id
        let isbn = req.params.isbn
        BookUser.update({ comment: null }, { where: { isbn, userId } })
            .then(data => {
                res.status(200).json('komentar berhasil di delete')
            })
            .catch(next)
    }
    static delete(req, res, next) {
        let userId = req.loggedUser.id
        let isbn = req.params.id
        // console.log(userId, isbn);
        BookUser.update({ wished: false }, { where: { userId, isbn } })
            .then(() => {
                res.status(200).json(`Buku berhasil dihapus`)
            })
            .catch(next)
    }
}

module.exports = favouriteBookController