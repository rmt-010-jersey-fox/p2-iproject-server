const bcrypt = require("bcrypt");

const hash = (pass) => {
  const salt = bcrypt.genSaltSync(8);
  return bcrypt.hashSync(pass,salt);
}

const compare = (pass, hashedPass) => {
  return bcrypt.compareSync(pass, hashedPass);
}

module.exports = {
  hash,
  compare
}
