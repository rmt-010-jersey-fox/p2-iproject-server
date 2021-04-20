const express = require('express')
const { MySquadController } = require('../controllers/mySquadController')
const { authentication } = require('../middlewares/authenticate')
const { authorization } = require('../middlewares/authorization')
const router = express.Router()

router.use(authentication)
router.get('/', MySquadController.findAll)
router.post('/:playerid', MySquadController.addSquad)
router.delete('/:id', authorization, MySquadController.deleteSquad)

module.exports = router