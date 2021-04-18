function errorhandling(err, req, res, next) {
  switch(err.name){
    case 'SequelizeUniqueConstraintError':
      res.status(400).json({ message: err.errors[0].message })      
    break;
    case 'SequelizeValidationError':
      let error = []
      err.errors.forEach(el => error.push(el.message))
      res.status(400).json({ message: error })      
    break;
    case 'invalidlogin':
      res.status(403).json({ message: 'Invalid Email/Password' })      
    break;

    default:
      res.status(500).json(err)
  }
}

module.exports = errorhandling