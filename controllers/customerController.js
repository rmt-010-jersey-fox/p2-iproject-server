const { comparePassword } = require('../helpers/bcrypt');
const { tokenGenerate } = require('../helpers/jwt');
const {Customer} = require('../models')

class CustomerController {
    static register(req, res, next) {
        const {firstName, lastName, email, password, gender, address, phone} = req.body
        Customer.create({firstName, lastName, email, password, gender, address, phone})
        .then(data => {
            res.status(201).json(data)
        })
        .catch(err => {
            next(err)
        })
    }

    static login(req, res, next) {
        const {email, password} = req.body
        Customer.findOne({where: {email}})
        .then(user => {
            if (user) {
                let compare = comparePassword(password, user.password)
                if (compare) {
                    let access_token = tokenGenerate({id:user.id, email:user.email})
                    req.headers = { access_token}
                    res.status(200).json({email:user.email, access_token})
                } else {
                    next({name: 'Invalid Token'})
                }
            } else {
                next({name: 'User not found'})
            }
        })
        .catch(err => {
            console.log(err, 'ini loh');
            next(err)
        })
    }
}

module.exports = CustomerController