const path = require('path')
let downloadFolder = require('../lib/downloadFolder')

let url = 'https://api.github.com/repos/vuejs/vue/contents'
downloadFolder(url, path.join(__dirname, './test'), 5)
