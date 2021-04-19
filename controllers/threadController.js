const { Thread } = require('../models')

class threadController{
    static async getThread(req, res, next){
        try {
            const thread = await Thread.findAll()
            res.status(200).json(thread)
        } catch (err) {
            next(err)
        }
    }

    static async postThread(req, res, next){
        try {
            const { title, content, image, GameId } = req.body
            const UserId = req.loggedUser.id
    
            const newThread = {title, content, image: image || '', UserId, GameId}
            const thread = await Thread.create(newThread)
            res.status(201).json(thread)

        } catch (err) {
            next(err)
            
        }
    }

    static async getThreadById(req, res, next){
        try {
            const thread = await Thread.findByPk(req.params.id)
            if(!thread){
                throw { status:404, message: 'Thread is not found'}
            } else {
                res.status(200).json(thread)
            }
        } catch (err) {
            next(err)
        }
    }

    static async putThread(req, res, next){
        try {
            const { title, content, image, GameId } = req.body
            const findThread = await Thread.findByPk(req.params.id)
            console.log(findThread)
            if(!findThread){
                throw { status: 404, message: 'Thread is not found'}
            } else {
                const updateThread = await Thread.update({ title, content, image: image || '', GameId }, 
                { where: { id: findThread.id }, returning: true })
                console.log(updateThread)
                res.status(200).json(updateThread[1][0])
            }
        } catch (err) {
            next(err)
        }
    }

    static async patchThread(req, res, next){
        try {
            const findThread = await Thread.findByPk(req.params.id)
            if(!findThread){
                throw { status:404, message: 'Thread is not found'}
            } else {
                const patchThread = await Thread.update({content: req.body.content}, {where: {id: findThread.id}, returning: true })
                res.status(200).json(patchThread[1][0])
            }
        } catch (err) {
            next(err)
        }
    }

    static async deleteThread(req, res, next){
        try {
            const findThread = await Thread.findByPk(req.params.id)
            if(!findThread){
                throw { status:404, message: 'Thread is not found'}
            } else {
                await Thread.destroy({where: {id: findThread.id}})
                res.status(200).json({message: 'Thread success to delete'})
            }
        } catch (err) {
            next(err)
        }
    }

}

module.exports = threadController