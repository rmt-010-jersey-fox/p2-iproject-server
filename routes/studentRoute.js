const router = require('express').Router();
const studentController = require('../controllers/studentController');
const authenticate = require('../middlewares/authentication')
const authorization = require('../middlewares/auth-student')

router.use(authenticate)

router.get('/buddy', studentController.getBuddy)
router.get('/buddy/:id', studentController.getBuddyById)
router.get('/materials', studentController.getMaterials)
router.get('/buddy-materials', studentController.getBuddyMaterials)
router.get('/materials/:id', studentController.getBuddyMaterialsById)

router.post('/booking', studentController.booking)
router.get('/schedule', studentController.schedule)

router.use('/booking/:id', authorization)
router.put('/booking/:id', studentController.cancelBooking)
router.delete('/booking/:id', studentController.deleteHistory)

module.exports = router