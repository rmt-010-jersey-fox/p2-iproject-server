const { Schedule, Doctor, Poli, Patient } = require("../models");
const payment = require("../3rd-Party-API/duitku.js");
const sendMail = require("../helpers/nodemail.js");
const { Op } = require("sequelize");
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
    try {
      if (!req.body.session || !req.body.date || !req.body.PoliId) {
        return next({ status: 400, message: "Harap isi form dengan lengkap" });
      }
      let pay = await payment(+req.body.total, req.body.method);
      let doctor = await Doctor.findOne({
        where: {
          [Op.and]: [
            { session: req.body.session },
            { PoliId: +req.body.PoliId },
          ],
        },
        include: Poli,
      });
      let toPost = {
        date: req.body.date,
        PatientId: +req.userData.id,
        DoctorId: doctor.id,
      };
      let toSendMail = {
        first_name: req.userData.first_name,
        date: req.body.date,
        session: doctor.session,
        doctorName: doctor.full_name,
        poli: doctor.Poli.name,
      };
      await sendMail(toSendMail, req.userData.email);
      await Schedule.create(toPost);
      res.status(201).json(pay);
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
    try {
      let doctor = await Doctor.findOne({
        where: {
          [Op.and]: [
            { session: req.body.session },
            { PoliId: +req.body.PoliId },
          ],
        },
        include: Poli,
      });
      let toPut = {
        PatientId: +req.userData.id,
        date: req.body.date,
        DoctorId: doctor.id,
      };
      await Schedule.update(toPut, {
        where: {
          id: +req.params.id,
        },
      });
      let toSendMail = {
        first_name: req.userData.first_name,
        date: req.body.date,
        session: doctor.session,
        doctorName: doctor.full_name,
        poli: doctor.Poli.name,
      };
      await sendMail(toSendMail, req.userData.email);
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
