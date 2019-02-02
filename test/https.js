const https = require('https')

const url = 'https://api.github.com/repos/saltfish666/nclone/contents/'
// const url = 'https://github.com'

https.get(url, (res) => {
  if (res.statusCode !== 200) {
    return new Error(`http code ${res.statusCode}`)
  }
  // res.setEncoding('utf8')

  var result = ''
  res.on('data', chunk => {
    process.stdout.write(chunk)
  })
  res.on('end', () => {
    console.log(result)
  })
})
