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
    case 'notenoughteam':
      res.status(400).json({ message: 'Not Enough Team to Create Bracket' })      
    break;
    case 'invalidlogin':
      res.status(403).json({ message: 'Invalid Email/Password' })      
    break;
    case 'alreadyadvanced':
      res.status(400).json({ message: 'This Team Already Advanced to Next Bracket' })      
    break;
    case 'fullteam':
      res.status(400).json({ message: 'Team for this Tournament already full' })      
    break;
    case 'havetournament':
      res.status(400).json({ message: 'This Account already have current Tournament' })      
    break;
    case 'unauthorized':
      res.status(401).json({ message: 'Unauthorized Access' })      
    break;
    case 'notournament':
      res.status(400).json({ message: 'There are no Tournamet currently for your account right now please create one' })      
    break;

    default:
      res.status(500).json({ message: 'Internal Server Error' })
  }
}

module.exports = errorhandling