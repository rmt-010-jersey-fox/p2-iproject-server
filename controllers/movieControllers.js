const { User } = require('../models')
let axios = require('axios')



class MovieController {
    static showAll(req, res) {
        let movies = []
        axios({
            method: 'GET',
            url: 'https://api.themoviedb.org/3/movie/popular',
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OGJkNzM2ZGQzODJiN2I5Njg4YTFkNmVhYmEyYjdjYyIsInN1YiI6IjYwNjc3YWJhMGQyZjUzMDA2ZTA2NTdiYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xROjvugUQL2A8z-U97j-teMVXEpIdOtm8GPYHMUhiZw'
            }
        })
        .then((response) => {
            response.data.results.forEach(el => {
                movies.push({
                    id: el.id,
                    poster_path: el.poster_path,
                    title: el.title,
                    overview: el.overview,
                    popularity: el.popularity,
                    vote_average: el.vote_average,
                    release_date: el.release_date
                })
            })
            return axios({
                method: 'GET',
                url: 'https://api.themoviedb.org/3/movie/top_rated',
                headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OGJkNzM2ZGQzODJiN2I5Njg4YTFkNmVhYmEyYjdjYyIsInN1YiI6IjYwNjc3YWJhMGQyZjUzMDA2ZTA2NTdiYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xROjvugUQL2A8z-U97j-teMVXEpIdOtm8GPYHMUhiZw'
                }
            })
        })
        .then((response) => {
            response.data.results.forEach(el => {
                movies.push({
                    id: el.id,
                    poster_path: el.poster_path,
                    title: el.title,
                    overview: el.overview,
                    popularity: el.popularity,
                    vote_average: el.vote_average,
                    release_date: el.release_date
                })
            })
            return axios({
                method: 'GET',
                url: 'https://api.themoviedb.org/3/movie/upcoming',
                headers: {
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OGJkNzM2ZGQzODJiN2I5Njg4YTFkNmVhYmEyYjdjYyIsInN1YiI6IjYwNjc3YWJhMGQyZjUzMDA2ZTA2NTdiYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xROjvugUQL2A8z-U97j-teMVXEpIdOtm8GPYHMUhiZw'
                }
            })
        })
        .then((response) => {
            response.data.results.forEach(el => {
                movies.push({
                    id: el.id,
                    poster_path: el.poster_path,
                    title: el.title,
                    overview: el.overview,
                    popularity: el.popularity,
                    vote_average: el.vote_average,
                    release_date: el.release_date
                })
            })
            res.status(200).json(movies)
        })
        .catch((err) => {
            res.status(500).json({message: err.message})
        })
    }
    static detailMovies(req, res) {
        let id = +req.params.id
            axios({
            method: 'GET',
            url: `https://api.themoviedb.org/3/movie/${id}`,
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OGJkNzM2ZGQzODJiN2I5Njg4YTFkNmVhYmEyYjdjYyIsInN1YiI6IjYwNjc3YWJhMGQyZjUzMDA2ZTA2NTdiYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xROjvugUQL2A8z-U97j-teMVXEpIdOtm8GPYHMUhiZw'
            }
        })
        .then((response) => {
            let { id, title, overview, poster_path, popularity, vote_average, release_date } = response.data
            let newData = [{
                id, title, overview, poster_path, popularity, vote_average, release_date
            }]
            res.status(200).json(newData)
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
            // console.log(response.data.genres);
            let result = []
            let temp = response.data.genres
            temp.forEach(el => {
                result.push({
                    id: el.id,
                    name: el.name
                })
            })
            // console.log(result[1].name);
            res.status(200).json(result)
        })
        .catch((err) => {
            res.status(500).json(err.message)
        })
    }
}

module.exports = MovieController