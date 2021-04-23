const { compare } = require('../helper/bcypt')

function authorization(req, res, next) {
    let {key} = req.body
    // console.log(key);
    try {
        if (compare( key ,'$2b$10$BJAHJ714WF52bKT2CQBVBenX3Vu5VeKtK4fN/2YOyPYvuEpuoNkfy')){
            next()
        }
        else{
            next({status : 400, message : 'wrong key'})
        }
    } 
    catch (error) {
        next({ status: 403, message: 'you must input key' })
    }
}

module.exports = authorization