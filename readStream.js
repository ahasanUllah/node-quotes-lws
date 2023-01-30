const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('<html><head><title>Form</title></head>');
        res.write(
            '<body><form method="post" action="/process"><input name="message" /></form></body>'
        );
        res.end();
    } else if (req.url === '/process' && req.method === 'POST') {
        req.on('data', (chunk) => {
            console.log(chunk);
        });
        res.write('this is process page');
        res.end();
    } else {
        res.write('not found');
        res.end();
    }
});
server.listen(3000);
console.log('server is running on port 3000');
