const axios = require('axios')

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

}

module.exports = apiController