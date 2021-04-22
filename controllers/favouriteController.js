const {Favourite, Image, User} = require("../models");

class FavouriteController {

    static addFavourite(req, res, next) {
        const imageId = req.params.imageId;

        Favourite.findOne({
            where: {
                imageId,
                userId: req.loggedUser.id
            }
        })
        .then(favourite => {
            if(favourite) {
                res.status(200).json({
                    msg: "Already Exist"
                })
            } else {
                return Favourite.create({
                    userId: req.loggedUser.id,
                    imageId
                })
            }
        })
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            next(err);
        })
    }

    static deleteFavourite(req, res, next) {
        let id = req.params.id;

        Favourite.destroy({
            where: {
                id
            }
        })
        .then(data => {
            res.status(200).json({
                msg: "Favourite deleted"
            });
        })
        .catch(err => {
            next(err);
        })
    }

    static showFavourites(req, res, next) {
        Favourite.findAll({
            where: {
                userId: req.loggedUser.id
            },
            include: {
                model: Image
            }
        })
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            next(err);
        })
    }
}

module.exports = FavouriteController