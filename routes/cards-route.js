const express = require("express")
const router = express.Router()
const CardController = require("../controllers/card-controller")

router.get("/", CardController.showAll)
router.get("/:id", CardController.showOne)
router.post("/:id", CardController.create)
router.put("/:id", CardController.edit)
router.patch("/:id", CardController.masteryUpdate)
router.delete("/:id", CardController.delete)

module.exports = router