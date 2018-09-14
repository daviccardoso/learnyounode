let http = require('http');
let url = process.argv[2];

http.get(url, response => {
    let stream = '';
    
    response.setEncoding('utf8');
    response.on('data', data => {
        stream += data;
    });
    response.on('error', console.error);
    response.on('end', () => {
        console.log(stream.length);
        console.log(stream);
    });
}).on('error', console.error);
