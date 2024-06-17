import {
    c as y
} from "/build/_shared/chunk-ADMCF34Z.js";
var M = y((l, $) => {
    (function(f, u) {
        typeof l == "object" && typeof $ < "u" ? $.exports = u() : typeof define == "function" && define.amd ? define(u) : (f = typeof globalThis < "u" ? globalThis : f || self).dayjs_plugin_utc = u()
    })(l, function() {
        "use strict";
        var f = "minute",
            u = /[+-]\d\d(?::?\d\d)?/g,
            D = /([+-]|\d\d)/g;
        return function(Y, d, n) {
            var i = d.prototype;
            n.utc = function(t) {
                var e = {
                    date: t,
                    utc: !0,
                    args: arguments
                };
                return new d(e)
            }, i.utc = function(t) {
                var e = n(this.toDate(), {
                    locale: this.$L,
                    utc: !0
                });
                return t ? e.add(this.utcOffset(), f) : e
            }, i.local = function() {
                return n(this.toDate(), {
                    locale: this.$L,
                    utc: !1
                })
            };
            var T = i.parse;
            i.parse = function(t) {
                t.utc && (this.$u = !0), this.$utils().u(t.$offset) || (this.$offset = t.$offset), T.call(this, t)
            };
            var O = i.init;
            i.init = function() {
                if (this.$u) {
                    var t = this.$d;
                    this.$y = t.getUTCFullYear(), this.$M = t.getUTCMonth(), this.$D = t.getUTCDate(), this.$W = t.getUTCDay(), this.$H = t.getUTCHours(), this.$m = t.getUTCMinutes(), this.$s = t.getUTCSeconds(), this.$ms = t.getUTCMilliseconds()
                } else O.call(this)
            };
            var p = i.utcOffset;
            i.utcOffset = function(t, e) {
                var r = this.$utils().u;
                if (r(t)) return this.$u ? 0 : r(this.$offset) ? p.call(this) : this.$offset;
                if (typeof t == "string" && (t = function(a) {
                        a === void 0 && (a = "");
                        var m = a.match(u);
                        if (!m) return null;
                        var h = ("" + m[0]).match(D) || ["-", 0, 0],
                            U = h[0],
                            c = 60 * +h[1] + +h[2];
                        return c === 0 ? 0 : U === "+" ? c : -c
                    }(t), t === null)) return this;
                var o = Math.abs(t) <= 16 ? 60 * t : t,
                    s = this;
                if (e) return s.$offset = o, s.$u = t === 0, s;
                if (t !== 0) {
                    var v = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
                    (s = this.local().add(o + v, f)).$offset = o, s.$x.$localOffset = v
                } else s = this.utc();
                return s
            };
            var C = i.format;
            i.format = function(t) {
                var e = t || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
                return C.call(this, e)
            }, i.valueOf = function() {
                var t = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || this.$d.getTimezoneOffset());
                return this.$d.valueOf() - 6e4 * t
            }, i.isUTC = function() {
                return !!this.$u
            }, i.toISOString = function() {
                return this.toDate().toISOString()
            }, i.toString = function() {
                return this.toDate().toUTCString()
            };
            var S = i.toDate;
            i.toDate = function(t) {
                return t === "s" && this.$offset ? n(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : S.call(this)
            };
            var g = i.diff;
            i.diff = function(t, e, r) {
                if (t && this.$u === t.$u) return g.call(this, t, e, r);
                var o = this.local(),
                    s = n(t).local();
                return g.call(o, s, e, r)
            }
        }
    })
});
export {
    M as a
};