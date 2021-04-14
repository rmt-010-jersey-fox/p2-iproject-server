const {Trip, Todo} = require('../models');
const axios = require('axios');

class TripController {
    static showTrips(req, res, next) {
        Trip.findAll({
            where: {
                userId: req.loggedUser.id
            }
        })
        .then(allTrips => {
            res.status(200).json(allTrips)
        })
        .catch(err => {
            next({name: 'internal server error', message: err.message})
        })
    }

    static create(req, res, next) {
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
            res.status(201).json(createdTrip)
        })
        .catch(err => {
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

    static showHotels(req, res, next) {
        //waiting approval request get API access
    }

    static showFlights(req, res, next) {
        //waiting approval request get API access
    }

    static showPlaces(req, res, next) {
        //waiting approval request get API access
    }
}

module.exports = TripController