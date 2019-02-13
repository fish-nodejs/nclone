const path = require('path')
const argv = require('yargs').argv

let folderPath = argv[1] || process.env.PWD

module.exports = function getFolderPath () {
  return path.resolve(folderPath)
}
