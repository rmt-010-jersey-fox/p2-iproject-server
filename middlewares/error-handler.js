function errorHandler(err, req, res, next) {
  let code = 500
  let messages = "Internal Server Error"
  
  console.log(err)
  res.status(code).json({error: messages})
}

module.exports = errorHandler