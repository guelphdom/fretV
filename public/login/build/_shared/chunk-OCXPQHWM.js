import {
    c as W
} from "/build/_shared/chunk-ADMCF34Z.js";
var _ = W((D, w) => {
    (function(f, o) {
        typeof D == "object" && typeof w < "u" ? w.exports = o() : typeof define == "function" && define.amd ? define(o) : (f = typeof globalThis < "u" ? globalThis : f || self).dayjs_plugin_duration = o()
    })(D, function() {
        "use strict";
        var f, o, v = 1e3,
            g = 6e4,
            p = 36e5,
            M = 864e5,
            P = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
            S = 31536e6,
            Y = 2628e6,
            T = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,
            m = {
                years: S,
                months: Y,
                days: M,
                hours: p,
                minutes: g,
                seconds: v,
                milliseconds: 1,
                weeks: 6048e5
            },
            y = function(n) {
                return n instanceof O
            },
            l = function(n, t, s) {
                return new O(n, s, t.$l)
            },
            $ = function(n) {
                return o.p(n) + "s"
            },
            H = function(n) {
                return n < 0
            },
            h = function(n) {
                return H(n) ? Math.ceil(n) : Math.floor(n)
            },
            F = function(n) {
                return Math.abs(n)
            },
            c = function(n, t) {
                return n ? H(n) ? {
                    negative: !0,
                    format: "" + F(n) + t
                } : {
                    negative: !1,
                    format: "" + n + t
                } : {
                    negative: !1,
                    format: ""
                }
            },
            O = function() {
                function n(s, i, r) {
                    var e = this;
                    if (this.$d = {}, this.$l = r, s === void 0 && (this.$ms = 0, this.parseFromMilliseconds()), i) return l(s * m[$(i)], this);
                    if (typeof s == "number") return this.$ms = s, this.parseFromMilliseconds(), this;
                    if (typeof s == "object") return Object.keys(s).forEach(function(a) {
                        e.$d[$(a)] = s[a]
                    }), this.calMilliseconds(), this;
                    if (typeof s == "string") {
                        var u = s.match(T);
                        if (u) {
                            var d = u.slice(2).map(function(a) {
                                return a != null ? Number(a) : 0
                            });
                            return this.$d.years = d[0], this.$d.months = d[1], this.$d.weeks = d[2], this.$d.days = d[3], this.$d.hours = d[4], this.$d.minutes = d[5], this.$d.seconds = d[6], this.calMilliseconds(), this
                        }
                    }
                    return this
                }
                var t = n.prototype;
                return t.calMilliseconds = function() {
                    var s = this;
                    this.$ms = Object.keys(this.$d).reduce(function(i, r) {
                        return i + (s.$d[r] || 0) * m[r]
                    }, 0)
                }, t.parseFromMilliseconds = function() {
                    var s = this.$ms;
                    this.$d.years = h(s / S), s %= S, this.$d.months = h(s / Y), s %= Y, this.$d.days = h(s / M), s %= M, this.$d.hours = h(s / p), s %= p, this.$d.minutes = h(s / g), s %= g, this.$d.seconds = h(s / v), s %= v, this.$d.milliseconds = s
                }, t.toISOString = function() {
                    var s = c(this.$d.years, "Y"),
                        i = c(this.$d.months, "M"),
                        r = +this.$d.days || 0;
                    this.$d.weeks && (r += 7 * this.$d.weeks);
                    var e = c(r, "D"),
                        u = c(this.$d.hours, "H"),
                        d = c(this.$d.minutes, "M"),
                        a = this.$d.seconds || 0;
                    this.$d.milliseconds && (a += this.$d.milliseconds / 1e3, a = Math.round(1e3 * a) / 1e3);
                    var b = c(a, "S"),
                        N = s.negative || i.negative || e.negative || u.negative || d.negative || b.negative,
                        I = u.format || d.format || b.format ? "T" : "",
                        k = (N ? "-" : "") + "P" + s.format + i.format + e.format + I + u.format + d.format + b.format;
                    return k === "P" || k === "-P" ? "P0D" : k
                }, t.toJSON = function() {
                    return this.toISOString()
                }, t.format = function(s) {
                    var i = s || "YYYY-MM-DDTHH:mm:ss",
                        r = {
                            Y: this.$d.years,
                            YY: o.s(this.$d.years, 2, "0"),
                            YYYY: o.s(this.$d.years, 4, "0"),
                            M: this.$d.months,
                            MM: o.s(this.$d.months, 2, "0"),
                            D: this.$d.days,
                            DD: o.s(this.$d.days, 2, "0"),
                            H: this.$d.hours,
                            HH: o.s(this.$d.hours, 2, "0"),
                            m: this.$d.minutes,
                            mm: o.s(this.$d.minutes, 2, "0"),
                            s: this.$d.seconds,
                            ss: o.s(this.$d.seconds, 2, "0"),
                            SSS: o.s(this.$d.milliseconds, 3, "0")
                        };
                    return i.replace(P, function(e, u) {
                        return u || String(r[e])
                    })
                }, t.as = function(s) {
                    return this.$ms / m[$(s)]
                }, t.get = function(s) {
                    var i = this.$ms,
                        r = $(s);
                    return r === "milliseconds" ? i %= 1e3 : i = r === "weeks" ? h(i / m[r]) : this.$d[r], i || 0
                }, t.add = function(s, i, r) {
                    var e;
                    return e = i ? s * m[$(i)] : y(s) ? s.$ms : l(s, this).$ms, l(this.$ms + e * (r ? -1 : 1), this)
                }, t.subtract = function(s, i) {
                    return this.add(s, i, !0)
                }, t.locale = function(s) {
                    var i = this.clone();
                    return i.$l = s, i
                }, t.clone = function() {
                    return l(this.$ms, this)
                }, t.humanize = function(s) {
                    return f().add(this.$ms, "ms").locale(this.$l).fromNow(!s)
                }, t.valueOf = function() {
                    return this.asMilliseconds()
                }, t.milliseconds = function() {
                    return this.get("milliseconds")
                }, t.asMilliseconds = function() {
                    return this.as("milliseconds")
                }, t.seconds = function() {
                    return this.get("seconds")
                }, t.asSeconds = function() {
                    return this.as("seconds")
                }, t.minutes = function() {
                    return this.get("minutes")
                }, t.asMinutes = function() {
                    return this.as("minutes")
                }, t.hours = function() {
                    return this.get("hours")
                }, t.asHours = function() {
                    return this.as("hours")
                }, t.days = function() {
                    return this.get("days")
                }, t.asDays = function() {
                    return this.as("days")
                }, t.weeks = function() {
                    return this.get("weeks")
                }, t.asWeeks = function() {
                    return this.as("weeks")
                }, t.months = function() {
                    return this.get("months")
                }, t.asMonths = function() {
                    return this.as("months")
                }, t.years = function() {
                    return this.get("years")
                }, t.asYears = function() {
                    return this.as("years")
                }, n
            }(),
            j = function(n, t, s) {
                return n.add(t.years() * s, "y").add(t.months() * s, "M").add(t.days() * s, "d").add(t.hours() * s, "h").add(t.minutes() * s, "m").add(t.seconds() * s, "s").add(t.milliseconds() * s, "ms")
            };
        return function(n, t, s) {
            f = s, o = s().$utils(), s.duration = function(e, u) {
                var d = s.locale();
                return l(e, {
                    $l: d
                }, u)
            }, s.isDuration = y;
            var i = t.prototype.add,
                r = t.prototype.subtract;
            t.prototype.add = function(e, u) {
                return y(e) ? j(this, e, 1) : i.bind(this)(e, u)
            }, t.prototype.subtract = function(e, u) {
                return y(e) ? j(this, e, -1) : r.bind(this)(e, u)
            }
        }
    })
});
export {
    _ as a
};