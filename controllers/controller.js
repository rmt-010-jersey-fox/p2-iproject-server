const { comparePass } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jwt')
const { User, History } = require('../models')
const axios = require('axios')

class Controller {
    static register(req, res) {
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
            res.status(500).json({message: 'internal server error'})
        })
    }

    static login(req, res) {
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
                    res.status(401).json({message: 'invalid email or password'})
                }
            } else {
                res.status(401).json({message: 'invalid email or password'})
            }
        })
        .catch(err => {
            res.status(500).json({message: 'internal server error'})
        })
    }

    static editUser(req, res) {
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
            res.status(500).json({message: 'internal server error'})
        })
    }

    static addHistory(req, res) {
        const {price, from, destination} = req.body
        History.create({
            price,
            from,
            destination,
            UserId:req.loggedUser.id
        })
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(500).json({message: 'internal server error'})
        })
    }

    static getHistory(req, res) {
        History.findAll({
            where: {
                UserId:req.loggedUser.id
            }
        })
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(500).json({message: 'internal server error'})
        })
    }

    static fetchProvince(req, res) {
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
              res.status(500).json({message: 'internal server error'})
            })
    }

    static fetchOngkir(req, res) {
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
                console.log('masuk')
                console.log(response)
              res.status(200).json(response.data.rajaongkir.results[0].costs)
            })
            .catch(err => {
                console.log(err.response.data)
              res.status(500).json({message: 'internal server error'})
            })
    }

    static fetchCity(req, res) {
        const id = req.params.province
        axios({
            method: 'get',
            url: `https://api.rajaongkir.com/starter/city?province=${id}`,
            headers: {
              key: 'f43ccd2123446338968a237543600a18'
            }
          })
            .then((response) => {
                console.log('masuk')
                console.log(response)
              res.status(200).json(response.data.rajaongkir.results)
            })
            .catch(err => {
                console.log(err.response.data)
              res.status(500).json({message: 'internal server error'})
            })
    }
}

module.exports = Controller