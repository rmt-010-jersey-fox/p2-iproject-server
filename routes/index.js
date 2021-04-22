const router = require("express").Router();

const Controller = require("../controllers/control");
const autentikasi = require("../middlewares/autentik");
const autorize = require("../middlewares/autorize");

router.post("/register", Controller.register);
router.post("/login", Controller.login);

router.get("/comments/:imdbID", Controller.findAll);
router.get("/latest", Controller.latest);
router.post("/searchMovie", Controller.findMovie);
router.post("/details/:imdbID", Controller.details);

router.use(autentikasi);
router.post("/watchlists/:imdbID", Controller.postWatch);
router.get("/watchlists/", Controller.getWatch);
router.delete("/watchlists/:id", Controller.removeWatchlist);

router.post("/comments/:imdbID", Controller.postComment);

router.use("/comments/:commentId", autorize); // autorization

// router.get("/comments/:commentId", Controller.findOne);
router.delete("/comments/:commentId", Controller.remove);
// router.put("/comments/:commentId", Controller.replace);

module.exports = router;
