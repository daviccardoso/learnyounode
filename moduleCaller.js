let firstModule = require('./firstModule');
let dir = process.argv[2];
let ext = process.argv[3];

firstModule(dir, ext, (err, data) => {
    if (err) console.error(err);
    data.forEach((file) => console.log(file));
});
