const router = require('express').Router();
const studentController = require('../controllers/studentController');

router.get('/buddy', (req, res) => {
    res.send('Hello World!')
})

module.exports = router