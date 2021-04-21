const {User, Comment} = require('../models')

class CommentController {
    static showComment(req, res, next) {
        console.log(req.loggedUser.id)
        console.log(req.articles.title)
        Comment.findAll({
            include: [User],
            where: {
                UserId: req.loggedUser.id,
                articleTitle: req.articles.title
            }
        })
        .then(comments => {
            console.log(comments)
            res.status(200).json(comments)
        })
        .catch(err=> {
            next(err)
        })
    }

    static addComment(req, res, next) {
        // console.log(req.body, "ini req body controller")
        const id = +req.params.id
        Article.findOne({
            where: {
                UserId: req.loggedUser.id,
                articleTitle: req.articles.title
            }
        })
        .then(articles => {
            console.log(articles)
            if (!articles) {
                throw ({name: "articles not found"})
            }
            else {
                return Article.findOne({
                    where: {
                        UserId: req.loggedUser.id,
                        articleTitle: req.articles.title
                    }
                })
            }
        })
        .then(comments => {
            return Comment.create({
                ArticleId: id,
                UserId: req.loggedUser.id,
                comment: req.body.comment
            })
        })
        .then(newcomments => {
            // console.log(newcomments)
            res.status(201).json(newcomments)
        })
        .catch(err=> {
            console.log(err, "error add comment")
            next(err)
        })
    }

    static updateComment(req, res, next) {
        const {id} = req.params
        // console.log(id, "ini id")
        Comment.findOne({
            where: {
                UserId: req.loggedUser.id,
                articleTitle: req.articles.title
            }
        })
        .then(data => {
            // console.log(data)
            return Comment.update({
                comment: req.body.comment
            }, {
                where: {
                    id
                }, returning: true
            })
        })
        .then(comment => {
            if(!comment) {
                next(err)
            }
            else {
                res.status(200).json(comment)
            }
        })
        .catch(err=> {
            console.log(err, "error update cart")
            next(err)
        })
    }

    static deleteComment(req, res, next) {
        Comment.destroy({
            where: {
                UserId: req.loggedUser.id,
                articleTitle: req.articles.title
            }
        })
        .then(() => {
            res.status(200).json({message: 'Comment deleted'})
        })
        .catch(err =>{
            res.status(500).json({message: 'Comment not found'})
        })
    }

    static showSpecificId(req, res, next) {
        const {id} = req.params
        Comment.findOne({
            where: {
                id
            }
        })
        .then(comments => {
            if (!comments) {
                throw ({name: 'comments not found'})
            }
            else {
                res.status(200).json(comments)
            }
        })
        .catch(err=> {
            next(err)
        })
    }
}

module.exports = CommentController