const argv = require('yargs').argv

const getFolderUrlLink = require('./getFolderUrlLink')
const getToken = require('./getToken')
const deepth = argv['deepth'] || argv['d'] || 2
const getFolderPath = require('./getFolderPath')

module.exports = {
  folderLink: getFolderUrlLink(),
  token: getToken(),
  deepth,
  folderPath: getFolderPath()
}
