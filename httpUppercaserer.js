const http = require('http');
const port = process.argv[2];

http.createServer((req, res) => {
    if (req.method !== 'POST') {
        return res.end('O método da requisição deve ser POST.');
    }

    let requestBody = '';

    req.on('data', chunk => requestBody += chunk.toString());
    req.on('end', () => {
        res.writeHead(200, { 'content-type': 'text/plain' });
        res.write(requestBody.toUpperCase());
        res.end();
    });
}).listen(port);
