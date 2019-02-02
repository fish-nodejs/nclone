const https = require('https');

const url = 'https://api.github.com/repos/saltfish666/nclone/contents/'
const url1 = 'https://github.com'
let options = {
  headers: {
    'User-Agent': 'nodejs'
  }
}
https.get(url, options, (res) => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);

  res.on('data', (d) => {
    process.stdout.write(d);
  });

}).on('error', (e) => {
  console.error(e);
});