const express = require("express")
const router = express.Router()
const CardController = require("../controllers/card-controller")
const authorization = require("../middlewares/authorization")

router.post("/", CardController.create)

router.use("/:id", authorization)

router.get("/:id", CardController.showOne)
router.put("/:id", CardController.edit) //edit front atau back (diinput user)
router.delete("/:id", CardController.delete)
router.put("/:id/mastery", CardController.masteryUpdate) //update mastery dan due (berdasarkan jawaban user saat quiz)


module.exports = router