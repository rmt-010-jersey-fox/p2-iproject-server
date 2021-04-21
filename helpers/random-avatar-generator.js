function generateAvatar (username) {
  let type = Math.ceil(Math.random() * 3)
  if(type === 2) type = 4

  let randomNum = Math.floor(Math.random() * 100000)
  let baseAPIUrl = "https://robohash.org/"

  return baseAPIUrl + username + randomNum + "?set=set" + type
}

module.exports = generateAvatar