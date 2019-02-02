## args
nclone repo_info [folder name] --deepth=2 -f --token=null

- repo_info
 - should format like: fish-nodejs/read-webfile
- folder_name
 - 

## github api
GET https://api.github.com/repos/saltfish666/nclone/contents

response
[{
  name: 'README.md',
  download_url: 'https://raw.githubusercontent.com/saltfish666/nclone/master/README.md'
}, {
  name: 'bin',
  download_url: null,
  url: 'https://api.github.com/repos/saltfish666/nclone/contents/bin?ref=master'
}]

## flow
var args = require('getArgs')
var folder_url = args.folder_url
var token = args.token
var length = args.length
var isForce = args.force

downloadFilesInFolder(folder_url, length) {
  getResArray
  for (item in array) {
    if(isFiledownload){
      download
    }
    if (isFolder && length > 0) {
      downloadFileInFolder(item.url, length - 1)
    }
  }
}