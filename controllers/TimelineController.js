const {Timeline, User} = require('../models/index')

class TimelineController {
    static async getStatus (req, res, next) {
        try {
            const status = await Timeline.findAll({
                include: [ User ]
            })
            console.log(status);
            res.status(200).json({
                status
            }) 
        }
        catch(err) {
            next(err)
        }
    }
    static async postStatus(req, res, next) {
        console.log(req.loggedInUser, '<< req');
        const {id} = req.loggedInUser
        const payload = {
            status: req.body.status,
            likes: 0,
            UserId: id
        }
        try {
            const postStatus = await Timeline.create(payload,{
                include: {
                    model: User
                }
            })
            res.status(200).json({postStatus})
        }
        catch(err) {
            next(err)
        }
    }
    static async putStatus(req, res, next) {
        const {id} = req.params
        const {status} = req.body
        try {
            const putStatus = await Timeline.update({
                status
            }, {
                where: {
                    id: id
                }
            })
            res.status(200).json({
                message: "Edit status successfull",
                putStatus
            })
        }
        catch(err) {
            next(err)
        }
    }
    static async patchLike(req, res, next) {
        const {id} = req.params
        const {likes} = req.body
        try {
            const patchLike = await Timeline.update({likes}, {
                where: {
                    id
                }
            })
            res.status(200).json({
                message: "Edit likes successfull",
                patchLike
            })
        }
        catch(err) {
            next(err)
        }
    }
    static async deleteStatus(req, res, next) {
        const {id} = req.params
        try {
            const deleteStatus = await Timeline.destroy({
                where: {
                    id: id
                }
            })
            res.status(200).json({
                message: 'Your status has been deleted'
            })
        }
        catch(err) {
            next(err)
        }
    }
}

module.exports = TimelineController