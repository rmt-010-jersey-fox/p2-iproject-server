const { Doctor, Poli } = require("../models");

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
      let allPoli = await Poli.findAll();
      res.status(200).json(allPoli);
    } catch (error) {
      next({ status: 500 });
    }
  }
}

module.exports = hospitalCtrl;
