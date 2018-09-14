let fs = require('fs');
let path = require('path');

function listFiles(dir, ext, callback) {
    fs.readdir(dir, (err, data) => {
        if (err) return callback(err);
        callback(null, data.filter((file) =>
            path.extname(file) === `.${ext}`
        ));
    });
}

module.exports = listFiles;
