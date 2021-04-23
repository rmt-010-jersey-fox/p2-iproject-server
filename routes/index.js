const router = require('express').Router()
const UserController = require('../controllers/userController')
const {authentication, authorization} = require('../middlewares/auth')
const ArticleController = require('../controllers/articleController')
const ActionController = require('../controllers/actionController')
const CommentController = require('../controllers/commentController')

router.post('/login', UserController.login)
router.post('/register', UserController.register)
router.get('/', ArticleController.showArticle)
router.get('/action', ActionController.showAll)

router.use(authentication)

router.get('/comments', authorization, CommentController.showComment)
router.post('/comments', authorization, CommentController.addComment)
router.delete('/comments/:id', authorization, CommentController.deleteComment)
router.get('/comments/:id', authorization, CommentController.showSpecificId)
router.put('/comments/:id', authorization, CommentController.updateComment)

module.exports = router
