const postRouter = require('express').Router()
const PostController = require('../controllers/post-controller')
const multer = require('multer')
const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, './uploads')
    },
    filename(req, file, cb) {
        cb(null, new Date().toISOString().split('T')[0] + " " + file.originalname)
    }
})
const upload = multer({
    storage,
})
const {
    authentication,
    postAuthorization
} = require('../middlewares/auth')

postRouter.get('/posts', authentication, PostController.getPosts)

postRouter.post('/posts', authentication, upload.single('postImage'), PostController.uploadPost)

postRouter.get('/posts/:id', authentication, postAuthorization, PostController.getPostById)

postRouter.patch('/posts/:id', authentication, postAuthorization, PostController.editCaption)

postRouter.delete('/posts/:id', authentication, postAuthorization, PostController.deletePost)

module.exports = postRouter