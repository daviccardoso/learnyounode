const http = require('http');
const url = require('url');
const port = process.argv[2];

const dateParser = {
    '/api/parsetime': (date) => {
        return {
            'hour': date.getHours(),
            'minute': date.getMinutes(),
            'second': date.getSeconds()
        };
    },
    '/api/unixtime': (date) => {
        return {
            'unixtime': date.getTime()
        };
    }
};

http.createServer((req, res) => {
    const parsedURL = url.parse(req.url, true);
    const parser = parsedURL.pathname;

    if (!parser in dateParser) {
        res.writeHead(404);
        return res.end();
    }

    const time = new Date(parsedURL.query.iso);
    const parsedTime = dateParser[parser](time);

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify(parsedTime));
    res.end();
}).listen(port);
