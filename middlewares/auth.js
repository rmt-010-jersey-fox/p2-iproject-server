const { User } = require('../models')
const { verifyToken } = require('../helpers/jwt')

function authenticate(req, res, next) {
  const { access_token } = req.headers;
  console.log(req.headers, `<<< ini headers`);

  if (access_token) {
    const decoded = verifyToken(access_token)
    User.findOne({
      where: {
        email: decoded.email
      }
    })

      .then((user) => {
        if (user) {
          req.user = { id: user.id }
          next()
        } else {
          res.status(401).json({ msg: `Invalid access token!` })
        }
      })

      .catch((err) => {
        console.log(err);
        res.status(500).json({ msg: `Internal server is error.` })
      })

  } else {
    res.status(401).json({ msg: `Please login first!` })
  }
}

function authorize(req, res, next) {
  const id = +req.params.id

  Task.findOne({ where: { id } })
    .then((task) => {
      if (task) {
        const valid = req.user.id === task.UserId

        if (valid) {
          next()
        } else {
          res.status(401).json({ msg: `Unauthorized` })
        }

      } else {
        res.status(401).json({ msg: `Unauthorized` })
      }
    })

    .catch((err) => {
      console.log(err);
      // next()
      res.status(500).json({ msg: `Err` })
    })
}

module.exports = {
  authenticate,
  authorize
}