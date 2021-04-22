const {Favorite, Timeline, User} = require('../models/index')

async function AuthorizationFavorite(req, res, next) {
    const id = +req.params.id
    Favorite.findByPk(id)
    .then(favorite => {
        console.log(favorite, '<< ');
        if(favorite) {
            if(favorite.UserId === req.loggedInUser.id) {
                next()
            } else if (favorite.UserId !== req.loggedInUser.id) {
                res.status(401).json({
                    msg: 'Unauthorize'
                })
            }
        } else {
            res.status(404).json({
                msg: 'Data not found'
            })
        }
    })
    .catch(err => {
        res.status(500).json(err)
    }) 
}


async function AuthorizationTimeline(req, res, next) {
    const { id } = req.params
    console.log(req.loggedInUser.id);
    try {
        const timeline = await Timeline.findByPk(id)
        console.log(timeline, '<< timeline');

        if (!timeline) {
            console.log('masuk kondisi 1');
            throw { msg: "timeline is not found", status: 404 }
        } else if (timeline.UserId === req.loggedInUser.id) {
            console.log('sini');
            next()
        } else {
            console.log('masuk kondisi 3');
            throw { msg: "Not Authorized", status: 401 }
        }
    }
    catch (err) {
        console.log('masuk kondisi 4');
        next(err)
    }
}
module.exports = {
    AuthorizationFavorite,
    AuthorizationTimeline
}