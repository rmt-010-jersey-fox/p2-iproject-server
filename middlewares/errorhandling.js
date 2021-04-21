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
    case 'fullteam':
      res.status(400).json({ message: 'This tournament has full Team' })      
    break;
    case 'havetournament':
      res.status(400).json({ message: 'You Already Have ongoing Tournament' })      
    break;
    case 'invalidtoken':
      res.status(401).json({ message: 'Invalid Access Token' })      
    break;
    case 'unauthorized':
      res.status(401).json({ message: 'Unauthorized Access' })      
    break;
    case 'notournament':
      res.status(404).json({ message: 'No tournament Found' })      
    break;
    case 'havebracket':
      res.status(400).json({ message: 'This Tournament Already Have Bracket' })      
    break;
    case 'notenoughteam':
      res.status(400).json({ message: 'You dont have enough Team to start a Tournament' })      
    break;

    default:
      res.status(500).json(err)
  }
}

module.exports = errorhandling