const request = require("supertest");
const app = require("../app.js");

describe("GET /hospital/doctor", () => {
  it("Success test get doctor", (done) => {
    return request(app)
      .get("/hospital/doctor")
      .set("Accept", "application/json")
      .then((response) => {
        let { body, status } = response;
        expect(status).toBe(200);
        expect(typeof body).toBe("object");
        done();
      })
      .catch((err) => done(err));
  });
});

describe("GET /hospital/poli", () => {
  it("Success test get poli", (done) => {
    return request(app)
      .get("/hospital/poli")
      .set("Accept", "application/json")
      .then((response) => {
        let { body, status } = response;
        expect(status).toBe(200);
        expect(typeof body).toBe("object");
        done();
      })
      .catch((err) => done(err));
  });
});
