const { decodeToken } = require("../helpers/jwt");
const { User, Tournament } = require('../models')

function authenticate (req, res, next) {
  if (req.headers.access_token){
    const decoded = decodeToken(req.headers.access_token)
    User.findOne({ where: { id: decoded.id, email: decoded.email }})
      .then((data) => {
        if (data) {
          req.loggedUser = { id: data.id, email: data.email }
          next()
        } else {
          throw { name: 'invalidtoken' }
        }
      })
      .catch((err) => {
        next(err)
      })
  } else {
    next({ name: 'invalidtoken' })
  }
}

function authorizeUserTournamnet (req, res, next) {
  if(req.params.id) {
    let id = req.params.id
    let UserId = req.loggedUser.id
    Tournament.findOne({ where: { id }})
      .then((data) => {
        if(data) {
          if(data.UserId === UserId) {
            next()
          } else {
            throw { name: 'unauthorized' }
          }
        } else {
          throw { name: 'notournament' }
        }
      })
      .catch((err) => {
        next(err)
      })
  } else {
    Tournament.findOne({ where: { UserId: req.loggedUser.id }})
      .then((data) => {
        req.loggedUser.TournamentId = data.id
        next()
      })
      .catch((err) => {
        next(err)
      })
  }
}

module.exports = { authenticate, authorizeUserTournamnet }