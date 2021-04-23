const express = require("express")
const router = express.Router()
const DeckController = require("../controllers/deck-controller")
const authorization = require("../middlewares/authorization")

router.get("/", DeckController.showAll)
router.post("/", DeckController.create)
router.post("/import", DeckController.importFromPastebin)

router.use("/:id", authorization)

router.get("/:id", DeckController.showOne)
router.post("/:id", DeckController.exportToPastebin)
router.patch("/:id", DeckController.editName)
router.delete("/:id", DeckController.delete)

module.exports = router