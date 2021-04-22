const { comparePassword } = require('../helpers/bcrypt');
const { tokenGenerate } = require('../helpers/jwt');
const {Customer} = require('../models')
const {OAuth2Client} = require('google-auth-library');

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

    static googleLogin(req, res, next) {
        const id_token = req.body.id_token;
        // console.log(id_token);
        const client = new OAuth2Client(process.env.CLIENT_ID);
        let email;
        client.verifyIdToken({
            idToken: id_token,
            audience: process.env.CLIENT_ID,
        })
        .then(ticket => {
            const payload = ticket.getPayload();
            email = payload.email;
            return Customer.findOne({where: {email}})
        })
        .then(user => {
            if(user) {
                return user;
            } else {
                return Customer.create({ firstName: 'google', lastName: 'google', gender: 'google', address: 'google', phone: 'google', email: email, password: 'randompassgoogle' + Math.random()*10000})
            }
        })
        .then(user => {
            const payload = {email: user.email, id: user.id};
            const access_token = tokenGenerate(payload);
            res.status(200).json({access_token, email})
        })
        .catch(err => {
            console.log(err);
            next(err)
        })
    }
}

module.exports = CustomerController