const { decrypt } = require('../helper/bcrypt');
const { sign } = require('../helper/jwt');
const {User} = require ('../models')

class userController {
    static register(req, res, next) {
        let input = {
          email: req.body.email,
          password: req.body.password,
        };
        User.create(input)
          .then((data) => {
            res.status(201).json(data);
          })
          .catch((err) => {
            if (err.name === "SequelizeValidationError") {
              next(err);
            } else {
              next(err);
            }
          });
      }
    
      static login(req, res, next) {
        let { email, password } = req.body;
        console.log(req.body)
        User.findOne({
          where: {
            email,
          },
        })
          .then((data) => {
            if (data === null) {
              throw { name: "invalid email or password" };
            } else {
              let decode = decrypt(password, data.password);
              if (decode) {
                let payload = {
                  id: data.id,
                  email: data.email,
                };
                res.status(200).json({ access_token: sign(payload) });
              } else {
                throw { name: "invalid email or password" };
              }
            }
          })
          .catch((err) => {
            next(err);
          });
      }

}
module.exports = userController