const express = require("express")
const router = express.Router()
const DeckController = require("../controllers/deck-controller")

router.get("/", DeckController.showAll)
router.get("/:id", DeckController.showOne)
router.post("/:id", DeckController.create)
router.patch("/:id", DeckController.editName)
router.delete("/:id", DeckController.delete)

module.exports = router