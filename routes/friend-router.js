const friendRouter = require('express').Router();
const FriendController = require('../controllers/friend-controller')
const { authentication, friendAuthorization } = require('../middlewares/auth')

friendRouter.get('/friends', authentication, FriendController.findFriends)

friendRouter.post('/friends', authentication, FriendController.addFriend)

friendRouter.delete('/friends/:id', authentication, friendAuthorization, FriendController.deleteFriend)

module.exports = friendRouter