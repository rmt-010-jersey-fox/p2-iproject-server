'use strict';
const {
  Model
} = require('sequelize');
const {hashPassword} = require('../helpers/bcrypt')
module.exports = (sequelize, DataTypes) => {
  class Patient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Patient.belongsToMany(models.Doctor, { through: models.Schedule })
      Patient.hasMany(models.Schedule)
    }
  };
  Patient.init({
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
        msg: 'Masukkan email menggunakan format email'
      }
    }},
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Password tidak boleh kosong'
        }
      }
    },
    first_name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Nama depan anda tidak boleh kosong'
        }
      }
    },
    last_name: DataTypes.STRING,
    birthdate: {
      type: DataTypes.DATEONLY,
      validate: {
        notEmpty: {
          msg: 'Tanggal lahir tidak boleh kosong'
        }
      }
    },
    address: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Alamat tidak boleh kosong'
        }
      }
    },
    ktp: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'KTP tidak boleh kosong'
        },
      }
    },
    phone: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Nomor hp tidak boleh kosong'
        }
      }
    },
    gender: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Gender tidak boleh kosong'
        }
      }
    }
  }, {
    hooks: {
      beforeCreate(instance) {
        instance.password = hashPassword(instance.password)
      }
    },
    sequelize,
    modelName: 'Patient',
  });
  return Patient;
};