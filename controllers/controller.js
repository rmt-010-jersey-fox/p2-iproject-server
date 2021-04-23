const { comparePass } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jwt')
const { User, History } = require('../models')
const axios = require('axios')

class Controller {
    static register(req, res, next) {
        const {username, email, password, address} = req.body
        User.create({
            username,
            email,
            password,
            address
        })
        .then(data => {
            res.status(201).json({id: data.id, email:data.email})
        })
        .catch(err => {
            next(err)
        })
    }

    static login(req, res, next) {
        const {email, password} = req.body
        User.findOne({
            where: {
                email
            }
        })
        .then(data => {
            if (data) {
                let checked = comparePass(password, data.password)
                if (checked) {
                    const payload = {
                        id:data.id,
                        email:data.email
                    }
                    res.status(200).json({access_token: generateToken(payload)})
                } else {
                    res.status(400).json({message: 'invalid email or password'})
                }
            } else {
                res.status(400).json({message: 'invalid email or password'})
            }
        })
        .catch(err => {
            next(err)
        })
    }

    static getUser(req, res, next) {
        User.findOne({
            where: {
                id:req.loggedUser.id
            }
        })
        .then(user => {
            res.status(200).json({username: user.username, email:user.email, address: user.address})
        })
        .catch(err => {
            next(err)
        })
    }

    static editUser(req, res, next) {
        const {username, address} = req.body
        const input = {
            username,
            address
        }
        User.update(input,{
            where: {
                id: req.loggedUser.id
            }
        })
        .then(user => {
            res.status(200).json(user)
        })
        .catch(err => {
            next(err)
        })
    }

    static addHistory(req, res, next) {
        const {price, item} = req.body
        History.create({
            price,
            item,
            UserId:req.loggedUser.id
        })
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            next(err)
        })
    }

    static getHistory(req, res, next) {
        History.findAll({
            where: {
                UserId:req.loggedUser.id
            }
        })
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            next(err)
        })
    }

    static fetchProvince(req, res, next) {
        axios({
            method: 'get',
            url: 'https://api.rajaongkir.com/starter/province',
            headers: {
              key: 'f43ccd2123446338968a237543600a18'
            }
          })
            .then((response) => {
              res.status(200).json(response.data.rajaongkir.results)
            })
            .catch(err => {
                next(err)
            })
    }

    static fetchOngkir(req, res, next) {
        const {origin, destination, weight, courier} = req.body
        axios({
            method: 'post',
            url: 'https://api.rajaongkir.com/starter/cost',
            headers: {
              key: 'f43ccd2123446338968a237543600a18'
            },
            data: {
                origin: +origin,
                destination: +destination,
                weight: +weight,
                courier
            }
          })
            .then((response) => {
              res.status(200).json(response.data.rajaongkir.results[0].costs)
            })
            .catch(err => {
                next(err)
            })
    }

    static fetchCity(req, res, next) {
        const id = req.params.province
        axios({
            method: 'get',
            url: `https://api.rajaongkir.com/starter/city?province=${id}`,
            headers: {
              key: 'f43ccd2123446338968a237543600a18'
            }
          })
            .then((response) => {
              res.status(200).json(response.data.rajaongkir.results)
            })
            .catch(err => {
                next(err)
            })
    }
}

module.exports = Controller