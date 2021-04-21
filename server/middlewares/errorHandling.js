const { ValidationError } = require("sequelize");

module.exports = (err, req, res, next) => {
  if (err.name === "invalid email or password") {
    res.status(401).json({ message: "invalid email or password" });
  } else if (err.name === "invalid token") {
    res.status(401).json({ message: "invalid credentials" });
  } else if (err instanceof ValidationError) {
    const messages = err.errors.map((e) => e.message);
    res.status(400).json({ message: messages });
  } else if (err.name === "Not Found") {
    res.status(404).json({ message: "Not Found" });
  } else {
    res.status(500).json({ message: err.message || "internal server error" });
  }
};
