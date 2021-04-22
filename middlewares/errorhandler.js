function errorHandler(err, req, res, next) {

    if(err.name === "ValidationError") {
        let messages = [];
        err.currentError.errors.forEach(element => {
            messages.push(element.message);
        })
        res.status(400).json({msg: messages});
    } else if(err.name === "UniqueConstraintError") {
        let messages = [];
        err.currentError.errors.forEach(element => {
            messages.push(element.message);
        })
        res.status(400).json({msg: messages});
    } else if(err.name === "UserNotFound") {
        res.status(400).json({msg: "User Not Found"});
    } else if(err.name === "WrongInput") {
        res.status(400).json({msg: "Wrong Email or Password"});
    } else if(err.name === "Unauthenticate") {
        res.status(400).json({msg: "Please Login First"});
    } else if(err.name === "ImageNotFound") {
        res.status(404).json({msg: "Image Not Found"});
    } else if(err.name === "Unauthorized") {
        res.status(401).json({msg: "Unauthorized"});
    } else if(err.name === "CommentNotFound") {
        res.status(404).json({msg: "Comment Not Found"});
    } else if(err.name === "FavouriteNotFound") {
        res.status(404).json({msg: "Favourite Not Found"});
    }
    
    else {
        res.status(500).json({
            msg: "Internal Server Error",
            errors: err
        })
    }
}

module.exports = errorHandler;