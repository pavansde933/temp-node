const path = require('path');

console.log(path.sep);

const filepath = path.join('/content', 'subfolder', 'test.txt');
console.log(filepath);

const base = path.basename(filepath);
console.log('----');
console.log(base);

const abspath = path.resolve(__dirname,'content', 'subfolder', 'test.txt');
console.log('----');
console.log(abspath);