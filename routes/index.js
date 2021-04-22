const Router = require('express').Router();
const UserController = require('../controllers/userController');
const TripController = require('../controllers/tripController');
const authenticate = require('../middlewares/authenticate');

Router.post('/register', UserController.register)
Router.post('/login', UserController.login)

Router.use(authenticate)

Router.get('/weathers/:city', TripController.showWeather)
Router.get('/trips', TripController.showTrips)
Router.post('/trips', TripController.createTrips)
Router.post('/trips/:id/todos', TripController.createTodo)
Router.get('flights', TripController.showFlights)
Router.get('places', TripController.showPlaces)
Router.delete('/trips/:id', TripController.deleteTrip)

module.exports = Router