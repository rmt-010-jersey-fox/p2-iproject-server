const router = require("express").Router();
const UserRouter = require("./user");
const QuranController = require("../controllers/QuranController");
const JadwalSolatController = require("../controllers/JadwalSolatController");
const HadistController = require("../controllers/HadistController");


router.use("/", UserRouter);

// Quran
router.get("/quran", QuranController.getQuran);

// Jadwal Solat
router.get("/jadwalSolat", JadwalSolatController.getJadwalSolat);

// Hadist
router.get("/hadith", HadistController.getHadist)

module.exports = router;
