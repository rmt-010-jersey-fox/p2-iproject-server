const express = require('express')
const { MySquadController } = require('../controllers/mySquadController')
const { authentication } = require('../middlewares/authenticate')
const { authorization } = require('../middlewares/authorization')
const router = express.Router()

router.use(authentication)
router.get('/', MySquadController.findAll)
router.post('/:playerid', MySquadController.addSquad)
router.put('/:playerid', authorization, MySquadController.changePlayer)
router.delete('/:playerid', authorization, MySquadController.deleteSquad)

module.exports = router