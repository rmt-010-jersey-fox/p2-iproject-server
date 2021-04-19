const jwt = require("jsonwebtoken")
const {User} = require("../models")

async function authenticate(req, res, next) {
  try {
    let decoded = jwt.verify(req.headers.access_token, process.env.SECRET_CODE || "secret")

    req.user = {
      id: decoded.id,
      username: decoded.username
    }

		let checkedUser = await User.findOne({
			where: {
        id: req.user.id,
				username: req.user.username
			}
		})

    if(checkedUser) {
      next()

    } else {
      throw {name: "JsonWebTokenError"}
    }

  }
  catch(err) {
    next(err)
  }

}

module.exports = authenticate