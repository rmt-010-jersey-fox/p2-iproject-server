function errorHandler(err, req, res, next) {
  // console.log(">>>>>>>>>>>", err.name)
  // console.log(err, "<<<<<<<<<<<<<")
  let code = 500
  let message = "Internal Server Error"

  if(err.name === "InvalidUsernameOrPassword") {
    code = 400
    message = "Incorrect Username or Password"
    
  } else if(err.name === "FalsyUsernameOrPassword") {
    code = 400
    message = "Please fill both of the fields"

  } else if(err.name === "SequelizeValidationError") {
    code = 400
    message = err.errors.map(validationError => validationError.message)

  } else if(err.name === "SequelizeUniqueConstraintError") {
    code = 400
    message = "This username or email is already taken"

  } else if(err.name === "UserNotFound") {
    code = 404
    message = "User with this Id is not found"
  }

  
  
  res.status(code).json({error: message})
}

module.exports = errorHandler