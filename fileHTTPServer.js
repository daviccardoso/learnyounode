const http = require('http');
const fs = require('fs');
const port = process.argv[2];
const fileLocation = process.argv[3];

http.createServer((request, response) => {
    response.writeHead(200, { 'content-type': 'text/plain' });
    fs.createReadStream(fileLocation).pipe(response);
}).listen(port);
