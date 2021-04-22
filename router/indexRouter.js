const express = require ('express')
const router = express.Router()
const userRouter = require ('./userRouter')
const bookmarksRouter = require ('./bookmarksRouter')

router.use('/', userRouter)
router.use('/bookmarks', bookmarksRouter)

module.exports = router