const getFloderInfo = require('../lib/getFolderInfo')

console.log(11)
getFloderInfo('https://api.github.com/repos/saltfish666/nclone/contents', (err, res) => {
  if (err) throw err
  console.log(res)
  console.log(2)
})
