const {
    User,
    Friend,
    Post
} = require("../models");

const {
    comparePassword
} = require("../helpers/bcrypt");

const {
    generateToken,
    verifyToken
} = require("../helpers/jwt");

const {
    OAuth2Client
} = require('google-auth-library');

class UserController {
    static async register(req, res, next) {
        try {
            let {
                email,
                password,
                username,
                avatar
            } = req.body;
            const newUser = await User.create({
                email,
                password,
                username,
                avatar
            });

            res.status(201).json({
                id: newUser.id,
                email: newUser.email,
                username: newUser.username
            });

        } catch (err) {
            next(err)
        }
    }

    static async login(req, res, next) {
        try {

            const {
                email,
                password
            } = req.body;

            const findUser = await User.findOne({
                where: {
                    email,
                },
            });

            if (!findUser) {
                // next buat user not found (invalid email / password)
                throw {
                    status: 400,
                    message: 'invalid email / password'
                }

            } else {
                if (comparePassword(password, findUser.password)) {

                    const access_token = generateToken({
                        id: findUser.id,
                        email: findUser.email,
                    });

                    res.status(200).json({
                        id: findUser.id,
                        email: findUser.email,
                        access_token
                    });
                } else {
                    throw {
                        status: 400,
                        message: 'invalid email / password'
                    }
                }
            }
        } catch (err) {
            // next error 500 err.message || internal server error
            next(err)
        }
    }

    static async getUsers(req, res, next) {
        try {
            const users = await User.findAll({
                order: [
                    ['id', 'ASC']
                ]
            })
            
            res.status(200).json(users)
        } catch (err) {
            next(err)
        }
    }

    static async getUserById(req, res, next) {
        try {
            const user = await User.findOne({
                where: {
                    id: req.params.id
                },
                include: [{
                    model: Friend,
                    include: [{
                        model: User,
                        as: 'friend'
                    }],
                }, Post]
            })
            res.status(200).json(user)
        } catch (err) {
            next(err)
        }
    }

    static async changeUsername(req, res, next) {
        try {
            const user = await User.update({
                username: req.body.username
            }, {
                where: {
                    id: req.params.id
                }
            })

            if (!user) {
                throw {
                    status: 404,
                }
            }

            res.status(200).json({
                message: "Username Changed Successfully"
            })
        } catch (err) {
            next(err)
        }
    }

    static async changeAvatar(req, res, next) {
        try {
            const user = await User.update({
                avatar: req.body.avatar
            }, {
                where: {
                    id: req.params.id
                }
            })

            if (!user) {
                throw {
                    status: 404,
                }
            }

            res.status(200).json({
                message: "Avatar Changed Successfully"
            })
        } catch (err) {
            next(err)
        }
    }

    static async deleteUser(req, res, next) {
        try {
            const deleted = await User.destroy({
                where: {
                    id: req.params.id
                }
            })
            if (!deleted) {
                throw {
                    status: 404
                }
            }

            const friendDeleted = await Friend.destroy({
                where: {
                    FriendId: req.params.id
                }
            })

            res.status(200).json({
                message: "User Deleted Successfully"
            })
        } catch (err) {
            next(err)
        }
    }

    static async googleLogin(req, res, next) {

        try {
            const CLIENT_ID = process.env.CLIENT_ID
            const client = new OAuth2Client(CLIENT_ID);
            const ticket = await client.verifyIdToken({
                idToken: req.body.idToken,
                audience: CLIENT_ID, // Specify the CLIENT_ID of the app that accesses the backend
                // Or, if multiple clients access the backend:
                //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
            });

            const payload = ticket.getPayload();

            const findUser = await User.findOne({
                where: {
                    email: payload.email
                }
            })

            let access_token;

            if (!findUser) {
                const username = payload.email.split('@')[0]
                const newUser = await User.create({
                    username,
                    email: payload.email,
                    password: (Math.random() * 10000000) + 1 + "<<GoogleLoginPw"
                })

                access_token = generateToken({
                    id: newUser.id,
                    email: newUser.email
                })

                res.status(200).json({
                    id:newUser.id,
                    email: newUser.email,
                    access_token
                })

            } else {
                access_token = generateToken({
                    id: findUser.id,
                    email: findUser.email
                })
            }

            res.status(200).json({
                id:findUser.id,
                email: findUser.email,
                access_token
            })

        } catch (err) {
            next(err)
        }
    }
}

module.exports = UserController