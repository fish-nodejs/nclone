const fs = require('fs')
const path = require('path')

const wf = require('read-webfile')

const getFolderInfo = require('./getFolderInfo')

// 因为github返回的数据中，每一个文件的path属性都是相对于根目录
// 的，所以在递归过程中，rootPath要一直都是根目录，不能修改
function downloadFolder (url, rootPath, deepth) {
  if (deepth <= 0) return null

  getFolderInfo(url, (err, res) => {
    if (err) throw err

    var resArray = JSON.parse(res)
    // console.log('resArray', resArray)
    for (var item of resArray) {
      // console.log(item.download_url)
      // 说明这是一个文件类型，直接下载
      if (item.download_url) {
        // console.log(item.download_url)
        
        let rs = wf.createReadStreamFromWeb(item.download_url)
        var fileLocation = path.join(rootPath, item.path)
        // console.log(fileLocation)
        let ws = fs.createWriteStream(fileLocation)
        // console.log(rs, ws)
        rs.pipe(ws)
       
      } else {
        // console.log(item.name)
        var newFolderPath = path.join(rootPath, item.path)
        console.log(newFolderPath)
        
        fs.mkdir(newFolderPath, (err) => {
          if (err) return console.log(err)
          downloadFolder(item.url, rootPath, deepth - 1)
        })
      }
    }
  })
}

module.exports = downloadFolder
