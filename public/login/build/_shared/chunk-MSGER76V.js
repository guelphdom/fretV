import {
    c as x
} from "/build/_shared/chunk-ADMCF34Z.js";
var s = x((b, i) => {
    function h(n, d, l, t) {
        for (var u = n.length, e = l + (t ? 1 : -1); t ? e-- : ++e < u;)
            if (d(n[e], e, n)) return e;
        return -1
    }
    i.exports = h
});
export {
    s as a
};