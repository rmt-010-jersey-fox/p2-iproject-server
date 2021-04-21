const { User, Readlist } = require("../models");
const { decrypt } = require("../helpers/jwt");

const authentication = async (req, res, next) => {
  try {
    const { access_token } = req.headers;
    if (!access_token) {
      next({ name: "authenticationFailed", message: "Login first" });
    } else {
      const decryptedToken = decrypt(access_token);

      const foundUser = await User.findOne({
        where: { username: decryptedToken.username },
      });

      if (!foundUser) {
        next({ name: "authenticationFailed", message: "User is not found" });
      } else {
        req.loggedUser = {
          email: foundUser.email,
          id: foundUser.id,
          username: foundUser.username,
        };
        next();
      }
    }
  } catch (err) {
    next(err);
  }
};

const authorization = async (req, res, next) => {
  try {
    const id = +req.params.id;
    const news = await Readlist.findOne({
      where: {
        id: id,
      },
    });

    if (news) {
      if (req.loggedUser.id !== news.UserId) {
        next({ name: "authorizationFailed", message: "Unauthorize" });
      } else {
        next();
      }
    } else {
      next();
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  authentication,
  authorization,
};
