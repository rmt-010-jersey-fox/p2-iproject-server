const router = require('express').Router();
const authentication = require('../middlewares/authentication')
const CustomerController = require('../controllers/customerController')
const CarController = require('../controllers/carController')
const RentalController = require('../controllers/rentalControllers')

router.post('/register', CustomerController.register);
router.post('/login', CustomerController.login);

router.use(authentication)

router.get('/cars', CarController.getCars)

router.get('/rentals', RentalController.getRentals)



module.exports = router;