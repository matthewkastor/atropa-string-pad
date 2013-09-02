var fs = require('fs');
var pad = require(__dirname + '/../src/atropa-string-pad.js');
eval(fs.readFileSync(__dirname + '/../tests/atropa-string-pad.test.js', 'utf8'));



