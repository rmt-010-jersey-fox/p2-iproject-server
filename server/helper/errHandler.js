module.exports = (err, req, res, next) => {
   if(err.name === "SequelizeValidationError" ){
        res.status(400).json(err.errors[0].message)
   } else if (err === 'email/password not found'){
        res.status(401).json({message: 'invalid email/password!'})
   } else if(err === 'Data not found') {
        res.status(404).json({message: "Data not found"})       
   } else if(err === 'Unauthorized') {
    res.status(401).json({message: "Unauthorized"})       
   } else if(err === 'User not found') {
    res.status(404).json({message: "User not found"})       
   } else {
     res.status(500).json(err)
   }
   
}