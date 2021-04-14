const { User } = require('../models')
const { comparePassword } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jwt')
const { OAuth2Client } = require('google-auth-library');

class userController{
    static async register(req, res, next){
        try {
            const { username, email, password } = req.body
            const user = await User.create({
                username: username || '', 
                email: email || '', 
                password: password || ''
            })
            res.status(201).json({id: user.id, email: user.email})
        } catch (err) {
            next(err)
        }
    }

    static async login(req, res, next){
        try {
            const { email, password } = req.body
            const user = await User.findOne({ where: {email}})
            if(!user){
                throw { status: 404, message: 'Invalid Email / Password'}
            } else {
                const isPasswordMatch = comparePassword(password, user.password)
                if(!isPasswordMatch){
                    throw { status: 404, message: 'Invalid Email / Password'}
                } else {
                    const token = generateToken({
                        id: user.id,
                        email: user.email,
                        username: user.username
                    })
                    res.status(200).json({ id: user.id, email: user.email, username: user.username, access_token: token})
                }
            }
        } catch (err) {
            next(err)
        }
    }

    static async googleLogin(req, res, next){
        try {
            const id_token = req.body.id_token
            const clien = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
            let email = null
            let username = null
            const result =  await client.verifyIdToken({
                idToken: id_token,
                audience: process.env.GOOGLE_CLIENT_ID
            })
            if(result){
                const payload = result.getPayload()
                email = payload.email
                username = payload.name
            }
            const user = await User.findOne({where: { email }})
            if(user){
                const payload = { email: user.email, id: user.id, username: user.username}
                const access_token = generateToken(payload)
                res.status(200).json({access_token, username})
            } else {
                const userCreate = await User.create({
                    email, 
                    password: Math.random()*10000000 + 'PasswordGoogle',
                    username
                })

                const payload = {email: userCreate.email, id:userCreate.id}
                const access_token = generateToken(payload)
                res.status(200).json({access_token})
            }
        } catch (err) {
            next(err)
        }
    }
}

module.exports = userController