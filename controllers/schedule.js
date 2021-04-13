const { Schedule, Doctor } = require('../models')

class ScheduleCtrl {
  static async getSchedules(req, res, next) {
    try {
      let getAll = await Schedule.findAll({
        where: {
          UserId: req.userData.id
        }, inclde: Doctor
      })
      res.status(200).json(getAll)
    } catch (error) {
      next({ status: 500, message: 'Internal server error'})
    }
  }

  static async postSchedules(req, res, next) {
    let toPost = {
      date: req.body.date,
      UserId: req.userData.id,
      DoctorId: req.body.doctorId    }
    try {
      let created = await Schedule.create(toPost)
      res.status(201).json(created)
    } catch (error) {
      if (error.name === 'SequelizeValidationError') {
        let arrErr = []
        error.errors.forEach(err => arrErr.push(err.message))
        res.status(400).json({message: arrErr})
      } else {
        next({status: 500, message: 'Internal server error'})
      }
    }
  }

  static async getById(req, res, next) {
    try {
      let getSchedule = await Schedule.findByPk(+req.params.id, { include: Doctor })
      res.status(200).json(getSchedule)
    } catch (error) {
      next({status: 500, message: 'Internal server error'})
    }
  }

  static async patchById(req, res, next) {
    let toPatch = { status: req.body.status }
    try {
      await Schedule.update(toPatch, {
        where: {
        id: +req.params.id
        }
      })
      res.status(200).json({message: `Status berhasil diubah menjadi ${req.body.status}`})
    } catch (error) {
      next({status: 500, message: 'Internal server error'})
    }
  }

  static async putById(req, res, next) {
    let toPut = {
      DoctorId: +req.body.doctorId,
      status: req.body.status,
      date: req.body.date
    }
    try {
      await Schedule.update(toPut, {
        where: {
        id: +req.params.id
        }
      })
      res.status(200).json({message: 'Data jadwal berobat berhasil diubah'})
    } catch (error) {
      next({status: 500, message: 'Internal server error'})
    }
  }

  static async deleteById(req, res, next) {
    try {
      await Schedule.destroy({ where: { id: +req.params.id } })
      res.status(200).json({message: 'Jadwal berobat berhasil dihapus'})
    } catch (error) {
      next({status: 500, message: 'Internal server error'})
    }
  }
}

module.exports = ScheduleCtrl