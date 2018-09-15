let net = require('net');
let port = process.argv[2];

net.createServer((socket) => {
    let now = new Date().toLocaleString();
    let formattedNow = now.substring(
        0,
        now.lastIndexOf(':'))
        .replace(/-(\d)\b/g, '-0$1')
        + '\n';
    socket.end(formattedNow);
}).listen(port);
