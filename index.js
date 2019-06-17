/**
 * exception handler
 * @param {object} obj
 * @param {*} except_res
 */
function handsome(obj, except_res) {
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
		apply: (target) => {
			let res = target()
			if (handler._flag) {
				res = except_res
			}
			return res
		}
	};
	return new Proxy(() => obj, handler)
}
module.exports = handsome