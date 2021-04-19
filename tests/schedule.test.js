const request = require("supertest");
const app = require("../app.js");
const { Patient } = require("../models");
const { generate } = require("../helpers/jwt.js");

let accessToken = "";
beforeAll((done) => {
  Patient.findOne({
    where: {
      email: "putra@mail.com",
    },
  })
    .then((response) => {
      let payload = {
        id: response.id,
        first_name: response.first_name,
        email: response.email,
        ktp: response.ktp,
      };
      accessToken = generate(payload);
      done();
    })
    .catch((error) => done(error));
});

let registration = {
  date: "2021-11-05",
  DoctorId: 1,
};

let id = 0;

describe("Test case POST /schedules", () => {
  it("Success test case POST", (done) => {
    return request(app)
      .post("/schedules")
      .set("Accept", "application/json")
      .set("access_token", accessToken)
      .send(registration)
      .then((response) => {
        let { body, status } = response;
        expect(status).toBe(201);
        expect(typeof body).toBe("object");
        expect(body).toHaveProperty("id");
        expect(body).toHaveProperty("date", registration.date);
        expect(body).toHaveProperty("PatientId");
        expect(body).toHaveProperty("DoctorId", registration.DoctorId);
        id = body.id;
        done();
      })
      .catch((err) => done(err));
  });

  it("Fail test case post without access token", (done) => {
    return request(app)
      .post("/schedules")
      .set("Accept", "application/json")
      .send(registration)
      .then((response) => {
        let { body, status } = response;
        expect(status).toBe(401);
        expect(typeof body).toBe("object");
        expect(body).toHaveProperty("message", "Harap login terlebih dahulu");
        done();
      })
      .catch((err) => done(err));
  });

  it("Fail test case empty input", (done) => {
    let emptyRegist = {
      date: "",
      DoctorId: "",
    };
    let errRes = [
      "Anda belum memilih dokter",
      "Pilih tanggal berobat anda",
      "Tanggal untuk pendaftaran jadwal berobat minimal adalah besok",
    ];
    return request(app)
      .post("/schedules")
      .set("Accept", "application/json")
      .set("access_token", accessToken)
      .send(emptyRegist)
      .then((response) => {
        let { body, status } = response;
        expect(status).toBe(400);
        expect(typeof body).toBe("object");
        expect(body).toHaveProperty("message", expect.arrayContaining(errRes));
        done();
      })
      .catch((err) => done(err));
  });

  it("Fail test case date input on validation after today", (done) => {
    let validationAfter = {
      DoctorId: 1,
      date: new Date().toISOString(),
    };
    return request(app)
      .post("/schedules")
      .set("Accept", "application/json")
      .set("access_token", accessToken)
      .send(validationAfter)
      .then((response) => {
        let { body, status } = response;
        expect(status).toBe(400);
        expect(typeof body).toBe("object");
        expect(body).toHaveProperty("message", [
          "Tanggal untuk pendaftaran jadwal berobat minimal adalah besok",
        ]);
        done();
      })
      .catch((err) => done(err));
  });
});

describe("Test case GET /schedules", () => {
  it("Success test case get schedules", (done) => {
    return request(app)
      .get("/schedules")
      .set("Accept", "application/json")
      .set("access_token", accessToken)
      .then((response) => {
        let { body, status } = response;
        expect(status).toBe(200);
        expect(typeof body).toBe("object");
        done();
      })
      .catch((err) => done(err));
  });

  it("Fail test case get schedules without access token", (done) => {
    return request(app)
      .get("/schedules")
      .set("Accept", "application/json")
      .then((response) => {
        let { body, status } = response;
        expect(status).toBe(401);
        expect(typeof body).toBe("object");
        expect(body).toHaveProperty("message", "Harap login terlebih dahulu");
        done();
      })
      .catch((err) => done(err));
  });
});

