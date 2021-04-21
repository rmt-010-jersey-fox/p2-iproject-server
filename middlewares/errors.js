function error(err, req, res, next) {
  if (err.name === 'SequelizeValidationError') {
    let errors = err.errors.map((ele) => {
      return { message: ele.message }
    })
    console.log(errors, '<< errors');
    res.status(400).json(errors)
  } else if (err.name === 'SequelizeUniqueConstraintError') {
    res.status(400).json({ message: 'This username/email is already taken, please try another' })
  } else if (err.name === 'notFound') {
    res.status(404).json({ message: 'Data not found' })
  } else if (err.name === 'invalid') {
    res.status(401).json({ message: 'Invalid email/password' })
  } else if (err.name === 'unAuthorized') {
    res.status(403).json({ message: "You don't have permission to access" })
  } else if (err.name === 'JsonWebTokenError') {
    res.status(401).json({ message: 'jwt must be provided' })
  } else {
    console.log(err);
    res.status(500).json({ message: 'Internal server error' })
  }
}

module.exports = error