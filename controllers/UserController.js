const {User} = require('../models/index')
const {generateToken} = require('../helpers/jwt')
const {comparePassword} = require('../helpers/bcrypt')
const rug = require('random-username-generator')

class UserController {
    static async register (req, res, next) {
        const payload = {
            email: req.body.email,
            password: req.body.password,
            username: rug.generate(),
            birth_year: req.body.birth_year
        }
        try {
            const user = await User.create(payload)
            res.status(201).json({
                id: user.id,
                email: user.email,
                username: user.username,
                birth_year: user.birth_year
            })
        }
        catch(err) {
            next(err)
        }
    }
    static async login (req, res, next) {
        try {
            const {email, password} = req.body
            const user = await User.findOne({
                where: {
                    email: email
                }
            })
            console.log(user);
            if(!user) {
                res.status(401).json({
                    msg: "Invalid email or password"
                })
            } else if(!comparePassword(password, user.password)) {
                console.log('masuk sini');
                res.status(401).json({
                    msg: "Invalid email or password"
                })
            } else {
                const access_token = generateToken({
                    id: user.id,
                    email: user.email
                })
                res.status(200).json({access_token})
            }
        }
        catch(err) {
            next(err)
        }
    }
    static async googleLogin(req,res,next){
        let { google_access_token } = req.body
        const client = new OAuth2Client(process.env.CLIENT_ID)
        let email = ''
   
        client.verifyIdToken({
            idToken: google_access_token,
            audience: process.env.CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
         
        }).then(ticket => {
            const payload = ticket.getPayload();
            email = payload.email
            console.log(payload, "<<< ini payload dari data google");
            return User.findOne({
                where: { email }
            })
        
        }).then(user => {
            if (user) {
           
                return user
            } else {
                let objUser = {
                    email, 
                    password: "random"
                }
                return User.create(objUser)
            }
        })
            .then(dataUser => {
                let access_token = signToken({ id: dataUser.id, email: dataUser.email })
                return res.status(200).json(access_token)
            })
            .catch(err => {
                next(err);
            })
    }
}
module.exports = UserController