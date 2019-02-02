const getFloderInfo = require('../lib/getFolderInfo')

getFloderInfo('https://api.github.com/repos/saltfish666/nclone/contents', (err, res) => {
  if (err) throw err
  console.log(res)
})
