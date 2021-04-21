const { confirmPassword } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jwt')
const { User, Anime, Pick } = require('../models')
const axios = require('axios')

class Controller {
    static register(req, res, next) {
        const { email, password, username } = req.body
        User.findOne({ where: { email } })
            .then(uniqueEmail => {
                if (uniqueEmail) next({ name: "ErrorCreateEmail" })
                else User.findOne({ where: { username } })
                    .then(uniqueUsername => {
                        if (uniqueUsername) next({ name: "ErrorCreateUsername" })
                        else User.create({ username, email, password })
                            .then(newUser => {
                                res.status(200).json({ id: newUser.id, email: newUser.email })
                            })
                            .catch(err => {
                                console.log(err)
                                next(err)
                            })
                    })
                    .catch(err => {
                        console.log(err)
                        next(err)
                    })
            })
            .catch(err => {
                console.log(err)
                next(err)
            })
    }

    static login(req, res, next) {
        const { email, password } = req.body
        User.findOne({ where: { email } })
            .then(user => {
                if (user) {
                    const compare = confirmPassword(password, user.password)
                    if (compare) {
                        const access_token = generateToken({ id: user.id, email: user.email })
                        res.status(200).json({ access_token, newUser: user.email })
                    } else {
                        next({ name: "Error400" })
                    }
                } else {
                    next({ name: "Error400" })
                }
            })
            .catch(err => {
                next(err)
            })
    }
    static showAnime(req, res, next) {
        Anime.findAll({
            where: { id: req.userData.id },
            order: [['id', 'ASC']]
        })
            .then(data => {
                if (data.length >= 1) res.status(200).json(data)
                else res.status(200).json({ message: "You Dont Have Any Anime" })
            })
            .catch(err => {
                console.log(err)
                next(err)
            })
    }
    static addAnime(req, res, next) {
        Anime.findOne({ where: { name: req.body.name.toLowerCase() } })
            .then(uniqueAnime => {
                if (uniqueAnime) res.status(400).json({ name: 'errorAdding', message: `there's Already ${req.body.name} in the Anime List` })
                else Anime.create({
                    name: req.body.name || '',
                    imageURL: req.body.imageURL || '',
                    episodes: +req.body.episodes,
                    totalEpisodes: req.body.totalEpisodes || '',
                    status: req.body.status,
                    UserId: req.userData.id
                })
                    .then(data => {
                        res.status(201).json(data)
                    })
                    .catch(err => {
                        next(err)
                    })
            })
            .catch(err => {
                next(err)
            })

    }

    static editAnime(req, res, next) {
        const { name, imageURL, episodes, totalEpisodes, status } = req.body
        const id = req.params.id
        Anime.findByPk(id)
            .then(oldAnime => {
                if (oldAnime) {
                    return oldAnime.update({
                        name,
                        imageURL,
                        episodes,
                        totalEpisodes,
                        status
                    })
                } else next({ name: "Error404" })
            })
            .then(newAnime => {
                res.status(201).json(newAnime)
            })
            .catch(err => {
                next(err)
            })
    }

    static editEpisodes(req, res, next) {
        const { episodes } = req.body
        const id = req.params.id
        Anime.findByPk(id)
            .then(oldAnime => {
                if (oldAnime.totalEpisodes === episodes) {
                    return oldAnime.update({
                        episodes: episodes,
                        status: true
                    })
                } else {
                    return oldAnime.update({
                        episodes: episodes,
                        status: false
                    })
                }
            })
            .then(newAnime => {
                res.status(201).json(newAnime)
            })
            .catch(err => {
                console.log(err)
                next(err)
            })
    }

    static deleteAnime(req, res, next) {
        Anime.destroy({ where: { id: req.params.id } })
            .then(data => {
                if (data === 1) {
                    res.status(201).json({ message: 'Success Removing Anime From The List.' })
                } else {
                    next({
                        name: 'Error404'
                    })
                }
            })
            .catch(err => {
                next(err)
            })
    }
    static getUpdate(req, res, next) {
        let dayToday = new Date().toLocaleString('en-us', { weekday: 'long' }).toLocaleLowerCase()
        console.log(dayToday)
        axios.get(`https://api.jikan.moe/v3/schedule/${dayToday}`)
            .then((news) => {
                if (news.data.monday) res.status(200).json(news.data.monday)
                else if (news.data.tuesday) res.status(200).json(news.data.tuesday)
                else if (news.data.wednesday) res.status(200).json(news.data.wednesday)
                else if (news.data.thursday) res.status(200).json(news.data.thursday)
                else if (news.data.friday) res.status(200).json(news.data.friday)
                else if (news.data.saturday) res.status(200).json(news.data.saturday)
                else res.status(200).json(news.data.sunday)
            })
            .catch(err => {
                next(err)
            })
    }

}

module.exports = Controller