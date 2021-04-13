'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Schedule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Schedule.belongsTo(models.Patient)
      Schedule.belongsTo(models.Doctor)
    }
  };
  Schedule.init({
    date: {
      type: DataTypes.DATEONLY,
      validate: {
        isDate: {
        msg: 'Pilih tanggal berobat anda'
        },
        isTomorrow(value) {
          if (value <= new Date()) {
            throw 'Tidak dapat memilih tanggal dan waktu sebelum hari ini'
          }
        }
    }
    },
    PatientId: DataTypes.INTEGER,
    DoctorId: {
      type: DataTypes.INTEGER,
      validate: {
        equals: {
          msg: 'Anda belum memilih dokter'
        }
      }
    },
    status: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate(instance) {
        instance.status = 'Belum berobat'
      }
    },
    sequelize,
    modelName: 'Schedule',
  });
  return Schedule;
};