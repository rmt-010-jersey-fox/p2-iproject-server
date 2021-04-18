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
          isAfter: {
            args: new Date().toISOString(),
            msg:
              "Tanggal untuk pendaftaran jadwal berobat minimal adalah besok",
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
