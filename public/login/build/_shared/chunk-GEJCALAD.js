import {
    b as e
} from "/build/_shared/chunk-ADMCF34Z.js";

function o(r) {
    return o = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, o(r)
}
var i = e(() => {});

function n(r, t) {
    if (o(r) != "object" || !r) return r;
    var f = r[Symbol.toPrimitive];
    if (f !== void 0) {
        var u = f.call(r, t || "default");
        if (o(u) != "object") return u;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(r)
}
var m = e(() => {
    i()
});

function y(r) {
    var t = n(r, "string");
    return o(t) == "symbol" ? t : String(t)
}
var p = e(() => {
    i();
    m()
});
export {
    y as a, p as b
};