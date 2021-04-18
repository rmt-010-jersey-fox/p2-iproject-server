const { Schedule, Doctor, Poli } = require("../models");
class ScheduleCtrl {
  static async getSchedules(req, res, next) {
    //untuk history pasien
    try {
      let getAll = await Schedule.findAll({
        where: {
          PatientId: req.userData.id,
        },
        include: {
          model: Doctor,
          include: Poli,
        },
      });
      res.status(200).json(getAll);
    } catch (error) {
      next({ status: 500 });
    }
  }

  static async postSchedules(req, res, next) {
    // pasien daftar berobat
    let toPost = {
      date: req.body.date,
      PatientId: +req.userData.id,
      DoctorId: +req.body.DoctorId,
    };
    try {
      let created = await Schedule.create(toPost);
      res.status(201).json(created);
    } catch (error) {
      if (error.name === "SequelizeValidationError") {
        let arrErr = [];
        error.errors.forEach((err) => arrErr.push(err.message));
        res.status(400).json({ message: arrErr });
      } else {
        next({ status: 500 });
      }
    }
  }

  static async getById(req, res, next) {
    // untuk populate edit by pk
    try {
      let getSchedule = await Schedule.findByPk(+req.params.id, {
        include: {
          model: Doctor,
          include: Poli,
        },
      });
      res.status(200).json(getSchedule);
    } catch (error) {
      next({ status: 500 });
    }
  }

  static async putById(req, res, next) {
    //update berobat
    let toPut = {
      DoctorId: +req.body.DoctorId,
      date: req.body.date,
    };
    try {
      await Schedule.update(toPut, {
        where: {
          id: +req.params.id,
        },
      });
      res.status(200).json({ message: "Data jadwal berobat berhasil diubah" });
    } catch (error) {
      if (error.name === "SequelizeValidationError") {
        let arrErr = [];
        error.errors.forEach((err) => arrErr.push(err.message));
        next({ status: 400, message: arrErr });
      } else {
        next({ status: 500 });
      }
    }
  }

  static async deleteById(req, res, next) {
    //hapus history berobat
    try {
      await Schedule.destroy({ where: { id: +req.params.id } });
      res.status(200).json({ message: "Jadwal berobat berhasil dihapus" });
    } catch (error) {
      next({ status: 500 });
    }
  }
}

module.exports = ScheduleCtrl;
