const { Anime, User } = require('../models')
const axios = require("axios")

class AnimeController {
    static async postAnimes(req, res, next) {
        let { title, image_url, status, duration, score } = req.body
        console.log(req.loggedUser, "<<<<<<")
        let {id} = req.loggedUser
        try {
            const data = await Anime.create({
                title,
                image_url, 
                status, 
                duration, 
                score,
                UserId : id
            })

            res.status(201).json(data)

        } catch(err) {
            next(err)
        }
    }

    static async getAnimes(req, res, next) {
        try {
            const data = await Anime.findAll({ include: User})
        
            res.status(200).json(data);

        }catch(err) {
            next(err)
        }
    }

    static async getAnimesId(req, res, next) {
        let id = req.params.id
        try {
            const data = await Anime.findOne({
                where: {
                    id
                }
            })
    
            if (!data) {
                throw {status: 404, message: "error not found"}
             } else {
                 res.status(200).json(data)
             }
        } catch(err) {
            next(err)
        }
     
    }

    static async putAnimesId(req, res, next) {
        let { title, image_url, status, duration, score } = req.body
        let id = +req.params.id
        let data = {
            title,
                image_url, 
                status, 
                duration, 
                score,
        }
        try {
            const findOne = await Anime.findOne({where: { id: id }})
            if(!findOne) {
                throw {status: 404, message: "error not found"}
            } else {
                const updated = await Anime.update(data, { where: { id: id }, returning: true })
                if (!updated) {
                    throw {status: 404, message: "error not found"}
                } else {
                    res.status(200).json(updated[1][0])
                }
            }
        } catch (err) {
            next(err)
        }
        
    }


    static async deleteAnimesId(req, res, next) {
        let id = +req.params.id
        try {
            const data = await Anime.findOne({where: { id: id }})
            if(!data) {
                throw {status: 404, message: "error not found"}
            } else {
                const deleted = await Anime.destroy({ where: { id: id }, returning: true })
                if (!deleted) {
                    throw {status: 404, message: "error not found"}
                } else {
                    res.status(200).json({
                        message: "Anime successfully deleted"
                    })
                }
            }
        } catch(err) {
            next(err)
        }
    }

    static async quotesAnime(req, res, next){
        try {
          const news = await axios({
            url: `https://animechan.vercel.app/api/random`,
            method : 'GET'
          })
          res.status(200).json(news.data)
        } catch (err) {
          next(err)
        }
    }

}

module.exports = AnimeController