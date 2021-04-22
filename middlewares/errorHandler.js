module.exports = (err, req, res, next) => {
    if (err.name === "Product not found") {
      res.status(404).json({ message: "Product not found" });
    } else if (err.name === "SequelizeValidationError") {
      const message = [];
      err.errors.forEach((error) => {
        message.push(error.message);
      });
      res.status(400).json({message: message});
    } else if(err.name === 'Unauthorized'){
      res.status(401).json({ message: "Unauthorized" })
    } else if(err.name === "Invalid Email or Password"){
      res.status(400).json({ message: "Invalid Email or Password" })
    } else if(err.name === "invalid id or password"){
      res.status(400).json({ message: "invalid id or password" })
    } else if (err.name === "SequelizeUniqueConstraintError"){
      res.status(400).json({ message: "The Email Account Already Exists"})
    } else if (err.name === "no cart"){
      res.status(404).json({message: 'no cart'})
    } else if (err.name === 'Stock is less than in the cart') {
      res.status(404).json({message: 'Stock is less than in the cart'})
    } else {
      res.status(500).json({ message: "internal server error" });
    }
  };