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

    static async getUsers(req, res, next) {
        try {
            const users = await User.findAll({exclude: ['email','password']})
            // const users = await User.findAll()
            if(!users){
                throw { status: 404, message: 'Users is not found'}
            } else {
                res.status(200).json(users)
            }
        } catch (err) {
            console.log(err)
            next(err)
        }
    }

    static async getUserByPk(req, res, next) {
        try {
            const user = await User.findByPk(req.params.id)
            if (!user) {
                throw { status: 401, message: 'Unauthorized' }
            } else {
                res.status(200).json(user)
            }
        } catch (err) {
            
        }
    }

    static async putUser(req, res, next) {
        try {
            const { fullname, username, email, password, image } = req.body
            console.log(req.loggedUser)
            const user = await User.findByPk(req.loggedUser.id)
            if(!user) {
                throw { status: 401, message: 'Unauthorized' }
            } else {
                console.log(user)
                await user.update({ fullname, username, email, password, image }, { where: { id: user.id }})
                res.status(200).json({ message: 'Profile is updated' })
            }
        } catch (err) {
            next(err)
        }
    }

    static async patchUser(req, res, next) {
        try {
            const { status, UserId } = req.body
            const user = await User.findOne({ where: { id: UserId }})
            if(!user) {
                throw { status: 404, message: 'User is not found' }
            } else {
                await User.update({ status }, { where: { id: user.id }})
                res.status(200).json({ message: 'User status has been updated' })
            }
        } catch (err) {
            next(err)
        }
    }

    static async deleteUser(req, res, next) {
        try {
            const user = await User.findByPk(req.loggedUser.id)
            if(!user) {
                throw { status: 401, message: 'Unauthorized' }
            } else {
                await User.destroy({ where: { id: user.id }})
                res.status(200).json({ message: 'Successfully to delete' })
            }
        } catch (err) {
            next(err)
        }
    }
}

module.exports = userController