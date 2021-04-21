const router = require("express").Router()
const UserControllers = require("../controllers/user.js")
//const NewsController = require("../controllers/news.js")

//login register
router.post('/login', UserControllers.login);
router.post('/register',UserControllers.register);
router.post('/googleLogin',UserControllers.googleLogin);

module.exports = router;
