let http = require('http');
let urls = process.argv.slice(2);
let result = [];
let count = 0;

function getDataFromURL(index) {
    http.get(urls[index], response => {
        let stream = '';

        response.setEncoding('utf8');
        response.on('error', console.error);
        response.on('data', data => stream += data);
        response.on('end', () => {
            result[index] = stream;
            count++;
            if (count === urls.length) printResult();
        });
    });
}

function printResult() {
    result.forEach(result => console.log(result));
}

urls.forEach((url, index) => getDataFromURL(index));