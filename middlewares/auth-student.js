const { Booking } = require('../models')
async function authStudent(req, res, next) {
    try {
        const role = req.loggedUser.role;
        if (role === 'student') {
            //findOne
            const id = +req.params.id
            let data = await Booking.findOne({
                where : {
                    id : id
                }
            })
            if (data) {
                if (data.UserId === req.loggedUser.id) {
                    next()
                } else {
                    throw {
                        name : "No Access"
                    }
                }
            }
        } else {
            throw {
                name : "No Access"
            }
        }
    } catch (error) {
        next(err)
    }
}

module.exports = authStudent