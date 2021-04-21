const { checkToken } = require("../helpers/jwt");
const { User, Vacation, Destination } = require('../models')

async function authentication(req, res, next) {
  try {
    const decoded = checkToken(req.headers.access_token)

    let data = await User.findOne({
      where: {
        email: decoded.email
      }
    })

    if (!data) {
      next({ name: 'unauthorized' })
    } else {
      req.user = data
    }
    next()
  } catch (error) {
    next(error)
  }
}

async function vacAuthorization(req, res, next) {
  try {
    let data = await Vacation.findOne({
      where: {
        id: req.params.id
      }
    })
    if (data.userId === req.user.id) {
      next()
    } else {
      next({ name: 'unAuthorized' })
    }
  } catch (error) {
    next(error)
  }
}

async function desAuthorization(req, res, next) {
  try {
    let data = await Destination.findOne({
      where: {
        id: req.params.id
      }
    })
    if (data.userId === req.user.id) {
      next()
    } else {
      next({ name: 'unAuthorized' })
    }
  } catch (error) {
    next(error)
  }
}

module.exports = {
  authentication,
  vacAuthorization,
  desAuthorization
}