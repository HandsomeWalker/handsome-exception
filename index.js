function handsome(target, options) {
    let res, handler = {
        get: function(t, k) {
            let r;
            try {
                r = Reflect.get(t, k);
            }catch(e) {
                r = undefined;
            }
            return r;
        }
    };
    res = new Proxy(target, handler);
    return res;
}
module.exports = handsome;