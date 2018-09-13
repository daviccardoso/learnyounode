let sum = process.argv.slice(2).reduce((previous, current) => previous + +current, 0);
console.log(sum);
