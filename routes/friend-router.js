const friendRouter = require('express').Router();
const FriendController = require('../controllers/friend-controller')
const { authentication } = require('../middlewares/auth')

friendRouter.get('/friends', authentication, FriendController.findFriends)

friendRouter.post('/friends', authentication, FriendController.addFriend)

module.exports = friendRouter