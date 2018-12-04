function _proxy(obj, options) {
    return new Proxy(obj, {
		get: function(target, key) {
			return _proxy(new Object(target[key]));
		}
	});
}
module.exports = _proxy;