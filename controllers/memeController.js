const { User, Meme } = require('../models')
const Sequelize = require('sequelize');
const {gt, lte, ne, in: opIn} = Sequelize.Op;

class Controller {
    static showAll(req, res, next) {
        Meme.findAll({
            where: {
                reported: { [lte]: 5 } // less then equal
            },
            include: [{
                model: User,
                attributes: ["id", "name"]
            }],
            order: [['createdAt', 'DESC']]
        })
            .then((data) => {
                res.status(200).json(data)
            })
            .catch((err) => {
                next({
                    code: 500,
                    message: "Internal server error"
                })
            })
    }

    static showAllReported(req, res, next) {
        Meme.findAll(
            {
                where: {
                    reported: { [gt]: 5 } //greater then
                },
                include: {
                    model: User,
                    attributes: ["id", "name"]
                },
                order: [['createdAt', 'DESC']]
            }
        )
            .then((data) => {
                res.status(200).json(data)
            })
            .catch((err) => {
                next({
                    code: 500,
                    message: "Internal server error"
                })
            })
    }

    static showAllHot(req, res, next) {
        Meme.findAll(
            {
                where: {
                    reported: { [lte]: 5 } // less then equel
                },
                include: {
                    model: User,
                    attributes: ["id", "name"]
                },
                order: [['likes', 'DESC']]
            }
        )
            .then((data) => {
                res.status(200).json(data)
            })
            .catch((err) => {
                next({
                    code: 500,
                    message: "Internal server error"
                })
            })
    }

    static add(req, res, next) {
        const newMeme = {
            title: req.body.title,
            image_url: req.body.image_url,
            UserId: req.currentUser.id,
        }
        Meme.create(newMeme)
            .then((data) => {
                res.status(201).json(data)
            })
            .catch((err) => {
                if (err.message) {
                    next({
                        code: 400,
                        message: err
                    })
                } else {
                    next({
                        code: 500,
                        message: "Internal server error"
                    })
                }
            })
    }

    static findById(req,res,next) {
        Meme.findOne({
            where: {
                id: +req.params.id
            }
        })
        .then((data) => {
            // console.log(data, "masuk find id")
            res.status(200).json(data)
        })
        .catch(err => {
            next({
                code: 404,
                message: "Data not found"
            })
        })
    }

    static findByUser(req, res, next) {
        Meme.findAll({
            where: {
                UserId: req.currentUser.id
            },
            include: {
                model: User,
                attributes: ["id", "name"]
            }
        })
            .then((data) => {
                res.status(200).json(data)
            })
            .catch((err) => {
                next({
                    code: 404,
                    message: "Data not found"
                })
            })
    }

    static updateAll(req, res, next) {
        Meme.update(req.body, {
            where: {
                id: +req.params.id
            },
            returning: true
        })
            .then((data) => {
                res.status(200).json(data)
            })
            .catch((err) => {
                next(err)
            })
    }

    static delete(req, res, next) {
        Meme.destroy({
            where: {
                id: +req.params.id
            }
        })
            .then((data) => {
                res.status(200).json({ message: "Meme success to delete" })
            })
            .catch((err) => {
                next({
                    code: 404,
                    message: "Data not found"
                })
            })
    }

    static likes(req,res,next) {
        const id = +req.body.id
        let likeValue
        Meme.findOne({
            where: { id: id}
        })
        .then((data) => {
            if(data) {
                likeValue = data.dataValues.likes+1
                return Meme.update({likes: likeValue}, {where: { id: id}, returning: true })
            } else {
                res.status(404).json('Not found')
            }
        })
        .then((data) => {
            res.status(201).json(data)
        })
        .catch((err) => {
            if (err.message) {
                next({
                    code: 400,
                    message: err
                })
            } else {
                next({
                    code: 500,
                    message: "Internal server error"
                })
            }
        })
    }

    static dislikes(req,res,next) {
        const id = +req.body.id
        let likeValue
        Meme.findOne({
            where: { id: id}
        })
        .then((data) => {
            if(data) {
                likeValue = data.dataValues.likes-1
                return Meme.update({likes: likeValue}, {where: { id: id}, returning: true })
            } else {
                res.status(404).json('Not found')
            }
        })
        .then((data) => {
            res.status(201).json(data)
        })
        .catch((err) => {
            if (err.message) {
                next({
                    code: 400,
                    message: err
                })
            } else {
                next({
                    code: 500,
                    message: "Internal server error"
                })
            }
        })
    }

    static reported(req,res,next) {
        const id = +req.body.id
        let reportValue
        Meme.findOne({
            where: { id: id}
        })
        .then((data) => {
            if(data) {
                reportValue = data.dataValues.reported+1
                return Meme.update({reported: reportValue}, {where: { id: id}, returning: true })
            } else {
                res.status(404).json('Not found')
            }
        })
        .then((data) => {
            res.status(201).json(data)
        })
        .catch((err) => {
            if (err.message) {
                next({
                    code: 400,
                    message: err
                })
            } else {
                next({
                    code: 500,
                    message: "Internal server error"
                })
            }
        })
    }

    static unreported(req,res,next) {
        const id = +req.body.id
        let reportValue
        Meme.findOne({
            where: { id: id}
        })
        .then((data) => {
            if(data) {
                reportValue = data.dataValues.reported-1
                return Meme.update({reported: reportValue}, {where: { id: id}, returning: true })
            } else {
                res.status(404).json('Not found')
            }
        })
        .then((data) => {
            res.status(201).json(data)
        })
        .catch((err) => {
            if (err.message) {
                next({
                    code: 400,
                    message: err
                })
            } else {
                next({
                    code: 500,
                    message: "Internal server error"
                })
            }
        })
    }

}

module.exports = Controller