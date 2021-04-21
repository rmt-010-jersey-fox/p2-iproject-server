const router = require("express").Router();
const UserControllers = require("../controllers/user.js");
const CurrentsAPIControllers = require("../controllers/currentsapi.js");
const NewsControllers = require("../controllers/news.js");
const { authentication, authorization } = require("../middlewares/auth");
//login register
router.post("/login", UserControllers.login);
router.post("/register", UserControllers.register);
router.post("/googleLogin", UserControllers.googleLogin);

router.post("/search", CurrentsAPIControllers.search);

router.use(authentication);

router.post("/news", NewsControllers.create);
router.get("/news", NewsControllers.read);
router.get("/news/;id", NewsControllers.readOne);
router.put("/news/:id", NewsControllers.update);
router.delete("/news/:id", NewsControllers.delete);

router.use("/readlists", authorization);
router.post("/readlists", NewsControllers.create);
router.get("/readlists", NewsControllers.read);
router.get("/readlists/:id", NewsControllers.readOne);
router.put("/news/:id", NewsControllers.update);
router.delete("/news/:id", NewsControllers.delete);
module.exports = router;
