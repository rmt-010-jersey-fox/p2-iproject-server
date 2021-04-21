const { BuddyProfile } = require('../models')

async function authBuddy(req, res, next) {
    try {
        const id = +req.params.id;
        const findData = await BuddyProfile.findOne({
            where : {
                id : id
            }
        })
        if (findData) {
            let data = findData.dataValues;
            if(data.UserId === req.loggedUser.id) {
                next()
            } else {
                throw {
                    name : 'Unauthorized'
                }
            }
        } else {
            throw {
                name : 'Unauthorized'
            }
        }
    } catch (error) {
        next(error)
    }
}

module.exports = authBuddy