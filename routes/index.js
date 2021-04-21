const router = require("express").Router();
const UserRouter = require("./user");
const QuranController = require("../controllers/QuranController");
const JadwalSolatController = require("../controllers/JadwalSolatController");
const HadistController = require("../controllers/HadistController");


router.use("/", UserRouter);

// Quran
router.get("/quran", QuranController.allSurah);
router.get("/surah", QuranController.getQuranbyAyat);

// Jadwal Solat
router.get("/jadwalSolat", JadwalSolatController.getJadwalSolat);
// Hadist
router.get("/hadist", HadistController.getHadist)


// Fav Quran
router.get('/Quranfavorites/:SurahId', QuranFavController.getFavQuran)
router.post('/Quranfavorites/:SurahId', QuranFavController.postFavQuran)


module.exports = router;
