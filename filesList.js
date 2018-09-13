let fs = require('fs');
let path = process.argv[2];
let extension = '.' + process.argv[3];

fs.readdir(path, (err, list) => {
    if (!err) {
        list.filter(
            (fileName) => fileName
            .includes(extension))
            .forEach((file) => console.log(file));
    }
})
