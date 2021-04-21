const fs = require('fs')

const data = JSON.parse(fs.readFileSync('./data/songs.json', {encoding: 'utf-8'}))
for (let i = 0; i < data.length; i++) {
    data[i].createdAt = new Date()
    data[i].updatedAt = new Date()
  }
console.log(data)