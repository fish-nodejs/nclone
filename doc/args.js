const argv = require('yargs').argv
console.log(argv)

/*
node args.js sf sdfs --sf sf -gdf
{ _: [ 'sf', 'sdfs' ],
  help: false,
  version: false,
  sf: 'sf',
  g: true,
  d: true,
  f: true,
  '$0': 'args.js' }
  */
