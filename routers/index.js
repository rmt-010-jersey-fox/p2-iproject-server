const router = require("express").Router();
const UserControllers = require("../controllers/user.js");
const CurrentsAPIControllers = require("../controllers/currentsapi.js");
const ReadlistControllers = require("../controllers/readlists.js");
const { authentication, authorization } = require("../middlewares/auth");
//login register
router.post("/login", UserControllers.login);
router.post("/register", UserControllers.register);
router.post("/googleLogin", UserControllers.googleLogin);

router.post("/search", CurrentsAPIControllers.search);

router.use(authentication);

router.use("/readlists", authorization);
router.post("/readlists", ReadlistControllers.create);
router.get("/readlists", ReadlistControllers.read);
router.get("/readlists/:id", ReadlistControllers.readOne);
router.put("/readlists/:id", ReadlistControllers.update);
router.delete("/readlists/:id", ReadlistControllers.delete);

module.exports = router;
