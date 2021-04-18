const { comparepass } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jwt')
const { User } = require('../models')

class UserController{
  static register(req, res, next) {
    let input = {
      email: req.body.email,
      password: req.body.password
    }
    User.create(input)
      .then((data) => {
        res.status(201).json({ id: data.id, email: data.email })
      })
      .catch((err) => {
        next(err)
      })
  }

  static login(req, res, next) {
    let input = {
      email: req.body.email,
      password: req.body.password
    }
    User.findOne({ where: { email: input.email }})
      .then ((data) => {
        if (data){
          let compare = comparepass(input.password, data.password)
          if (compare){
            let payload = { id: data.id, email: data.email }
            let token = generateToken(payload)
            res.status(200).json({ access_token: token })
          } else {
            throw { name: 'invalidlogin' }
          }
        } else {
          throw { name: 'invalidlogin' }
        }
      })
      .catch ((err) => {
        next(err)
      })
  }
}

module.exports = { UserController }