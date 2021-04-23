const bcrypt = require("bcrypt");

function hashPass(plainpassword) {
  return bcrypt.hashSync(plainpassword, 8);
}

function comparePass(plainpassword, hashedpass) {
  return bcrypt.compareSync(plainpassword, hashedpass);
}

module.exports = { hashPass, comparePass };
