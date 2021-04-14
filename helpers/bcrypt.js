const bcrypt = require('bcrypt');

function hashpassword(plainpass){
  return bcrypt.hashSync(plainpass, 8);
}

function comparepass(plainpass, hashpassword){
  return bcrypt.compareSync(plainpass, hashpassword);
}

module.exports = { hashpassword, comparepass }