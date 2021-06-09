const authentication = require('../midleware/authentication');
const myMovieRouter = require('./myMovieRouter');
const router = require('express').Router();
const userRouter = require('./userRouter');

router.use('/', userRouter);
router.use(authentication);
router.use('/my-movies', myMovieRouter);

module.exports = router