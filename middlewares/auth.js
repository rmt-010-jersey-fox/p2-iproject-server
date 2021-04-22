const {User, Patient, Disease} = require('../models/');
const {verifyToken} = require('../helpers/jwt')
const authentication = async (req,res,next) => {
    try {
        const access_token = req.headers.access_token
        const verifiedUser = verifyToken(access_token)
        const user = await User.findOne({
            where: {
                email: verifiedUser.email
            }
        })
        if (!user) {
            throw {
                name: 'JsonWebTokenError'
            }
        } else if (!access_token) {
            throw {
                name: 'JsonWebTokenError'
            }
        } else {
            req.user = user
            console.log(req.user);
            next()
        }
    } catch (err) {
        console.log(err);
        next(err)
    }
}

const authorizationPatient = async(req,res,next) => {
    try {
        const getId = +req.params.id
        const user = await Patient.findByPk(getId)
        // console.log(req.user.id);
        // console.log(user);
        if (!user) {
            throw {
                name: 'JsonWebTokenError'
            }
        } else if (req.user.role === 'patient') {
            throw {
                name: 'JsonWebTokenError'
            }
        } else if (req.user.id !== user.UserId) {
            throw {
                name: 'JsonWebTokenError'
            }
        } else {
            next()
        }
    } catch (err) {
        // console.log(err);
        next(err)
    }
}


module.exports = {
    authentication,
    authorizationPatient,
}