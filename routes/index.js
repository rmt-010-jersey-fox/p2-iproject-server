const router = require("express").Router();
const UserRouter = require("./user");
const QuranController = require("../controllers/QuranController");

router.use("/", UserRouter);
router.get("/quran", QuranController.getQuran);

module.exports = router;
