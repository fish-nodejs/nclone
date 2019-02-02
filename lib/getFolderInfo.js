const https = require('https')
const token = require('./util/args').token

let options = {
  headers: {
    'User-Agent': 'nodejs'
  }
}
if (token) options.headers.token = token

function getFolderInfo (url, callback) {
  // console.log('getFolderInfo:', url)
  https.get(url, options, (res) => {
    res.setEncoding('utf8')
    if (res.statusCode !== 200) {
      return callback(new Error(`http code ${res.statusCode}`))
    }

    var result = ''
    res.on('data', chunk => {
      result += chunk
      // console.log(chunk)
    })
    res.on('end', () => {
      // console.log(result)
      callback(null, result)
    })
  })
}
module.exports = getFolderInfo
