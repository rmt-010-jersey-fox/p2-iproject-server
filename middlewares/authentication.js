const { verify } = require("../helpers/jwt.js");
const { User } = require("../models/index.js");

function authentication(req, res, next) {
  const access_token = req.headers.access_token;
  console.log(access_token)
  if (access_token) {
    let decode = verify(access_token);
    User.findOne({
      where: { email: decode.email },
    })
      .then((data) => {
        if (data) {
          req.loggedUser = {
            id: decode.id,
            email: decode.email,
          };
          next();
        } else {
            throw {name: 'invalid email or password'}
        }
      })
      .catch((err) => {
          next(err)
      });
  } else {
    res.status(401).json({ message: "Please Login first" });
  }
}

module.exports = authentication;
