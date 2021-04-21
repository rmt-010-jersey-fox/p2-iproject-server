const { Doctor, Poli } = require("../models");
const kawalCorona = require("../3rd-Party-API/kawalcorona.js");
class hospitalCtrl {
  static async getDoctor(req, res, next) {
    try {
      let allDoctor = await Doctor.findAll({ include: Poli });
      res.status(200).json(allDoctor);
    } catch (error) {
      next({ status: 500 });
    }
  }

  static async getPoli(req, res, next) {
    try {
      let allPoli = await Poli.findAll({ include: Doctor });
      res.status(200).json(allPoli);
    } catch (error) {
      next({ status: 500 });
    }
  }

  static async covid(req, res, next) {
    try {
      let corona = await kawalCorona();
      res.status(200).json(corona);
    } catch (error) {
      next({ status: 400, message: error });
    }
  }
}

module.exports = hospitalCtrl;
