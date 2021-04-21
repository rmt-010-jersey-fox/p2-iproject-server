const patientRouter = require("express").Router();
const PatientCtrl = require("../controllers/patient");
const authenticate = require("../middlewares/authentication");

patientRouter.post("/register", PatientCtrl.register);
patientRouter.post("/login", PatientCtrl.login);
patientRouter.post("/googleLogin", PatientCtrl.googleLogin);

patientRouter.use(authenticate);
patientRouter.get("/", PatientCtrl.getById);

module.exports = patientRouter;
