const jwt = require("jsonwebtoken");
const { User } = require("../models");
async function autentikasi(req, res, next) {
  try {
    const { token } = req.headers;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const email = decoded.email;

    const user = await User.findOne({
      where: {
        email,
      },
    });

    // console.log(user);
    if (user) {
      req.loggedUser = { UserId: decoded.id };
      next();
    } else {
      next({ name: "invalid token" });
    }
  } catch (err) {
    next(err);
  }
}

module.exports = autentikasi;
