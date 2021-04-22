let axios = require('axios')

class MovieController {
    static moviePopular(req, res) {
        axios({
            method: 'GET',
            url: 'https://api.themoviedb.org/3/movie/popular',
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OGJkNzM2ZGQzODJiN2I5Njg4YTFkNmVhYmEyYjdjYyIsInN1YiI6IjYwNjc3YWJhMGQyZjUzMDA2ZTA2NTdiYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xROjvugUQL2A8z-U97j-teMVXEpIdOtm8GPYHMUhiZw'
            }
        })
        .then((response) => {
            res.status(200).json(response.data.results)
        })
        .catch((err) => {
            res.status(500).json({message: err.message})
        })
    }
    static movieTopRate(req, res) {
        axios({
            method: 'GET',
            url: 'https://api.themoviedb.org/3/movie/top_rated',
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OGJkNzM2ZGQzODJiN2I5Njg4YTFkNmVhYmEyYjdjYyIsInN1YiI6IjYwNjc3YWJhMGQyZjUzMDA2ZTA2NTdiYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xROjvugUQL2A8z-U97j-teMVXEpIdOtm8GPYHMUhiZw'
            }
        })
        .then((response) => {
            res.status(200).json(response.data.results)
        })
        .catch((err) => {
            res.status(500).json(err.message)
        })
    }
    static moviesUpcoming(req, res) {
        axios({
            method: 'GET',
            url: 'https://api.themoviedb.org/3/movie/upcoming',
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OGJkNzM2ZGQzODJiN2I5Njg4YTFkNmVhYmEyYjdjYyIsInN1YiI6IjYwNjc3YWJhMGQyZjUzMDA2ZTA2NTdiYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xROjvugUQL2A8z-U97j-teMVXEpIdOtm8GPYHMUhiZw'
            }
        })
        .then((response) => {
            res.status(200).json(response.data.results)
        })
        .catch((err) => {
            res.status(500).json(err.message)
        })
    }
    static detailMovies(req, res) {
        let id = +req.params.id
        let dataVideo
        let result
            axios({
            method: 'GET',
            url: `https://api.themoviedb.org/3/movie/${id}`,
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OGJkNzM2ZGQzODJiN2I5Njg4YTFkNmVhYmEyYjdjYyIsInN1YiI6IjYwNjc3YWJhMGQyZjUzMDA2ZTA2NTdiYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xROjvugUQL2A8z-U97j-teMVXEpIdOtm8GPYHMUhiZw'
            }
        })
        .then((response) => {
            result = response.data
            return axios({
                method: 'GET',
                url: `https://api.themoviedb.org/3/movie/${id}/videos`,
                headers: {
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OGJkNzM2ZGQzODJiN2I5Njg4YTFkNmVhYmEyYjdjYyIsInN1YiI6IjYwNjc3YWJhMGQyZjUzMDA2ZTA2NTdiYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xROjvugUQL2A8z-U97j-teMVXEpIdOtm8GPYHMUhiZw'
                }
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
    static listGenre(req, res) {
        axios({
            method: 'GET',
            url: 'https://api.themoviedb.org/3/genre/movie/list',
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OGJkNzM2ZGQzODJiN2I5Njg4YTFkNmVhYmEyYjdjYyIsInN1YiI6IjYwNjc3YWJhMGQyZjUzMDA2ZTA2NTdiYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xROjvugUQL2A8z-U97j-teMVXEpIdOtm8GPYHMUhiZw'
            }
        })
        .then((response) => {
            let result = []
            let temp = response.data.genres
            temp.forEach(el => {
                result.push({
                    id: el.id,
                    name: el.name
                })
            })
            res.status(200).json(result)
        })
        .catch((err) => {
            res.status(500).json(err.message)
        })
    }
}

module.exports = MovieController