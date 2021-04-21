const {
    verifyToken
} = require("../helpers/jwt");
const {
    User,
    Post
} = require("../models");

async function authentication(req, res, next) {
    try {
        const {
            access_token
        } = req.headers;

        if (access_token) {
            const verified = verifyToken(access_token);

            const findUser = await User.findOne({
                where: {
                    email: verified.email,
                },
            });

            if (findUser) {
                req.loggedUser = {
                    id: findUser.id,
                    email: findUser.email,
                };
                console.log("msk authentication");
                // akan ke endpoint utk yang gaperlu authorization, atau ke authorization
                next();
            } else {
                // kalo ada access token tapi ga sesuai sama yang login nya.
                throw {
                    status: 401,
                    message: "Invalid Access Token"
                };
            }
        } else {
            // kalo acess token gak ada (belum login, akan jarang sih ini soalnya di login pasti dapet acess token)
            throw {
                status: 401,
                message: "Please Login First"
            };
        }
    } catch (err) {
        //   res status 500 err.message || internal server error
        next(err);
    }
}

async function postAuthorization(req, res, next) {
    try {
        const {
            id
        } = req.params;
        console.log("msk authorization");
        const post = await Post.findOne({
            where: {
                id,
            },
        });

        if (!post) {
            //   ini di next, biar ketangkep errornya di not found
            next();
        } else if (post.UserId == req.loggedUser.id) {
            next();
        } else {
            throw {
                status: 401,
                message: "You are Unauthorized"
            };
        }
    } catch (err) {
        //   err status 500 err.message || internal server error
        next(err);
    }
}

async function userAuthorization(req, res, next) {
    try {
        const userFound = await User.findOne({
            where: {
                id: req.params.id
            }
        })
        console.log(userFound)
        if (!userFound) {
            next()
        }

        if (userFound.id == req.loggedUser.id) {
            next()
        } else {
            throw {
                status: 401,
                message: 'Your Are Unauthorized'
            }
        }
    } catch (err) {
        next(err)
    }

}

module.exports = {
    authentication,
    postAuthorization,
    userAuthorization
};