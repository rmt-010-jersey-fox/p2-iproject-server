const Controller = require('../controller/myMovieController');
const myMovieRouter = require('express').Router();

myMovieRouter.post('/', Controller.addMovie);
myMovieRouter.get('/', Controller.showMyMovie);
myMovieRouter.delete('/:id', Controller.deleteMyMovie);

module.exports = myMovieRouter