const errHandler = (err, req, res, next) => {
    if (err.name) {
        if (err.name == "SequelizeValidationError" || err.name == "SequelizeUniqueConstrainError" || err.name == "SequelizeDatabaseError") {
            let errors = []
            err.errors.forEach(element => {
                errors.push(element.message)
            });
            res.status(400).json({ errors })
        } else if (err.length > 0) {
            res.status(400).json({ errors: [err.errors[0].message] })
        } else {
            res.status(500).json({ errors: [err] })
        }
    } else {
        if (err.msg) {
            res.status(err.code).json({ errors: [err.msg] })
        } else {
            console.log(err);
        }
    }
}
module.exports = errHandler