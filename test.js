const handler = require('./index.js');
let obj = handler({name: 'jack', a: 0, b: null, c: undefined, d: NaN, e: false, f: ''}, 'exception!');
console.log(obj.name());
console.log(obj.e.r.r.o.r());
console.log(obj.e.r.r.o.r('other exception!'));
console.log(obj.a(), obj.b(), obj.c(), obj.d(), obj.e(), obj.f(), obj.dsf(), obj.name());