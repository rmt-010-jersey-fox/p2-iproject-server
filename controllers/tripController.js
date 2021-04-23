const {Trip, Todo} = require('../models');
const axios = require('axios');

class TripController {
    static showTrips(req, res, next) {
        Trip.findAll({
            where: {
                userId: req.loggedUser.id
<<<<<<< HEAD
            },
            include: Todo
=======
            }
>>>>>>> 2b9cb839b6ed40ad1a19e7fd55f358d3d8f5e3cd
        })
        .then(allTrips => {
            res.status(200).json(allTrips)
        })
        .catch(err => {
            next({name: 'internal server error', message: err.message})
        })
    }

<<<<<<< HEAD
    static createTrips(req, res, next) {
        console.log(req.body)
=======
    static create(req, res, next) {
>>>>>>> 2b9cb839b6ed40ad1a19e7fd55f358d3d8f5e3cd
        const {title, origin, destination, depatureDate, hotels} = req.body
        Trip.create({
            title,
            origin,
            destination,
            depatureDate,
            hotels,
            userId: req.loggedUser.id
        })
        .then(createdTrip => {
<<<<<<< HEAD
            console.log(createdTrip)
            res.status(201).json(createdTrip)
        })
        .catch(err => {
            console.log(err)
=======
            res.status(201).json(createdTrip)
        })
        .catch(err => {
>>>>>>> 2b9cb839b6ed40ad1a19e7fd55f358d3d8f5e3cd
            next({name: 'internal server error', message: err.message})
        })
    }

    static createTodo(req, res, next) {
        
        Trip.findByPk(+req.params.id)
        .then(foundTrip => {
            if(foundTrip) {
                const tripId = foundTrip.id
                const {title, description, status, duedate} = req.body
                return Todo.create({
                    title,
                    description,
                    status,
                    duedate,
                    tripId
                })
            }
        })
        .then(createdTodo => {
            res.status(201).json(createdTodo)
        })
        .catch(err => {
            next({name: 'internal server error', message: err.message})
        })
    }

    static showWeather(req, res, next) {

        axios({
            method: 'GET',
            url: `http://api.openweathermap.org/data/2.5/weather?q=${req.params.city}&appid=688c326da0a9f61cf43fff4b42c4eccd`
            // url: 'http://api.openweathermap.org/data/2.5/forecast/daily?q=London&mode=xml&units=metric&cnt=7&appid=688c326da0a9f61cf43fff4b42c4eccd'
            // url: 'http://api.openweathermap.org/data/2.5/weather?q=London&appid=688c326da0a9f61cf43fff4b42c4eccd'
            // url: 'http://api.openweathermap.org/data/2.5/forecast?q=jakarta&appid=688c326da0a9f61cf43fff4b42c4eccd'
        })
        .then((response) => {
            console.log(response.data)
            res.status(200).json(response.data)
        })
        .catch((err) => {
            res.status(500).json({message: err.message})
            console.log(err)
        })        

    }

    static deleteTrip (req, res, next) {
        Trip.destroy({
            where: {
                id: req.params.id
            }
        })
        .then((resp) => {
            res.status(200).json({message: 'deleted'})
        })
        .catch(err => {
            next({name: err.name, message: err.message})
        })
    }

    static showFlights(req, res, next) {
        //waiting approval request get API access
    }

    static showPlaces(req, res, next) {
        //waiting approval request get API access
    }

    static showHotels (req, res, next) {
        
    }

    static deleteTodo (req, res, next) {

        Todo.destroy({
            where: {
                id: +req.params.id
            }
        })
        .then((resp) => {
            console.log(resp)
        })
        .catch(err => {
            console.log(err)
            next({name: err.name, message: err.message})
        })
    }
}

module.exports = TripController