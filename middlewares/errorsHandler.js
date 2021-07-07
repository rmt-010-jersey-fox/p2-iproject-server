const errorsHandler = (err, req, res, next) => {
  switch (err.name) {
    case "loginFailed":
    case "registerFailed":
    case "news":
      res.status(400).json({ name: err.name, message: err.message });
      break;
    case "SequelizeValidationError":
      res.status(400).json({ name: err.name, message: err.message });
      break;
    default:
      res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = errorsHandler;
