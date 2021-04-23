const json = require('jsonwebtoken')


function signJwt(payload){
    return json.sign(payload, 'aaran')
}

function verifyJwt(token){
    return json.verify(token, 'aaran')
}

module.exports= {signJwt, verifyJwt}