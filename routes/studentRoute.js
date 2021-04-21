const router = require('express').Router();
const studentController = require('../controllers/studentController');
const authenticate = require('../middlewares/authentication')

router.use(authenticate)

router.get('/buddy', studentController.getBuddy)
router.get('/materials', studentController.getMaterials)
router.get('/buddy-materials', studentController.getBuddyMaterials)
router.get('/materials/:id', studentController.getBuddyMaterialsById)

router.post('/booking', studentController.booking)
router.get('/schedule', studentController.schedule)



module.exports = router