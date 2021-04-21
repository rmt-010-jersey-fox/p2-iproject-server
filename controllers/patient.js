const { Patient, Schedule } = require("../models");
const { validate } = require("../helpers/bcrypt");
const { generate } = require("../helpers/jwt");
const { OAuth2Client } = require("google-auth-library");
class PatientCtrl {
  static async register(req, res, next) {
    let toRegist = {
      email: req.body.email,
      password: req.body.password,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      birthdate: req.body.birthdate,
      address: req.body.address,
      ktp: req.body.ktp,
      phone: req.body.phone,
      gender: req.body.gender,
    };
    try {
      let created = await Patient.create(toRegist);
      let toShow = {
        id: created.id,
        email: created.email,
        first_name: created.first_name,
        last_name: created.last_name,
        birthdate: created.birthdate,
        address: created.address,
        ktp: created.ktp,
        phone: created.phone,
        gender: created.gender,
      };
      res.status(201).json(toShow);
    } catch (error) {
      if (error.name === "SequelizeValidationError") {
        let arrErr = [];
        error.errors.forEach((err) => arrErr.push(err.message));
        next({ status: 400, message: arrErr });
      } else if (error.name === "SequelizeUniqueConstraintError") {
        if (error.errors[0].path === "email") {
          next({
            status: 400,
            message: "Email sudah terdaftar, gunakan email lain",
          });
        } else if (error.errors[0].path === "ktp") {
          next({
            status: 400,
            message: "KTP sudah terdaftar",
          });
        } else {
          next({
            status: 400,
            message: "Nomor hp telah terdaftar",
          });
        }
      } else {
        next({ status: 500 });
      }
    }
  }

  static async login(req, res, next) {
    try {
      let loggedIn = await Patient.findOne({
        where: {
          email: req.body.email,
        },
      });
      if (loggedIn) {
        let isValidate = validate(req.body.password, loggedIn.password);
        if (isValidate) {
          let payload = {
            id: loggedIn.id,
            first_name: loggedIn.first_name,
            email: loggedIn.email,
            ktp: loggedIn.ktp,
          };

          let access_token = generate(payload);
          res.status(200).json({ access_token });
        } else {
          throw 400;
        }
      } else {
        throw 400;
      }
    } catch (error) {
      if (error === 400) {
        next({ status: 400, message: "Invalid Email/password" });
      } else {
        next({ status: 500 });
      }
    }
  }

  static async getById(req, res, next) {
    try {
      let found = await Patient.findByPk(req.userData.id, {
        include: Schedule,
      });
      let toShow = {
        id: found.id,
        email: found.email,
        first_name: found.first_name,
        last_name: found.last_name,
        birthdate: found.birthdate,
        address: found.address,
        ktp: found.ktp,
        phone: found.phone,
        gender: found.gender,
        Schedule: found.Schedule,
      };
      res.status(200).json(toShow);
    } catch (error) {
      next({ status: 500 });
    }
  }

  static async googleLogin(req, res, next) {
    const client = new OAuth2Client(process.env.CLIENT_ID);
    try {
      const ticket = await client.verifyIdToken({
        idToken: req.headers.token,
        audience: process.env.CLIENT_ID,
      });
      const payload = ticket.getPayload();
      let foundAccount = await Patient.findOne({
        where: {
          email: payload.email,
        },
      });
      if (foundAccount) {
        let getToken = {
          id: foundAccount.id,
          first_name: foundAccount.first_name,
          email: foundAccount.email,
          ktp: foundAccount.ktp,
        };
        let access_token = generate(getToken);
        res.status(200).json({ access_token });
      } else {
        let random = Math.floor(Math.random() * 99);
        let randomKtp = Math.floor(Math.random() * 1000000000000000);
        let toCreate = {
          email: payload.email,
          password: payload.at_hash,
          first_name: payload.given_name,
          last_name: payload.family_name,
          address: `Jl. Google No.${random}`,
          ktp: randomKtp,
        };
        let created = await Patient.create(toCreate);
        let getToken = {
          id: created.id,
          first_name: created.first_name,
          email: created.email,
          ktp: created.ktp,
        };
        let access_token = generate(getToken);
        res.status(201).json({ access_token });
      }
    } catch (error) {
      next({ status: 500 });
    }
  }
}

module.exports = PatientCtrl;
