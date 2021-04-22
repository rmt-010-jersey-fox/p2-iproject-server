const router = require('express').Router()
const TimelineCtr = require('../../controllers/TimelineController')
const FavoriteCtr = require('../../controllers/FavoriteController')
const  Authentication = require('../../middlewares/authentication')
const {AuthorizationTimeline, AuthorizationFavorite} = require('../../middlewares/authorization')
const NyTimesCtr = require('../../controllers/NyTimesController')

router.get('/timeline', TimelineCtr.getStatus)

router.use(Authentication)
router.get('/nytimes', NyTimesCtr.rssFeeds)
router.post('/timeline', TimelineCtr.postStatus)
router.put('/timeline/:id',AuthorizationTimeline, TimelineCtr.putStatus)
router.patch('/timeline/:id', AuthorizationTimeline, TimelineCtr.patchLike)
router.delete('/timeline/:id',AuthorizationTimeline, TimelineCtr.deleteStatus)

router.get('/favorites', FavoriteCtr.getFavorite)
router.post('/favorites/:TimelineId', FavoriteCtr.postFavorite)
router.delete('/favorites/:id',AuthorizationFavorite, FavoriteCtr.deleteFavorite)


module.exports = router