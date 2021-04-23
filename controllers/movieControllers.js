let axios = require('axios')
let API_KEY = process.env.API_KEY

class MovieController {
    static moviePopular(req, res) {
        let page = +req.body.page || 1
        axios({
            method: 'GET',
            url: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`
        })
        .then((response) => {
            res.status(200).json(response.data.results)
        })
        .catch((err) => {
            res.status(500).json({message: err.message})
        })
    }
    static movieTopRate(req, res) {
        let page = +req.body.page || 1
        axios({
            method: 'GET',
            url: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`,
        })
        .then((response) => {
            res.status(200).json(response.data.results)
        })
        .catch((err) => {
            res.status(500).json(err.message)
        })
    }
    static moviesUpcoming(req, res) {
        let page = +req.body.page || 1
        axios({
            method: 'GET',
            url: `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${page}`,
        })
        .then((response) => {
            res.status(200).json(response.data.results)
        })
        .catch((err) => {
            res.status(500).json(err.message)
        })
    }
    static detailMovies(req, res) {
        let movieId = +req.params.id
        let dataVideo
        let result
            axios({
            method: 'GET',
            url: `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`,
        })
        .then((response) => {
            result = response.data
            return axios({
                method: 'GET',
                url: `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`,
            })
            .then((response) => {
                dataVideo = response.data.results
                res.status(200).json({result, dataVideo})
            })
        })
        .catch((err) => {
            res.status(500).json(err.message)
        })
    }
    
}

module.exports = MovieController