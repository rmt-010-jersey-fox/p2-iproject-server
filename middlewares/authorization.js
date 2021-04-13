const { Schedule } = require('../models')

async function authorization(req, res, next) {
  try {
    let found = await Schedule.findByPk(+req.params.id)
    if (found.UserId === req.userData.id) {
      next()
    } else {
      throw 401
    }
  } catch (error) {
    if (error === 401) {
      next({status: 400, message: 'Bukan rekam medis anda, silahkan login menggunakan akun yang tepat'})
    }
  }
}

module.exports = authorization