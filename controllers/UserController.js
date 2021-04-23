const { User } = require("../models");
const { comparePassword } = require("../helpers/bcrypt");
const { signToken } = require("../helpers/jwt");
const { OAuth2Client } = require("google-auth-library");
const sendEmail = require("../helpers/nodeMail")

class UserController {
  static register(req, res, next) {
    const { email, password } = req.body;

    User.create({ email, password })
      .then((userCreate) => {
        // console.log(userCreate, "<<<<<<<<<<<< INI DI USER CREATE");
        sendEmail(userCreate.email)
        res.status(201).json({
          id: userCreate.id,
          email: userCreate.email,
        });
      })
      .catch((err) => {
        next(err);
      });
  }

  static login(req, res, next) {
    const { email, password } = req.body;

    User.findOne({ where: { email } })
      .then((foundUser) => {
        if (foundUser) {
          const passwordCorect = comparePassword(password, foundUser.password);

          if (passwordCorect) {
            const payload = {
              id: foundUser.id,
              email: foundUser.email,
            };
            console.log(payload);
            const access_token = signToken(payload);
            res.status(200).json({
              id: foundUser.id,
              email: foundUser.email,
              access_token: access_token,
            });
          } else {
            // res.status(400).json({ message: "Invalid Email / Password" });
            throw { name: "InvalidUserorPassword" };
          }
        } else {
          // res.status(400).json({ message: "Invalid Email / Password" });
          throw { name: "InvalidUserorPassword" };
        }
      })
      .catch((err) => {
        next(err);
      });
  }

  static googleLogin(req, res, next) {
    const id_token = req.body.id_token;
    console.log(id_token, ">>>>>>>>>>>>> INI TOKEN ");
    const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
    let email = null;
    let tempUsername = null;

    client
      .verifyIdToken({
        idToken: id_token,
        audience: process.env.GOOGLE_CLIENT_ID,
      })
      .then((tiket) => {
        const payload = tiket.getPayload();
        console.log(payload);
        email = payload.email;
        tempUsername = email.split("@");

        return User.findOne({
          where: {
            email: payload.email,
          },
        });
      })
      .then((DataUser) => {
        if (DataUser) {
          //kalau sudah terdaftar
          return DataUser;
        } else {
          //kalau belum terdaftar
          return User.create({
            email: email,
            username: tempUsername[0],
            password: "passwordGoogle",
          });
        }
      })
      .then((DataUser) => {
        console.log(DataUser, "<<<<<<<<<<<<<<<<<<<<<<<<<<");
        const token = signToken({
          id: DataUser.id,
          username: DataUser.username,
          email: DataUser.email,
        });
        console.log(token, "<<<<<<<<<<<<<<<<<<<<<<<<<<");
        res.status(200).json({
          id: DataUser.id,
          username: DataUser.username,
          email: DataUser.email,
          access_token: token,
        });
      })
      .catch((err) => {
        next(err);
      });
  }
}

module.exports = UserController;
