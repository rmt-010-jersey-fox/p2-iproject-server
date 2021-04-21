const router = require('express').Router();
const studentRouter = require('./studentRoute');

router.use(studentRouter)

module.exports = router