const { verifyToken } = require('../helpers/jwt')
const { User } = require('../models')

async function authentication(req, res, next) {
  const { access_token } = req.headers
  try {
    if(!access_token) {
      res.status(401).json({
        message: 'Please login first'
      })
    } else {
      const decoded = verifyToken(access_token)
      const user = await User.findOne({
        where: {
          email: decoded.email
        }
      })
      if(!user) {
        res.status(401).json({
          message: 'Please login first'
        })
      } else {
        req.loggedIn = user
        next()
      }
    }
  } catch(err) {
    const status = err.status || 500
    const message = err.message || 'Internal Server Error'
    res.status(status).json({ message })
  }
}

module.exports = { authentication }