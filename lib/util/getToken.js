const fs = require('fs')
const path = require('path')
const argv = require('yargs').argv

let tokenJson = path.join(__dirname, './token.json')

let token = argv['t'] || argv['token']

if (token) {
  fs.writeFileSync(tokenJson, JSON.stringify({
    token: token
  }))
}
if (!token) {
  try {
    token = require(tokenJson).token
  } catch (e) {
    // token.json not exist
  }
}

module.exports = function getToken () {
  return token
}
