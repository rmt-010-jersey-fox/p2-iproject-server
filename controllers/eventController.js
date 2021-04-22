const { Event, User } = require('../models')

class eventController{
    static async getEvent(req, res, next){
        try {
            const event = await Event.findAll()
            res.status(200).json(event)
        } catch (err) {
            next(err)
        }
    }

    static async postEvent(req, res, next){
        try {
            const { title, content, image, location, date, GameId } = req.body
            const UserId = req.loggedUser.id

            const newEvent = { title, content, image, location, date, GameId, UserId }
            const event = await Event.create(newEvent)
            res.status(201).json(event)
        } catch (err) {
            next(err)
        }
    }

    static async getEventById(req, res, next){
        try {
            const event = await Event.findByPk(req.params.id)
            if(!event){
                throw { status:404, message: 'Event is not found'}
            } else {
                res.status(200).json(event)
            }
        } catch (err) {
            next(err)
        }
    }

    static async putEvent(req, res, next){
        try {
            const { title, content, image, location, date, GameId } = req.body
            const findEvent = await Event.findByPk(req.params.id)
            if(!findEvent){
                throw { status: 404, message: 'Event is not found'}
            } else {
                const updateEvent = await Event.update({ title, content, image: image || '', location, date, GameId },
                { where: { id: findEvent.id }, returning: true })
                res.status(200).json(updateEvent[1][0])
            }
        } catch (err) {
            next(err)
        }
    }

    static async patchEvent(req, res, next){
        try {
            const findEvent = await Event.findByPk(req.params.id)
            if(!findEvent){
                throw { status: 404, message: 'Event is not found'}
            } else {
                const patchEvent = await Event.update({date: req.body.date}, {where: {id: findEvent.id}, returning:true })
                res.status(200).json(patchEvent[1][0])
            }
        } catch (err) {
            next(err)
        }
    }

    static async deleteEvent (req, res, next){
        try {
            const findEvent = await Event.findByPk(req.params.id)
            if(!findEvent){
                throw { status: 404, message: 'Event is not found'}
            } else {
                await Event.destroy({where: {id: findEvent.id}})
                res.status(200).json({message: 'Event success to delete'})
            }
        } catch (err) {
            
        }
    }
}

module.exports = eventController