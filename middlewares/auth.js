const {verifyToken} = require("../helpers/token.js");
const { User, Image, Comment, Favourite } = require("../models");

async function authentication(req, res, next) {
    const {access_token} = req.headers;
    if(access_token) {

        try {
            let decoded = verifyToken(access_token);
            
            let user = await User.findOne({
                where: {
                    username: decoded.username,
                    email: decoded.email
                }
            })

            if(user) {
                req.loggedUser = {
                    id: user.id,
                    username: user.username,
                    email: user.email
                }

                next();
            } else {
                next({name: "Unauthenticate"});
            }

            
        } catch(err) {
            next(err);
        }
    } else {
        next({name: "Unauthenticate"});
    }
   
}

function imageAuthorization(req, res, next) {
    let imageId = +req.params.id;
    console.log(imageId);
    Image.findByPk(imageId)
    .then(image => {
        if(image) {
            if(image.userId === req.loggedUser.id) {
                
                next();
            } else {
                next({name: "Unauthorized"});
            }
        } else {
            next({name: "ImageNotFound"});
        }
    })
    .catch(err => {
        next(err);
    })
}

function commentAuthorization(req, res, next) {
    let commentId = req.params.id;
   
    Comment.findByPk(commentId)
        .then(comment => {
            if(comment) {
                
                if(comment.userId === req.loggedUser.id) {
                    next();
                } else {
                    next({name: "Unauthorized"});
                }

            } else {
                next({msg: "CommentNotFound"});
            }
        })
        .catch(err => {
            
            next(err);
        })
}

function favouriteAuthorization(req, res, next) {
    let favouriteId = req.params.id;

    Favourite.findByPk(favouriteId)
        .then(favourite => {
            if(favourite) {
                if(favourite.userId === req.loggedUser.id) {
                    next();
                } else {
                    next({name: "Unauthorized"});
                }
            } else {
                next({name: "FavouriteNotFound"})
            }
        })
        .catch(err => {
            next(err);
        })
}

module.exports = {
    authentication,
    imageAuthorization,
    commentAuthorization,
    favouriteAuthorization
}