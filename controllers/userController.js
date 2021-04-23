const { User } = require('../models/index')
const { comparePassword } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jwt')


class UserController {
  static postRegister(req, res, next) {
    const { name, username, email, password } = req.body

    User.create({name, username, email, password})
    .then(data => {
      const payload = {
        id: data.id,
        name,
        username,
        email
      }
      res.status(201).json(payload)
    })
    .catch(err => {
      console.log(err);
      next(err)
    })
  }

  static postLogin(req, res, next) {
    const { username, password } = req.body
    User.findOne({
      where: { username }
    })
    .then(data => {
      if (data && comparePassword(password, data.password)) {
        const payload = {
          id: data.id,
          username,
          email: data.email
        }
        const access_token = generateToken(payload)
        res.status(200).json({ id: payload.id, username: payload.username, email: payload.email, access_token })
      } else {
        next({ name: 'invalid' })
      }
    })
    .catch(err => {
      console.log(err);
      next(err)
    })
  }
}

module.exports = UserController