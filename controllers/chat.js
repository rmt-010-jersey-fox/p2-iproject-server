const {User, Chat} = require('../models')

class ChatController {
    static chat (req, res, next) {
        const {chat} = req.body
        Chat.create({
            UserId: req.currentUser.id,
            chat
        })
            .then((data) => {
                return Chat.findOne({
                    where: {
                        id: data.id
                    },
                    include: [
                        {
                            model: User
                        }
                    ]
                })
            })
            .then((data) => {
                res.status(201).json({
                    id: data.id,
                    chat: data.chat,
                    User: {
                        id: data.User.id,
                        email: data.User.email,
                        username: data.User.username
                    }
                })
            })
            .catch((err) => {
                next(err)
            })
    }

    static read (req, res, next) {
        Chat.findAll({
            include: [
                {
                    model: User
                }
            ]
        })
            .then((data) => {
                const arr = []
                for (let i = 0; i < data.length; i++) {
                    arr.push({
                        id: data[i].id,
                        chat: data[i].chat,
                        User: {
                            id: data[i].User.id,
                            email: data[i].User.email,
                            username: data[i].User.username
                        }
                    })
                }
                res.status(201).json(arr)
            })
            .catch((err) => {
                next(err)
            })
    }
}

module.exports = ChatController