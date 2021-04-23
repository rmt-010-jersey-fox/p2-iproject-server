let axios = require('axios')
let API_KEY = process.env.API_KEY

class MovieController {
    static moviePopular(req, res, next) {
        let page = +req.body.page || 1
        axios({
            method: 'GET',
            url: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`
        })
        .then((response) => {
            res.status(200).json(response.data.results)
        })
        .catch((err) => {
            next(err)
        })
    }
    static movieTopRate(req, res, next) {
        let page = +req.body.page || 1
        axios({
            method: 'GET',
            url: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`,
        })
        .then((response) => {
            res.status(200).json(response.data.results)
        })
        .catch((err) => {
            next(err)
        })
    }
    static moviesUpcoming(req, res, next) {
        let page = +req.body.page || 1
        axios({
            method: 'GET',
            url: `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${page}`,
        })
        .then((response) => {
            res.status(200).json(response.data.results)
        })
        .catch((err) => {
            next(err)
        })
    }
    static detailMovies(req, res, next) {
        let id = +req.params.id
        let dataVideo
        let result
            axios({
            method: 'GET',
            url: `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`,
        })
        .then((response) => {
            result = response.data
            return axios({
                method: 'GET',
                url: `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`,
            })
            .then((response) => {
                console.log(response.data.results);
                res.status(200).json({result, dataVideo})
            })
        })
        .catch((err) => {
            next(err)
        })
    }
    
}

module.exports = MovieController