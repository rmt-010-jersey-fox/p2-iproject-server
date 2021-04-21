function errorHandler(err, req, res, next) {
    switch (err.name) {
        case "SequelizeUniqueConstraintError":
            res.status(400).json({
                message: "Bad Request",
                errors: ["Email Already Registered"]
            })
        break;
        case "SequelizeValidationError":
            let errors = []
            err.errors.errors.forEach(el => {
                errors.push(el.message)
            });
            res.status(400).json({
                message: "Data Validation Error",
                errors
            })
        break;    
        case "BadRequest":
            res.status(err.status).json({
                message: "Bad Request",
                errors: [err.message]
            })
        break;    
        case "NotFound":
            console.log(err, '<<<< ini errornya');
            res.status(err.status).json({
                message: "Not Found",
                errors: [err.message]
            })
        break;
        case "Unauthorized":
            res.status(err.status).json({
                message: "Unauthorized",
                errors: [err.message]
            })
        break;
                
        default:
            res.status(err.status || 500).json({
                message: err.message || ["Internal Server Error"]
            })
        break;
    }
}

module.exports = errorHandler