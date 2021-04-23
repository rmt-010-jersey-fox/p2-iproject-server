const { Banner } = require('../models')

class bannerController {
    static findAll(req, res, next) {
        Banner.findAll({
                order: [
                    ['id', 'DESC']
                ],
            })
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                next(err)
            })
    }
    static getActive(req, res, next) {
        Banner.findAll({
                where: {
                    status: 1
                },
                order: [
                    ['id', 'DESC']
                ],
            })
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                next(err)
            })
    }
    static detail(req, res, next) {
        Banner.findOne({
                where: {
                    id: req.params.id
                }
            })
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                next(err)
            })
    }
    static create(req, res, next) {
        let data = {
            name: req.body.name,
            imageUrl: req.body.imageUrl,
            status: (req.body.status) ? req.body.status : 1
        }
        Banner.create(data)
            .then(data => {
                res.status(201).json(data)
            })
            .catch(err => {
                next(err)
            })
    }
    static update(req, res, next) {
        let data = {
            name: req.body.name,
            status: req.body.status,
            imageUrl: req.body.imageUrl,
        }
        Banner.update(data, {
                where: {
                    id: req.params.id
                },
                returning: true
            })
            .then(data => {
                if (data[0] === 1) {
                    res.status(200).json(data[1])
                } else {
                    next({ code: 404, msg: 'data not found' })
                }
            })
            .catch(err => {
                next(err)
            })
    }
    static updateStatus(req, res, next) {
        let data = {
            status: req.body.status
        }
        Banner.update(data, {
                where: {
                    id: req.params.id
                },
                returning: true
            })
            .then(data => {
                if (data[0] === 1) {
                    res.status(200).json(data[1])
                } else {
                    next({ code: 404, msg: 'data not found' })
                }
            })
            .catch(err => {
                next(err)
            })
    }
    static delete(req, res, next) {
        Banner.destroy({
                where: {
                    id: req.params.id
                }
            })
            .then(data => {
                res.status(200).json({ message: 'item successfully deleted' })
            })
            .catch(err => {
                next(err)
            })
    }
}

module.exports = bannerController