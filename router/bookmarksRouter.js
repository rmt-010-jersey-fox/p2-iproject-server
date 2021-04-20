const express = require ('express')
const bookmarksRouter = express.Router()
const bookmarksController = require ('../controller/bookmarksController')
const authentication = require('../middlewares/authentication')

bookmarksRouter.use(authentication)
bookmarksRouter.get('/', bookmarksController.getBookmarks)
bookmarksRouter.post('/', bookmarksController.postBookmarks)
bookmarksRouter.delete('/:id', bookmarksController.deleteBookmarks)


module.exports = bookmarksRouter