const http = require('http');

const server = http.createServer((req, res) => {
    res.end(JSON.stringify('hello'))
});

server.listen(4000);