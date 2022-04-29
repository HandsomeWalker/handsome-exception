/**
 * simple exceptions handler for error when chained calling from object
 * @param {object} obj
 * @param {*} except_res
 * @returns {object} proxy object
 * @example
 	import handsomeException from 'handsome-exception';
	let obj = handsomeException({name: 'jack'}, 'exception!');
	console.log(obj.name()); // jack
	console.log(obj.name.a.b.c.d()); // exception!
	console.log(obj.e.r.r.o.r('other exception!')); // other exception!
 */
export default function handsomeException<T = any> (obj: any, except_res?: any): T;