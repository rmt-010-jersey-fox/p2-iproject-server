const { Comment, Image, User } = require("../models");

class CommentController {

    static postComment(req, res, next) {
        let { content } = req.body;
        let imageId = req.params.imageId;
        
        Comment.create({
            content,
            imageId,
            userId: req.loggedUser.id
        })
        .then(data => {
            res.status(200).json({
                content,
                imageId,
                userId: req.loggedUser.id
            })
        })
        .catch(err => {
            if(err.name === "SequelizeValidationError") {
                next({name: "ValidationError"});
            } else if(err.name === "SequelizeForeignKeyConstraintError") {
                next({name: "ImageNotFound"});
            }  else {
                next(err);
            }
        })
    }

    static editComment(req, res, next) {
        let id = req.params.id;
        let imageId = req.params.imageId;
        let {content} = req.body;
        Comment.update({
            content
        }, {
            where: {
                id
            }
        })
        .then(comment => {
            res.status(200).json({
                msg: "Content successfully updated"
            })
        })
        .catch(err => {
            next(err)
        })
    }

    static deleteComment(req, res, next) {
        let id = req.params.id;

        Comment.destroy({
            where: {
                id
            }
        })
        .then(comment => {
            res.status(200).json({
                msg: "Comment successfully deleted"
            })
        })
        .catch(err => {
            next(err);
        })
    }

    static showComments(req, res, next) {
        let imageId = req.params.imageId
        Comment.findAll({
            where: {
                imageId
            },
            include: [
                {
                    model: Image
                },
                {
                    model: User
                }
            ]
        })
        .then(comments => {
            res.status(200).json(comments);
        })  
        .catch(err => {
            next(err);
        })
    }
}

module.exports = CommentController;
