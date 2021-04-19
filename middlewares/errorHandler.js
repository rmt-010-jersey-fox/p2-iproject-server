module.exports = (err, req, res, next) => {
    if (err.name === 'InvalidJWT') {
        res.status(401).json({ message:'Wrong/Invalid JWT'})
    } else if (err.name === 'PleaseLoginFirst') {
        res.status(401).json({ message:'Plase login first'})
    } else if (err.name === 'EmailNotFound') {
        res.status(401).json({ message:'Invalid Email / Password'})
    } else if (err.name === 'Unauthorized') {
        res.status(401).json({ message:'Unauthorized Access'})
    } else if (err.name === 'FinanceNotFound') {
        res.status(404).json({ message:'Finance Not Found'})
    } else if (err.name === 'ErrorPassword') {
        res.status(401).json({ message: 'Invalid Email / Password'})
    } else if (err.name === "SequelizeValidationError" || err.name === "SequelizeUniqueConstraintError") {
        let errorMessages = []
        if (err.name === "SequelizeUniqueConstraintError") {
            errorMessages.push('Sorry the email has been taken, please insert another email')
        } else {
            err.errors.forEach(el => {
                errorMessages.push(el.message)
            });
        }
        res.status(400).json({ errorMessages })
    } else {
        res.status(500).json({ message: err.message || 'Internal Server Error'})
    }
}