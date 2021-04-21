const errorsHandler = (err, req, res, next) => {
  switch (err.name) {
    case "loginFailed":
    case "registerFailed":
      res.status(400).json({ name: err.name, message: err.message });
      break;
    case "SequelizeValidationError":
      res.status(400).json({ name: err.name, message: err.message });
      break;
    default:
      console.log(err);
      res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = errorsHandler;
