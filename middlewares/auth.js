const { verifyToken } = require("../helpers/jwt");
const { User } = require("../models");

function authentication(req, res, next) {
  const access_token = req.headers.access_token;
  if (access_token) {
    const token = verifyToken(access_token);

    User.findOne({
      where: {
        email: token.email,
      },
    })
      .then((foundUser) => {
        if (foundUser) {
          req.loggedUser = {
            id: token.id,
            username: token.username,
            email: token.email,
            role: token.role,
          };
          next();
        } else {
          res.status(401).json({ message: "Invalid Access Token" });
        }
      })
      .catch((err) => {
        next(err);
      });
  } else {
    res.status(401).json({ message: "Invalid Access Token" });
  }
}



module.exports = { authentication };
