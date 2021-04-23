const { User } = require('../models')
const { comparePassword } = require('../helpers/bcrypt')
const { sign } = require('../helpers/jwt')
const transporter = require('../helpers/nodemailer')

class UserController {
    static async register(req, res, next) {
        try {
            let { email, password } = req.body
            let data = await User.create({
                email,
                password
            })
            let mailOptions = {
                from: '"LayarTancepWeb <info@layartancepweb.com>',
                to: "abdul@mail.com",
                subject: "register Information",
                text: "success register!",
                html: `<b> successfully register <\b>`,
            };

            transporter.sendMail(mailOptions, function(error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);
                }
            })
            res.status(201).json({id: data.id, email: data.email}) 
        }
        catch(err) {
            next(err.message)
        }
    }
    static async login(req, res, next) {
        try {
            let { email, password } = req.body
            let data = await User.findOne({
                where: {
                    email
                }
            })
            if(data) {
                let isPassword = comparePassword(password, data.password)
                if(isPassword) {
                    let token = sign({
                        id: data.id,
                        email: data.email
                    })
                    res.status(200).json({id: data.id, email: data.email, access_token: token})
                }else {
                    throw ({message: 'password salah'})
                }
            }else {
                throw ({message: 'invalid password / email'})
            }
        }
        catch(err) {
            next(err)
        }
    }
}

module.exports = UserController