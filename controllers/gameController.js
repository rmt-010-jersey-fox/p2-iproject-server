const { Game } = require('../models')

class gameController {
    static async getGames(req, res, next){
        try {
            const Games = await Game.findAll()
            if(!Games){
                throw {status: 404, message: 'Games is not found'}
            } else {
                res.status(200).json(Games)
            }
        } catch (err) {
            next(err)
        }
    }

    static async getGameById(req, res, next) {
        try {
            const game = await Game.findByPk(req.params.id)
            console.log(game)
            if(!game) {
                throw { status: 404, message: 'Game is not found' }
            } else {
                res.status(200).json(game)
            }
        } catch (err) {
            next(err)
        }
    }
    
    static async postGame(req, res, next){
        try {
            const { name, image } = req.body
            const game = await Game.create({ name, image })
            res.status(201).json(game)
        } catch (err) {
            next(err)
        }
    }

    static async putGame(req, res, next){
        try {
            const { name, image } = req.body
            const game = await Game.findByPk(req.params.id)
            if(!game){
                throw {status: 404, message: 'Game is not Found'}
            } else {
                await Game.update({ name, image }, { where: { id: game.id }})
                res.status(200).json({ message: 'Game success to update' })
            }
        } catch (err) {
            next(err)
        }
    }

    static async deleteGame(req, res, next) {
        try {
            const game = await Game.findByPk(req.params.id)
            if (!game) {
                throw { status: 404, message: 'Game is not found' }
            } else {
                await Game.destroy({ where: { id: game.id }})
                res.status(200).json({ message: 'Game success to delete' })
            }
        } catch (err) {
            next(err)
        }
    }
}

module.exports = gameController