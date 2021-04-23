const axios = require('axios')
const { Meme } = require('../models')

class apiController {
    static jokeApi(req, res, next) {
        axios({
            method: 'get',
            url: `https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,explicit&format=txt`
        })
            .then(response => {
                res.status(200).json(response.data)
            })
            .catch(err => {
                res.status(500).json({ message: err })
            })
    }

    static apiQuotable(req, res, next) {
        axios({
            method: 'get',
            url: 'https://api.quotable.io/random'
        })
            .then((response) => {
                res.status(200).json(response.data)
            })
            .catch(err => {
                res.status(500).json({ message: err })
            })
    }

    static boredApi(req, res, next) {
        axios({
            method: 'get',
            url: 'https://www.boredapi.com/api/activity?type=recreational&&price=0.0'
        })
            .then((response) => {
                // console.log(response.data.activity)
                res.status(200).json(response.data.activity)
            })
            .catch(err => {
                res.status(500).json({ message: err })
            })
    }

    static memeGacha(req, res, next) {
        const getRandomInt = (max) => {
            return Math.floor(Math.random() * max);
        }
        // console.log(getRandomInt(3))
        const nilai = getRandomInt(101)
        // res.status(200).json(nilai)
        axios({
            method: 'get',
            url: 'https://api.imgflip.com/get_memes'
        })
            .then((response) => {

                // console.log(response.data.data.memes[0])
                // console.log(nilai)
                const meme = response.data.data.memes[nilai]
                res.status(200).json(meme)
                // res.status(200).json(response.data.activity)
            })
            .catch(err => {
                res.status(500).json({ message: err })
            })
    }
    static generateMeme(req, res, next) {
        // console.log('masuk sini')
        const newMeme = {
            title: req.body.title,
            image_url: `http://apimeme.com/meme?meme=${req.body.meme.replaceAll(' ', '-')}&top=${req.body.top.replaceAll(' ', '+')}&bottom=${req.body.bottom.replaceAll(' ', '+')}`,
            UserId: req.currentUser.id,
        }
        console.log(newMeme)
        Meme.create(newMeme)
            .then((data) => {
                res.status(201).json(data)
            })
            .catch((err) => {
                if (err.message) {
                    next({
                        code: 400,
                        message: err
                    })
                } else {
                    next({
                        code: 500,
                        message: "Internal server error"
                    })
                }
            })
    }

}

module.exports = apiController