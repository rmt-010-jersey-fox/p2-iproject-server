const express = require("express")
const router = express.Router()
const IndexController = require("../controllers/index-controller")
const decks = require("./decks-route")
const cards = require("./cards-route")

router.post("/login", IndexController.login)
router.post("/glogin", IndexController.glogin)
router.post("/register", IndexController.register)
router.get("/user", IndexController.userProfile)

router.use("/decks", decks)
router.use("/cards", cards)

module.exports = router