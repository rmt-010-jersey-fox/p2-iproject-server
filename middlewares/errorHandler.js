function errorHandler(err, req, res, next) {
  let status = 500
  let message = err.name || 'Interval Server Error'
  if(err.name === 'SequelizeValidationError') {
      status = 400
      let errors = []
      err.errors.forEach(e => {
          errors.push(e.message)
      })
      message = errors.join(', ')
  } else if(err.name === 'SequelizeUniqueConstraintError') {
      status = 400
      message = 'Email is already taken'
  } else if(err.name === 'Request failed with status code 404') {
      status = 404
      message = 'Squad not found'
  } else {
      status = err.status || 500
      message = err.message || 'Network Error'
  }
  res.status(status).json({
      message
  })
}

module.exports = { errorHandler }