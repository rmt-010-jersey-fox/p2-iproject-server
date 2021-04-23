const router = require("express").Router();
const AnimeController = require("../controllers/animeController.js")
const {authentication, authorization} = require("../middlewares/auth.js");


router.post('/', AnimeController.postAnimes)

router.get('/', AnimeController.getAnimes)

router.get('/:id', authorization, AnimeController.getAnimesId)

router.put('/:id', authorization, AnimeController.putAnimesId)

router.delete('/:id', authorization, AnimeController.deleteAnimesId)

module.exports = router