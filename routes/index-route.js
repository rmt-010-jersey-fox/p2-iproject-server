const express = require("express")
const router = express.Router()
const IndexController = require("../controllers/index-controller")
const decks = require("./decks-route")
const cards = require("./cards-route")
const authentication = require("../middlewares/authentication")

router.post("/login", IndexController.login)
router.post("/register", IndexController.register)
router.get("/profile/:id", IndexController.userProfile)

router.use(authentication)

router.patch("/profile", IndexController.changeDesc)
router.patch("/profile/avatar", IndexController.changeAvatar)
router.use("/decks", decks)
router.use("/cards", cards)

module.exports = router