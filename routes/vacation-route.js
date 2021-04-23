const router = require('express').Router()
const VacationController = require('../controllers/VacationController')
const { authentication } = require('../middlewares/auth')
const { vacAuthorization } = require('../middlewares/auth')

router.use(authentication)
router.get('/vacations', VacationController.getVacation)
router.post('/vacations', VacationController.postVacation)
router.put('/vacations/:id', vacAuthorization, VacationController.editVacation)
router.delete('/vacations/:id', vacAuthorization, VacationController.destroyVacation)
router.get('/vacations/:id', vacAuthorization, VacationController.getVacById)

module.exports = router