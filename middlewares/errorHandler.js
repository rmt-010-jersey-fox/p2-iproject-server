module.exports = ((err, req, res, next) => {
    switch (err.name) {
        
        default: 
            res.status(500).json({message: err.message})
    }
})