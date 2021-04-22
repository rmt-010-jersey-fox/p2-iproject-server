const express = require("express");
const favouriteRouter = express.Router();
const FavouriteController = require("../controllers/favouriteController.js");
const {favouriteAuthorization} = require("../middlewares/auth.js");

favouriteRouter.post("/favourites/:imageId", FavouriteController.addFavourite);
favouriteRouter.get("/favourites", FavouriteController.showFavourites);
favouriteRouter.delete("/favourites/:id", favouriteAuthorization, FavouriteController.deleteFavourite);



module.exports = favouriteRouter