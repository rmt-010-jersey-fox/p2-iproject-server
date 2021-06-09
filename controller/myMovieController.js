const { MyMovie } = require('../models');

class Controller {
    // ADD MY MOVIES
    static addMovie(req, res) {
        let myNewMovie = {
            title: req.body.title,
            poster_path: req.body.poster_path,
            userId: req.isLoggedIn.id
        }
        MyMovie.findOne({
            where: { title: myNewMovie.title }
        })
            .then(movie => {
                if (movie) {
                    res.status(400).json({ message: 'already added' })
                } else {
                    return MyMovie.create(myNewMovie)
                }
            })
            .then(myMovie => {
                res.status(201).json(myMovie)
            })
            .catch(err => {
                res.status(400).json({ message: 'fail add to my movies' })
            })
    }
    // SHOW MY MOVIES
    static showMyMovie(req, res) {
        MyMovie.findAll({
            where: { userId: req.isLoggedIn.id }
        })
            .then(myMovies => {
                res.status(200).json(myMovies)
            })
            .catch(err => {
                res.status(400).json({ message: 'fail get my movies' })
            })
    }
    // DELETE MY MOVIES
    static deleteMyMovie(req, res) {
        MyMovie.destroy({
            where: { id: req.params.id }
        })
            .then(() => {
                res.status(200).json({ message: 'success delete' })
            })
            .catch(err => {
                res.status(400).json({ message: 'fail delete' })
            })
    }
}

module.exports = Controller