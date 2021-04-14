const Router = require('express').Router();
const UserController = require('../controllers/userController');
const TripController = require('../controllers/tripController');
const authenticate = require('../middlewares/authenticate');

Router.post('/register', UserController.register)
Router.post('/login', UserController.login)

Router.use(authenticate)

Router.get('/trips', TripController.showTrips)
Router.post('trips', TripController.create)
Router.post('/trips/:id/todos', TripController.createTodo)
Router.get('/hotels', TripController.showHotels)
Router.get('flights', TripController.showFlights)
Router.get('places', TripController.showPlaces)

module.exports = Router