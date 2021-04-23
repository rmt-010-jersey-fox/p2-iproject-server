const { User, Cart, Wishlist } = require('../models')
const { verifyToken } = require('../helpers/jwt');

const authenticate = (req, res, next) => {
    if (req.headers.access_token) {
        let userData = verifyToken(req.headers.access_token)
        if (userData.id && userData.email) {
            User.findOne({
                    where: {
                        id: userData.id,
                        email: userData.email
                    }
                })
                .then(data => {
                    req.userData = userData
                    next()
                })
                .catch(err => {
                    next(err)
                })
        } else {
            next({ code: 400, msg: 'Invalid Token' })
        }
    } else {
        next({ code: 400, msg: 'Invalid Token' })
    }
}

const authorize = (req, res, next) => {
    User.findOne({
            where: {
                id: req.userData.id,
                email: req.userData.email
            }
        })
        .then(data => {
            if (data.level === 0) {
                next()
            } else {
                next({ code: 403, msg: 'Unauthorized' })
            }
        })
        .catch(err => {
            next(err)
        })
}

const authorizeCart = (req, res, next) => {
    Cart.findOne({
            where: {
                id: req.params.id,
                UserId: req.userData.id
            }
        })
        .then(data => {
            next()
        })
        .catch(err => {
            next(err)
        })
}

const authorizeWishlist = (req, res, next) => {
    Wishlist.findOne({
            where: {
                id: req.params.id,
                UserId: req.userData.id
            }
        })
        .then(data => {
            next()
        })
        .catch(err => {
            next(err)
        })
}

module.exports = { authenticate, authorize, authorizeCart, authorizeWishlist }