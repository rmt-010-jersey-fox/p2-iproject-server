const { User } = require("../models");
const { compare } = require("../helpers/bcrypt");
const { encrypt } = require("../helpers/jwt");
const { OAuth2Client } = require("google-auth-library");

class UserControllers {
  static async login(req, res, next) {
    const { username, password } = req.body;
    try {
      const foundUser = await User.findOne({
        where: {
          username: username,
        },
      });

      if (foundUser) {
        const comparePass = compare(password, foundUser.password);
        if (comparePass) {
          const payload = {
            id: foundUser.id,
            username: foundUser.username,
            email: foundUser.email,
          };

          const access_token = encrypt(payload);

          res.status(200).json({
            email: payload.email,
            username: payload.username,
            access_token: access_token,
          });
        } else {
          next({ name: "loginFailed", message: "invalid username/password" });
        }
      } else {
        next({ name: "loginFailed", message: "invalid username/password" });
      }
    } catch (err) {
      next(err);
    }
  }

  static async register(req, res, next) {
    const { username, email, password } = req.body;

    try {
      const foundUser = await User.findOne({
        where: {
          username: username,
        },
      });

      if (foundUser) {
        next({
          name: "registerFailed",
          message: "username has already been used ",
        });
      } else {
        const createdUser = await User.create({
          username: username,
          email: email,
          password: password,
        });
        res.status(201).json({ message: `${createdUser.username} is created` });
      }
    } catch (err) {
      next(err);
    }
  }

  static async googleLogin(req, res, next) {
    try {
      const access_token = req.headers.access_token;
      const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
      let email = null;
      let username = null;

      const ticket = await client.verifyIdToken({
        idToken: access_token,
        audience: process.env.GOOGLE_CLIENT_ID,
      });

      const payload = ticket.getPayload();
      email = payload.email;
      username = payload.given_name || email.split("@")[0];

      const foundUser = await User.findOne({
        where: {
          email: email,
        },
      });
      if (foundUser) {
        const jwtPayload = {
          username: foundUser.username,
          email: foundUser.email,
          id: foundUser.id,
        };

        const access_token = encrypt(jwtPayload);
        res.status(200).json({
          email: foundUser.email,
          username: foundUser.username,
          access_token: access_token,
        });
      } else {
        const createdUser = await User.create({
          email: email,
          username: username,
          password: Math.random() * 1000000000 + "passgoogle",
        });
        const jwtPayload = {
          username: createdUser.username,
          email: createdUser.email,
          id: createdUser.id,
        };
        const access_token = encrypt(jwtPayload);
        res.status(201).json({
          email: createdUser.email,
          username: createdUser.username,
          access_token: access_token,
        });
      }
    } catch (err) {
      next(err);
    }
  }
}

module.exports = UserControllers;
