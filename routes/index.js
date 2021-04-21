const router = require('express').Router();
const authentication = require('../middlewares/authentication')
const CustomerController = require('../controllers/customerController')
const CarController = require('../controllers/carController')
const RentalController = require('../controllers/rentalControllers')
const TransactionController = require('../controllers/transactionController')
router.post('/register', CustomerController.register);
router.post('/login', CustomerController.login);
router.get('/cars', CarController.getCars)
router.post('/rentals', RentalController.getRentals)

router.use(authentication)

router.get('/cars/:id', CarController.getCarById);
router.post('/transaction', TransactionController.create);




module.exports = router;