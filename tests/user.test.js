const request = require('supertest');
const app = require('../app')

let UserValidData = {
  email: "sample@mail.com",
  password: "123456"
}

// test register

describe('Post /registers', function() {
  it('responds with json name, gender', function(done) {
    return request(app)
      .post('/register')
      .send(UserValidData) // req.body
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .then(response => {
        let { body, status } = response
        expect(status).toBe(200)
        expect(body).toHaveProperty('id', expect.any(Number) )
        expect(body).toHaveProperty('email', UserValidData.email)
        done();
      })
      .catch(err => {
        console.log(err)
        done(err)
      })
  });
});