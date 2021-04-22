const {Favorite, Timeline} = require('../models/index')

class FavoriteController { 
    static async postFavorite (req, res, next) {
        let TimelineId = req.params.TimelineId
        console.log(TimelineId, '<<< timelineId');
        const {id} = req.loggedInUser
        try {
            const favorite = await Favorite.create({
                UserId: id,
                TimelineId: TimelineId
            })
            console.log(favorite);
            res.status(201).json({
                "id": favorite.id,
                "TimelineId": favorite.TimelineId,
                "userId": favorite.userId
            })
        }
        catch(err) {
            res.status(500).json(err)
        }
    }
    static async getFavorite (req, res, next) {
        const {id} = req.loggedInUser
        console.log(id, '<< id');
        try {
            const favorite = await Favorite.findAll({
                where: {
                    UserId: id
                },
                include: {
                    model: Timeline
                },
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                }
            })
            res.status(200).json(favorite)
        }
        catch(err) {
            res.status(500).json(err)
        }
    }
    static async deleteFavorite (req, res, next) {
        const {id} = req.params
        console.log(id);
        try {
            const favorite = await Favorite.destroy({
                where: {
                    id: id
                }
            })
            res.status(200).json({msg: 'Successfully delete favorite Post'})
        }
        catch(err) {
            res.status(500).json(err)
        }
    }
}

module.exports = FavoriteController