const { User } = require('../models')
const { comparePassword } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jwt')


class UserController {
  static register (req,res,next) {
    const { username, email,password} = req.body

    User.create({
      username,
      email,
      password
    },{returning : true})

    .then ((data) => {
      let user = {
        id : data.id,
        email : data.email,
        username : data.username
      }
      res.status(201).json({msg : `Success Created!`, user})
    }) 
    .catch ((err) => {
      console.log(`<<< masuk error nih`);
      console.log(err);
      next()
    })
  }

  static login (req,res,next) {
    const { email,password } = req.body;
    console.log(email , password, `<< masuk`);

    User.findOne ({
      where : {email}
    })

    .then ((data) => {
      if (data) {
        let checkPassword = comparePassword(password,data.password)

        if (checkPassword) {
          let payload = {
            id : data.id,
            email : data.email
          }

          const access_token = generateToken(payload)
          res.status(200).json({access_token})

        } else {
          res.status(401).json({msg: `Invalid email/password`})
        }
      } else {
        // next()
        res.status(401).json({msg: `Invalid email/password`})
      }
    })
    .catch((err) => {
        console.log(err);
    })
  }

  static googleLogin (req,res,next) {
    
  }
}

module.exports = UserController;