const { User } = require('../models')
const { decryptPassword } = require('../helpers/bcrypt')
const { encodeToken } = require('../helpers/jwt')

class UserCtrl {

  static signup (req, res, next) {
    const newUser = {
      username: req.body.username,
      email   : req.body.email,
      password: req.body.password
    }

    User
      .create({ ...newUser })
      .then(data => res.status(201).json({ 
        id        : data.id,
        username  : data.username,
        email     : data.email
      }))
      .catch(err => next(err))
  }

  static signin (req, res, next) {
    const { email, password } = req.body

    User
      .findOne({ where: { email }})
      .then(found => {
        if (!found) res.status(404).json({ message: 'Wrong email/password' })
        else {
          if (decryptPassword(password, found.password)) {
            const access_token = encodeToken({ id: found.id, email: found.email, username: found.username })
            res.status(200).json({ id: found.id, email: found.email, username: found.username, access_token })
          } else res.status(404).json({ message: 'Wrong email/password' })
        }
      })
      .catch(err => next(err))
  }

}

module.exports = UserCtrl