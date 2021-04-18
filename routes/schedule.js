const scheduleRouter = require("express").Router();
const ScheduleCtrl = require("../controllers/schedule");
const authenticate = require("../middlewares/authentication");
const authorize = require("../middlewares/authorization");

scheduleRouter.use(authenticate);
scheduleRouter.post("/", ScheduleCtrl.postSchedules);
scheduleRouter.get("/", ScheduleCtrl.getSchedules);
scheduleRouter.get("/:id", authorize, ScheduleCtrl.getById);
scheduleRouter.put("/:id", authorize, ScheduleCtrl.putById);
scheduleRouter.delete("/:id", authorize, ScheduleCtrl.deleteById);

module.exports = scheduleRouter;
