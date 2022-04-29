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
function handsomeException(obj, except_res) {
	let handler = {
		_flag: false,
		get: (target, key) => {
			let val
			if (target() == undefined) {
				handler._flag = true
			}else {
				val = target()[key]
			}
			return new Proxy(() => val, handler)
		},
		apply: (target, proxy, args) => {
			let res = target()
			if (handler._flag) {
				if (args.length) {
					res = args[0]
				} else {
					res = except_res
				}
				handler._flag = false;
			}
			return res
		}
	};
	return new Proxy(() => obj, handler)
}
module.exports = handsomeException