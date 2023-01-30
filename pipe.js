const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
    const ourReadStream = fs.createReadStream(`${__dirname}/bigData.txt`);
    ourReadStream.pipe(res);
});

server.listen(4000);
console.log('listening on port 4000');
