const router = require("express").Router();
const UserRouter = require("./user");
const QuranController = require("../controllers/QuranController");
const JadwalSolatController = require("../controllers/JadwalSolatController");
const HadistController = require("../controllers/HadistController");
const QuranFavController = require("../controllers/QuranFavController");
const { Authentication, Authorization } = require("../middlewares/auth")


router.use("/", UserRouter);

// Quran
router.get("/quran", QuranController.allSurah);
router.get("/surah", QuranController.getQuranbyAyat);

// Jadwal Solat
router.get("/jadwalSolat", JadwalSolatController.getJadwalSolat);
// Hadist
router.get("/hadist", HadistController.getHadist)

router.use(Authentication)
// Fav Quran
router.get('/favorites/:SurahId', QuranFavController.getFavQuran)
router.post('/favorites/:SurahId', QuranFavController.postFavQuran)
router.delete('/favorites/:id', Authorization, QuranFavController.deleteFavQuran)


module.exports = router;
