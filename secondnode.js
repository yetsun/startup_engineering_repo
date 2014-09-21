#!/usr/bin/env node
var fs = require('fs');
var outfile = "hello1.txt";
var out = "modify this script";
fs.writeFileSync(outfile, out);
console.log("script" + __filename + "\nwrite:" + out + "To: " + outfile);
