"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Schedule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Schedule.belongsTo(models.Patient);
      Schedule.belongsTo(models.Doctor);
    }
  }
  Schedule.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      date: {
        type: DataTypes.DATEONLY,
        validate: {
          isDate: {
            msg: "Pilih tanggal berobat anda",
          },
          afterToday(value) {
            let date = new Date().getDate();
            let month;
            if (new Date().getMonth() <= 8) {
              month = `0${new Date().getMonth() + 1}`;
            } else {
              month = new Date().getMonth();
            }
            let year = new Date().getFullYear();
            if (value <= `${year}-${month}-${date}`)
              throw "Tanggal untuk pendaftaran jadwal berobat minimal adalah besok";
          },
        },
      },
      PatientId: DataTypes.INTEGER,
      DoctorId: {
        type: DataTypes.INTEGER,
        validate: {
          mustFilled(value) {
            if (!value) {
              throw "Anda belum memilih dokter";
            }
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Schedule",
    }
  );
  return Schedule;
};
