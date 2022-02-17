const handler = require('./index.js');
let obj = handler({name: 'jack'}, 'exception!');
console.log(obj.name());
console.log(obj.e.r.r.o.r());
console.log(obj.e.r.r.o.r('other exception!'));