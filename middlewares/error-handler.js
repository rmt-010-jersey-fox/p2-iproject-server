function errorHandler(err, req, res, next) {
    if (err.name == "SequelizeValidationError" 
    || err.status == 400 
    || err.name == "SequelizeUniqueConstraintError") {
        if (err.name == "SequelizeValidationError") {
            let errMsg = {
                message: [],
            };

            err.errors.forEach((error) => {
                errMsg.message.push(error.message);
            });

            res.status(400).json(errMsg);
        } else {
            res.status(400).json({
                message: err.message
            })
        }

    } else if (err.status == 404) {

        res.status(404).json({
            message: "Not Found",
        });

    } else if (err.status == 401) {

        res.status(401).json({
            message: err.message,
        });

    } else {
        const status = err.status || 500;

        const message = err.message || "This page isn't working";

        res.status(status).json({
            message
        });
    }
}

module.exports = errorHandler;