const router = require('express').Router();
const userRouter = require('./user-router');
const postRouter = require('./post-router');
const friendRouter = require('./friend-router');

router.use(userRouter)
router.use(postRouter)
router.use(friendRouter)

module.exports = router