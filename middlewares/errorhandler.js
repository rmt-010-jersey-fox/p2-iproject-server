module.exports = (err, req, res, next) => {
    if (err.name === "SequelizeValidationError") {
      const message = [];
      err.errors.forEach((error) => {
        message.push(error.message);
      });
      res.status(400).json({ message });
    }else if (err.name === "SequelizeUniqueConstraintError"){
      const message = [];
      err.errors.forEach((error) => {
        message.push(error.message);
      });
      res.status(400).json({ message });
    }else if (err.name === "manga not found") {
      res.status(404).json({ message: "manga not found" });
    } else if (err.name === "invalid email or password") {
      res.status(401).json({ message: "invalid email or password" });
    } else if (err.name === "unauthorized") {
      res.status(401).json({ message: "unauthorized" });
    } else {
      res.status(500).json({ message: err.message || "Internal server error" });
    }
  };
  