interface FuncProps <T> {
    [key: string]: () => T | any;
}
/**
 * simple exceptions handler for error when chained calling from object
 * @param {object} obj
 * @param {*} except_res
 * @returns {object} proxy object
 * @example
 	import handler from 'handsome-exception';
	let obj = handler({name: 'jack'}, 'exception!');
	console.log(obj.name()); // jack
	console.log(obj.name.a.b.c.d()); // exception!
 */
export default function handsome<T> (obj: object, except_res: T): FuncProps<T>;