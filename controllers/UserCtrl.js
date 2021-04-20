const { User } = require('../models')
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

}

module.exports = UserCtrl