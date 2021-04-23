const { Product, Cart } = require('../models')

class cartController {
    static findAll(req, res, next) {
        Cart.findAll({
            order: [
                ['id', 'DESC']
            ],
            include: {
                model: Product,
                attributes: ['id', 'name', 'price', 'stock', 'imageUrl']
            },
            where: {
                UserId: req.userData.id,
                status: 0
            }
        })

        .then(data => {
                data.forEach(element => {
                    if (element.quantity > element.Product.stock) {
                        let temp = await (Cart.update({
                                quantity: element.Product.stock
                            }, {
                                where: {
                                    id: element.id
                                },
                                returning: true
                            })
                            .then(data => {
                                element.quantity = data[1].quantity
                                return data[0]
                            })
                            .catch(err => {
                                next(err)
                            })
                        )
                        temp
                    }
                });
                res.status(200).json(data)
            })
            .catch(err => {
                next(err)
            })
    }

    static create(req, res, next) {
        let datas = {
            quantity: (req.body.quantity * 1),
            ProductId: req.body.ProductId,
            UserId: req.userData.id,
            status: 0
        }
        Product.findOne({
                where: {
                    id: req.body.ProductId
                }
            })
            .then(data => {
                if (data.stock >= datas.quantity) {
                    return Cart.findOne({
                        where: {
                            ProductId: datas.ProductId,
                            UserId: datas.UserId,
                            status: 0,
                            TransactionId: null
                        }
                    })
                } else {
                    throw { code: 400, msg: 'the stock is not enough' }
                }
            })
            .then(data => {
                if (data) {
                    return Cart.update({
                        quantity: data.quantity + datas.quantity
                    }, {
                        where: {
                            ProductId: datas.ProductId,
                            UserId: datas.UserId
                        }
                    })
                } else {
                    return Cart.create(datas)
                }
            })
            .then(data => {
                res.status(201).json(data)
            })
            .catch(err => {
                next(err)
            })
    }

    static update(req, res, next) {
        let datas = {
            quantity: req.body.quantity,
            id: req.params.id,
            UserId: req.userData.id
        }
        Cart.findOne({
                where: {
                    id: datas.id
                }
            })
            .then(data => {
                return Product.findOne({
                    where: {
                        id: data.ProductId,
                    }
                })
            })
            .then(data => {
                if (data.stock >= datas.quantity) {
                    return Cart.update(datas, {
                        where: {
                            id: datas.id
                        }
                    })
                } else {
                    throw { code: 400, msg: 'the stock is not enough' }
                }
            })
            .then(data => {
                res.status(201).json(data)
            })
            .catch(err => {
                next(err)
            })
    }

    static delete(req, res, next) {
        Cart.destroy({
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

module.exports = cartController