const request = require('supertest')
const app = require('../app.js')
const { Patient } = require('../models')
const { Op } = require('sequelize')

afterAll((done) => {
  Patient.destroy({
      where:
      {
        id:
        { [Op.ne]: [1] }
      }
    })
    .then(() => {
      done()
    })
    .catch(err => done(err))
})

let dataSuccessRegist = {
  email: 'putra1@mail.com',
  password: '123123',
  first_name: 'Putra',
  last_name: 'Awali',
  birthdate: '2000-02-02',
  address: 'Jl. Lalalala',
  ktp: '1029222222222',
  phone: '0987654321',
  gender: 'Laki-laki'
}

describe('POST /patient/register test case', () => {
  it('Success test register', (done) => {
    return request(app)
      .post('/patient/register')
      .set('Accept', 'application/json')
      .send(dataSuccessRegist)
      .then(response => {
        let { body, status } = response
        expect(status).toBe(201)
        expect(typeof body).toBe('object')
        done()
      })
    .catch(error => done(error))
  })

  it('Fail test for unique constraint', done => {
    return request(app)
      .post('/patient/register')
      .set('Accept', 'application/json')
      .send(dataSuccessRegist)
      .then(response => {
        let { body, status } = response
        expect(status).toBe(400)
        expect(typeof body).toBe('object')
        expect(body).toHaveProperty('message')
        done()
      })
    .catch(error => done(error))
  })

  it('Fail test for required input', done => {
    let dataEmpty = {
      email: '',
      password: '',
      first_name: '',
      last_name: '',
      birthdate: '',
      address: '',
      ktp: '',
      phone: '',
      gender: ''
    }
    return request(app)
      .post('/patient/register')
      .set('Accept', 'application/json')
      .send(dataEmpty)
      .then(response => {
        let { body, status } = response
        expect(status).toBe(400)
        expect(typeof body).toBe('object')
        expect(body).toHaveProperty('message')
        done()
      })
      .catch(error => done(error))
  })
})

let dataLogin = {
  email: 'putra1@mail.com',
  password: '123123'
}

describe('POST /patient/login test case', () => {
  it('Success test case for login', done => {
    return request(app)
      .post('/patient/login')
      .set('Accept', 'application/json')
      .send(dataLogin)
      .then(response => {
        let { body, status } = response
        expect(status).toBe(200)
        expect(typeof body).toBe('object')
        expect(body).toHaveProperty('access_token')
        done()
      })
      .catch(err => done(err))
  })

  it('Fail test for wrong email/password', done => {
    let wrongDataLogin = {
      email: 'putra123@mail.com',
      password: '123'
    }
    return request(app)
      .post('/patient/login')
      .set('Accept', 'application/json')
      .send(wrongDataLogin)
      .then(response => {
        let { body, status } = response
        expect(status).toBe(400)
        expect(typeof body).toBe('object')
        expect(body).toHaveProperty('message')
        done()
      })
      .catch(err => done(err))
  })
})