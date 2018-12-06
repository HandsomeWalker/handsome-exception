/**
 * exception handler
 * @param {object} obj
 * @param {*} except_res
 */
function handsome(obj, except_res) {
	let handler = {
			get: (target, key) => {
					let val = target()[key] || except_res || '';
					return new Proxy(() => val, handler);
			},
			apply: (target) => {
					return target();
			}
	};
	return new Proxy(() => obj, handler)
}
module.exports = handsome;