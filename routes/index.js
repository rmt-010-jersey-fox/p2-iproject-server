const router = require('express').Router()
const Controller = require('../controllers/controller')
const Authentication = require('../middlewares/auth')

router.post('/register', Controller.register)
router.post('/login', Controller.login)

router.get('/recipes', Controller.newRecipes)
router.get('/recipe/:key', Controller.recipesDetail);
router.get('/categorys/recipes', Controller.category)
router.get('/categorys/recipes/:key', Controller.recipesByCategory)
router.get('/search/', Controller.searchRecipes)

router.use(Authentication)



module.exports = router