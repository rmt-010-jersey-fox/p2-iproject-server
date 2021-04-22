const axios = require('axios')
const { response } = require('express')

class apiController {
    static jokeApi(req,res,next) {
        axios({
            method: 'get',
            url: `https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,explicit&format=txt`
        })
        .then( response => {
            res.status(200).json(response.data)
        })
        .catch( err => {
            res.status(500).json({ message: err})
        })
    }

    static apiQuotable(req,res,next) {
        axios({
            method: 'get',
            url: 'https://api.quotable.io/random'
        })
        .then((response) => {
            res.status(200).json(response.data)
        })
        .catch( err => {
            res.status(500).json({ message: err})
        })
    }

    static boredApi(req,res,next) {
        axios({
            method: 'get',
            url: 'https://www.boredapi.com/api/activity?type=recreational&&price=0.0'
        })
        .then((response) => {
            // console.log(response.data.activity)
            res.status(200).json(response.data.activity)
        })
        .catch( err => {
            res.status(500).json({ message: err})
        })
    }

    static memeGenerator(req,res,next) {
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
        .catch( err => {
            res.status(500).json({ message: err})
        })
    }
    static generateMeme(req,res,next) {
        const meme = req.body.meme
        const topText =  req.body.top
        const bottomText =  req.body.bottom
        res.status(200).json(`http://apimeme.com/meme?meme=${meme}&top=${topText}&bottom=${bottomText}`)

    }

}

module.exports = apiController