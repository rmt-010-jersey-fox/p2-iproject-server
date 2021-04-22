const express = require("express");
const router = express.Router();
const userRouter = require("./userRouter.js");
const imageRouter = require("./imageRouter.js");


router.use("/", userRouter);
router.use("/", imageRouter);


module.exports = router;