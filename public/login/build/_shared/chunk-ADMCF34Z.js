var h = Object.create;
var e = Object.defineProperty;
var i = Object.getOwnPropertyDescriptor;
var j = Object.getOwnPropertyNames;
var k = Object.getPrototypeOf,
    l = Object.prototype.hasOwnProperty;
var m = (a => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(a, {
    get: (b, c) => (typeof require < "u" ? require : b)[c]
}) : a)(function(a) {
    if (typeof require < "u") return require.apply(this, arguments);
    throw new Error('Dynamic require of "' + a + '" is not supported')
});
var n = (a, b) => () => (a && (b = a(a = 0)), b);
var o = (a, b) => () => (b || a((b = {
        exports: {}
    }).exports, b), b.exports),
    p = (a, b) => {
        for (var c in b) e(a, c, {
            get: b[c],
            enumerable: !0
        })
    },
    g = (a, b, c, f) => {
        if (b && typeof b == "object" || typeof b == "function")
            for (let d of j(b)) !l.call(a, d) && d !== c && e(a, d, {
                get: () => b[d],
                enumerable: !(f = i(b, d)) || f.enumerable
            });
        return a
    };
var q = (a, b, c) => (c = a != null ? h(k(a)) : {}, g(b || !a || !a.__esModule ? e(c, "default", {
        value: a,
        enumerable: !0
    }) : c, a)),
    r = a => g(e({}, "__esModule", {
        value: !0
    }), a);
export {
    m as a, n as b, o as c, p as d, q as e, r as f
};