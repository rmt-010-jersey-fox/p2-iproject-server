const express = require("express");
const userRouter = express.Router();
const UserController = require("../controllers/userController.js");

userRouter.post("/register", UserController.register);
userRouter.post("/login", UserController.login);


module.exports = userRouter;