describe("Test case GET /schedules/:id", () => {
  it("Success test case get by id", (done) => {
    return request(app)
      .get(`/schedules/${id}`)
      .set("Accept", "application/json")
      .set("access_token", accessToken)
      .then((response) => {
        let { body, status } = response;
        expect(status).toBe(200);
        expect(typeof body).toBe("object");
        expect(body).toHaveProperty("id", id);
        expect(body).toHaveProperty("date", registration.date);
        expect(body).toHaveProperty("PatientId");
        expect(body).toHaveProperty("DoctorId", registration.DoctorId);
        expect(body).toHaveProperty("Doctor");
        done();
      })
      .catch((err) => done(err));
  });
  it("Fail test case get without access_token", (done) => {
    return request(app)
      .get(`/schedules/${id}`)
      .set("Accept", "application/json")
      .then((response) => {
        let { body, status } = response;
        expect(status).toBe(401);
        expect(typeof body).toBe("object");
        expect(body).toHaveProperty("message", "Harap login terlebih dahulu");
        done();
      })
      .catch((err) => done(err));
  });
});

let toPut = {
  DoctorId: 15,
  date: "2022-10-04",
};

describe("Test case PUT /schedules/:id", () => {
  it("Success test case put by id", (done) => {
    return request(app)
      .put(`/schedules/${id}`)
      .set("Accept", "application/json")
      .set("access_token", accessToken)
      .send(toPut)
      .then((response) => {
        let { body, status } = response;
        expect(status).toBe(200);
        expect(typeof body).toBe("object");
        expect(body).toHaveProperty(
          "message",
          "Data jadwal berobat berhasil diubah"
        );
        done();
      })
      .catch((err) => done(err));
  });
  it("Fail test case put without access token", (done) => {
    return request(app)
      .put(`/schedules/${id}`)
      .set("Accept", "application/json")
      .send(toPut)
      .then((response) => {
        let { body, status } = response;
        expect(status).toBe(401);
        expect(typeof body).toBe("object");
        expect(body).toHaveProperty("message", "Harap login terlebih dahulu");
        done();
      })
      .catch((err) => done(err));
  });
  it("Fail test case put using empty input", (done) => {
    let emputInput = {
      date: "",
      DoctorId: "",
    };
    let errRes = [
      "Anda belum memilih dokter",
      "Pilih tanggal berobat anda",
      "Tanggal untuk pendaftaran jadwal berobat minimal adalah besok",
    ];
    return request(app)
      .put(`/schedules/${id}`)
      .set("Accept", "application/json")
      .set("access_token", accessToken)
      .send(emputInput)
      .then((response) => {
        let { body, status } = response;
        expect(status).toBe(400);
        expect(typeof body).toBe("object");
        expect(body).toHaveProperty("message", expect.arrayContaining(errRes));
        done();
      })
      .catch((err) => done(err));
  });
  it("Fail test case put using date input on validation after today", (done) => {
    let validationAfter = {
      DoctorId: 1,
      date: new Date().toISOString(),
    };
    return request(app)
      .put(`/schedules/${id}`)
      .set("Accept", "application/json")
      .set("access_token", accessToken)
      .send(validationAfter)
      .then((response) => {
        let { body, status } = response;
        expect(status).toBe(400);
        expect(typeof body).toBe("object");
        expect(body).toHaveProperty("message", [
          "Tanggal untuk pendaftaran jadwal berobat minimal adalah besok",
        ]);
        done();
      })
      .catch((err) => done(err));
  });
});

describe("Test case DELETE /schedules/:id", () => {
  it("Success test case delete by id", (done) => {
    return request(app)
      .delete(`/schedules/${id}`)
      .set("Accept", "application/json")
      .set("access_token", accessToken)
      .then((response) => {
        let { body, status } = response;
        expect(status).toBe(200);
        expect(typeof body).toBe("object");
        expect(body).toHaveProperty(
          "message",
          "Jadwal berobat berhasil dihapus"
        );
        done();
      })
      .catch((err) => done(err));
  });
  it("Fail test case delete without access token", (done) => {
    return request(app)
      .delete(`/schedules/${id}`)
      .set("Accept", "application/json")
      .then((response) => {
        let { body, status } = response;
        expect(status).toBe(401);
        expect(typeof body).toBe("object");
        expect(body).toHaveProperty("message", "Harap login terlebih dahulu");
        done();
      })
      .catch((err) => done(err));
  });
});
