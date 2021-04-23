const { User } = require('../models')
const {generateToken} = require('../helper/userToken.js')
const { checkPassword } = require('../helper/bcrypt.js')
const {OAuth2Client} = require('google-auth-library');
const { sendMail } = require('../helper/sendEmail.js')

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID)

class UserController  {
    static async registerUser(req, res, next) {
        const { username, email, password} = req.body
        try {
            const user = await User.create({
                username,
                email, 
                password,
            })
            res.status(201).json({ 
                id: user.id, 
                username: user.username, 
                email: user.email 
            })
            sendMail(user.email)

        } catch (err) {
            next(err)
        }
    }

    static async loginUser(req, res, next) {
        const { email, password} = req.body
        try {
            const user = await User.findOne({
                where: {
                    email
                }
            })

            if(!user) {
                throw {status: 401, message: "email or password incorrect"}
            } else {
                const isPasswords = checkPassword(password, user.password)
                if (!isPasswords) {
                    throw {status: 401, message: "email or password incorrect"}
                } else {
                    let obj = {
                        id: user.id,
                        email: user.email
                    }
                    const access_token = generateToken(obj)
                    const username = user.username
                    res.status(200).json({access_token, username})
                }
            }

        } catch (err) {
            next(err)
        }

    }

    static async verifyLogin(req, res, next){
        console.log("MASUK LINE 60")
        try {
          const {google_access_token} = req.body
          let ticket = await client.verifyIdToken({
            idToken : google_access_token,
            audience: process.env.GOOGLE_CLIENT_ID
          })
          const payload = ticket.getPayload();       
          let userData = await User.findOne({where:{email: payload.email}})
          if(userData){
            let newUser = {
              id: userData.id,
              email: userData.email,
            }
            console.log(userData, "INI USER DATA LINE 73")
            let access_token = generateToken(newUser)
            let userEmail = userData.email
            res.status(200).json({access_token, userEmail})
          }
          else{
            //create data on databse
            let newGoogleUser = await User.create({
              email : payload.email,
              username: (Math.random()*999999)+"username",
              password: (Math.random()*999999)+"password"
            })
            console.log(newGoogleUser, "USER BARU LINE 84")
            //generate access token
            let access_token = generateToken(newGoogleUser)
            console.log(access_token, "INI ACCESS TOKEENNN")
            let userEmail = payload.email
            res.status(200).json({access_token, userEmail})
            sendMail(user.email)
          }

        }   catch(err){
             next(err)
        }
      }

}

module.exports = UserController