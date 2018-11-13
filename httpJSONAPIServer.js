const http = require('http');
const url = require('url');
const port = process.argv[2];

const dateParser = {
    'parsetime': date => {
        return {
            'hour': date.getHours(),
            'minute': date.getMinutes(),
            'second': date.getSeconds()
        };
    },
    'unixtime': date => {
        return {
            'unixtime': date.getTime()
        };
    }
};

http.createServer((req, res) => {
    const parsedURL = url.parse(req.url, true);
    const parser = parsedURL.pathname.split('/')[2];

    if (!dateParser[parser]) {
        res.writeHead(404);
        return res.end();
    }

    const time = new Date(parsedURL.query.iso);
    const parsedTime = dateParser[parser](time);

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(parsedTime));
}).listen(port);
