const fs = require('fs');

const exists = fs.fstat('myFile.txt');
console.log(exists);
