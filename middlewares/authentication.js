const { Patient } = require("../models");
const { verify } = require("../helpers/jwt");

async function authentication(req, res, next) {
  let access_token = req.headers.access_token;
  try {
    if (access_token) {
      let getData = verify(access_token);
      let foundUser = await Patient.findOne({
        where: {
          email: getData.email,
        },
      });
      if (foundUser) {
        req.userData = getData;
        next();
      } else {
        throw 401;
      }
    } else {
      throw 401;
    }
  } catch (error) {
    if (error === 401) {
      next({ status: 401, message: "Harap login terlebih dahulu" });
    } else {
      next({ status: 500, message: "Internal server error" });
    }
  }
}

module.exports = authentication;
