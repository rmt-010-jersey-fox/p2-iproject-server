const rug = require('random-username-generator')

function generateUsername() {
    var new_username = rug.generate();
    return new_username
}

module.exports = generateUsername