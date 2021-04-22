const express = require("express");
const imageRouter = express.Router();
const commentRouter = require("./commentRouter.js");
const favouriteRouter = require("./favouriteRouter.js");
const ImageController = require("../controllers/imageController.js");
const ApiController = require("../controllers/apiController.js");
const {authentication, imageAuthorization} = require("../middlewares/auth.js");

imageRouter.get("/images", ImageController.showImages);
imageRouter.use(authentication);
imageRouter.post("/images", ImageController.addImage);
imageRouter.get("/images/my-images", ImageController.myImages);
// API

imageRouter.get("/pexels", ApiController.imageAPI);
imageRouter.get("/pixa", ApiController.pixaAPI);

imageRouter.use("/",commentRouter);
imageRouter.use("/", favouriteRouter);
imageRouter.get("/images/:id", ImageController.getImage);
imageRouter.use("/images/:id", imageAuthorization);
imageRouter.put("/images/:id", ImageController.editImage);
imageRouter.patch("/images/:id", ImageController.editDescription);
imageRouter.delete("/images/:id", ImageController.deleteImage);



module.exports = imageRouter;