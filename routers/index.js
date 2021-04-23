const router = require("express").Router()
const UserController = require("../controllers/userController")
const PetController = require("../controllers/petController")
const autenticate = require("../middleware/autenrticate")
const authorization = require("../middleware/authoirization")
const adminAutenticate = require("../middleware/adminAutenrticate")

router.get("/", (req, res) => {
    res.send("Haloo kak Arnold")
})

router.post("/register", UserController.register)
router.post("/login", UserController.login)


router.get("/pet", autenticate, PetController.getPet)
router.post("/pet", adminAutenticate, PetController.addPet)
router.put("/pet/:id", adminAutenticate, PetController.editPet)
router.delete("/pet/:id", adminAutenticate, PetController.deletePet)

router.use(authorization)
router.get("/pet/adopt", autenticate, authorization, PetController.myPet)
router.put("/pet/adopt/:id", autenticate, authorization, PetController.adoptPet)



module.exports = router