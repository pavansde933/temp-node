const _ = require('lodash');

const item = [1,[2,[3,[4]]]];
console.log(item);

const newitem = _.flattenDeep(item)

console.log(newitem);

