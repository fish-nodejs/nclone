const fs = require('fs')

var a = fs.createWriteStream('./aaa.js')
fs.createReadStream('./https.js').pipe(a)