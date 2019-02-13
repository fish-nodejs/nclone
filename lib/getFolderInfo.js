const axios = require('axios')
const token = require('./help/args').token

let options = {
  headers: {
    'User-Agent': 'nodejs'
  }
}
if (token) options.headers.token = token

function getFolderInfo (url, callback) {
  axios.get(url, options)
    .then((res) => {
      callback(null, res.data)
    })
}
module.exports = getFolderInfo
