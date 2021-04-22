const { verify } = require("../helper/jwt");
const { User } = require("../models");

async function authentication(req, res, next) {
  try {
    const access_token = req.headers.access_token;
    if (access_token) {
      let decode = verify(access_token);
      let data = await User.findOne({
        where: { email: decode.email },
      });
      if (!data) {
        throw { name: "invalid email or password" };
      } else {
        req.loggedUser = {
          id: data.id,
          email: data.email,
        };
        next();
      }
    } else {
      res.status(401).json({ message: "please login first" });
    }
  } catch (error) {
    next(error);
  }
}
module.exports = authentication;
