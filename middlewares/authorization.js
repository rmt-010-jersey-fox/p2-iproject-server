const { Schedule } = require("../models");

async function authorization(req, res, next) {
  try {
    let found = await Schedule.findByPk(+req.params.id);
    if (found.PatientId === req.userData.id) {
      next();
    } else {
      throw 401;
    }
  } catch (error) {
    if (error === 401) {
      next({
        status: 400,
        message: "Bukan rekam medis anda",
      });
    }
  }
}

module.exports = authorization;
