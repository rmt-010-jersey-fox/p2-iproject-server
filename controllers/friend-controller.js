const { Friend, User} = require('../models')

class FriendController {
    static async findFriends(req, res, next) {
        try {
            const friends = await Friend.findAll({
                include: [{
                    model: User,
                    as: 'friend',
                }],
                where: {
                    UserId: req.loggedUser.id
                }
            })
            res.status(200).json({
                message: 'Read Friends Success',
                data: friends
            })
        }
        catch (err) {
            next(err)
        }
    }

    static async addFriend(req, res, next) {
        try {
            const userCheck = await User.findOne({
                where: {
                    id: req.loggedUser.id
                },
                include: [Friend]
            })
            userCheck.Friends.forEach(friend => {
                if(friend.FriendId == req.body.FriendId) {
                    throw { status: 400, message: "You've Been Added This User"}
                }
            })
            const friend = await Friend.create({
                UserId: req.loggedUser.id,
                FriendId: req.body.FriendId
            })
            res.status(201).json({
                message: 'Add Friend Success',
                data: friend
            })
        }
        catch (err) {
            next(err)
        }
    }

    static async deleteFriend(req, res, next) {
        try {
            const deleted = await Friend.destroy({
                where: {
                    FriendId: req.params.id
                }
            })
            res.status(201).json({
                message: 'Delete Friend Success',
            })
        }
        catch (err) {
            next(err)
        }
    }
}

module.exports = FriendController;