module.exports = (err, req, res, next) => {
    console.log("err name : ", err.name)
    if (err.name === "Not Found") {
        res.status(404).json({ message: 'Data Not Found'})
    } else if (err.name === "No Access") {
        res.status(401).json({ message : 'You have no access'})
    } else if (err.name === "Unauthorized") {
        res.status(401).json({ message : 'Invalid email/password '})
    } else if (err.name === "SequelizeValidationError") {
        let msg = [];
        err.errors.forEach(element => {
            msg.push(element.message);
        });
        res.status(400).json(msg)
    } else if (err.name === "SequelizeUniqueConstraintError") {
        res.status(400).json({ message : 'Email is already exist'})
    } else if (err.name === "Invalid JWT") {
        res.status(401).json({ message : 'Invalid JWT token'})
    } else {
        res.status(500).json(error)
    }    
}