module.exports = function getFolerLink () {
  var info = process.argv[2]
  // should always format as
  // fish-nodejs/read-webfile
  if (!info) return null

  var owner = info.split('/')[0]
  var reposName = info.split('/')[1]

  return `https://api.github.com/repos/${owner}/${reposName}/contents`
}
