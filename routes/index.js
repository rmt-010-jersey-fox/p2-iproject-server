const router = require('express').Router()

const userController = require('../controllers/userController')
const memeController = require('../controllers/memeController')
const apiController = require('../controllers/apiController')
const {authenticate} = require('../middlewares/auth')
// const {multerUploads, dataUri} = require('../middlewares/multer')
// const {cloudinaryConfig, uploader } = require('../config/cloudinaryConfig')

const cloudinary = require('cloudinary')

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  })

// const fs = require('fs')
// const DatauriParser = require('datauri/parser');
// const parser = new DatauriParser();
 
// const Datauri = require('datauri')
// const path = require('path')

router.get('/', (req, res) => {
  res.send('Hello, Welcome')
})

router.post('/upload', (req, res) => {
  // console.log('req.body :', req.body);
  // cloudinary.v2.uploader.upload(file, options, callback);
  // const buffer = fs.readFileSync(temp);
  // parser.format('.png', temp)
  // console.log('req.file : ', req.file.buffer)
  // const temp = req.file.buffer
  // const text = temp.join('')
  // console.log(text)
  // const dUri = new Datauri()
  // const dataUri = req => dUri.format(path.extname(req.file.originalname).toString(), req.file.buffer)
  // console.log(temp)
  //  console.log(dataUri)
  // console.log(req.body)
  // console.log('req.file : ', req.file)
  // console.log('req.file : ', req.file.buffer)

  // const data = {
  //   image: req.body.image,
  // }

  // const data = {
  //   image: req.image,
  // }
  console.log(req)
  // cloudinary.uploader.upload(data.image)
  // .then((result) => {
  //   response.status(200).send({
  //     message: "success",
  //     result,
  //   });
  // }).catch((error) => {
  //   console.log('masuk sini')
  //   response.status(500).send({
  //     message: "failure",
  //     error,
  //   });
  // });

})
router.post('/register', userController.register)
router.post('/login', userController.login)
router.post('/loginGoogle', userController.google)

router.get('/jokes', apiController.jokeApi)
router.get('/quote', apiController.apiQuotable)
router.get('/bored', apiController.boredApi)
router.get('/meme', apiController.memeGenerator)
router.get('/memegenerate', apiController.generateMeme)

router.use(authenticate)

router.get('/memes', memeController.showAll)
router.get('/memes/reported', memeController.showAllReported)
router.get('/memes/hot', memeController.showAllHot)

router.post('/memes', memeController.add)

router.get('/memes/:id', memeController.findById)
router.put('/memes/:id', memeController.updateAll)
router.delete('/memes/:id', memeController.delete)

module.exports = router