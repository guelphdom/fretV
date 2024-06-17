import {
    c as Up,
    l as di,
    n as Hp
} from "/build/_shared/chunk-PBT6S77D.js";
import {
    a as zp
} from "/build/_shared/chunk-MSGER76V.js";
import {
    a as Yp,
    b as Ns,
    ja as Xs,
    rb as Gp
} from "/build/_shared/chunk-MGB3JPCV.js";
import {
    b as Vp
} from "/build/_shared/chunk-PIJMKZDS.js";
import {
    c as Bp
} from "/build/_shared/chunk-KKTF54FB.js";
import {
    b as Np,
    f as Xp,
    k as Bs
} from "/build/_shared/chunk-2SDAKG4K.js";
import {
    b,
    c as ce,
    e as Nr
} from "/build/_shared/chunk-ADMCF34Z.js";
var Vs = ce((yb, Ys) => {
    var Wp = Bs();

    function qp() {
        var t = arguments,
            e = Wp(t[0]);
        return t.length < 3 ? e : e.replace(t[1], t[2])
    }
    Ys.exports = qp
});

function J(t, e, r, n) {
    function a(i) {
        return t(i = arguments.length === 0 ? new Date : new Date(+i)), i
    }
    return a.floor = i => (t(i = new Date(+i)), i), a.ceil = i => (t(i = new Date(i - 1)), e(i, 1), t(i), i), a.round = i => {
        let o = a(i),
            s = a.ceil(i);
        return i - o < s - i ? o : s
    }, a.offset = (i, o) => (e(i = new Date(+i), o == null ? 1 : Math.floor(o)), i), a.range = (i, o, s) => {
        let l = [];
        if (i = a.ceil(i), s = s == null ? 1 : Math.floor(s), !(i < o) || !(s > 0)) return l;
        let c;
        do l.push(c = new Date(+i)), e(i, s), t(i); while (c < i && i < o);
        return l
    }, a.filter = i => J(o => {
        if (o >= o)
            for (; t(o), !i(o);) o.setTime(o - 1)
    }, (o, s) => {
        if (o >= o)
            if (s < 0)
                for (; ++s <= 0;)
                    for (; e(o, -1), !i(o););
            else
                for (; --s >= 0;)
                    for (; e(o, 1), !i(o););
    }), r && (a.count = (i, o) => (hi.setTime(+i), pi.setTime(+o), t(hi), t(pi), Math.floor(r(hi, pi))), a.every = i => (i = Math.floor(i), !isFinite(i) || !(i > 0) ? null : i > 1 ? a.filter(n ? o => n(o) % i === 0 : o => a.count(0, o) % i === 0) : a)), a
}
var hi, pi, ue = b(() => {
    hi = new Date, pi = new Date
});
var Br, wb, Gs = b(() => {
    ue();
    Br = J(() => {}, (t, e) => {
        t.setTime(+t + e)
    }, (t, e) => e - t);
    Br.every = t => (t = Math.floor(t), !isFinite(t) || !(t > 0) ? null : t > 1 ? J(e => {
        e.setTime(Math.floor(e / t) * t)
    }, (e, r) => {
        e.setTime(+e + r * t)
    }, (e, r) => (r - e) / t) : Br);
    wb = Br.range
});
var Vt, Us, gi = b(() => {
    ue();
    Vt = J(t => {
        t.setTime(t - t.getMilliseconds())
    }, (t, e) => {
        t.setTime(+t + e * 1e3)
    }, (t, e) => (e - t) / 1e3, t => t.getUTCSeconds()), Us = Vt.range
});
var lr, Zp, cr, jp, vi = b(() => {
    ue();
    lr = J(t => {
        t.setTime(t - t.getMilliseconds() - t.getSeconds() * 1e3)
    }, (t, e) => {
        t.setTime(+t + e * 6e4)
    }, (t, e) => (e - t) / 6e4, t => t.getMinutes()), Zp = lr.range, cr = J(t => {
        t.setUTCSeconds(0, 0)
    }, (t, e) => {
        t.setTime(+t + e * 6e4)
    }, (t, e) => (e - t) / 6e4, t => t.getUTCMinutes()), jp = cr.range
});
var ur, Kp, fr, Qp, mi = b(() => {
    ue();
    ur = J(t => {
        t.setTime(t - t.getMilliseconds() - t.getSeconds() * 1e3 - t.getMinutes() * 6e4)
    }, (t, e) => {
        t.setTime(+t + e * 36e5)
    }, (t, e) => (e - t) / 36e5, t => t.getHours()), Kp = ur.range, fr = J(t => {
        t.setUTCMinutes(0, 0, 0)
    }, (t, e) => {
        t.setTime(+t + e * 36e5)
    }, (t, e) => (e - t) / 36e5, t => t.getUTCHours()), Qp = fr.range
});
var fe, Jp, Fe, tg, Yn, eg, xi = b(() => {
    ue();
    fe = J(t => t.setHours(0, 0, 0, 0), (t, e) => t.setDate(t.getDate() + e), (t, e) => (e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * 6e4) / 864e5, t => t.getDate() - 1), Jp = fe.range, Fe = J(t => {
        t.setUTCHours(0, 0, 0, 0)
    }, (t, e) => {
        t.setUTCDate(t.getUTCDate() + e)
    }, (t, e) => (e - t) / 864e5, t => t.getUTCDate() - 1), tg = Fe.range, Yn = J(t => {
        t.setUTCHours(0, 0, 0, 0)
    }, (t, e) => {
        t.setUTCDate(t.getUTCDate() + e)
    }, (t, e) => (e - t) / 864e5, t => Math.floor(t / 864e5)), eg = Yn.range
});

function ze(t) {
    return J(e => {
        e.setDate(e.getDate() - (e.getDay() + 7 - t) % 7), e.setHours(0, 0, 0, 0)
    }, (e, r) => {
        e.setDate(e.getDate() + r * 7)
    }, (e, r) => (r - e - (r.getTimezoneOffset() - e.getTimezoneOffset()) * 6e4) / 6048e5)
}

function Ne(t) {
    return J(e => {
        e.setUTCDate(e.getUTCDate() - (e.getUTCDay() + 7 - t) % 7), e.setUTCHours(0, 0, 0, 0)
    }, (e, r) => {
        e.setUTCDate(e.getUTCDate() + r * 7)
    }, (e, r) => (r - e) / 6048e5)
}
var de, dr, Ws, qs, ye, Zs, js, Ks, rg, ng, ag, ig, og, sg, he, hr, Qs, Js, be, tl, el, rl, lg, cg, ug, fg, dg, hg, _i = b(() => {
    ue();
    de = ze(0), dr = ze(1), Ws = ze(2), qs = ze(3), ye = ze(4), Zs = ze(5), js = ze(6), Ks = de.range, rg = dr.range, ng = Ws.range, ag = qs.range, ig = ye.range, og = Zs.range, sg = js.range;
    he = Ne(0), hr = Ne(1), Qs = Ne(2), Js = Ne(3), be = Ne(4), tl = Ne(5), el = Ne(6), rl = he.range, lg = hr.range, cg = Qs.range, ug = Js.range, fg = be.range, dg = tl.range, hg = el.range
});
var pr, pg, gr, gg, yi = b(() => {
    ue();
    pr = J(t => {
        t.setDate(1), t.setHours(0, 0, 0, 0)
    }, (t, e) => {
        t.setMonth(t.getMonth() + e)
    }, (t, e) => e.getMonth() - t.getMonth() + (e.getFullYear() - t.getFullYear()) * 12, t => t.getMonth()), pg = pr.range, gr = J(t => {
        t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0)
    }, (t, e) => {
        t.setUTCMonth(t.getUTCMonth() + e)
    }, (t, e) => e.getUTCMonth() - t.getUTCMonth() + (e.getUTCFullYear() - t.getUTCFullYear()) * 12, t => t.getUTCMonth()), gg = gr.range
});
var Nt, vg, Bt, mg, bi = b(() => {
    ue();
    Nt = J(t => {
        t.setMonth(0, 1), t.setHours(0, 0, 0, 0)
    }, (t, e) => {
        t.setFullYear(t.getFullYear() + e)
    }, (t, e) => e.getFullYear() - t.getFullYear(), t => t.getFullYear());
    Nt.every = t => !isFinite(t = Math.floor(t)) || !(t > 0) ? null : J(e => {
        e.setFullYear(Math.floor(e.getFullYear() / t) * t), e.setMonth(0, 1), e.setHours(0, 0, 0, 0)
    }, (e, r) => {
        e.setFullYear(e.getFullYear() + r * t)
    });
    vg = Nt.range, Bt = J(t => {
        t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0)
    }, (t, e) => {
        t.setUTCFullYear(t.getUTCFullYear() + e)
    }, (t, e) => e.getUTCFullYear() - t.getUTCFullYear(), t => t.getUTCFullYear());
    Bt.every = t => !isFinite(t = Math.floor(t)) || !(t > 0) ? null : J(e => {
        e.setUTCFullYear(Math.floor(e.getUTCFullYear() / t) * t), e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0)
    }, (e, r) => {
        e.setUTCFullYear(e.getUTCFullYear() + r * t)
    });
    mg = Bt.range
});

function Be(t, e) {
    return t == null || e == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN
}
var Ti = b(() => {});

function wi(t, e) {
    return t == null || e == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN
}
var nl = b(() => {});

function Xe(t) {
    let e, r, n;
    t.length !== 2 ? (e = Be, r = (s, l) => Be(t(s), l), n = (s, l) => t(s) - l) : (e = t === Be || t === wi ? t : xg, r = t, n = t);

    function a(s, l, c = 0, u = s.length) {
        if (c < u) {
            if (e(l, l) !== 0) return u;
            do {
                let f = c + u >>> 1;
                r(s[f], l) < 0 ? c = f + 1 : u = f
            } while (c < u)
        }
        return c
    }

    function i(s, l, c = 0, u = s.length) {
        if (c < u) {
            if (e(l, l) !== 0) return u;
            do {
                let f = c + u >>> 1;
                r(s[f], l) <= 0 ? c = f + 1 : u = f
            } while (c < u)
        }
        return c
    }

    function o(s, l, c = 0, u = s.length) {
        let f = a(s, l, c, u - 1);
        return f > c && n(s[f - 1], l) > -n(s[f], l) ? f - 1 : f
    }
    return {
        left: a,
        center: o,
        right: i
    }
}

function xg() {
    return 0
}
var $i = b(() => {
    Ti();
    nl()
});

function Ai(t) {
    return t === null ? NaN : +t
}
var al = b(() => {});
var il, ol, _g, yg, Si, sl = b(() => {
    Ti();
    $i();
    al();
    il = Xe(Be), ol = il.right, _g = il.left, yg = Xe(Ai).center, Si = ol
});

function ll({
    _intern: t,
    _key: e
}, r) {
    let n = e(r);
    return t.has(n) ? t.get(n) : r
}

function bg({
    _intern: t,
    _key: e
}, r) {
    let n = e(r);
    return t.has(n) ? t.get(n) : (t.set(n, r), r)
}

function Tg({
    _intern: t,
    _key: e
}, r) {
    let n = e(r);
    return t.has(n) && (r = t.get(n), t.delete(n)), r
}

function wg(t) {
    return t !== null && typeof t == "object" ? t.valueOf() : t
}
var vr, cl = b(() => {
    vr = class extends Map {
        constructor(e, r = wg) {
            if (super(), Object.defineProperties(this, {
                    _intern: {
                        value: new Map
                    },
                    _key: {
                        value: r
                    }
                }), e != null)
                for (let [n, a] of e) this.set(n, a)
        }
        get(e) {
            return super.get(ll(this, e))
        }
        has(e) {
            return super.has(ll(this, e))
        }
        set(e, r) {
            return super.set(bg(this, e), r)
        }
        delete(e) {
            return super.delete(Tg(this, e))
        }
    }
});

function Vn(t, e, r) {
    let n = (e - t) / Math.max(0, r),
        a = Math.floor(Math.log10(n)),
        i = n / Math.pow(10, a),
        o = i >= $g ? 10 : i >= Ag ? 5 : i >= Sg ? 2 : 1,
        s, l, c;
    return a < 0 ? (c = Math.pow(10, -a) / o, s = Math.round(t * c), l = Math.round(e * c), s / c < t && ++s, l / c > e && --l, c = -c) : (c = Math.pow(10, a) * o, s = Math.round(t / c), l = Math.round(e / c), s * c < t && ++s, l * c > e && --l), l < s && .5 <= r && r < 2 ? Vn(t, e, r * 2) : [s, l, c]
}

function Ye(t, e, r) {
    if (e = +e, t = +t, r = +r, !(r > 0)) return [];
    if (t === e) return [t];
    let n = e < t,
        [a, i, o] = n ? Vn(e, t, r) : Vn(t, e, r);
    if (!(i >= a)) return [];
    let s = i - a + 1,
        l = new Array(s);
    if (n)
        if (o < 0)
            for (let c = 0; c < s; ++c) l[c] = (i - c) / -o;
        else
            for (let c = 0; c < s; ++c) l[c] = (i - c) * o;
    else if (o < 0)
        for (let c = 0; c < s; ++c) l[c] = (a + c) / -o;
    else
        for (let c = 0; c < s; ++c) l[c] = (a + c) * o;
    return l
}

function Yr(t, e, r) {
    return e = +e, t = +t, r = +r, Vn(t, e, r)[2]
}

function mr(t, e, r) {
    e = +e, t = +t, r = +r;
    let n = e < t,
        a = n ? Yr(e, t, r) : Yr(t, e, r);
    return (n ? -1 : 1) * (a < 0 ? 1 / -a : a)
}
var $g, Ag, Sg, ul = b(() => {
    $g = Math.sqrt(50), Ag = Math.sqrt(10), Sg = Math.sqrt(2)
});
var Ve = b(() => {
    sl();
    $i();
    ul();
    cl()
});

function dl(t, e, r, n, a, i) {
    let o = [
        [Vt, 1, 1e3],
        [Vt, 5, 5 * 1e3],
        [Vt, 15, 15 * 1e3],
        [Vt, 30, 30 * 1e3],
        [i, 1, 6e4],
        [i, 5, 5 * 6e4],
        [i, 15, 15 * 6e4],
        [i, 30, 30 * 6e4],
        [a, 1, 36e5],
        [a, 3, 3 * 36e5],
        [a, 6, 6 * 36e5],
        [a, 12, 12 * 36e5],
        [n, 1, 864e5],
        [n, 2, 2 * 864e5],
        [r, 1, 6048e5],
        [e, 1, 2592e6],
        [e, 3, 3 * 2592e6],
        [t, 1, 31536e6]
    ];

    function s(c, u, f) {
        let d = u < c;
        d && ([c, u] = [u, c]);
        let h = f && typeof f.range == "function" ? f : l(c, u, f),
            p = h ? h.range(c, +u + 1) : [];
        return d ? p.reverse() : p
    }

    function l(c, u, f) {
        let d = Math.abs(u - c) / f,
            h = Xe(([, , m]) => m).right(o, d);
        if (h === o.length) return t.every(mr(c / 31536e6, u / 31536e6, f));
        if (h === 0) return Br.every(Math.max(mr(c, u, f), 1));
        let [p, g] = o[d / o[h - 1][2] < o[h][2] / d ? h - 1 : h];
        return p.every(g)
    }
    return [s, l]
}
var ki, Ci, Ri, Mi, hl = b(() => {
    Ve();
    Gs();
    gi();
    vi();
    mi();
    xi();
    _i();
    yi();
    bi();
    [ki, Ci] = dl(Bt, gr, he, Yn, fr, cr), [Ri, Mi] = dl(Nt, pr, de, fe, ur, lr)
});
var Gn = b(() => {
    gi();
    vi();
    mi();
    xi();
    _i();
    yi();
    bi();
    hl()
});

function Ei(t) {
    if (0 <= t.y && t.y < 100) {
        var e = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
        return e.setFullYear(t.y), e
    }
    return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L)
}

function Li(t) {
    if (0 <= t.y && t.y < 100) {
        var e = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
        return e.setUTCFullYear(t.y), e
    }
    return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L))
}

function Vr(t, e, r) {
    return {
        y: t,
        m: e,
        d: r,
        H: 0,
        M: 0,
        S: 0,
        L: 0
    }
}

function Ii(t) {
    var e = t.dateTime,
        r = t.date,
        n = t.time,
        a = t.periods,
        i = t.days,
        o = t.shortDays,
        s = t.months,
        l = t.shortMonths,
        c = Gr(a),
        u = Ur(a),
        f = Gr(i),
        d = Ur(i),
        h = Gr(o),
        p = Ur(o),
        g = Gr(s),
        m = Ur(s),
        v = Gr(l),
        x = Ur(l),
        y = {
            a: I,
            A: B,
            b: F,
            B: it,
            c: null,
            d: _l,
            e: _l,
            f: jg,
            g: ov,
            G: lv,
            H: Wg,
            I: qg,
            j: Zg,
            L: $l,
            m: Kg,
            M: Qg,
            p: ht,
            q: Et,
            Q: Tl,
            s: wl,
            S: Jg,
            u: tv,
            U: ev,
            V: rv,
            w: nv,
            W: av,
            x: null,
            X: null,
            y: iv,
            Y: sv,
            Z: cv,
            "%": bl
        },
        _ = {
            a: Yt,
            A: W,
            b: pt,
            B: Ft,
            c: null,
            d: yl,
            e: yl,
            f: hv,
            g: wv,
            G: Av,
            H: uv,
            I: fv,
            j: dv,
            L: Sl,
            m: pv,
            M: gv,
            p: kt,
            q: Ie,
            Q: Tl,
            s: wl,
            S: vv,
            u: mv,
            U: xv,
            V: _v,
            w: yv,
            W: bv,
            x: null,
            X: null,
            y: Tv,
            Y: $v,
            Z: Sv,
            "%": bl
        },
        w = {
            a: R,
            A,
            b: L,
            B: S,
            c: E,
            d: ml,
            e: ml,
            f: Vg,
            g: vl,
            G: gl,
            H: xl,
            I: xl,
            j: Ng,
            L: Yg,
            m: zg,
            M: Bg,
            p: M,
            q: Fg,
            Q: Ug,
            s: Hg,
            S: Xg,
            u: Lg,
            U: Ig,
            V: Dg,
            w: Eg,
            W: Og,
            x: rt,
            X: O,
            y: vl,
            Y: gl,
            Z: Pg,
            "%": Gg
        };
    y.x = T(r, y), y.X = T(n, y), y.c = T(e, y), _.x = T(r, _), _.X = T(n, _), _.c = T(e, _);

    function T(D, N) {
        return function(V) {
            var k = [],
                Lt = -1,
                j = 0,
                Ct = D.length,
                zt, De, zs;
            for (V instanceof Date || (V = new Date(+V)); ++Lt < Ct;) D.charCodeAt(Lt) === 37 && (k.push(D.slice(j, Lt)), (De = pl[zt = D.charAt(++Lt)]) != null ? zt = D.charAt(++Lt) : De = zt === "e" ? " " : "0", (zs = N[zt]) && (zt = zs(V, De)), k.push(zt), j = Lt + 1);
            return k.push(D.slice(j, Lt)), k.join("")
        }
    }

    function $(D, N) {
        return function(V) {
            var k = Vr(1900, void 0, 1),
                Lt = C(k, D, V += "", 0),
                j, Ct;
            if (Lt != V.length) return null;
            if ("Q" in k) return new Date(k.Q);
            if ("s" in k) return new Date(k.s * 1e3 + ("L" in k ? k.L : 0));
            if (N && !("Z" in k) && (k.Z = 0), "p" in k && (k.H = k.H % 12 + k.p * 12), k.m === void 0 && (k.m = "q" in k ? k.q : 0), "V" in k) {
                if (k.V < 1 || k.V > 53) return null;
                "w" in k || (k.w = 1), "Z" in k ? (j = Li(Vr(k.y, 0, 1)), Ct = j.getUTCDay(), j = Ct > 4 || Ct === 0 ? hr.ceil(j) : hr(j), j = Fe.offset(j, (k.V - 1) * 7), k.y = j.getUTCFullYear(), k.m = j.getUTCMonth(), k.d = j.getUTCDate() + (k.w + 6) % 7) : (j = Ei(Vr(k.y, 0, 1)), Ct = j.getDay(), j = Ct > 4 || Ct === 0 ? dr.ceil(j) : dr(j), j = fe.offset(j, (k.V - 1) * 7), k.y = j.getFullYear(), k.m = j.getMonth(), k.d = j.getDate() + (k.w + 6) % 7)
            } else("W" in k || "U" in k) && ("w" in k || (k.w = "u" in k ? k.u % 7 : "W" in k ? 1 : 0), Ct = "Z" in k ? Li(Vr(k.y, 0, 1)).getUTCDay() : Ei(Vr(k.y, 0, 1)).getDay(), k.m = 0, k.d = "W" in k ? (k.w + 6) % 7 + k.W * 7 - (Ct + 5) % 7 : k.w + k.U * 7 - (Ct + 6) % 7);
            return "Z" in k ? (k.H += k.Z / 100 | 0, k.M += k.Z % 100, Li(k)) : Ei(k)
        }
    }

    function C(D, N, V, k) {
        for (var Lt = 0, j = N.length, Ct = V.length, zt, De; Lt < j;) {
            if (k >= Ct) return -1;
            if (zt = N.charCodeAt(Lt++), zt === 37) {
                if (zt = N.charAt(Lt++), De = w[zt in pl ? N.charAt(Lt++) : zt], !De || (k = De(D, V, k)) < 0) return -1
            } else if (zt != V.charCodeAt(k++)) return -1
        }
        return k
    }

    function M(D, N, V) {
        var k = c.exec(N.slice(V));
        return k ? (D.p = u.get(k[0].toLowerCase()), V + k[0].length) : -1
    }

    function R(D, N, V) {
        var k = h.exec(N.slice(V));
        return k ? (D.w = p.get(k[0].toLowerCase()), V + k[0].length) : -1
    }

    function A(D, N, V) {
        var k = f.exec(N.slice(V));
        return k ? (D.w = d.get(k[0].toLowerCase()), V + k[0].length) : -1
    }

    function L(D, N, V) {
        var k = v.exec(N.slice(V));
        return k ? (D.m = x.get(k[0].toLowerCase()), V + k[0].length) : -1
    }

    function S(D, N, V) {
        var k = g.exec(N.slice(V));
        return k ? (D.m = m.get(k[0].toLowerCase()), V + k[0].length) : -1
    }

    function E(D, N, V) {
        return C(D, e, N, V)
    }

    function rt(D, N, V) {
        return C(D, r, N, V)
    }

    function O(D, N, V) {
        return C(D, n, N, V)
    }

    function I(D) {
        return o[D.getDay()]
    }

    function B(D) {
        return i[D.getDay()]
    }

    function F(D) {
        return l[D.getMonth()]
    }

    function it(D) {
        return s[D.getMonth()]
    }

    function ht(D) {
        return a[+(D.getHours() >= 12)]
    }

    function Et(D) {
        return 1 + ~~(D.getMonth() / 3)
    }

    function Yt(D) {
        return o[D.getUTCDay()]
    }

    function W(D) {
        return i[D.getUTCDay()]
    }

    function pt(D) {
        return l[D.getUTCMonth()]
    }

    function Ft(D) {
        return s[D.getUTCMonth()]
    }

    function kt(D) {
        return a[+(D.getUTCHours() >= 12)]
    }

    function Ie(D) {
        return 1 + ~~(D.getUTCMonth() / 3)
    }
    return {
        format: function(D) {
            var N = T(D += "", y);
            return N.toString = function() {
                return D
            }, N
        },
        parse: function(D) {
            var N = $(D += "", !1);
            return N.toString = function() {
                return D
            }, N
        },
        utcFormat: function(D) {
            var N = T(D += "", _);
            return N.toString = function() {
                return D
            }, N
        },
        utcParse: function(D) {
            var N = $(D += "", !0);
            return N.toString = function() {
                return D
            }, N
        }
    }
}

function q(t, e, r) {
    var n = t < 0 ? "-" : "",
        a = (n ? -t : t) + "",
        i = a.length;
    return n + (i < r ? new Array(r - i + 1).join(e) + a : a)
}

function Mg(t) {
    return t.replace(Rg, "\\$&")
}

function Gr(t) {
    return new RegExp("^(?:" + t.map(Mg).join("|") + ")", "i")
}

function Ur(t) {
    return new Map(t.map((e, r) => [e.toLowerCase(), r]))
}

function Eg(t, e, r) {
    var n = xt.exec(e.slice(r, r + 1));
    return n ? (t.w = +n[0], r + n[0].length) : -1
}

function Lg(t, e, r) {
    var n = xt.exec(e.slice(r, r + 1));
    return n ? (t.u = +n[0], r + n[0].length) : -1
}

function Ig(t, e, r) {
    var n = xt.exec(e.slice(r, r + 2));
    return n ? (t.U = +n[0], r + n[0].length) : -1
}

function Dg(t, e, r) {
    var n = xt.exec(e.slice(r, r + 2));
    return n ? (t.V = +n[0], r + n[0].length) : -1
}

function Og(t, e, r) {
    var n = xt.exec(e.slice(r, r + 2));
    return n ? (t.W = +n[0], r + n[0].length) : -1
}

function gl(t, e, r) {
    var n = xt.exec(e.slice(r, r + 4));
    return n ? (t.y = +n[0], r + n[0].length) : -1
}

function vl(t, e, r) {
    var n = xt.exec(e.slice(r, r + 2));
    return n ? (t.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3), r + n[0].length) : -1
}

function Pg(t, e, r) {
    var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(e.slice(r, r + 6));
    return n ? (t.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), r + n[0].length) : -1
}

function Fg(t, e, r) {
    var n = xt.exec(e.slice(r, r + 1));
    return n ? (t.q = n[0] * 3 - 3, r + n[0].length) : -1
}

function zg(t, e, r) {
    var n = xt.exec(e.slice(r, r + 2));
    return n ? (t.m = n[0] - 1, r + n[0].length) : -1
}

function ml(t, e, r) {
    var n = xt.exec(e.slice(r, r + 2));
    return n ? (t.d = +n[0], r + n[0].length) : -1
}

function Ng(t, e, r) {
    var n = xt.exec(e.slice(r, r + 3));
    return n ? (t.m = 0, t.d = +n[0], r + n[0].length) : -1
}

function xl(t, e, r) {
    var n = xt.exec(e.slice(r, r + 2));
    return n ? (t.H = +n[0], r + n[0].length) : -1
}

function Bg(t, e, r) {
    var n = xt.exec(e.slice(r, r + 2));
    return n ? (t.M = +n[0], r + n[0].length) : -1
}

function Xg(t, e, r) {
    var n = xt.exec(e.slice(r, r + 2));
    return n ? (t.S = +n[0], r + n[0].length) : -1
}

function Yg(t, e, r) {
    var n = xt.exec(e.slice(r, r + 3));
    return n ? (t.L = +n[0], r + n[0].length) : -1
}

function Vg(t, e, r) {
    var n = xt.exec(e.slice(r, r + 6));
    return n ? (t.L = Math.floor(n[0] / 1e3), r + n[0].length) : -1
}

function Gg(t, e, r) {
    var n = Cg.exec(e.slice(r, r + 1));
    return n ? r + n[0].length : -1
}

function Ug(t, e, r) {
    var n = xt.exec(e.slice(r));
    return n ? (t.Q = +n[0], r + n[0].length) : -1
}

function Hg(t, e, r) {
    var n = xt.exec(e.slice(r));
    return n ? (t.s = +n[0], r + n[0].length) : -1
}

function _l(t, e) {
    return q(t.getDate(), e, 2)
}

function Wg(t, e) {
    return q(t.getHours(), e, 2)
}

function qg(t, e) {
    return q(t.getHours() % 12 || 12, e, 2)
}

function Zg(t, e) {
    return q(1 + fe.count(Nt(t), t), e, 3)
}

function $l(t, e) {
    return q(t.getMilliseconds(), e, 3)
}

function jg(t, e) {
    return $l(t, e) + "000"
}

function Kg(t, e) {
    return q(t.getMonth() + 1, e, 2)
}

function Qg(t, e) {
    return q(t.getMinutes(), e, 2)
}

function Jg(t, e) {
    return q(t.getSeconds(), e, 2)
}

function tv(t) {
    var e = t.getDay();
    return e === 0 ? 7 : e
}

function ev(t, e) {
    return q(de.count(Nt(t) - 1, t), e, 2)
}

function Al(t) {
    var e = t.getDay();
    return e >= 4 || e === 0 ? ye(t) : ye.ceil(t)
}

function rv(t, e) {
    return t = Al(t), q(ye.count(Nt(t), t) + (Nt(t).getDay() === 4), e, 2)
}

function nv(t) {
    return t.getDay()
}

function av(t, e) {
    return q(dr.count(Nt(t) - 1, t), e, 2)
}

function iv(t, e) {
    return q(t.getFullYear() % 100, e, 2)
}

function ov(t, e) {
    return t = Al(t), q(t.getFullYear() % 100, e, 2)
}

function sv(t, e) {
    return q(t.getFullYear() % 1e4, e, 4)
}

function lv(t, e) {
    var r = t.getDay();
    return t = r >= 4 || r === 0 ? ye(t) : ye.ceil(t), q(t.getFullYear() % 1e4, e, 4)
}

function cv(t) {
    var e = t.getTimezoneOffset();
    return (e > 0 ? "-" : (e *= -1, "+")) + q(e / 60 | 0, "0", 2) + q(e % 60, "0", 2)
}

function yl(t, e) {
    return q(t.getUTCDate(), e, 2)
}

function uv(t, e) {
    return q(t.getUTCHours(), e, 2)
}

function fv(t, e) {
    return q(t.getUTCHours() % 12 || 12, e, 2)
}

function dv(t, e) {
    return q(1 + Fe.count(Bt(t), t), e, 3)
}

function Sl(t, e) {
    return q(t.getUTCMilliseconds(), e, 3)
}

function hv(t, e) {
    return Sl(t, e) + "000"
}

function pv(t, e) {
    return q(t.getUTCMonth() + 1, e, 2)
}

function gv(t, e) {
    return q(t.getUTCMinutes(), e, 2)
}

function vv(t, e) {
    return q(t.getUTCSeconds(), e, 2)
}

function mv(t) {
    var e = t.getUTCDay();
    return e === 0 ? 7 : e
}

function xv(t, e) {
    return q(he.count(Bt(t) - 1, t), e, 2)
}

function kl(t) {
    var e = t.getUTCDay();
    return e >= 4 || e === 0 ? be(t) : be.ceil(t)
}

function _v(t, e) {
    return t = kl(t), q(be.count(Bt(t), t) + (Bt(t).getUTCDay() === 4), e, 2)
}

function yv(t) {
    return t.getUTCDay()
}

function bv(t, e) {
    return q(hr.count(Bt(t) - 1, t), e, 2)
}

function Tv(t, e) {
    return q(t.getUTCFullYear() % 100, e, 2)
}

function wv(t, e) {
    return t = kl(t), q(t.getUTCFullYear() % 100, e, 2)
}

function $v(t, e) {
    return q(t.getUTCFullYear() % 1e4, e, 4)
}

function Av(t, e) {
    var r = t.getUTCDay();
    return t = r >= 4 || r === 0 ? be(t) : be.ceil(t), q(t.getUTCFullYear() % 1e4, e, 4)
}

function Sv() {
    return "+0000"
}

function bl() {
    return "%"
}

function Tl(t) {
    return +t
}

function wl(t) {
    return Math.floor(+t / 1e3)
}
var pl, xt, Cg, Rg, Cl = b(() => {
    Gn();
    pl = {
        "-": "",
        _: " ",
        0: "0"
    }, xt = /^\s*\d+/, Cg = /^%/, Rg = /[\\^$*+?|[\]().{}]/g
});

function Di(t) {
    return xr = Ii(t), _r = xr.format, Un = xr.parse, yr = xr.utcFormat, Hn = xr.utcParse, xr
}
var xr, _r, Un, yr, Hn, Rl = b(() => {
    Cl();
    Di({
        dateTime: "%x, %X",
        date: "%-m/%-d/%Y",
        time: "%-I:%M:%S %p",
        periods: ["AM", "PM"],
        days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    })
});
var Wn = b(() => {
    Rl()
});
var qn, pe, Zn = b(() => {
    qn = "http://www.w3.org/1999/xhtml", pe = {
        svg: "http://www.w3.org/2000/svg",
        xhtml: qn,
        xlink: "http://www.w3.org/1999/xlink",
        xml: "http://www.w3.org/XML/1998/namespace",
        xmlns: "http://www.w3.org/2000/xmlns/"
    }
});

function ge(t) {
    var e = t += "",
        r = e.indexOf(":");
    return r >= 0 && (e = t.slice(0, r)) !== "xmlns" && (t = t.slice(r + 1)), pe.hasOwnProperty(e) ? {
        space: pe[e],
        local: t
    } : t
}
var jn = b(() => {
    Zn()
});

function kv(t) {
    return function() {
        var e = this.ownerDocument,
            r = this.namespaceURI;
        return r === qn && e.documentElement.namespaceURI === qn ? e.createElement(t) : e.createElementNS(r, t)
    }
}

function Cv(t) {
    return function() {
        return this.ownerDocument.createElementNS(t.space, t.local)
    }
}

function Kn(t) {
    var e = ge(t);
    return (e.local ? Cv : kv)(e)
}
var Oi = b(() => {
    jn();
    Zn()
});

function Rv() {}

function Ge(t) {
    return t == null ? Rv : function() {
        return this.querySelector(t)
    }
}
var Qn = b(() => {});

function Ml(t) {
    typeof t != "function" && (t = Ge(t));
    for (var e = this._groups, r = e.length, n = new Array(r), a = 0; a < r; ++a)
        for (var i = e[a], o = i.length, s = n[a] = new Array(o), l, c, u = 0; u < o; ++u)(l = i[u]) && (c = t.call(l, l.__data__, u, i)) && ("__data__" in l && (c.__data__ = l.__data__), s[u] = c);
    return new ot(n, this._parents)
}
var El = b(() => {
    Gt();
    Qn()
});

function Hr(t) {
    return t == null ? [] : Array.isArray(t) ? t : Array.from(t)
}
var Pi = b(() => {});

function Mv() {
    return []
}

function Wr(t) {
    return t == null ? Mv : function() {
        return this.querySelectorAll(t)
    }
}
var Fi = b(() => {});

function Ev(t) {
    return function() {
        return Hr(t.apply(this, arguments))
    }
}

function Ll(t) {
    typeof t == "function" ? t = Ev(t) : t = Wr(t);
    for (var e = this._groups, r = e.length, n = [], a = [], i = 0; i < r; ++i)
        for (var o = e[i], s = o.length, l, c = 0; c < s; ++c)(l = o[c]) && (n.push(t.call(l, l.__data__, c, o)), a.push(l));
    return new ot(n, a)
}
var Il = b(() => {
    Gt();
    Pi();
    Fi()
});

function qr(t) {
    return function() {
        return this.matches(t)
    }
}

function Jn(t) {
    return function(e) {
        return e.matches(t)
    }
}
var Zr = b(() => {});

function Iv(t) {
    return function() {
        return Lv.call(this.children, t)
    }
}

function Dv() {
    return this.firstElementChild
}

function Dl(t) {
    return this.select(t == null ? Dv : Iv(typeof t == "function" ? t : Jn(t)))
}
var Lv, Ol = b(() => {
    Zr();
    Lv = Array.prototype.find
});

function Pv() {
    return Array.from(this.children)
}

function Fv(t) {
    return function() {
        return Ov.call(this.children, t)
    }
}

function Pl(t) {
    return this.selectAll(t == null ? Pv : Fv(typeof t == "function" ? t : Jn(t)))
}
var Ov, Fl = b(() => {
    Zr();
    Ov = Array.prototype.filter
});

function zl(t) {
    typeof t != "function" && (t = qr(t));
    for (var e = this._groups, r = e.length, n = new Array(r), a = 0; a < r; ++a)
        for (var i = e[a], o = i.length, s = n[a] = [], l, c = 0; c < o; ++c)(l = i[c]) && t.call(l, l.__data__, c, i) && s.push(l);
    return new ot(n, this._parents)
}
var Nl = b(() => {
    Gt();
    Zr()
});

function ta(t) {
    return new Array(t.length)
}
var zi = b(() => {});

function Bl() {
    return new ot(this._enter || this._groups.map(ta), this._parents)
}

function jr(t, e) {
    this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e
}
var Ni = b(() => {
    zi();
    Gt();
    jr.prototype = {
        constructor: jr,
        appendChild: function(t) {
            return this._parent.insertBefore(t, this._next)
        },
        insertBefore: function(t, e) {
            return this._parent.insertBefore(t, e)
        },
        querySelector: function(t) {
            return this._parent.querySelector(t)
        },
        querySelectorAll: function(t) {
            return this._parent.querySelectorAll(t)
        }
    }
});

function Xl(t) {
    return function() {
        return t
    }
}
var Yl = b(() => {});

function zv(t, e, r, n, a, i) {
    for (var o = 0, s, l = e.length, c = i.length; o < c; ++o)(s = e[o]) ? (s.__data__ = i[o], n[o] = s) : r[o] = new jr(t, i[o]);
    for (; o < l; ++o)(s = e[o]) && (a[o] = s)
}

function Nv(t, e, r, n, a, i, o) {
    var s, l, c = new Map,
        u = e.length,
        f = i.length,
        d = new Array(u),
        h;
    for (s = 0; s < u; ++s)(l = e[s]) && (d[s] = h = o.call(l, l.__data__, s, e) + "", c.has(h) ? a[s] = l : c.set(h, l));
    for (s = 0; s < f; ++s) h = o.call(t, i[s], s, i) + "", (l = c.get(h)) ? (n[s] = l, l.__data__ = i[s], c.delete(h)) : r[s] = new jr(t, i[s]);
    for (s = 0; s < u; ++s)(l = e[s]) && c.get(d[s]) === l && (a[s] = l)
}

function Bv(t) {
    return t.__data__
}

function Vl(t, e) {
    if (!arguments.length) return Array.from(this, Bv);
    var r = e ? Nv : zv,
        n = this._parents,
        a = this._groups;
    typeof t != "function" && (t = Xl(t));
    for (var i = a.length, o = new Array(i), s = new Array(i), l = new Array(i), c = 0; c < i; ++c) {
        var u = n[c],
            f = a[c],
            d = f.length,
            h = Xv(t.call(u, u && u.__data__, c, n)),
            p = h.length,
            g = s[c] = new Array(p),
            m = o[c] = new Array(p),
            v = l[c] = new Array(d);
        r(u, f, g, m, v, h, e);
        for (var x = 0, y = 0, _, w; x < p; ++x)
            if (_ = g[x]) {
                for (x >= y && (y = x + 1); !(w = m[y]) && ++y < p;);
                _._next = w || null
            }
    }
    return o = new ot(o, n), o._enter = s, o._exit = l, o
}

function Xv(t) {
    return typeof t == "object" && "length" in t ? t : Array.from(t)
}
var Gl = b(() => {
    Gt();
    Ni();
    Yl()
});

function Ul() {
    return new ot(this._exit || this._groups.map(ta), this._parents)
}
var Hl = b(() => {
    zi();
    Gt()
});

function Wl(t, e, r) {
    var n = this.enter(),
        a = this,
        i = this.exit();
    return typeof t == "function" ? (n = t(n), n && (n = n.selection())) : n = n.append(t + ""), e != null && (a = e(a), a && (a = a.selection())), r == null ? i.remove() : r(i), n && a ? n.merge(a).order() : a
}
var ql = b(() => {});

function Zl(t) {
    for (var e = t.selection ? t.selection() : t, r = this._groups, n = e._groups, a = r.length, i = n.length, o = Math.min(a, i), s = new Array(a), l = 0; l < o; ++l)
        for (var c = r[l], u = n[l], f = c.length, d = s[l] = new Array(f), h, p = 0; p < f; ++p)(h = c[p] || u[p]) && (d[p] = h);
    for (; l < a; ++l) s[l] = r[l];
    return new ot(s, this._parents)
}
var jl = b(() => {
    Gt()
});

function Kl() {
    for (var t = this._groups, e = -1, r = t.length; ++e < r;)
        for (var n = t[e], a = n.length - 1, i = n[a], o; --a >= 0;)(o = n[a]) && (i && o.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(o, i), i = o);
    return this
}
var Ql = b(() => {});

function Jl(t) {
    t || (t = Yv);

    function e(f, d) {
        return f && d ? t(f.__data__, d.__data__) : !f - !d
    }
    for (var r = this._groups, n = r.length, a = new Array(n), i = 0; i < n; ++i) {
        for (var o = r[i], s = o.length, l = a[i] = new Array(s), c, u = 0; u < s; ++u)(c = o[u]) && (l[u] = c);
        l.sort(e)
    }
    return new ot(a, this._parents).order()
}

function Yv(t, e) {
    return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN
}
var tc = b(() => {
    Gt()
});

function ec() {
    var t = arguments[0];
    return arguments[0] = this, t.apply(null, arguments), this
}
var rc = b(() => {});

function nc() {
    return Array.from(this)
}
var ac = b(() => {});

function ic() {
    for (var t = this._groups, e = 0, r = t.length; e < r; ++e)
        for (var n = t[e], a = 0, i = n.length; a < i; ++a) {
            var o = n[a];
            if (o) return o
        }
    return null
}
var oc = b(() => {});

function sc() {
    let t = 0;
    for (let e of this) ++t;
    return t
}
var lc = b(() => {});

function cc() {
    return !this.node()
}
var uc = b(() => {});

function fc(t) {
    for (var e = this._groups, r = 0, n = e.length; r < n; ++r)
        for (var a = e[r], i = 0, o = a.length, s; i < o; ++i)(s = a[i]) && t.call(s, s.__data__, i, a);
    return this
}
var dc = b(() => {});

function Vv(t) {
    return function() {
        this.removeAttribute(t)
    }
}

function Gv(t) {
    return function() {
        this.removeAttributeNS(t.space, t.local)
    }
}

function Uv(t, e) {
    return function() {
        this.setAttribute(t, e)
    }
}

function Hv(t, e) {
    return function() {
        this.setAttributeNS(t.space, t.local, e)
    }
}

function Wv(t, e) {
    return function() {
        var r = e.apply(this, arguments);
        r == null ? this.removeAttribute(t) : this.setAttribute(t, r)
    }
}

function qv(t, e) {
    return function() {
        var r = e.apply(this, arguments);
        r == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, r)
    }
}

function hc(t, e) {
    var r = ge(t);
    if (arguments.length < 2) {
        var n = this.node();
        return r.local ? n.getAttributeNS(r.space, r.local) : n.getAttribute(r)
    }
    return this.each((e == null ? r.local ? Gv : Vv : typeof e == "function" ? r.local ? qv : Wv : r.local ? Hv : Uv)(r, e))
}
var pc = b(() => {
    jn()
});

function ea(t) {
    return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView
}
var Bi = b(() => {});

function Zv(t) {
    return function() {
        this.style.removeProperty(t)
    }
}

function jv(t, e, r) {
    return function() {
        this.style.setProperty(t, e, r)
    }
}

function Kv(t, e, r) {
    return function() {
        var n = e.apply(this, arguments);
        n == null ? this.style.removeProperty(t) : this.style.setProperty(t, n, r)
    }
}

function gc(t, e, r) {
    return arguments.length > 1 ? this.each((e == null ? Zv : typeof e == "function" ? Kv : jv)(t, e, r ? ? "")) : Te(this.node(), t)
}

function Te(t, e) {
    return t.style.getPropertyValue(e) || ea(t).getComputedStyle(t, null).getPropertyValue(e)
}
var Xi = b(() => {
    Bi()
});

function Qv(t) {
    return function() {
        delete this[t]
    }
}

function Jv(t, e) {
    return function() {
        this[t] = e
    }
}

function tm(t, e) {
    return function() {
        var r = e.apply(this, arguments);
        r == null ? delete this[t] : this[t] = r
    }
}

function vc(t, e) {
    return arguments.length > 1 ? this.each((e == null ? Qv : typeof e == "function" ? tm : Jv)(t, e)) : this.node()[t]
}
var mc = b(() => {});

function xc(t) {
    return t.trim().split(/^|\s+/)
}

function Yi(t) {
    return t.classList || new _c(t)
}

function _c(t) {
    this._node = t, this._names = xc(t.getAttribute("class") || "")
}

function yc(t, e) {
    for (var r = Yi(t), n = -1, a = e.length; ++n < a;) r.add(e[n])
}

function bc(t, e) {
    for (var r = Yi(t), n = -1, a = e.length; ++n < a;) r.remove(e[n])
}

function em(t) {
    return function() {
        yc(this, t)
    }
}

function rm(t) {
    return function() {
        bc(this, t)
    }
}

function nm(t, e) {
    return function() {
        (e.apply(this, arguments) ? yc : bc)(this, t)
    }
}

function Tc(t, e) {
    var r = xc(t + "");
    if (arguments.length < 2) {
        for (var n = Yi(this.node()), a = -1, i = r.length; ++a < i;)
            if (!n.contains(r[a])) return !1;
        return !0
    }
    return this.each((typeof e == "function" ? nm : e ? em : rm)(r, e))
}
var wc = b(() => {
    _c.prototype = {
        add: function(t) {
            var e = this._names.indexOf(t);
            e < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")))
        },
        remove: function(t) {
            var e = this._names.indexOf(t);
            e >= 0 && (this._names.splice(e, 1), this._node.setAttribute("class", this._names.join(" ")))
        },
        contains: function(t) {
            return this._names.indexOf(t) >= 0
        }
    }
});

function am() {
    this.textContent = ""
}

function im(t) {
    return function() {
        this.textContent = t
    }
}

function om(t) {
    return function() {
        var e = t.apply(this, arguments);
        this.textContent = e ? ? ""
    }
}

function $c(t) {
    return arguments.length ? this.each(t == null ? am : (typeof t == "function" ? om : im)(t)) : this.node().textContent
}
var Ac = b(() => {});

function sm() {
    this.innerHTML = ""
}

function lm(t) {
    return function() {
        this.innerHTML = t
    }
}

function cm(t) {
    return function() {
        var e = t.apply(this, arguments);
        this.innerHTML = e ? ? ""
    }
}

function Sc(t) {
    return arguments.length ? this.each(t == null ? sm : (typeof t == "function" ? cm : lm)(t)) : this.node().innerHTML
}
var kc = b(() => {});

function um() {
    this.nextSibling && this.parentNode.appendChild(this)
}

function Cc() {
    return this.each(um)
}
var Rc = b(() => {});

function fm() {
    this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild)
}

function Mc() {
    return this.each(fm)
}
var Ec = b(() => {});

function Lc(t) {
    var e = typeof t == "function" ? t : Kn(t);
    return this.select(function() {
        return this.appendChild(e.apply(this, arguments))
    })
}
var Ic = b(() => {
    Oi()
});

function dm() {
    return null
}

function Dc(t, e) {
    var r = typeof t == "function" ? t : Kn(t),
        n = e == null ? dm : typeof e == "function" ? e : Ge(e);
    return this.select(function() {
        return this.insertBefore(r.apply(this, arguments), n.apply(this, arguments) || null)
    })
}
var Oc = b(() => {
    Oi();
    Qn()
});

function hm() {
    var t = this.parentNode;
    t && t.removeChild(this)
}

function Pc() {
    return this.each(hm)
}
var Fc = b(() => {});

function pm() {
    var t = this.cloneNode(!1),
        e = this.parentNode;
    return e ? e.insertBefore(t, this.nextSibling) : t
}

function gm() {
    var t = this.cloneNode(!0),
        e = this.parentNode;
    return e ? e.insertBefore(t, this.nextSibling) : t
}

function zc(t) {
    return this.select(t ? gm : pm)
}
var Nc = b(() => {});

function Bc(t) {
    return arguments.length ? this.property("__data__", t) : this.node().__data__
}
var Xc = b(() => {});

function vm(t) {
    return function(e) {
        t.call(this, e, this.__data__)
    }
}

function mm(t) {
    return t.trim().split(/^|\s+/).map(function(e) {
        var r = "",
            n = e.indexOf(".");
        return n >= 0 && (r = e.slice(n + 1), e = e.slice(0, n)), {
            type: e,
            name: r
        }
    })
}

function xm(t) {
    return function() {
        var e = this.__on;
        if (e) {
            for (var r = 0, n = -1, a = e.length, i; r < a; ++r) i = e[r], (!t.type || i.type === t.type) && i.name === t.name ? this.removeEventListener(i.type, i.listener, i.options) : e[++n] = i;
            ++n ? e.length = n : delete this.__on
        }
    }
}

function _m(t, e, r) {
    return function() {
        var n = this.__on,
            a, i = vm(e);
        if (n) {
            for (var o = 0, s = n.length; o < s; ++o)
                if ((a = n[o]).type === t.type && a.name === t.name) {
                    this.removeEventListener(a.type, a.listener, a.options), this.addEventListener(a.type, a.listener = i, a.options = r), a.value = e;
                    return
                }
        }
        this.addEventListener(t.type, i, r), a = {
            type: t.type,
            name: t.name,
            value: e,
            listener: i,
            options: r
        }, n ? n.push(a) : this.__on = [a]
    }
}

function Yc(t, e, r) {
    var n = mm(t + ""),
        a, i = n.length,
        o;
    if (arguments.length < 2) {
        var s = this.node().__on;
        if (s) {
            for (var l = 0, c = s.length, u; l < c; ++l)
                for (a = 0, u = s[l]; a < i; ++a)
                    if ((o = n[a]).type === u.type && o.name === u.name) return u.value
        }
        return
    }
    for (s = e ? _m : xm, a = 0; a < i; ++a) this.each(s(n[a], e, r));
    return this
}
var Vc = b(() => {});

function Gc(t, e, r) {
    var n = ea(t),
        a = n.CustomEvent;
    typeof a == "function" ? a = new a(e, r) : (a = n.document.createEvent("Event"), r ? (a.initEvent(e, r.bubbles, r.cancelable), a.detail = r.detail) : a.initEvent(e, !1, !1)), t.dispatchEvent(a)
}

function ym(t, e) {
    return function() {
        return Gc(this, t, e)
    }
}

function bm(t, e) {
    return function() {
        return Gc(this, t, e.apply(this, arguments))
    }
}

function Uc(t, e) {
    return this.each((typeof e == "function" ? bm : ym)(t, e))
}
var Hc = b(() => {
    Bi()
});

function* Wc() {
    for (var t = this._groups, e = 0, r = t.length; e < r; ++e)
        for (var n = t[e], a = 0, i = n.length, o; a < i; ++a)(o = n[a]) && (yield o)
}
var qc = b(() => {});

function ot(t, e) {
    this._groups = t, this._parents = e
}

function Zc() {
    return new ot([
        [document.documentElement]
    ], Kr)
}

function Tm() {
    return this
}
var Kr, ve, Gt = b(() => {
    El();
    Il();
    Ol();
    Fl();
    Nl();
    Gl();
    Ni();
    Hl();
    ql();
    jl();
    Ql();
    tc();
    rc();
    ac();
    oc();
    lc();
    uc();
    dc();
    pc();
    Xi();
    mc();
    wc();
    Ac();
    kc();
    Rc();
    Ec();
    Ic();
    Oc();
    Fc();
    Nc();
    Xc();
    Vc();
    Hc();
    qc();
    Kr = [null];
    ot.prototype = Zc.prototype = {
        constructor: ot,
        select: Ml,
        selectAll: Ll,
        selectChild: Dl,
        selectChildren: Pl,
        filter: zl,
        data: Vl,
        enter: Bl,
        exit: Ul,
        join: Wl,
        merge: Zl,
        selection: Tm,
        order: Kl,
        sort: Jl,
        call: ec,
        nodes: nc,
        node: ic,
        size: sc,
        empty: cc,
        each: fc,
        attr: hc,
        style: gc,
        property: vc,
        classed: Tc,
        text: $c,
        html: Sc,
        raise: Cc,
        lower: Mc,
        append: Lc,
        insert: Dc,
        remove: Pc,
        clone: zc,
        datum: Bc,
        on: Yc,
        dispatch: Uc,
        [Symbol.iterator]: Wc
    };
    ve = Zc
});

function P(t) {
    return typeof t == "string" ? new ot([
        [document.querySelector(t)]
    ], [document.documentElement]) : new ot([
        [t]
    ], Kr)
}
var jc = b(() => {
    Gt()
});

function Kc(t) {
    let e;
    for (; e = t.sourceEvent;) t = e;
    return t
}
var Qc = b(() => {});

function br(t, e) {
    if (t = Kc(t), e === void 0 && (e = t.currentTarget), e) {
        var r = e.ownerSVGElement || e;
        if (r.createSVGPoint) {
            var n = r.createSVGPoint();
            return n.x = t.clientX, n.y = t.clientY, n = n.matrixTransform(e.getScreenCTM().inverse()), [n.x, n.y]
        }
        if (e.getBoundingClientRect) {
            var a = e.getBoundingClientRect();
            return [t.clientX - a.left - e.clientLeft, t.clientY - a.top - e.clientTop]
        }
    }
    return [t.pageX, t.pageY]
}
var Jc = b(() => {
    Qc()
});

function ra(t) {
    return typeof t == "string" ? new ot([document.querySelectorAll(t)], [document.documentElement]) : new ot([Hr(t)], Kr)
}
var tu = b(() => {
    Pi();
    Gt()
});
var Xt = b(() => {
    Zr();
    jn();
    Zn();
    Jc();
    jc();
    tu();
    Gt();
    Qn();
    Fi();
    Xi()
});

function ru() {
    for (var t = 0, e = arguments.length, r = {}, n; t < e; ++t) {
        if (!(n = arguments[t] + "") || n in r || /[\s.]/.test(n)) throw new Error("illegal type: " + n);
        r[n] = []
    }
    return new na(r)
}

function na(t) {
    this._ = t
}

function $m(t, e) {
    return t.trim().split(/^|\s+/).map(function(r) {
        var n = "",
            a = r.indexOf(".");
        if (a >= 0 && (n = r.slice(a + 1), r = r.slice(0, a)), r && !e.hasOwnProperty(r)) throw new Error("unknown type: " + r);
        return {
            type: r,
            name: n
        }
    })
}

function Am(t, e) {
    for (var r = 0, n = t.length, a; r < n; ++r)
        if ((a = t[r]).name === e) return a.value
}

function eu(t, e, r) {
    for (var n = 0, a = t.length; n < a; ++n)
        if (t[n].name === e) {
            t[n] = wm, t = t.slice(0, n).concat(t.slice(n + 1));
            break
        }
    return r != null && t.push({
        name: e,
        value: r
    }), t
}
var wm, Qr, nu = b(() => {
    wm = {
        value: () => {}
    };
    na.prototype = ru.prototype = {
        constructor: na,
        on: function(t, e) {
            var r = this._,
                n = $m(t + "", r),
                a, i = -1,
                o = n.length;
            if (arguments.length < 2) {
                for (; ++i < o;)
                    if ((a = (t = n[i]).type) && (a = Am(r[a], t.name))) return a;
                return
            }
            if (e != null && typeof e != "function") throw new Error("invalid callback: " + e);
            for (; ++i < o;)
                if (a = (t = n[i]).type) r[a] = eu(r[a], t.name, e);
                else if (e == null)
                for (a in r) r[a] = eu(r[a], t.name, null);
            return this
        },
        copy: function() {
            var t = {},
                e = this._;
            for (var r in e) t[r] = e[r].slice();
            return new na(t)
        },
        call: function(t, e) {
            if ((a = arguments.length - 2) > 0)
                for (var r = new Array(a), n = 0, a, i; n < a; ++n) r[n] = arguments[n + 2];
            if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
            for (i = this._[t], n = 0, a = i.length; n < a; ++n) i[n].value.apply(e, r)
        },
        apply: function(t, e, r) {
            if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
            for (var n = this._[t], a = 0, i = n.length; a < i; ++a) n[a].value.apply(e, r)
        }
    };
    Qr = ru
});
var Vi = b(() => {
    nu()
});

function aa(t) {
    t.stopImmediatePropagation()
}

function we(t) {
    t.preventDefault(), t.stopImmediatePropagation()
}
var au, Ue, Gi = b(() => {
    au = {
        passive: !1
    }, Ue = {
        capture: !0,
        passive: !1
    }
});

function iu(t) {
    var e = t.document.documentElement,
        r = P(t).on("dragstart.drag", we, Ue);
    "onselectstart" in e ? r.on("selectstart.drag", we, Ue) : (e.__noselect = e.style.MozUserSelect, e.style.MozUserSelect = "none")
}

function ou(t, e) {
    var r = t.document.documentElement,
        n = P(t).on("dragstart.drag", null);
    e && (n.on("click.drag", we, Ue), setTimeout(function() {
        n.on("click.drag", null)
    }, 0)), "onselectstart" in r ? n.on("selectstart.drag", null) : (r.style.MozUserSelect = r.__noselect, delete r.__noselect)
}
var su = b(() => {
    Xt();
    Gi()
});
var Jr, lu = b(() => {
    Jr = t => () => t
});

function tn(t, {
    sourceEvent: e,
    subject: r,
    target: n,
    identifier: a,
    active: i,
    x: o,
    y: s,
    dx: l,
    dy: c,
    dispatch: u
}) {
    Object.defineProperties(this, {
        type: {
            value: t,
            enumerable: !0,
            configurable: !0
        },
        sourceEvent: {
            value: e,
            enumerable: !0,
            configurable: !0
        },
        subject: {
            value: r,
            enumerable: !0,
            configurable: !0
        },
        target: {
            value: n,
            enumerable: !0,
            configurable: !0
        },
        identifier: {
            value: a,
            enumerable: !0,
            configurable: !0
        },
        active: {
            value: i,
            enumerable: !0,
            configurable: !0
        },
        x: {
            value: o,
            enumerable: !0,
            configurable: !0
        },
        y: {
            value: s,
            enumerable: !0,
            configurable: !0
        },
        dx: {
            value: l,
            enumerable: !0,
            configurable: !0
        },
        dy: {
            value: c,
            enumerable: !0,
            configurable: !0
        },
        _: {
            value: u
        }
    })
}
var cu = b(() => {
    tn.prototype.on = function() {
        var t = this._.on.apply(this._, arguments);
        return t === this._ ? this : t
    }
});

function Sm(t) {
    return !t.ctrlKey && !t.button
}

function km() {
    return this.parentNode
}

function Cm(t, e) {
    return e ? ? {
        x: t.x,
        y: t.y
    }
}

function Rm() {
    return navigator.maxTouchPoints || "ontouchstart" in this
}

function Ui() {
    var t = Sm,
        e = km,
        r = Cm,
        n = Rm,
        a = {},
        i = Qr("start", "drag", "end"),
        o = 0,
        s, l, c, u, f = 0;

    function d(_) {
        _.on("mousedown.drag", h).filter(n).on("touchstart.drag", m).on("touchmove.drag", v, au).on("touchend.drag touchcancel.drag", x).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)")
    }

    function h(_, w) {
        if (!(u || !t.call(this, _, w))) {
            var T = y(this, e.call(this, _, w), _, w, "mouse");
            T && (P(_.view).on("mousemove.drag", p, Ue).on("mouseup.drag", g, Ue), iu(_.view), aa(_), c = !1, s = _.clientX, l = _.clientY, T("start", _))
        }
    }

    function p(_) {
        if (we(_), !c) {
            var w = _.clientX - s,
                T = _.clientY - l;
            c = w * w + T * T > f
        }
        a.mouse("drag", _)
    }

    function g(_) {
        P(_.view).on("mousemove.drag mouseup.drag", null), ou(_.view, c), we(_), a.mouse("end", _)
    }

    function m(_, w) {
        if (t.call(this, _, w)) {
            var T = _.changedTouches,
                $ = e.call(this, _, w),
                C = T.length,
                M, R;
            for (M = 0; M < C; ++M)(R = y(this, $, _, w, T[M].identifier, T[M])) && (aa(_), R("start", _, T[M]))
        }
    }

    function v(_) {
        var w = _.changedTouches,
            T = w.length,
            $, C;
        for ($ = 0; $ < T; ++$)(C = a[w[$].identifier]) && (we(_), C("drag", _, w[$]))
    }

    function x(_) {
        var w = _.changedTouches,
            T = w.length,
            $, C;
        for (u && clearTimeout(u), u = setTimeout(function() {
                u = null
            }, 500), $ = 0; $ < T; ++$)(C = a[w[$].identifier]) && (aa(_), C("end", _, w[$]))
    }

    function y(_, w, T, $, C, M) {
        var R = i.copy(),
            A = br(M || T, w),
            L, S, E;
        if ((E = r.call(_, new tn("beforestart", {
                sourceEvent: T,
                target: d,
                identifier: C,
                active: o,
                x: A[0],
                y: A[1],
                dx: 0,
                dy: 0,
                dispatch: R
            }), $)) != null) return L = E.x - A[0] || 0, S = E.y - A[1] || 0,
            function rt(O, I, B) {
                var F = A,
                    it;
                switch (O) {
                    case "start":
                        a[C] = rt, it = o++;
                        break;
                    case "end":
                        delete a[C], --o;
                    case "drag":
                        A = br(B || I, w), it = o;
                        break
                }
                R.call(O, _, new tn(O, {
                    sourceEvent: I,
                    subject: E,
                    target: d,
                    identifier: C,
                    active: it,
                    x: A[0] + L,
                    y: A[1] + S,
                    dx: A[0] - F[0],
                    dy: A[1] - F[1],
                    dispatch: R
                }), $)
            }
    }
    return d.filter = function(_) {
        return arguments.length ? (t = typeof _ == "function" ? _ : Jr(!!_), d) : t
    }, d.container = function(_) {
        return arguments.length ? (e = typeof _ == "function" ? _ : Jr(_), d) : e
    }, d.subject = function(_) {
        return arguments.length ? (r = typeof _ == "function" ? _ : Jr(_), d) : r
    }, d.touchable = function(_) {
        return arguments.length ? (n = typeof _ == "function" ? _ : Jr(!!_), d) : n
    }, d.on = function() {
        var _ = i.on.apply(i, arguments);
        return _ === i ? d : _
    }, d.clickDistance = function(_) {
        return arguments.length ? (f = (_ = +_) * _, d) : Math.sqrt(f)
    }, d
}
var uu = b(() => {
    Vi();
    Xt();
    su();
    Gi();
    lu();
    cu()
});
var fu = b(() => {
    uu()
});

function ia(t, e, r) {
    t.prototype = e.prototype = r, r.constructor = t
}

function Hi(t, e) {
    var r = Object.create(t.prototype);
    for (var n in e) r[n] = e[n];
    return r
}
var du = b(() => {});

function nn() {}

function pu() {
    return this.rgb().formatHex()
}

function Fm() {
    return this.rgb().formatHex8()
}

function zm() {
    return bu(this).formatHsl()
}

function gu() {
    return this.rgb().formatRgb()
}

function Zt(t) {
    var e, r;
    return t = (t + "").trim().toLowerCase(), (e = Mm.exec(t)) ? (r = e[1].length, e = parseInt(e[1], 16), r === 6 ? vu(e) : r === 3 ? new It(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : r === 8 ? oa(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : r === 4 ? oa(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = Em.exec(t)) ? new It(e[1], e[2], e[3], 1) : (e = Lm.exec(t)) ? new It(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = Im.exec(t)) ? oa(e[1], e[2], e[3], e[4]) : (e = Dm.exec(t)) ? oa(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = Om.exec(t)) ? _u(e[1], e[2] / 100, e[3] / 100, 1) : (e = Pm.exec(t)) ? _u(e[1], e[2] / 100, e[3] / 100, e[4]) : hu.hasOwnProperty(t) ? vu(hu[t]) : t === "transparent" ? new It(NaN, NaN, NaN, 0) : null
}

function vu(t) {
    return new It(t >> 16 & 255, t >> 8 & 255, t & 255, 1)
}

function oa(t, e, r, n) {
    return n <= 0 && (t = e = r = NaN), new It(t, e, r, n)
}

function Nm(t) {
    return t instanceof nn || (t = Zt(t)), t ? (t = t.rgb(), new It(t.r, t.g, t.b, t.opacity)) : new It
}

function wr(t, e, r, n) {
    return arguments.length === 1 ? Nm(t) : new It(t, e, r, n ? ? 1)
}

function It(t, e, r, n) {
    this.r = +t, this.g = +e, this.b = +r, this.opacity = +n
}

function mu() {
    return `#${He(this.r)}${He(this.g)}${He(this.b)}`
}

function Bm() {
    return `#${He(this.r)}${He(this.g)}${He(this.b)}${He((isNaN(this.opacity)?1:this.opacity)*255)}`
}

function xu() {
    let t = ca(this.opacity);
    return `${t===1?"rgb(":"rgba("}${We(this.r)}, ${We(this.g)}, ${We(this.b)}${t===1?")":`, ${t})`}`
}

function ca(t) {
    return isNaN(t) ? 1 : Math.max(0, Math.min(1, t))
}

function We(t) {
    return Math.max(0, Math.min(255, Math.round(t) || 0))
}

function He(t) {
    return t = We(t), (t < 16 ? "0" : "") + t.toString(16)
}

function _u(t, e, r, n) {
    return n <= 0 ? t = e = r = NaN : r <= 0 || r >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new qt(t, e, r, n)
}

function bu(t) {
    if (t instanceof qt) return new qt(t.h, t.s, t.l, t.opacity);
    if (t instanceof nn || (t = Zt(t)), !t) return new qt;
    if (t instanceof qt) return t;
    t = t.rgb();
    var e = t.r / 255,
        r = t.g / 255,
        n = t.b / 255,
        a = Math.min(e, r, n),
        i = Math.max(e, r, n),
        o = NaN,
        s = i - a,
        l = (i + a) / 2;
    return s ? (e === i ? o = (r - n) / s + (r < n) * 6 : r === i ? o = (n - e) / s + 2 : o = (e - r) / s + 4, s /= l < .5 ? i + a : 2 - i - a, o *= 60) : s = l > 0 && l < 1 ? 0 : o, new qt(o, s, l, t.opacity)
}

function Tu(t, e, r, n) {
    return arguments.length === 1 ? bu(t) : new qt(t, e, r, n ? ? 1)
}

function qt(t, e, r, n) {
    this.h = +t, this.s = +e, this.l = +r, this.opacity = +n
}

function yu(t) {
    return t = (t || 0) % 360, t < 0 ? t + 360 : t
}

function sa(t) {
    return Math.max(0, Math.min(1, t || 0))
}

function Wi(t, e, r) {
    return (t < 60 ? e + (r - e) * t / 60 : t < 180 ? r : t < 240 ? e + (r - e) * (240 - t) / 60 : e) * 255
}
var en, la, Tr, rn, re, Mm, Em, Lm, Im, Dm, Om, Pm, hu, wu = b(() => {
    du();
    en = .7, la = 1 / en, Tr = "\\s*([+-]?\\d+)\\s*", rn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", re = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Mm = /^#([0-9a-f]{3,8})$/, Em = new RegExp(`^rgb\\(${Tr},${Tr},${Tr}\\)$`), Lm = new RegExp(`^rgb\\(${re},${re},${re}\\)$`), Im = new RegExp(`^rgba\\(${Tr},${Tr},${Tr},${rn}\\)$`), Dm = new RegExp(`^rgba\\(${re},${re},${re},${rn}\\)$`), Om = new RegExp(`^hsl\\(${rn},${re},${re}\\)$`), Pm = new RegExp(`^hsla\\(${rn},${re},${re},${rn}\\)$`), hu = {
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgreen: 25600,
        darkgrey: 11119017,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        green: 32768,
        greenyellow: 11403055,
        grey: 8421504,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgreen: 9498256,
        lightgrey: 13882323,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        rebeccapurple: 6697881,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074
    };
    ia(nn, Zt, {
        copy(t) {
            return Object.assign(new this.constructor, this, t)
        },
        displayable() {
            return this.rgb().displayable()
        },
        hex: pu,
        formatHex: pu,
        formatHex8: Fm,
        formatHsl: zm,
        formatRgb: gu,
        toString: gu
    });
    ia(It, wr, Hi(nn, {
        brighter(t) {
            return t = t == null ? la : Math.pow(la, t), new It(this.r * t, this.g * t, this.b * t, this.opacity)
        },
        darker(t) {
            return t = t == null ? en : Math.pow(en, t), new It(this.r * t, this.g * t, this.b * t, this.opacity)
        },
        rgb() {
            return this
        },
        clamp() {
            return new It(We(this.r), We(this.g), We(this.b), ca(this.opacity))
        },
        displayable() {
            return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1
        },
        hex: mu,
        formatHex: mu,
        formatHex8: Bm,
        formatRgb: xu,
        toString: xu
    }));
    ia(qt, Tu, Hi(nn, {
        brighter(t) {
            return t = t == null ? la : Math.pow(la, t), new qt(this.h, this.s, this.l * t, this.opacity)
        },
        darker(t) {
            return t = t == null ? en : Math.pow(en, t), new qt(this.h, this.s, this.l * t, this.opacity)
        },
        rgb() {
            var t = this.h % 360 + (this.h < 0) * 360,
                e = isNaN(t) || isNaN(this.s) ? 0 : this.s,
                r = this.l,
                n = r + (r < .5 ? r : 1 - r) * e,
                a = 2 * r - n;
            return new It(Wi(t >= 240 ? t - 240 : t + 120, a, n), Wi(t, a, n), Wi(t < 120 ? t + 240 : t - 120, a, n), this.opacity)
        },
        clamp() {
            return new qt(yu(this.h), sa(this.s), sa(this.l), ca(this.opacity))
        },
        displayable() {
            return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
        },
        formatHsl() {
            let t = ca(this.opacity);
            return `${t===1?"hsl(":"hsla("}${yu(this.h)}, ${sa(this.s)*100}%, ${sa(this.l)*100}%${t===1?")":`, ${t})`}`
        }
    }))
});
var ua = b(() => {
    wu()
});

function qi(t, e, r, n, a) {
    var i = t * t,
        o = i * t;
    return ((1 - 3 * t + 3 * i - o) * e + (4 - 6 * i + 3 * o) * r + (1 + 3 * t + 3 * i - 3 * o) * n + o * a) / 6
}

function $u(t) {
    var e = t.length - 1;
    return function(r) {
        var n = r <= 0 ? r = 0 : r >= 1 ? (r = 1, e - 1) : Math.floor(r * e),
            a = t[n],
            i = t[n + 1],
            o = n > 0 ? t[n - 1] : 2 * a - i,
            s = n < e - 1 ? t[n + 2] : 2 * i - a;
        return qi((r - n / e) * e, o, a, i, s)
    }
}
var Zi = b(() => {});

function Au(t) {
    var e = t.length;
    return function(r) {
        var n = Math.floor(((r %= 1) < 0 ? ++r : r) * e),
            a = t[(n + e - 1) % e],
            i = t[n % e],
            o = t[(n + 1) % e],
            s = t[(n + 2) % e];
        return qi((r - n / e) * e, a, i, o, s)
    }
}
var Su = b(() => {
    Zi()
});
var an, ji = b(() => {
    an = t => () => t
});

function Xm(t, e) {
    return function(r) {
        return t + r * e
    }
}

function Ym(t, e, r) {
    return t = Math.pow(t, r), e = Math.pow(e, r) - t, r = 1 / r,
        function(n) {
            return Math.pow(t + n * e, r)
        }
}

function ku(t) {
    return (t = +t) == 1 ? fa : function(e, r) {
        return r - e ? Ym(e, r, t) : an(isNaN(e) ? r : e)
    }
}

function fa(t, e) {
    var r = e - t;
    return r ? Xm(t, r) : an(isNaN(t) ? e : t)
}
var Cu = b(() => {
    ji()
});

function Ru(t) {
    return function(e) {
        var r = e.length,
            n = new Array(r),
            a = new Array(r),
            i = new Array(r),
            o, s;
        for (o = 0; o < r; ++o) s = wr(e[o]), n[o] = s.r || 0, a[o] = s.g || 0, i[o] = s.b || 0;
        return n = t(n), a = t(a), i = t(i), s.opacity = 1,
            function(l) {
                return s.r = n(l), s.g = a(l), s.b = i(l), s + ""
            }
    }
}
var qe, Vm, Gm, Ki = b(() => {
    ua();
    Zi();
    Su();
    Cu();
    qe = function t(e) {
        var r = ku(e);

        function n(a, i) {
            var o = r((a = wr(a)).r, (i = wr(i)).r),
                s = r(a.g, i.g),
                l = r(a.b, i.b),
                c = fa(a.opacity, i.opacity);
            return function(u) {
                return a.r = o(u), a.g = s(u), a.b = l(u), a.opacity = c(u), a + ""
            }
        }
        return n.gamma = t, n
    }(1);
    Vm = Ru($u), Gm = Ru(Au)
});

function Mu(t, e) {
    e || (e = []);
    var r = t ? Math.min(e.length, t.length) : 0,
        n = e.slice(),
        a;
    return function(i) {
        for (a = 0; a < r; ++a) n[a] = t[a] * (1 - i) + e[a] * i;
        return n
    }
}

function Eu(t) {
    return ArrayBuffer.isView(t) && !(t instanceof DataView)
}
var Lu = b(() => {});

function Iu(t, e) {
    var r = e ? e.length : 0,
        n = t ? Math.min(r, t.length) : 0,
        a = new Array(n),
        i = new Array(r),
        o;
    for (o = 0; o < n; ++o) a[o] = ne(t[o], e[o]);
    for (; o < r; ++o) i[o] = e[o];
    return function(s) {
        for (o = 0; o < n; ++o) i[o] = a[o](s);
        return i
    }
}
var Du = b(() => {
    da()
});

function Ou(t, e) {
    var r = new Date;
    return t = +t, e = +e,
        function(n) {
            return r.setTime(t * (1 - n) + e * n), r
        }
}
var Pu = b(() => {});

function Tt(t, e) {
    return t = +t, e = +e,
        function(r) {
            return t * (1 - r) + e * r
        }
}
var on = b(() => {});

function Fu(t, e) {
    var r = {},
        n = {},
        a;
    (t === null || typeof t != "object") && (t = {}), (e === null || typeof e != "object") && (e = {});
    for (a in e) a in t ? r[a] = ne(t[a], e[a]) : n[a] = e[a];
    return function(i) {
        for (a in r) n[a] = r[a](i);
        return n
    }
}
var zu = b(() => {
    da()
});

function Um(t) {
    return function() {
        return t
    }
}

function Hm(t) {
    return function(e) {
        return t(e) + ""
    }
}

function sn(t, e) {
    var r = Ji.lastIndex = Qi.lastIndex = 0,
        n, a, i, o = -1,
        s = [],
        l = [];
    for (t = t + "", e = e + "";
        (n = Ji.exec(t)) && (a = Qi.exec(e));)(i = a.index) > r && (i = e.slice(r, i), s[o] ? s[o] += i : s[++o] = i), (n = n[0]) === (a = a[0]) ? s[o] ? s[o] += a : s[++o] = a : (s[++o] = null, l.push({
        i: o,
        x: Tt(n, a)
    })), r = Qi.lastIndex;
    return r < e.length && (i = e.slice(r), s[o] ? s[o] += i : s[++o] = i), s.length < 2 ? l[0] ? Hm(l[0].x) : Um(e) : (e = l.length, function(c) {
        for (var u = 0, f; u < e; ++u) s[(f = l[u]).i] = f.x(c);
        return s.join("")
    })
}
var Ji, Qi, to = b(() => {
    on();
    Ji = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Qi = new RegExp(Ji.source, "g")
});

function ne(t, e) {
    var r = typeof e,
        n;
    return e == null || r === "boolean" ? an(e) : (r === "number" ? Tt : r === "string" ? (n = Zt(e)) ? (e = n, qe) : sn : e instanceof Zt ? qe : e instanceof Date ? Ou : Eu(e) ? Mu : Array.isArray(e) ? Iu : typeof e.valueOf != "function" && typeof e.toString != "function" || isNaN(e) ? Fu : Tt)(t, e)
}
var da = b(() => {
    ua();
    Ki();
    Du();
    Pu();
    on();
    zu();
    to();
    ji();
    Lu()
});

function eo(t, e) {
    return t = +t, e = +e,
        function(r) {
            return Math.round(t * (1 - r) + e * r)
        }
}
var Nu = b(() => {});

function ro(t, e, r, n, a, i) {
    var o, s, l;
    return (o = Math.sqrt(t * t + e * e)) && (t /= o, e /= o), (l = t * r + e * n) && (r -= t * l, n -= e * l), (s = Math.sqrt(r * r + n * n)) && (r /= s, n /= s, l /= s), t * n < e * r && (t = -t, e = -e, l = -l, o = -o), {
        translateX: a,
        translateY: i,
        rotate: Math.atan2(e, t) * Bu,
        skewX: Math.atan(l) * Bu,
        scaleX: o,
        scaleY: s
    }
}
var Bu, ha, Xu = b(() => {
    Bu = 180 / Math.PI, ha = {
        translateX: 0,
        translateY: 0,
        rotate: 0,
        skewX: 0,
        scaleX: 1,
        scaleY: 1
    }
});

function Yu(t) {
    let e = new(typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
    return e.isIdentity ? ha : ro(e.a, e.b, e.c, e.d, e.e, e.f)
}

function Vu(t) {
    return t == null ? ha : (pa || (pa = document.createElementNS("http://www.w3.org/2000/svg", "g")), pa.setAttribute("transform", t), (t = pa.transform.baseVal.consolidate()) ? (t = t.matrix, ro(t.a, t.b, t.c, t.d, t.e, t.f)) : ha)
}
var pa, Gu = b(() => {
    Xu()
});

function Uu(t, e, r, n) {
    function a(c) {
        return c.length ? c.pop() + " " : ""
    }

    function i(c, u, f, d, h, p) {
        if (c !== f || u !== d) {
            var g = h.push("translate(", null, e, null, r);
            p.push({
                i: g - 4,
                x: Tt(c, f)
            }, {
                i: g - 2,
                x: Tt(u, d)
            })
        } else(f || d) && h.push("translate(" + f + e + d + r)
    }

    function o(c, u, f, d) {
        c !== u ? (c - u > 180 ? u += 360 : u - c > 180 && (c += 360), d.push({
            i: f.push(a(f) + "rotate(", null, n) - 2,
            x: Tt(c, u)
        })) : u && f.push(a(f) + "rotate(" + u + n)
    }

    function s(c, u, f, d) {
        c !== u ? d.push({
            i: f.push(a(f) + "skewX(", null, n) - 2,
            x: Tt(c, u)
        }) : u && f.push(a(f) + "skewX(" + u + n)
    }

    function l(c, u, f, d, h, p) {
        if (c !== f || u !== d) {
            var g = h.push(a(h) + "scale(", null, ",", null, ")");
            p.push({
                i: g - 4,
                x: Tt(c, f)
            }, {
                i: g - 2,
                x: Tt(u, d)
            })
        } else(f !== 1 || d !== 1) && h.push(a(h) + "scale(" + f + "," + d + ")")
    }
    return function(c, u) {
        var f = [],
            d = [];
        return c = t(c), u = t(u), i(c.translateX, c.translateY, u.translateX, u.translateY, f, d), o(c.rotate, u.rotate, f, d), s(c.skewX, u.skewX, f, d), l(c.scaleX, c.scaleY, u.scaleX, u.scaleY, f, d), c = u = null,
            function(h) {
                for (var p = -1, g = d.length, m; ++p < g;) f[(m = d[p]).i] = m.x(h);
                return f.join("")
            }
    }
}
var no, ao, Hu = b(() => {
    on();
    Gu();
    no = Uu(Yu, "px, ", "px)", "deg)"), ao = Uu(Vu, ", ", ")", ")")
});
var $r = b(() => {
    da();
    on();
    Nu();
    to();
    Hu();
    Ki()
});

function hn() {
    return Ze || (Zu(Wm), Ze = fn.now() + ma)
}

function Wm() {
    Ze = 0
}

function dn() {
    this._call = this._time = this._next = null
}

function xa(t, e, r) {
    var n = new dn;
    return n.restart(t, e, r), n
}

function ju() {
    hn(), ++Ar;
    for (var t = ga, e; t;)(e = Ze - t._time) >= 0 && t._call.call(void 0, e), t = t._next;
    --Ar
}

function Wu() {
    Ze = (va = fn.now()) + ma, Ar = cn = 0;
    try {
        ju()
    } finally {
        Ar = 0, Zm(), Ze = 0
    }
}

function qm() {
    var t = fn.now(),
        e = t - va;
    e > qu && (ma -= e, va = t)
}

function Zm() {
    for (var t, e = ga, r, n = 1 / 0; e;) e._call ? (n > e._time && (n = e._time), t = e, e = e._next) : (r = e._next, e._next = null, e = t ? t._next = r : ga = r);
    un = t, io(n)
}

function io(t) {
    if (!Ar) {
        cn && (cn = clearTimeout(cn));
        var e = t - Ze;
        e > 24 ? (t < 1 / 0 && (cn = setTimeout(Wu, t - fn.now() - ma)), ln && (ln = clearInterval(ln))) : (ln || (va = fn.now(), ln = setInterval(qm, qu)), Ar = 1, Zu(Wu))
    }
}
var Ar, cn, ln, qu, ga, un, va, Ze, ma, fn, Zu, oo = b(() => {
    Ar = 0, cn = 0, ln = 0, qu = 1e3, va = 0, Ze = 0, ma = 0, fn = typeof performance == "object" && performance.now ? performance : Date, Zu = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
        setTimeout(t, 17)
    };
    dn.prototype = xa.prototype = {
        constructor: dn,
        restart: function(t, e, r) {
            if (typeof t != "function") throw new TypeError("callback is not a function");
            r = (r == null ? hn() : +r) + (e == null ? 0 : +e), !this._next && un !== this && (un ? un._next = this : ga = this, un = this), this._call = t, this._time = r, io()
        },
        stop: function() {
            this._call && (this._call = null, this._time = 1 / 0, io())
        }
    }
});

function _a(t, e, r) {
    var n = new dn;
    return e = e == null ? 0 : +e, n.restart(a => {
        n.stop(), t(a + e)
    }, e, r), n
}
var Ku = b(() => {
    oo()
});
var so = b(() => {
    oo();
    Ku()
});

function $e(t, e, r, n, a, i) {
    var o = t.__transition;
    if (!o) t.__transition = {};
    else if (r in o) return;
    Qm(t, r, {
        name: e,
        index: n,
        group: a,
        on: jm,
        tween: Km,
        time: i.time,
        delay: i.delay,
        duration: i.duration,
        ease: i.ease,
        timer: null,
        state: tf
    })
}

function gn(t, e) {
    var r = vt(t, e);
    if (r.state > tf) throw new Error("too late; already scheduled");
    return r
}

function wt(t, e) {
    var r = vt(t, e);
    if (r.state > ya) throw new Error("too late; already running");
    return r
}

function vt(t, e) {
    var r = t.__transition;
    if (!r || !(r = r[e])) throw new Error("transition not found");
    return r
}

function Qm(t, e, r) {
    var n = t.__transition,
        a;
    n[e] = r, r.timer = xa(i, 0, r.time);

    function i(c) {
        r.state = Qu, r.timer.restart(o, r.delay, r.time), r.delay <= c && o(c - r.delay)
    }

    function o(c) {
        var u, f, d, h;
        if (r.state !== Qu) return l();
        for (u in n)
            if (h = n[u], h.name === r.name) {
                if (h.state === ya) return _a(o);
                h.state === Ju ? (h.state = pn, h.timer.stop(), h.on.call("interrupt", t, t.__data__, h.index, h.group), delete n[u]) : +u < e && (h.state = pn, h.timer.stop(), h.on.call("cancel", t, t.__data__, h.index, h.group), delete n[u])
            }
        if (_a(function() {
                r.state === ya && (r.state = Ju, r.timer.restart(s, r.delay, r.time), s(c))
            }), r.state = ba, r.on.call("start", t, t.__data__, r.index, r.group), r.state === ba) {
            for (r.state = ya, a = new Array(d = r.tween.length), u = 0, f = -1; u < d; ++u)(h = r.tween[u].value.call(t, t.__data__, r.index, r.group)) && (a[++f] = h);
            a.length = f + 1
        }
    }

    function s(c) {
        for (var u = c < r.duration ? r.ease.call(null, c / r.duration) : (r.timer.restart(l), r.state = Ta, 1), f = -1, d = a.length; ++f < d;) a[f].call(t, u);
        r.state === Ta && (r.on.call("end", t, t.__data__, r.index, r.group), l())
    }

    function l() {
        r.state = pn, r.timer.stop(), delete n[e];
        for (var c in n) return;
        delete t.__transition
    }
}
var jm, Km, tf, Qu, ba, ya, Ju, Ta, pn, Dt = b(() => {
    Vi();
    so();
    jm = Qr("start", "end", "cancel", "interrupt"), Km = [], tf = 0, Qu = 1, ba = 2, ya = 3, Ju = 4, Ta = 5, pn = 6
});

function wa(t, e) {
    var r = t.__transition,
        n, a, i = !0,
        o;
    if (r) {
        e = e == null ? null : e + "";
        for (o in r) {
            if ((n = r[o]).name !== e) {
                i = !1;
                continue
            }
            a = n.state > ba && n.state < Ta, n.state = pn, n.timer.stop(), n.on.call(a ? "interrupt" : "cancel", t, t.__data__, n.index, n.group), delete r[o]
        }
        i && delete t.__transition
    }
}
var ef = b(() => {
    Dt()
});

function rf(t) {
    return this.each(function() {
        wa(this, t)
    })
}
var nf = b(() => {
    ef()
});

function Jm(t, e) {
    var r, n;
    return function() {
        var a = wt(this, t),
            i = a.tween;
        if (i !== r) {
            n = r = i;
            for (var o = 0, s = n.length; o < s; ++o)
                if (n[o].name === e) {
                    n = n.slice(), n.splice(o, 1);
                    break
                }
        }
        a.tween = n
    }
}

function tx(t, e, r) {
    var n, a;
    if (typeof r != "function") throw new Error;
    return function() {
        var i = wt(this, t),
            o = i.tween;
        if (o !== n) {
            a = (n = o).slice();
            for (var s = {
                    name: e,
                    value: r
                }, l = 0, c = a.length; l < c; ++l)
                if (a[l].name === e) {
                    a[l] = s;
                    break
                }
            l === c && a.push(s)
        }
        i.tween = a
    }
}

function af(t, e) {
    var r = this._id;
    if (t += "", arguments.length < 2) {
        for (var n = vt(this.node(), r).tween, a = 0, i = n.length, o; a < i; ++a)
            if ((o = n[a]).name === t) return o.value;
        return null
    }
    return this.each((e == null ? Jm : tx)(r, t, e))
}

function Sr(t, e, r) {
    var n = t._id;
    return t.each(function() {
            var a = wt(this, n);
            (a.value || (a.value = {}))[e] = r.apply(this, arguments)
        }),
        function(a) {
            return vt(a, n).value[e]
        }
}
var vn = b(() => {
    Dt()
});

function $a(t, e) {
    var r;
    return (typeof e == "number" ? Tt : e instanceof Zt ? qe : (r = Zt(e)) ? (e = r, qe) : sn)(t, e)
}
var lo = b(() => {
    ua();
    $r()
});

function ex(t) {
    return function() {
        this.removeAttribute(t)
    }
}

function rx(t) {
    return function() {
        this.removeAttributeNS(t.space, t.local)
    }
}

function nx(t, e, r) {
    var n, a = r + "",
        i;
    return function() {
        var o = this.getAttribute(t);
        return o === a ? null : o === n ? i : i = e(n = o, r)
    }
}

function ax(t, e, r) {
    var n, a = r + "",
        i;
    return function() {
        var o = this.getAttributeNS(t.space, t.local);
        return o === a ? null : o === n ? i : i = e(n = o, r)
    }
}

function ix(t, e, r) {
    var n, a, i;
    return function() {
        var o, s = r(this),
            l;
        return s == null ? void this.removeAttribute(t) : (o = this.getAttribute(t), l = s + "", o === l ? null : o === n && l === a ? i : (a = l, i = e(n = o, s)))
    }
}

function ox(t, e, r) {
    var n, a, i;
    return function() {
        var o, s = r(this),
            l;
        return s == null ? void this.removeAttributeNS(t.space, t.local) : (o = this.getAttributeNS(t.space, t.local), l = s + "", o === l ? null : o === n && l === a ? i : (a = l, i = e(n = o, s)))
    }
}

function of (t, e) {
    var r = ge(t),
        n = r === "transform" ? ao : $a;
    return this.attrTween(t, typeof e == "function" ? (r.local ? ox : ix)(r, n, Sr(this, "attr." + t, e)) : e == null ? (r.local ? rx : ex)(r) : (r.local ? ax : nx)(r, n, e))
}
var sf = b(() => {
    $r();
    Xt();
    vn();
    lo()
});

function sx(t, e) {
    return function(r) {
        this.setAttribute(t, e.call(this, r))
    }
}

function lx(t, e) {
    return function(r) {
        this.setAttributeNS(t.space, t.local, e.call(this, r))
    }
}

function cx(t, e) {
    var r, n;

    function a() {
        var i = e.apply(this, arguments);
        return i !== n && (r = (n = i) && lx(t, i)), r
    }
    return a._value = e, a
}

function ux(t, e) {
    var r, n;

    function a() {
        var i = e.apply(this, arguments);
        return i !== n && (r = (n = i) && sx(t, i)), r
    }
    return a._value = e, a
}

function lf(t, e) {
    var r = "attr." + t;
    if (arguments.length < 2) return (r = this.tween(r)) && r._value;
    if (e == null) return this.tween(r, null);
    if (typeof e != "function") throw new Error;
    var n = ge(t);
    return this.tween(r, (n.local ? cx : ux)(n, e))
}
var cf = b(() => {
    Xt()
});

function fx(t, e) {
    return function() {
        gn(this, t).delay = +e.apply(this, arguments)
    }
}

function dx(t, e) {
    return e = +e,
        function() {
            gn(this, t).delay = e
        }
}

function uf(t) {
    var e = this._id;
    return arguments.length ? this.each((typeof t == "function" ? fx : dx)(e, t)) : vt(this.node(), e).delay
}
var ff = b(() => {
    Dt()
});

function hx(t, e) {
    return function() {
        wt(this, t).duration = +e.apply(this, arguments)
    }
}

function px(t, e) {
    return e = +e,
        function() {
            wt(this, t).duration = e
        }
}

function df(t) {
    var e = this._id;
    return arguments.length ? this.each((typeof t == "function" ? hx : px)(e, t)) : vt(this.node(), e).duration
}
var hf = b(() => {
    Dt()
});

function gx(t, e) {
    if (typeof e != "function") throw new Error;
    return function() {
        wt(this, t).ease = e
    }
}

function pf(t) {
    var e = this._id;
    return arguments.length ? this.each(gx(e, t)) : vt(this.node(), e).ease
}
var gf = b(() => {
    Dt()
});

function vx(t, e) {
    return function() {
        var r = e.apply(this, arguments);
        if (typeof r != "function") throw new Error;
        wt(this, t).ease = r
    }
}

function vf(t) {
    if (typeof t != "function") throw new Error;
    return this.each(vx(this._id, t))
}
var mf = b(() => {
    Dt()
});

function xf(t) {
    typeof t != "function" && (t = qr(t));
    for (var e = this._groups, r = e.length, n = new Array(r), a = 0; a < r; ++a)
        for (var i = e[a], o = i.length, s = n[a] = [], l, c = 0; c < o; ++c)(l = i[c]) && t.call(l, l.__data__, c, i) && s.push(l);
    return new Rt(n, this._parents, this._name, this._id)
}
var _f = b(() => {
    Xt();
    Ae()
});

function yf(t) {
    if (t._id !== this._id) throw new Error;
    for (var e = this._groups, r = t._groups, n = e.length, a = r.length, i = Math.min(n, a), o = new Array(n), s = 0; s < i; ++s)
        for (var l = e[s], c = r[s], u = l.length, f = o[s] = new Array(u), d, h = 0; h < u; ++h)(d = l[h] || c[h]) && (f[h] = d);
    for (; s < n; ++s) o[s] = e[s];
    return new Rt(o, this._parents, this._name, this._id)
}
var bf = b(() => {
    Ae()
});

function mx(t) {
    return (t + "").trim().split(/^|\s+/).every(function(e) {
        var r = e.indexOf(".");
        return r >= 0 && (e = e.slice(0, r)), !e || e === "start"
    })
}

function xx(t, e, r) {
    var n, a, i = mx(e) ? gn : wt;
    return function() {
        var o = i(this, t),
            s = o.on;
        s !== n && (a = (n = s).copy()).on(e, r), o.on = a
    }
}

function Tf(t, e) {
    var r = this._id;
    return arguments.length < 2 ? vt(this.node(), r).on.on(t) : this.each(xx(r, t, e))
}
var wf = b(() => {
    Dt()
});

function _x(t) {
    return function() {
        var e = this.parentNode;
        for (var r in this.__transition)
            if (+r !== t) return;
        e && e.removeChild(this)
    }
}

function $f() {
    return this.on("end.remove", _x(this._id))
}
var Af = b(() => {});

function Sf(t) {
    var e = this._name,
        r = this._id;
    typeof t != "function" && (t = Ge(t));
    for (var n = this._groups, a = n.length, i = new Array(a), o = 0; o < a; ++o)
        for (var s = n[o], l = s.length, c = i[o] = new Array(l), u, f, d = 0; d < l; ++d)(u = s[d]) && (f = t.call(u, u.__data__, d, s)) && ("__data__" in u && (f.__data__ = u.__data__), c[d] = f, $e(c[d], e, r, d, c, vt(u, r)));
    return new Rt(i, this._parents, e, r)
}
var kf = b(() => {
    Xt();
    Ae();
    Dt()
});

function Cf(t) {
    var e = this._name,
        r = this._id;
    typeof t != "function" && (t = Wr(t));
    for (var n = this._groups, a = n.length, i = [], o = [], s = 0; s < a; ++s)
        for (var l = n[s], c = l.length, u, f = 0; f < c; ++f)
            if (u = l[f]) {
                for (var d = t.call(u, u.__data__, f, l), h, p = vt(u, r), g = 0, m = d.length; g < m; ++g)(h = d[g]) && $e(h, e, r, g, d, p);
                i.push(d), o.push(u)
            }
    return new Rt(i, o, e, r)
}
var Rf = b(() => {
    Xt();
    Ae();
    Dt()
});

function Mf() {
    return new yx(this._groups, this._parents)
}
var yx, Ef = b(() => {
    Xt();
    yx = ve.prototype.constructor
});

function bx(t, e) {
    var r, n, a;
    return function() {
        var i = Te(this, t),
            o = (this.style.removeProperty(t), Te(this, t));
        return i === o ? null : i === r && o === n ? a : a = e(r = i, n = o)
    }
}

function Lf(t) {
    return function() {
        this.style.removeProperty(t)
    }
}

function Tx(t, e, r) {
    var n, a = r + "",
        i;
    return function() {
        var o = Te(this, t);
        return o === a ? null : o === n ? i : i = e(n = o, r)
    }
}

function wx(t, e, r) {
    var n, a, i;
    return function() {
        var o = Te(this, t),
            s = r(this),
            l = s + "";
        return s == null && (l = s = (this.style.removeProperty(t), Te(this, t))), o === l ? null : o === n && l === a ? i : (a = l, i = e(n = o, s))
    }
}

function $x(t, e) {
    var r, n, a, i = "style." + e,
        o = "end." + i,
        s;
    return function() {
        var l = wt(this, t),
            c = l.on,
            u = l.value[i] == null ? s || (s = Lf(e)) : void 0;
        (c !== r || a !== u) && (n = (r = c).copy()).on(o, a = u), l.on = n
    }
}

function If(t, e, r) {
    var n = (t += "") == "transform" ? no : $a;
    return e == null ? this.styleTween(t, bx(t, n)).on("end.style." + t, Lf(t)) : typeof e == "function" ? this.styleTween(t, wx(t, n, Sr(this, "style." + t, e))).each($x(this._id, t)) : this.styleTween(t, Tx(t, n, e), r).on("end.style." + t, null)
}
var Df = b(() => {
    $r();
    Xt();
    Dt();
    vn();
    lo()
});

function Ax(t, e, r) {
    return function(n) {
        this.style.setProperty(t, e.call(this, n), r)
    }
}

function Sx(t, e, r) {
    var n, a;

    function i() {
        var o = e.apply(this, arguments);
        return o !== a && (n = (a = o) && Ax(t, o, r)), n
    }
    return i._value = e, i
}

function Of(t, e, r) {
    var n = "style." + (t += "");
    if (arguments.length < 2) return (n = this.tween(n)) && n._value;
    if (e == null) return this.tween(n, null);
    if (typeof e != "function") throw new Error;
    return this.tween(n, Sx(t, e, r ? ? ""))
}
var Pf = b(() => {});

function kx(t) {
    return function() {
        this.textContent = t
    }
}

function Cx(t) {
    return function() {
        var e = t(this);
        this.textContent = e ? ? ""
    }
}

function Ff(t) {
    return this.tween("text", typeof t == "function" ? Cx(Sr(this, "text", t)) : kx(t == null ? "" : t + ""))
}
var zf = b(() => {
    vn()
});

function Rx(t) {
    return function(e) {
        this.textContent = t.call(this, e)
    }
}

function Mx(t) {
    var e, r;

    function n() {
        var a = t.apply(this, arguments);
        return a !== r && (e = (r = a) && Rx(a)), e
    }
    return n._value = t, n
}

function Nf(t) {
    var e = "text";
    if (arguments.length < 1) return (e = this.tween(e)) && e._value;
    if (t == null) return this.tween(e, null);
    if (typeof t != "function") throw new Error;
    return this.tween(e, Mx(t))
}
var Bf = b(() => {});

function Xf() {
    for (var t = this._name, e = this._id, r = Aa(), n = this._groups, a = n.length, i = 0; i < a; ++i)
        for (var o = n[i], s = o.length, l, c = 0; c < s; ++c)
            if (l = o[c]) {
                var u = vt(l, e);
                $e(l, t, r, c, o, {
                    time: u.time + u.delay + u.duration,
                    delay: 0,
                    duration: u.duration,
                    ease: u.ease
                })
            }
    return new Rt(n, this._parents, t, r)
}
var Yf = b(() => {
    Ae();
    Dt()
});

function Vf() {
    var t, e, r = this,
        n = r._id,
        a = r.size();
    return new Promise(function(i, o) {
        var s = {
                value: o
            },
            l = {
                value: function() {
                    --a === 0 && i()
                }
            };
        r.each(function() {
            var c = wt(this, n),
                u = c.on;
            u !== t && (e = (t = u).copy(), e._.cancel.push(s), e._.interrupt.push(s), e._.end.push(l)), c.on = e
        }), a === 0 && i()
    })
}
var Gf = b(() => {
    Dt()
});

function Rt(t, e, r, n) {
    this._groups = t, this._parents = e, this._name = r, this._id = n
}

function mn(t) {
    return ve().transition(t)
}

function Aa() {
    return ++Ex
}
var Ex, me, Ae = b(() => {
    Xt();
    sf();
    cf();
    ff();
    hf();
    gf();
    mf();
    _f();
    bf();
    wf();
    Af();
    kf();
    Rf();
    Ef();
    Df();
    Pf();
    zf();
    Bf();
    Yf();
    vn();
    Gf();
    Ex = 0;
    me = ve.prototype;
    Rt.prototype = mn.prototype = {
        constructor: Rt,
        select: Sf,
        selectAll: Cf,
        selectChild: me.selectChild,
        selectChildren: me.selectChildren,
        filter: xf,
        merge: yf,
        selection: Mf,
        transition: Xf,
        call: me.call,
        nodes: me.nodes,
        node: me.node,
        size: me.size,
        empty: me.empty,
        each: me.each,
        on: Tf,
        attr: of ,
        attrTween: lf,
        style: If,
        styleTween: Of,
        text: Ff,
        textTween: Nf,
        remove: $f,
        tween: af,
        delay: uf,
        duration: df,
        ease: pf,
        easeVarying: vf,
        end: Vf,
        [Symbol.iterator]: me[Symbol.iterator]
    }
});
var co, Uf = b(() => {
    co = t => +t
});

function Sa(t) {
    return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2
}
var Hf = b(() => {});
var uo = b(() => {
    Uf();
    Hf()
});

function Ix(t, e) {
    for (var r; !(r = t.__transition) || !(r = r[e]);)
        if (!(t = t.parentNode)) throw new Error(`transition ${e} not found`);
    return r
}

function Wf(t) {
    var e, r;
    t instanceof Rt ? (e = t._id, t = t._name) : (e = Aa(), (r = Lx).time = hn(), t = t == null ? null : t + "");
    for (var n = this._groups, a = n.length, i = 0; i < a; ++i)
        for (var o = n[i], s = o.length, l, c = 0; c < s; ++c)(l = o[c]) && $e(l, t, e, c, o, r || Ix(l, e));
    return new Rt(n, this._parents, t, e)
}
var Lx, qf = b(() => {
    Ae();
    Dt();
    uo();
    so();
    Lx = {
        time: null,
        delay: 0,
        duration: 250,
        ease: Sa
    }
});
var Zf = b(() => {
    Xt();
    nf();
    qf();
    ve.prototype.interrupt = rf;
    ve.prototype.transition = Wf
});
var ka = b(() => {
    Zf();
    Ae()
});
var jf = b(() => {});
var Kf = b(() => {});
var Qf = b(() => {});

function Jf(t) {
    return [+t[0], +t[1]]
}

function Dx(t) {
    return [Jf(t[0]), Jf(t[1])]
}

function fo(t) {
    return {
        type: t
    }
}

function ho(t) {
    var e = t.__brush;
    return e ? e.dim.output(e.selection) : null
}
var h2, p2, g2, v2, m2, x2, td = b(() => {
    ka();
    jf();
    Kf();
    Qf();
    ({
        abs: h2,
        max: p2,
        min: g2
    } = Math);
    v2 = {
        name: "x",
        handles: ["w", "e"].map(fo),
        input: function(t, e) {
            return t == null ? null : [
                [+t[0], e[0][1]],
                [+t[1], e[1][1]]
            ]
        },
        output: function(t) {
            return t && [t[0][0], t[1][0]]
        }
    }, m2 = {
        name: "y",
        handles: ["n", "s"].map(fo),
        input: function(t, e) {
            return t == null ? null : [
                [e[0][0], +t[0]],
                [e[1][0], +t[1]]
            ]
        },
        output: function(t) {
            return t && [t[0][1], t[1][1]]
        }
    }, x2 = {
        name: "xy",
        handles: ["n", "w", "e", "s", "nw", "ne", "sw", "se"].map(fo),
        input: function(t) {
            return t == null ? null : Dx(t)
        },
        output: function(t) {
            return t
        }
    }
});
var ed = b(() => {
    td()
});

function ad(t) {
    return new Function("d", "return {" + t.map(function(e, r) {
        return JSON.stringify(e) + ": d[" + r + '] || ""'
    }).join(",") + "}")
}

function Fx(t, e) {
    var r = ad(t);
    return function(n, a) {
        return e(r(n), a, t)
    }
}

function nd(t) {
    var e = Object.create(null),
        r = [];
    return t.forEach(function(n) {
        for (var a in n) a in e || r.push(e[a] = a)
    }), r
}

function Ot(t, e) {
    var r = t + "",
        n = r.length;
    return n < e ? new Array(e - n + 1).join(0) + r : r
}

function zx(t) {
    return t < 0 ? "-" + Ot(-t, 6) : t > 9999 ? "+" + Ot(t, 6) : Ot(t, 4)
}

function Nx(t) {
    var e = t.getUTCHours(),
        r = t.getUTCMinutes(),
        n = t.getUTCSeconds(),
        a = t.getUTCMilliseconds();
    return isNaN(t) ? "Invalid Date" : zx(t.getUTCFullYear(), 4) + "-" + Ot(t.getUTCMonth() + 1, 2) + "-" + Ot(t.getUTCDate(), 2) + (a ? "T" + Ot(e, 2) + ":" + Ot(r, 2) + ":" + Ot(n, 2) + "." + Ot(a, 3) + "Z" : n ? "T" + Ot(e, 2) + ":" + Ot(r, 2) + ":" + Ot(n, 2) + "Z" : r || e ? "T" + Ot(e, 2) + ":" + Ot(r, 2) + "Z" : "")
}

function Ca(t) {
    var e = new RegExp('["' + t + `
\r]`),
        r = t.charCodeAt(0);

    function n(f, d) {
        var h, p, g = a(f, function(m, v) {
            if (h) return h(m, v - 1);
            p = m, h = d ? Fx(m, d) : ad(m)
        });
        return g.columns = p || [], g
    }

    function a(f, d) {
        var h = [],
            p = f.length,
            g = 0,
            m = 0,
            v, x = p <= 0,
            y = !1;
        f.charCodeAt(p - 1) === xn && --p, f.charCodeAt(p - 1) === vo && --p;

        function _() {
            if (x) return po;
            if (y) return y = !1, rd;
            var T, $ = g,
                C;
            if (f.charCodeAt($) === go) {
                for (; g++ < p && f.charCodeAt(g) !== go || f.charCodeAt(++g) === go;);
                return (T = g) >= p ? x = !0 : (C = f.charCodeAt(g++)) === xn ? y = !0 : C === vo && (y = !0, f.charCodeAt(g) === xn && ++g), f.slice($ + 1, T - 1).replace(/""/g, '"')
            }
            for (; g < p;) {
                if ((C = f.charCodeAt(T = g++)) === xn) y = !0;
                else if (C === vo) y = !0, f.charCodeAt(g) === xn && ++g;
                else if (C !== r) continue;
                return f.slice($, T)
            }
            return x = !0, f.slice($, p)
        }
        for (;
            (v = _()) !== po;) {
            for (var w = []; v !== rd && v !== po;) w.push(v), v = _();
            d && (w = d(w, m++)) == null || h.push(w)
        }
        return h
    }

    function i(f, d) {
        return f.map(function(h) {
            return d.map(function(p) {
                return u(h[p])
            }).join(t)
        })
    }

    function o(f, d) {
        return d == null && (d = nd(f)), [d.map(u).join(t)].concat(i(f, d)).join(`
`)
    }

    function s(f, d) {
        return d == null && (d = nd(f)), i(f, d).join(`
`)
    }

    function l(f) {
        return f.map(c).join(`
`)
    }

    function c(f) {
        return f.map(u).join(t)
    }

    function u(f) {
        return f == null ? "" : f instanceof Date ? Nx(f) : e.test(f += "") ? '"' + f.replace(/"/g, '""') + '"' : f
    }
    return {
        parse: n,
        parseRows: a,
        format: o,
        formatBody: s,
        formatRows: l,
        formatRow: c,
        formatValue: u
    }
}
var rd, po, go, xn, vo, mo = b(() => {
    rd = {}, po = {}, go = 34, xn = 10, vo = 13
});
var je, xo, _o, Bx, Xx, Yx, Vx, Gx, id = b(() => {
    mo();
    je = Ca(","), xo = je.parse, _o = je.parseRows, Bx = je.format, Xx = je.formatBody, Yx = je.formatRows, Vx = je.formatRow, Gx = je.formatValue
});
var Ke, yo, bo, Ux, Hx, Wx, qx, Zx, od = b(() => {
    mo();
    Ke = Ca("	"), yo = Ke.parse, bo = Ke.parseRows, Ux = Ke.format, Hx = Ke.formatBody, Wx = Ke.formatRows, qx = Ke.formatRow, Zx = Ke.formatValue
});
var sd = b(() => {
    id();
    od()
});

function Ut(t, e) {
    switch (arguments.length) {
        case 0:
            break;
        case 1:
            this.range(t);
            break;
        default:
            this.range(e).domain(t);
            break
    }
    return this
}
var Qe = b(() => {});

function _n() {
    var t = new vr,
        e = [],
        r = [],
        n = To;

    function a(i) {
        let o = t.get(i);
        if (o === void 0) {
            if (n !== To) return n;
            t.set(i, o = e.push(i) - 1)
        }
        return r[o % r.length]
    }
    return a.domain = function(i) {
        if (!arguments.length) return e.slice();
        e = [], t = new vr;
        for (let o of i) t.has(o) || t.set(o, e.push(o) - 1);
        return a
    }, a.range = function(i) {
        return arguments.length ? (r = Array.from(i), a) : r.slice()
    }, a.unknown = function(i) {
        return arguments.length ? (n = i, a) : n
    }, a.copy = function() {
        return _n(e, r).unknown(n)
    }, Ut.apply(a, arguments), a
}
var To, ld = b(() => {
    Ve();
    Qe();
    To = Symbol("implicit")
});

function wo(t) {
    return function() {
        return t
    }
}
var cd = b(() => {});

function $o(t) {
    return +t
}
var ud = b(() => {});

function kr(t) {
    return t
}

function Ao(t, e) {
    return (e -= t = +t) ? function(r) {
        return (r - t) / e
    } : wo(isNaN(e) ? NaN : .5)
}

function jx(t, e) {
    var r;
    return t > e && (r = t, t = e, e = r),
        function(n) {
            return Math.max(t, Math.min(e, n))
        }
}

function Kx(t, e, r) {
    var n = t[0],
        a = t[1],
        i = e[0],
        o = e[1];
    return a < n ? (n = Ao(a, n), i = r(o, i)) : (n = Ao(n, a), i = r(i, o)),
        function(s) {
            return i(n(s))
        }
}

function Qx(t, e, r) {
    var n = Math.min(t.length, e.length) - 1,
        a = new Array(n),
        i = new Array(n),
        o = -1;
    for (t[n] < t[0] && (t = t.slice().reverse(), e = e.slice().reverse()); ++o < n;) a[o] = Ao(t[o], t[o + 1]), i[o] = r(e[o], e[o + 1]);
    return function(s) {
        var l = Si(t, s, 1, n) - 1;
        return i[l](a[l](s))
    }
}

function Se(t, e) {
    return e.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown())
}

function yn() {
    var t = fd,
        e = fd,
        r = ne,
        n, a, i, o = kr,
        s, l, c;

    function u() {
        var d = Math.min(t.length, e.length);
        return o !== kr && (o = jx(t[0], t[d - 1])), s = d > 2 ? Qx : Kx, l = c = null, f
    }

    function f(d) {
        return d == null || isNaN(d = +d) ? i : (l || (l = s(t.map(n), e, r)))(n(o(d)))
    }
    return f.invert = function(d) {
            return o(a((c || (c = s(e, t.map(n), Tt)))(d)))
        }, f.domain = function(d) {
            return arguments.length ? (t = Array.from(d, $o), u()) : t.slice()
        }, f.range = function(d) {
            return arguments.length ? (e = Array.from(d), u()) : e.slice()
        }, f.rangeRound = function(d) {
            return e = Array.from(d), r = eo, u()
        }, f.clamp = function(d) {
            return arguments.length ? (o = d ? !0 : kr, u()) : o !== kr
        }, f.interpolate = function(d) {
            return arguments.length ? (r = d, u()) : r
        }, f.unknown = function(d) {
            return arguments.length ? (i = d, f) : i
        },
        function(d, h) {
            return n = d, a = h, u()
        }
}

function bn() {
    return yn()(kr, kr)
}
var fd, Tn = b(() => {
    Ve();
    $r();
    cd();
    ud();
    fd = [0, 1]
});

function dd(t) {
    return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10)
}

function Je(t, e) {
    if ((r = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf("e")) < 0) return null;
    var r, n = t.slice(0, r);
    return [n.length > 1 ? n[0] + n.slice(2) : n, +t.slice(r + 1)]
}
var wn = b(() => {});

function ae(t) {
    return t = Je(Math.abs(t)), t ? t[1] : NaN
}
var $n = b(() => {
    wn()
});

function hd(t, e) {
    return function(r, n) {
        for (var a = r.length, i = [], o = 0, s = t[0], l = 0; a > 0 && s > 0 && (l + s + 1 > n && (s = Math.max(1, n - l)), i.push(r.substring(a -= s, a + s)), !((l += s + 1) > n));) s = t[o = (o + 1) % t.length];
        return i.reverse().join(e)
    }
}
var pd = b(() => {});

function gd(t) {
    return function(e) {
        return e.replace(/[0-9]/g, function(r) {
            return t[+r]
        })
    }
}
var vd = b(() => {});

function ie(t) {
    if (!(e = Jx.exec(t))) throw new Error("invalid format: " + t);
    var e;
    return new Ra({
        fill: e[1],
        align: e[2],
        sign: e[3],
        symbol: e[4],
        zero: e[5],
        width: e[6],
        comma: e[7],
        precision: e[8] && e[8].slice(1),
        trim: e[9],
        type: e[10]
    })
}

function Ra(t) {
    this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + ""
}
var Jx, So = b(() => {
    Jx = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
    ie.prototype = Ra.prototype;
    Ra.prototype.toString = function() {
        return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type
    }
});

function md(t) {
    t: for (var e = t.length, r = 1, n = -1, a; r < e; ++r) switch (t[r]) {
        case ".":
            n = a = r;
            break;
        case "0":
            n === 0 && (n = r), a = r;
            break;
        default:
            if (!+t[r]) break t;
            n > 0 && (n = 0);
            break
    }
    return n > 0 ? t.slice(0, n) + t.slice(a + 1) : t
}
var xd = b(() => {});

function _d(t, e) {
    var r = Je(t, e);
    if (!r) return t + "";
    var n = r[0],
        a = r[1],
        i = a - (ko = Math.max(-8, Math.min(8, Math.floor(a / 3))) * 3) + 1,
        o = n.length;
    return i === o ? n : i > o ? n + new Array(i - o + 1).join("0") : i > 0 ? n.slice(0, i) + "." + n.slice(i) : "0." + new Array(1 - i).join("0") + Je(t, Math.max(0, e + i - 1))[0]
}
var ko, Co = b(() => {
    wn()
});

function Ro(t, e) {
    var r = Je(t, e);
    if (!r) return t + "";
    var n = r[0],
        a = r[1];
    return a < 0 ? "0." + new Array(-a).join("0") + n : n.length > a + 1 ? n.slice(0, a + 1) + "." + n.slice(a + 1) : n + new Array(a - n.length + 2).join("0")
}
var yd = b(() => {
    wn()
});
var Mo, bd = b(() => {
    wn();
    Co();
    yd();
    Mo = {
        "%": (t, e) => (t * 100).toFixed(e),
        b: t => Math.round(t).toString(2),
        c: t => t + "",
        d: dd,
        e: (t, e) => t.toExponential(e),
        f: (t, e) => t.toFixed(e),
        g: (t, e) => t.toPrecision(e),
        o: t => Math.round(t).toString(8),
        p: (t, e) => Ro(t * 100, e),
        r: Ro,
        s: _d,
        X: t => Math.round(t).toString(16).toUpperCase(),
        x: t => Math.round(t).toString(16)
    }
});

function Eo(t) {
    return t
}
var Td = b(() => {});

function Ad(t) {
    var e = t.grouping === void 0 || t.thousands === void 0 ? Eo : hd(wd.call(t.grouping, Number), t.thousands + ""),
        r = t.currency === void 0 ? "" : t.currency[0] + "",
        n = t.currency === void 0 ? "" : t.currency[1] + "",
        a = t.decimal === void 0 ? "." : t.decimal + "",
        i = t.numerals === void 0 ? Eo : gd(wd.call(t.numerals, String)),
        o = t.percent === void 0 ? "%" : t.percent + "",
        s = t.minus === void 0 ? "\u2212" : t.minus + "",
        l = t.nan === void 0 ? "NaN" : t.nan + "";

    function c(f) {
        f = ie(f);
        var d = f.fill,
            h = f.align,
            p = f.sign,
            g = f.symbol,
            m = f.zero,
            v = f.width,
            x = f.comma,
            y = f.precision,
            _ = f.trim,
            w = f.type;
        w === "n" ? (x = !0, w = "g") : Mo[w] || (y === void 0 && (y = 12), _ = !0, w = "g"), (m || d === "0" && h === "=") && (m = !0, d = "0", h = "=");
        var T = g === "$" ? r : g === "#" && /[boxX]/.test(w) ? "0" + w.toLowerCase() : "",
            $ = g === "$" ? n : /[%p]/.test(w) ? o : "",
            C = Mo[w],
            M = /[defgprs%]/.test(w);
        y = y === void 0 ? 6 : /[gprs]/.test(w) ? Math.max(1, Math.min(21, y)) : Math.max(0, Math.min(20, y));

        function R(A) {
            var L = T,
                S = $,
                E, rt, O;
            if (w === "c") S = C(A) + S, A = "";
            else {
                A = +A;
                var I = A < 0 || 1 / A < 0;
                if (A = isNaN(A) ? l : C(Math.abs(A), y), _ && (A = md(A)), I && +A == 0 && p !== "+" && (I = !1), L = (I ? p === "(" ? p : s : p === "-" || p === "(" ? "" : p) + L, S = (w === "s" ? $d[8 + ko / 3] : "") + S + (I && p === "(" ? ")" : ""), M) {
                    for (E = -1, rt = A.length; ++E < rt;)
                        if (O = A.charCodeAt(E), 48 > O || O > 57) {
                            S = (O === 46 ? a + A.slice(E + 1) : A.slice(E)) + S, A = A.slice(0, E);
                            break
                        }
                }
            }
            x && !m && (A = e(A, 1 / 0));
            var B = L.length + A.length + S.length,
                F = B < v ? new Array(v - B + 1).join(d) : "";
            switch (x && m && (A = e(F + A, F.length ? v - S.length : 1 / 0), F = ""), h) {
                case "<":
                    A = L + A + S + F;
                    break;
                case "=":
                    A = L + F + A + S;
                    break;
                case "^":
                    A = F.slice(0, B = F.length >> 1) + L + A + S + F.slice(B);
                    break;
                default:
                    A = F + L + A + S;
                    break
            }
            return i(A)
        }
        return R.toString = function() {
            return f + ""
        }, R
    }

    function u(f, d) {
        var h = c((f = ie(f), f.type = "f", f)),
            p = Math.max(-8, Math.min(8, Math.floor(ae(d) / 3))) * 3,
            g = Math.pow(10, -p),
            m = $d[8 + p / 3];
        return function(v) {
            return h(g * v) + m
        }
    }
    return {
        format: c,
        formatPrefix: u
    }
}
var wd, $d, Sd = b(() => {
    $n();
    pd();
    vd();
    So();
    xd();
    bd();
    Co();
    Td();
    wd = Array.prototype.map, $d = ["y", "z", "a", "f", "p", "n", "\xB5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"]
});

function Lo(t) {
    return Ma = Ad(t), Cr = Ma.format, Ea = Ma.formatPrefix, Ma
}
var Ma, Cr, Ea, kd = b(() => {
    Sd();
    Lo({
        thousands: ",",
        grouping: [3],
        currency: ["$", ""]
    })
});

function Io(t) {
    return Math.max(0, -ae(Math.abs(t)))
}
var Cd = b(() => {
    $n()
});

function Do(t, e) {
    return Math.max(0, Math.max(-8, Math.min(8, Math.floor(ae(e) / 3))) * 3 - ae(Math.abs(t)))
}
var Rd = b(() => {
    $n()
});

function Oo(t, e) {
    return t = Math.abs(t), e = Math.abs(e) - t, Math.max(0, ae(e) - ae(t)) + 1
}
var Md = b(() => {
    $n()
});
var Po = b(() => {
    kd();
    So();
    Cd();
    Rd();
    Md()
});

function Fo(t, e, r, n) {
    var a = mr(t, e, r),
        i;
    switch (n = ie(n ? ? ",f"), n.type) {
        case "s":
            {
                var o = Math.max(Math.abs(t), Math.abs(e));
                return n.precision == null && !isNaN(i = Do(a, o)) && (n.precision = i),
                Ea(n, o)
            }
        case "":
        case "e":
        case "g":
        case "p":
        case "r":
            {
                n.precision == null && !isNaN(i = Oo(a, Math.max(Math.abs(t), Math.abs(e)))) && (n.precision = i - (n.type === "e"));
                break
            }
        case "f":
        case "%":
            {
                n.precision == null && !isNaN(i = Io(a)) && (n.precision = i - (n.type === "%") * 2);
                break
            }
    }
    return Cr(n)
}
var Ed = b(() => {
    Ve();
    Po()
});

function zo(t) {
    var e = t.domain;
    return t.ticks = function(r) {
        var n = e();
        return Ye(n[0], n[n.length - 1], r ? ? 10)
    }, t.tickFormat = function(r, n) {
        var a = e();
        return Fo(a[0], a[a.length - 1], r ? ? 10, n)
    }, t.nice = function(r) {
        r == null && (r = 10);
        var n = e(),
            a = 0,
            i = n.length - 1,
            o = n[a],
            s = n[i],
            l, c, u = 10;
        for (s < o && (c = o, o = s, s = c, c = a, a = i, i = c); u-- > 0;) {
            if (c = Yr(o, s, r), c === l) return n[a] = o, n[i] = s, e(n);
            if (c > 0) o = Math.floor(o / c) * c, s = Math.ceil(s / c) * c;
            else if (c < 0) o = Math.ceil(o * c) / c, s = Math.floor(s * c) / c;
            else break;
            l = c
        }
        return t
    }, t
}

function tr() {
    var t = bn();
    return t.copy = function() {
        return Se(t, tr())
    }, Ut.apply(t, arguments), zo(t)
}
var No = b(() => {
    Ve();
    Tn();
    Qe();
    Ed()
});

function An(t, e) {
    t = t.slice();
    var r = 0,
        n = t.length - 1,
        a = t[r],
        i = t[n],
        o;
    return i < a && (o = r, r = n, n = o, o = a, a = i, i = o), t[r] = e.floor(a), t[n] = e.ceil(i), t
}
var Bo = b(() => {});

function Ld(t) {
    return Math.log(t)
}

function Id(t) {
    return Math.exp(t)
}

function t_(t) {
    return -Math.log(-t)
}

function e_(t) {
    return -Math.exp(-t)
}

function r_(t) {
    return isFinite(t) ? +("1e" + t) : t < 0 ? 0 : t
}

function n_(t) {
    return t === 10 ? r_ : t === Math.E ? Math.exp : e => Math.pow(t, e)
}

function a_(t) {
    return t === Math.E ? Math.log : t === 10 && Math.log10 || t === 2 && Math.log2 || (t = Math.log(t), e => Math.log(e) / t)
}

function Dd(t) {
    return (e, r) => -t(-e, r)
}

function i_(t) {
    let e = t(Ld, Id),
        r = e.domain,
        n = 10,
        a, i;

    function o() {
        return a = a_(n), i = n_(n), r()[0] < 0 ? (a = Dd(a), i = Dd(i), t(t_, e_)) : t(Ld, Id), e
    }
    return e.base = function(s) {
        return arguments.length ? (n = +s, o()) : n
    }, e.domain = function(s) {
        return arguments.length ? (r(s), o()) : r()
    }, e.ticks = s => {
        let l = r(),
            c = l[0],
            u = l[l.length - 1],
            f = u < c;
        f && ([c, u] = [u, c]);
        let d = a(c),
            h = a(u),
            p, g, m = s == null ? 10 : +s,
            v = [];
        if (!(n % 1) && h - d < m) {
            if (d = Math.floor(d), h = Math.ceil(h), c > 0) {
                for (; d <= h; ++d)
                    for (p = 1; p < n; ++p)
                        if (g = d < 0 ? p / i(-d) : p * i(d), !(g < c)) {
                            if (g > u) break;
                            v.push(g)
                        }
            } else
                for (; d <= h; ++d)
                    for (p = n - 1; p >= 1; --p)
                        if (g = d > 0 ? p / i(-d) : p * i(d), !(g < c)) {
                            if (g > u) break;
                            v.push(g)
                        }
            v.length * 2 < m && (v = Ye(c, u, m))
        } else v = Ye(d, h, Math.min(h - d, m)).map(i);
        return f ? v.reverse() : v
    }, e.tickFormat = (s, l) => {
        if (s == null && (s = 10), l == null && (l = n === 10 ? "s" : ","), typeof l != "function" && (!(n % 1) && (l = ie(l)).precision == null && (l.trim = !0), l = Cr(l)), s === 1 / 0) return l;
        let c = Math.max(1, n * s / e.ticks().length);
        return u => {
            let f = u / i(Math.round(a(u)));
            return f * n < n - .5 && (f *= n), f <= c ? l(u) : ""
        }
    }, e.nice = () => r(An(r(), {
        floor: s => i(Math.floor(a(s))),
        ceil: s => i(Math.ceil(a(s)))
    })), e
}

function Sn() {
    let t = i_(yn()).domain([1, 10]);
    return t.copy = () => Se(t, Sn()).base(t.base()), Ut.apply(t, arguments), t
}
var Od = b(() => {
    Ve();
    Po();
    Bo();
    Tn();
    Qe()
});

function Pd(t) {
    return function(e) {
        return Math.sign(e) * Math.log1p(Math.abs(e / t))
    }
}

function Fd(t) {
    return function(e) {
        return Math.sign(e) * Math.expm1(Math.abs(e)) * t
    }
}

function o_(t) {
    var e = 1,
        r = t(Pd(e), Fd(e));
    return r.constant = function(n) {
        return arguments.length ? t(Pd(e = +n), Fd(e)) : e
    }, zo(r)
}

function kn() {
    var t = o_(yn());
    return t.copy = function() {
        return Se(t, kn()).constant(t.constant())
    }, Ut.apply(t, arguments)
}
var zd = b(() => {
    No();
    Tn();
    Qe()
});

function s_(t) {
    return new Date(t)
}

function l_(t) {
    return t instanceof Date ? +t : +new Date(+t)
}

function La(t, e, r, n, a, i, o, s, l, c) {
    var u = bn(),
        f = u.invert,
        d = u.domain,
        h = c(".%L"),
        p = c(":%S"),
        g = c("%I:%M"),
        m = c("%I %p"),
        v = c("%a %d"),
        x = c("%b %d"),
        y = c("%B"),
        _ = c("%Y");

    function w(T) {
        return (l(T) < T ? h : s(T) < T ? p : o(T) < T ? g : i(T) < T ? m : n(T) < T ? a(T) < T ? v : x : r(T) < T ? y : _)(T)
    }
    return u.invert = function(T) {
        return new Date(f(T))
    }, u.domain = function(T) {
        return arguments.length ? d(Array.from(T, l_)) : d().map(s_)
    }, u.ticks = function(T) {
        var $ = d();
        return t($[0], $[$.length - 1], T ? ? 10)
    }, u.tickFormat = function(T, $) {
        return $ == null ? w : c($)
    }, u.nice = function(T) {
        var $ = d();
        return (!T || typeof T.range != "function") && (T = e($[0], $[$.length - 1], T ? ? 10)), T ? d(An($, T)) : u
    }, u.copy = function() {
        return Se(u, La(t, e, r, n, a, i, o, s, l, c))
    }, u
}

function Ia() {
    return Ut.apply(La(Ri, Mi, Nt, pr, de, fe, ur, lr, Vt, _r).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments)
}
var Xo = b(() => {
    Gn();
    Wn();
    Tn();
    Qe();
    Bo()
});

function Da() {
    return Ut.apply(La(ki, Ci, Bt, gr, he, Fe, fr, cr, Vt, yr).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments)
}
var Nd = b(() => {
    Gn();
    Wn();
    Xo();
    Qe()
});
var Bd = b(() => {
    No();
    Od();
    zd();
    ld();
    Xo();
    Nd()
});

function G(t) {
    return function() {
        return t
    }
}
var Cn = b(() => {});

function Yd(t) {
    return t > 1 ? 0 : t < -1 ? Rr : Math.acos(t)
}

function Vo(t) {
    return t >= 1 ? Rn : t <= -1 ? -Rn : Math.asin(t)
}
var Yo, $t, ke, Xd, Oa, jt, er, _t, Rr, Rn, Mr, Pa = b(() => {
    Yo = Math.abs, $t = Math.atan2, ke = Math.cos, Xd = Math.max, Oa = Math.min, jt = Math.sin, er = Math.sqrt, _t = 1e-12, Rr = Math.PI, Rn = Rr / 2, Mr = 2 * Rr
});

function Vd(t) {
    this._ += t[0];
    for (let e = 1, r = t.length; e < r; ++e) this._ += arguments[e] + t[e]
}

function u_(t) {
    let e = Math.floor(t);
    if (!(e >= 0)) throw new Error(`invalid digits: ${t}`);
    if (e > 15) return Vd;
    let r = 10 ** e;
    return function(n) {
        this._ += n[0];
        for (let a = 1, i = n.length; a < i; ++a) this._ += Math.round(arguments[a] * r) / r + n[a]
    }
}

function Gd() {
    return new nr
}
var Go, Uo, rr, c_, nr, Ud = b(() => {
    Go = Math.PI, Uo = 2 * Go, rr = 1e-6, c_ = Uo - rr;
    nr = class {
        constructor(e) {
            this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "", this._append = e == null ? Vd : u_(e)
        }
        moveTo(e, r) {
            this._append `M${this._x0=this._x1=+e},${this._y0=this._y1=+r}`
        }
        closePath() {
            this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append `Z`)
        }
        lineTo(e, r) {
            this._append `L${this._x1=+e},${this._y1=+r}`
        }
        quadraticCurveTo(e, r, n, a) {
            this._append `Q${+e},${+r},${this._x1=+n},${this._y1=+a}`
        }
        bezierCurveTo(e, r, n, a, i, o) {
            this._append `C${+e},${+r},${+n},${+a},${this._x1=+i},${this._y1=+o}`
        }
        arcTo(e, r, n, a, i) {
            if (e = +e, r = +r, n = +n, a = +a, i = +i, i < 0) throw new Error(`negative radius: ${i}`);
            let o = this._x1,
                s = this._y1,
                l = n - e,
                c = a - r,
                u = o - e,
                f = s - r,
                d = u * u + f * f;
            if (this._x1 === null) this._append `M${this._x1=e},${this._y1=r}`;
            else if (d > rr)
                if (!(Math.abs(f * l - c * u) > rr) || !i) this._append `L${this._x1=e},${this._y1=r}`;
                else {
                    let h = n - o,
                        p = a - s,
                        g = l * l + c * c,
                        m = h * h + p * p,
                        v = Math.sqrt(g),
                        x = Math.sqrt(d),
                        y = i * Math.tan((Go - Math.acos((g + d - m) / (2 * v * x))) / 2),
                        _ = y / x,
                        w = y / v;
                    Math.abs(_ - 1) > rr && this._append `L${e+_*u},${r+_*f}`, this._append `A${i},${i},0,0,${+(f*h>u*p)},${this._x1=e+w*l},${this._y1=r+w*c}`
                }
        }
        arc(e, r, n, a, i, o) {
            if (e = +e, r = +r, n = +n, o = !!o, n < 0) throw new Error(`negative radius: ${n}`);
            let s = n * Math.cos(a),
                l = n * Math.sin(a),
                c = e + s,
                u = r + l,
                f = 1 ^ o,
                d = o ? a - i : i - a;
            this._x1 === null ? this._append `M${c},${u}` : (Math.abs(this._x1 - c) > rr || Math.abs(this._y1 - u) > rr) && this._append `L${c},${u}`, n && (d < 0 && (d = d % Uo + Uo), d > c_ ? this._append `A${n},${n},0,1,${f},${e-s},${r-l}A${n},${n},0,1,${f},${this._x1=c},${this._y1=u}` : d > rr && this._append `A${n},${n},0,${+(d>=Go)},${f},${this._x1=e+n*Math.cos(i)},${this._y1=r+n*Math.sin(i)}`)
        }
        rect(e, r, n, a) {
            this._append `M${this._x0=this._x1=+e},${this._y0=this._y1=+r}h${n=+n}v${+a}h${-n}Z`
        }
        toString() {
            return this._
        }
    };
    Gd.prototype = nr.prototype
});
var Hd = b(() => {
    Ud()
});

function Er(t) {
    let e = 3;
    return t.digits = function(r) {
        if (!arguments.length) return e;
        if (r == null) e = null;
        else {
            let n = Math.floor(r);
            if (!(n >= 0)) throw new RangeError(`invalid digits: ${r}`);
            e = n
        }
        return t
    }, () => new nr(e)
}
var Fa = b(() => {
    Hd()
});

function f_(t) {
    return t.innerRadius
}

function d_(t) {
    return t.outerRadius
}

function h_(t) {
    return t.startAngle
}

function p_(t) {
    return t.endAngle
}

function g_(t) {
    return t && t.padAngle
}

function v_(t, e, r, n, a, i, o, s) {
    var l = r - t,
        c = n - e,
        u = o - a,
        f = s - i,
        d = f * l - u * c;
    if (!(d * d < _t)) return d = (u * (e - i) - f * (t - a)) / d, [t + d * l, e + d * c]
}

function za(t, e, r, n, a, i, o) {
    var s = t - r,
        l = e - n,
        c = (o ? i : -i) / er(s * s + l * l),
        u = c * l,
        f = -c * s,
        d = t + u,
        h = e + f,
        p = r + u,
        g = n + f,
        m = (d + p) / 2,
        v = (h + g) / 2,
        x = p - d,
        y = g - h,
        _ = x * x + y * y,
        w = a - i,
        T = d * g - p * h,
        $ = (y < 0 ? -1 : 1) * er(Xd(0, w * w * _ - T * T)),
        C = (T * y - x * $) / _,
        M = (-T * x - y * $) / _,
        R = (T * y + x * $) / _,
        A = (-T * x + y * $) / _,
        L = C - m,
        S = M - v,
        E = R - m,
        rt = A - v;
    return L * L + S * S > E * E + rt * rt && (C = R, M = A), {
        cx: C,
        cy: M,
        x01: -u,
        y01: -f,
        x11: C * (a / w - 1),
        y11: M * (a / w - 1)
    }
}

function Na() {
    var t = f_,
        e = d_,
        r = G(0),
        n = null,
        a = h_,
        i = p_,
        o = g_,
        s = null,
        l = Er(c);

    function c() {
        var u, f, d = +t.apply(this, arguments),
            h = +e.apply(this, arguments),
            p = a.apply(this, arguments) - Rn,
            g = i.apply(this, arguments) - Rn,
            m = Yo(g - p),
            v = g > p;
        if (s || (s = u = l()), h < d && (f = h, h = d, d = f), !(h > _t)) s.moveTo(0, 0);
        else if (m > Mr - _t) s.moveTo(h * ke(p), h * jt(p)), s.arc(0, 0, h, p, g, !v), d > _t && (s.moveTo(d * ke(g), d * jt(g)), s.arc(0, 0, d, g, p, v));
        else {
            var x = p,
                y = g,
                _ = p,
                w = g,
                T = m,
                $ = m,
                C = o.apply(this, arguments) / 2,
                M = C > _t && (n ? +n.apply(this, arguments) : er(d * d + h * h)),
                R = Oa(Yo(h - d) / 2, +r.apply(this, arguments)),
                A = R,
                L = R,
                S, E;
            if (M > _t) {
                var rt = Vo(M / d * jt(C)),
                    O = Vo(M / h * jt(C));
                (T -= rt * 2) > _t ? (rt *= v ? 1 : -1, _ += rt, w -= rt) : (T = 0, _ = w = (p + g) / 2), ($ -= O * 2) > _t ? (O *= v ? 1 : -1, x += O, y -= O) : ($ = 0, x = y = (p + g) / 2)
            }
            var I = h * ke(x),
                B = h * jt(x),
                F = d * ke(w),
                it = d * jt(w);
            if (R > _t) {
                var ht = h * ke(y),
                    Et = h * jt(y),
                    Yt = d * ke(_),
                    W = d * jt(_),
                    pt;
                if (m < Rr)
                    if (pt = v_(I, B, Yt, W, ht, Et, F, it)) {
                        var Ft = I - pt[0],
                            kt = B - pt[1],
                            Ie = ht - pt[0],
                            D = Et - pt[1],
                            N = 1 / jt(Yd((Ft * Ie + kt * D) / (er(Ft * Ft + kt * kt) * er(Ie * Ie + D * D))) / 2),
                            V = er(pt[0] * pt[0] + pt[1] * pt[1]);
                        A = Oa(R, (d - V) / (N - 1)), L = Oa(R, (h - V) / (N + 1))
                    } else A = L = 0
            }
            $ > _t ? L > _t ? (S = za(Yt, W, I, B, h, L, v), E = za(ht, Et, F, it, h, L, v), s.moveTo(S.cx + S.x01, S.cy + S.y01), L < R ? s.arc(S.cx, S.cy, L, $t(S.y01, S.x01), $t(E.y01, E.x01), !v) : (s.arc(S.cx, S.cy, L, $t(S.y01, S.x01), $t(S.y11, S.x11), !v), s.arc(0, 0, h, $t(S.cy + S.y11, S.cx + S.x11), $t(E.cy + E.y11, E.cx + E.x11), !v), s.arc(E.cx, E.cy, L, $t(E.y11, E.x11), $t(E.y01, E.x01), !v))) : (s.moveTo(I, B), s.arc(0, 0, h, x, y, !v)) : s.moveTo(I, B), !(d > _t) || !(T > _t) ? s.lineTo(F, it) : A > _t ? (S = za(F, it, ht, Et, d, -A, v), E = za(I, B, Yt, W, d, -A, v), s.lineTo(S.cx + S.x01, S.cy + S.y01), A < R ? s.arc(S.cx, S.cy, A, $t(S.y01, S.x01), $t(E.y01, E.x01), !v) : (s.arc(S.cx, S.cy, A, $t(S.y01, S.x01), $t(S.y11, S.x11), !v), s.arc(0, 0, d, $t(S.cy + S.y11, S.cx + S.x11), $t(E.cy + E.y11, E.cx + E.x11), v), s.arc(E.cx, E.cy, A, $t(E.y11, E.x11), $t(E.y01, E.x01), !v))) : s.arc(0, 0, d, w, _, v)
        }
        if (s.closePath(), u) return s = null, u + "" || null
    }
    return c.centroid = function() {
        var u = (+t.apply(this, arguments) + +e.apply(this, arguments)) / 2,
            f = (+a.apply(this, arguments) + +i.apply(this, arguments)) / 2 - Rr / 2;
        return [ke(f) * u, jt(f) * u]
    }, c.innerRadius = function(u) {
        return arguments.length ? (t = typeof u == "function" ? u : G(+u), c) : t
    }, c.outerRadius = function(u) {
        return arguments.length ? (e = typeof u == "function" ? u : G(+u), c) : e
    }, c.cornerRadius = function(u) {
        return arguments.length ? (r = typeof u == "function" ? u : G(+u), c) : r
    }, c.padRadius = function(u) {
        return arguments.length ? (n = u == null ? null : typeof u == "function" ? u : G(+u), c) : n
    }, c.startAngle = function(u) {
        return arguments.length ? (a = typeof u == "function" ? u : G(+u), c) : a
    }, c.endAngle = function(u) {
        return arguments.length ? (i = typeof u == "function" ? u : G(+u), c) : i
    }, c.padAngle = function(u) {
        return arguments.length ? (o = typeof u == "function" ? u : G(+u), c) : o
    }, c.context = function(u) {
        return arguments.length ? (s = u ? ? null, c) : s
    }, c
}
var Wd = b(() => {
    Cn();
    Pa();
    Fa()
});

function Lr(t) {
    return typeof t == "object" && "length" in t ? t : Array.from(t)
}
var TC, Ba = b(() => {
    TC = Array.prototype.slice
});

function qd(t) {
    this._context = t
}

function ar(t) {
    return new qd(t)
}
var Xa = b(() => {
    qd.prototype = {
        areaStart: function() {
            this._line = 0
        },
        areaEnd: function() {
            this._line = NaN
        },
        lineStart: function() {
            this._point = 0
        },
        lineEnd: function() {
            (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line
        },
        point: function(t, e) {
            switch (t = +t, e = +e, this._point) {
                case 0:
                    this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
                    break;
                case 1:
                    this._point = 2;
                default:
                    this._context.lineTo(t, e);
                    break
            }
        }
    }
});

function Ya(t) {
    return t[0]
}

function Va(t) {
    return t[1]
}
var Ho = b(() => {});

function Mn(t, e) {
    var r = G(!0),
        n = null,
        a = ar,
        i = null,
        o = Er(s);
    t = typeof t == "function" ? t : t === void 0 ? Ya : G(t), e = typeof e == "function" ? e : e === void 0 ? Va : G(e);

    function s(l) {
        var c, u = (l = Lr(l)).length,
            f, d = !1,
            h;
        for (n == null && (i = a(h = o())), c = 0; c <= u; ++c) !(c < u && r(f = l[c], c, l)) === d && ((d = !d) ? i.lineStart() : i.lineEnd()), d && i.point(+t(f, c, l), +e(f, c, l));
        if (h) return i = null, h + "" || null
    }
    return s.x = function(l) {
        return arguments.length ? (t = typeof l == "function" ? l : G(+l), s) : t
    }, s.y = function(l) {
        return arguments.length ? (e = typeof l == "function" ? l : G(+l), s) : e
    }, s.defined = function(l) {
        return arguments.length ? (r = typeof l == "function" ? l : G(!!l), s) : r
    }, s.curve = function(l) {
        return arguments.length ? (a = l, n != null && (i = a(n)), s) : a
    }, s.context = function(l) {
        return arguments.length ? (l == null ? n = i = null : i = a(n = l), s) : n
    }, s
}
var Wo = b(() => {
    Ba();
    Cn();
    Xa();
    Fa();
    Ho()
});

function qo(t, e, r) {
    var n = null,
        a = G(!0),
        i = null,
        o = ar,
        s = null,
        l = Er(c);
    t = typeof t == "function" ? t : t === void 0 ? Ya : G(+t), e = typeof e == "function" ? e : e === void 0 ? G(0) : G(+e), r = typeof r == "function" ? r : r === void 0 ? Va : G(+r);

    function c(f) {
        var d, h, p, g = (f = Lr(f)).length,
            m, v = !1,
            x, y = new Array(g),
            _ = new Array(g);
        for (i == null && (s = o(x = l())), d = 0; d <= g; ++d) {
            if (!(d < g && a(m = f[d], d, f)) === v)
                if (v = !v) h = d, s.areaStart(), s.lineStart();
                else {
                    for (s.lineEnd(), s.lineStart(), p = d - 1; p >= h; --p) s.point(y[p], _[p]);
                    s.lineEnd(), s.areaEnd()
                }
            v && (y[d] = +t(m, d, f), _[d] = +e(m, d, f), s.point(n ? +n(m, d, f) : y[d], r ? +r(m, d, f) : _[d]))
        }
        if (x) return s = null, x + "" || null
    }

    function u() {
        return Mn().defined(a).curve(o).context(i)
    }
    return c.x = function(f) {
        return arguments.length ? (t = typeof f == "function" ? f : G(+f), n = null, c) : t
    }, c.x0 = function(f) {
        return arguments.length ? (t = typeof f == "function" ? f : G(+f), c) : t
    }, c.x1 = function(f) {
        return arguments.length ? (n = f == null ? null : typeof f == "function" ? f : G(+f), c) : n
    }, c.y = function(f) {
        return arguments.length ? (e = typeof f == "function" ? f : G(+f), r = null, c) : e
    }, c.y0 = function(f) {
        return arguments.length ? (e = typeof f == "function" ? f : G(+f), c) : e
    }, c.y1 = function(f) {
        return arguments.length ? (r = f == null ? null : typeof f == "function" ? f : G(+f), c) : r
    }, c.lineX0 = c.lineY0 = function() {
        return u().x(t).y(e)
    }, c.lineY1 = function() {
        return u().x(t).y(r)
    }, c.lineX1 = function() {
        return u().x(n).y(e)
    }, c.defined = function(f) {
        return arguments.length ? (a = typeof f == "function" ? f : G(!!f), c) : a
    }, c.curve = function(f) {
        return arguments.length ? (o = f, i != null && (s = o(i)), c) : o
    }, c.context = function(f) {
        return arguments.length ? (f == null ? i = s = null : s = o(i = f), c) : i
    }, c
}
var Zd = b(() => {
    Ba();
    Cn();
    Xa();
    Wo();
    Fa();
    Ho()
});

function jd(t, e) {
    return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN
}
var Kd = b(() => {});

function Qd(t) {
    return t
}
var Jd = b(() => {});

function Zo() {
    var t = Qd,
        e = jd,
        r = null,
        n = G(0),
        a = G(Mr),
        i = G(0);

    function o(s) {
        var l, c = (s = Lr(s)).length,
            u, f, d = 0,
            h = new Array(c),
            p = new Array(c),
            g = +n.apply(this, arguments),
            m = Math.min(Mr, Math.max(-Mr, a.apply(this, arguments) - g)),
            v, x = Math.min(Math.abs(m) / c, i.apply(this, arguments)),
            y = x * (m < 0 ? -1 : 1),
            _;
        for (l = 0; l < c; ++l)(_ = p[h[l] = l] = +t(s[l], l, s)) > 0 && (d += _);
        for (e != null ? h.sort(function(w, T) {
                return e(p[w], p[T])
            }) : r != null && h.sort(function(w, T) {
                return r(s[w], s[T])
            }), l = 0, f = d ? (m - c * y) / d : 0; l < c; ++l, g = v) u = h[l], _ = p[u], v = g + (_ > 0 ? _ * f : 0) + y, p[u] = {
            data: s[u],
            index: l,
            value: _,
            startAngle: g,
            endAngle: v,
            padAngle: x
        };
        return p
    }
    return o.value = function(s) {
        return arguments.length ? (t = typeof s == "function" ? s : G(+s), o) : t
    }, o.sortValues = function(s) {
        return arguments.length ? (e = s, r = null, o) : e
    }, o.sort = function(s) {
        return arguments.length ? (r = s, e = null, o) : r
    }, o.startAngle = function(s) {
        return arguments.length ? (n = typeof s == "function" ? s : G(+s), o) : n
    }, o.endAngle = function(s) {
        return arguments.length ? (a = typeof s == "function" ? s : G(+s), o) : a
    }, o.padAngle = function(s) {
        return arguments.length ? (i = typeof s == "function" ? s : G(+s), o) : i
    }, o
}
var th = b(() => {
    Ba();
    Cn();
    Kd();
    Jd();
    Pa()
});

function Ht() {}
var En = b(() => {});

function Ir(t, e, r) {
    t._context.bezierCurveTo((2 * t._x0 + t._x1) / 3, (2 * t._y0 + t._y1) / 3, (t._x0 + 2 * t._x1) / 3, (t._y0 + 2 * t._y1) / 3, (t._x0 + 4 * t._x1 + e) / 6, (t._y0 + 4 * t._y1 + r) / 6)
}

function Ln(t) {
    this._context = t
}

function jo(t) {
    return new Ln(t)
}
var In = b(() => {
    Ln.prototype = {
        areaStart: function() {
            this._line = 0
        },
        areaEnd: function() {
            this._line = NaN
        },
        lineStart: function() {
            this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0
        },
        lineEnd: function() {
            switch (this._point) {
                case 3:
                    Ir(this, this._x1, this._y1);
                case 2:
                    this._context.lineTo(this._x1, this._y1);
                    break
            }(this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line
        },
        point: function(t, e) {
            switch (t = +t, e = +e, this._point) {
                case 0:
                    this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
                    break;
                case 1:
                    this._point = 2;
                    break;
                case 2:
                    this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
                default:
                    Ir(this, t, e);
                    break
            }
            this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = e
        }
    }
});

function eh(t) {
    this._context = t
}

function Ko(t) {
    return new eh(t)
}
var rh = b(() => {
    En();
    In();
    eh.prototype = {
        areaStart: Ht,
        areaEnd: Ht,
        lineStart: function() {
            this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0
        },
        lineEnd: function() {
            switch (this._point) {
                case 1:
                    {
                        this._context.moveTo(this._x2, this._y2),
                        this._context.closePath();
                        break
                    }
                case 2:
                    {
                        this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3),
                        this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3),
                        this._context.closePath();
                        break
                    }
                case 3:
                    {
                        this.point(this._x2, this._y2),
                        this.point(this._x3, this._y3),
                        this.point(this._x4, this._y4);
                        break
                    }
            }
        },
        point: function(t, e) {
            switch (t = +t, e = +e, this._point) {
                case 0:
                    this._point = 1, this._x2 = t, this._y2 = e;
                    break;
                case 1:
                    this._point = 2, this._x3 = t, this._y3 = e;
                    break;
                case 2:
                    this._point = 3, this._x4 = t, this._y4 = e, this._context.moveTo((this._x0 + 4 * this._x1 + t) / 6, (this._y0 + 4 * this._y1 + e) / 6);
                    break;
                default:
                    Ir(this, t, e);
                    break
            }
            this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = e
        }
    }
});

function nh(t) {
    this._context = t
}

function Qo(t) {
    return new nh(t)
}
var ah = b(() => {
    In();
    nh.prototype = {
        areaStart: function() {
            this._line = 0
        },
        areaEnd: function() {
            this._line = NaN
        },
        lineStart: function() {
            this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0
        },
        lineEnd: function() {
            (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line
        },
        point: function(t, e) {
            switch (t = +t, e = +e, this._point) {
                case 0:
                    this._point = 1;
                    break;
                case 1:
                    this._point = 2;
                    break;
                case 2:
                    this._point = 3;
                    var r = (this._x0 + 4 * this._x1 + t) / 6,
                        n = (this._y0 + 4 * this._y1 + e) / 6;
                    this._line ? this._context.lineTo(r, n) : this._context.moveTo(r, n);
                    break;
                case 3:
                    this._point = 4;
                default:
                    Ir(this, t, e);
                    break
            }
            this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = e
        }
    }
});

function ih(t, e) {
    this._basis = new Ln(t), this._beta = e
}
var Jo, oh = b(() => {
    In();
    ih.prototype = {
        lineStart: function() {
            this._x = [], this._y = [], this._basis.lineStart()
        },
        lineEnd: function() {
            var t = this._x,
                e = this._y,
                r = t.length - 1;
            if (r > 0)
                for (var n = t[0], a = e[0], i = t[r] - n, o = e[r] - a, s = -1, l; ++s <= r;) l = s / r, this._basis.point(this._beta * t[s] + (1 - this._beta) * (n + l * i), this._beta * e[s] + (1 - this._beta) * (a + l * o));
            this._x = this._y = null, this._basis.lineEnd()
        },
        point: function(t, e) {
            this._x.push(+t), this._y.push(+e)
        }
    };
    Jo = function t(e) {
        function r(n) {
            return e === 1 ? new Ln(n) : new ih(n, e)
        }
        return r.beta = function(n) {
            return t(+n)
        }, r
    }(.85)
});

function Dr(t, e, r) {
    t._context.bezierCurveTo(t._x1 + t._k * (t._x2 - t._x0), t._y1 + t._k * (t._y2 - t._y0), t._x2 + t._k * (t._x1 - e), t._y2 + t._k * (t._y1 - r), t._x2, t._y2)
}

function Ga(t, e) {
    this._context = t, this._k = (1 - e) / 6
}
var ts, Dn = b(() => {
    Ga.prototype = {
        areaStart: function() {
            this._line = 0
        },
        areaEnd: function() {
            this._line = NaN
        },
        lineStart: function() {
            this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0
        },
        lineEnd: function() {
            switch (this._point) {
                case 2:
                    this._context.lineTo(this._x2, this._y2);
                    break;
                case 3:
                    Dr(this, this._x1, this._y1);
                    break
            }(this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line
        },
        point: function(t, e) {
            switch (t = +t, e = +e, this._point) {
                case 0:
                    this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
                    break;
                case 1:
                    this._point = 2, this._x1 = t, this._y1 = e;
                    break;
                case 2:
                    this._point = 3;
                default:
                    Dr(this, t, e);
                    break
            }
            this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e
        }
    };
    ts = function t(e) {
        function r(n) {
            return new Ga(n, e)
        }
        return r.tension = function(n) {
            return t(+n)
        }, r
    }(0)
});

function Ua(t, e) {
    this._context = t, this._k = (1 - e) / 6
}
var es, rs = b(() => {
    En();
    Dn();
    Ua.prototype = {
        areaStart: Ht,
        areaEnd: Ht,
        lineStart: function() {
            this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._point = 0
        },
        lineEnd: function() {
            switch (this._point) {
                case 1:
                    {
                        this._context.moveTo(this._x3, this._y3),
                        this._context.closePath();
                        break
                    }
                case 2:
                    {
                        this._context.lineTo(this._x3, this._y3),
                        this._context.closePath();
                        break
                    }
                case 3:
                    {
                        this.point(this._x3, this._y3),
                        this.point(this._x4, this._y4),
                        this.point(this._x5, this._y5);
                        break
                    }
            }
        },
        point: function(t, e) {
            switch (t = +t, e = +e, this._point) {
                case 0:
                    this._point = 1, this._x3 = t, this._y3 = e;
                    break;
                case 1:
                    this._point = 2, this._context.moveTo(this._x4 = t, this._y4 = e);
                    break;
                case 2:
                    this._point = 3, this._x5 = t, this._y5 = e;
                    break;
                default:
                    Dr(this, t, e);
                    break
            }
            this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e
        }
    };
    es = function t(e) {
        function r(n) {
            return new Ua(n, e)
        }
        return r.tension = function(n) {
            return t(+n)
        }, r
    }(0)
});

function Ha(t, e) {
    this._context = t, this._k = (1 - e) / 6
}
var ns, as = b(() => {
    Dn();
    Ha.prototype = {
        areaStart: function() {
            this._line = 0
        },
        areaEnd: function() {
            this._line = NaN
        },
        lineStart: function() {
            this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0
        },
        lineEnd: function() {
            (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line
        },
        point: function(t, e) {
            switch (t = +t, e = +e, this._point) {
                case 0:
                    this._point = 1;
                    break;
                case 1:
                    this._point = 2;
                    break;
                case 2:
                    this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
                    break;
                case 3:
                    this._point = 4;
                default:
                    Dr(this, t, e);
                    break
            }
            this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e
        }
    };
    ns = function t(e) {
        function r(n) {
            return new Ha(n, e)
        }
        return r.tension = function(n) {
            return t(+n)
        }, r
    }(0)
});

function On(t, e, r) {
    var n = t._x1,
        a = t._y1,
        i = t._x2,
        o = t._y2;
    if (t._l01_a > _t) {
        var s = 2 * t._l01_2a + 3 * t._l01_a * t._l12_a + t._l12_2a,
            l = 3 * t._l01_a * (t._l01_a + t._l12_a);
        n = (n * s - t._x0 * t._l12_2a + t._x2 * t._l01_2a) / l, a = (a * s - t._y0 * t._l12_2a + t._y2 * t._l01_2a) / l
    }
    if (t._l23_a > _t) {
        var c = 2 * t._l23_2a + 3 * t._l23_a * t._l12_a + t._l12_2a,
            u = 3 * t._l23_a * (t._l23_a + t._l12_a);
        i = (i * c + t._x1 * t._l23_2a - e * t._l12_2a) / u, o = (o * c + t._y1 * t._l23_2a - r * t._l12_2a) / u
    }
    t._context.bezierCurveTo(n, a, i, o, t._x2, t._y2)
}

function sh(t, e) {
    this._context = t, this._alpha = e
}
var is, Wa = b(() => {
    Pa();
    Dn();
    sh.prototype = {
        areaStart: function() {
            this._line = 0
        },
        areaEnd: function() {
            this._line = NaN
        },
        lineStart: function() {
            this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
        },
        lineEnd: function() {
            switch (this._point) {
                case 2:
                    this._context.lineTo(this._x2, this._y2);
                    break;
                case 3:
                    this.point(this._x2, this._y2);
                    break
            }(this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line
        },
        point: function(t, e) {
            if (t = +t, e = +e, this._point) {
                var r = this._x2 - t,
                    n = this._y2 - e;
                this._l23_a = Math.sqrt(this._l23_2a = Math.pow(r * r + n * n, this._alpha))
            }
            switch (this._point) {
                case 0:
                    this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
                    break;
                case 1:
                    this._point = 2;
                    break;
                case 2:
                    this._point = 3;
                default:
                    On(this, t, e);
                    break
            }
            this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e
        }
    };
    is = function t(e) {
        function r(n) {
            return e ? new sh(n, e) : new Ga(n, 0)
        }
        return r.alpha = function(n) {
            return t(+n)
        }, r
    }(.5)
});

function lh(t, e) {
    this._context = t, this._alpha = e
}
var os, ch = b(() => {
    rs();
    En();
    Wa();
    lh.prototype = {
        areaStart: Ht,
        areaEnd: Ht,
        lineStart: function() {
            this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
        },
        lineEnd: function() {
            switch (this._point) {
                case 1:
                    {
                        this._context.moveTo(this._x3, this._y3),
                        this._context.closePath();
                        break
                    }
                case 2:
                    {
                        this._context.lineTo(this._x3, this._y3),
                        this._context.closePath();
                        break
                    }
                case 3:
                    {
                        this.point(this._x3, this._y3),
                        this.point(this._x4, this._y4),
                        this.point(this._x5, this._y5);
                        break
                    }
            }
        },
        point: function(t, e) {
            if (t = +t, e = +e, this._point) {
                var r = this._x2 - t,
                    n = this._y2 - e;
                this._l23_a = Math.sqrt(this._l23_2a = Math.pow(r * r + n * n, this._alpha))
            }
            switch (this._point) {
                case 0:
                    this._point = 1, this._x3 = t, this._y3 = e;
                    break;
                case 1:
                    this._point = 2, this._context.moveTo(this._x4 = t, this._y4 = e);
                    break;
                case 2:
                    this._point = 3, this._x5 = t, this._y5 = e;
                    break;
                default:
                    On(this, t, e);
                    break
            }
            this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e
        }
    };
    os = function t(e) {
        function r(n) {
            return e ? new lh(n, e) : new Ua(n, 0)
        }
        return r.alpha = function(n) {
            return t(+n)
        }, r
    }(.5)
});

function uh(t, e) {
    this._context = t, this._alpha = e
}
var ss, fh = b(() => {
    as();
    Wa();
    uh.prototype = {
        areaStart: function() {
            this._line = 0
        },
        areaEnd: function() {
            this._line = NaN
        },
        lineStart: function() {
            this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
        },
        lineEnd: function() {
            (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line
        },
        point: function(t, e) {
            if (t = +t, e = +e, this._point) {
                var r = this._x2 - t,
                    n = this._y2 - e;
                this._l23_a = Math.sqrt(this._l23_2a = Math.pow(r * r + n * n, this._alpha))
            }
            switch (this._point) {
                case 0:
                    this._point = 1;
                    break;
                case 1:
                    this._point = 2;
                    break;
                case 2:
                    this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
                    break;
                case 3:
                    this._point = 4;
                default:
                    On(this, t, e);
                    break
            }
            this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e
        }
    };
    ss = function t(e) {
        function r(n) {
            return e ? new uh(n, e) : new Ha(n, 0)
        }
        return r.alpha = function(n) {
            return t(+n)
        }, r
    }(.5)
});

function dh(t) {
    this._context = t
}

function ls(t) {
    return new dh(t)
}
var hh = b(() => {
    En();
    dh.prototype = {
        areaStart: Ht,
        areaEnd: Ht,
        lineStart: function() {
            this._point = 0
        },
        lineEnd: function() {
            this._point && this._context.closePath()
        },
        point: function(t, e) {
            t = +t, e = +e, this._point ? this._context.lineTo(t, e) : (this._point = 1, this._context.moveTo(t, e))
        }
    }
});

function ph(t) {
    return t < 0 ? -1 : 1
}

function gh(t, e, r) {
    var n = t._x1 - t._x0,
        a = e - t._x1,
        i = (t._y1 - t._y0) / (n || a < 0 && -0),
        o = (r - t._y1) / (a || n < 0 && -0),
        s = (i * a + o * n) / (n + a);
    return (ph(i) + ph(o)) * Math.min(Math.abs(i), Math.abs(o), .5 * Math.abs(s)) || 0
}

function vh(t, e) {
    var r = t._x1 - t._x0;
    return r ? (3 * (t._y1 - t._y0) / r - e) / 2 : e
}

function cs(t, e, r) {
    var n = t._x0,
        a = t._y0,
        i = t._x1,
        o = t._y1,
        s = (i - n) / 3;
    t._context.bezierCurveTo(n + s, a + s * e, i - s, o - s * r, i, o)
}

function qa(t) {
    this._context = t
}

function mh(t) {
    this._context = new xh(t)
}

function xh(t) {
    this._context = t
}

function us(t) {
    return new qa(t)
}

function fs(t) {
    return new mh(t)
}
var _h = b(() => {
    qa.prototype = {
        areaStart: function() {
            this._line = 0
        },
        areaEnd: function() {
            this._line = NaN
        },
        lineStart: function() {
            this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0
        },
        lineEnd: function() {
            switch (this._point) {
                case 2:
                    this._context.lineTo(this._x1, this._y1);
                    break;
                case 3:
                    cs(this, this._t0, vh(this, this._t0));
                    break
            }(this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line
        },
        point: function(t, e) {
            var r = NaN;
            if (t = +t, e = +e, !(t === this._x1 && e === this._y1)) {
                switch (this._point) {
                    case 0:
                        this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
                        break;
                    case 1:
                        this._point = 2;
                        break;
                    case 2:
                        this._point = 3, cs(this, vh(this, r = gh(this, t, e)), r);
                        break;
                    default:
                        cs(this, this._t0, r = gh(this, t, e));
                        break
                }
                this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = e, this._t0 = r
            }
        }
    };
    (mh.prototype = Object.create(qa.prototype)).point = function(t, e) {
        qa.prototype.point.call(this, e, t)
    };
    xh.prototype = {
        moveTo: function(t, e) {
            this._context.moveTo(e, t)
        },
        closePath: function() {
            this._context.closePath()
        },
        lineTo: function(t, e) {
            this._context.lineTo(e, t)
        },
        bezierCurveTo: function(t, e, r, n, a, i) {
            this._context.bezierCurveTo(e, t, n, r, i, a)
        }
    }
});

function bh(t) {
    this._context = t
}

function yh(t) {
    var e, r = t.length - 1,
        n, a = new Array(r),
        i = new Array(r),
        o = new Array(r);
    for (a[0] = 0, i[0] = 2, o[0] = t[0] + 2 * t[1], e = 1; e < r - 1; ++e) a[e] = 1, i[e] = 4, o[e] = 4 * t[e] + 2 * t[e + 1];
    for (a[r - 1] = 2, i[r - 1] = 7, o[r - 1] = 8 * t[r - 1] + t[r], e = 1; e < r; ++e) n = a[e] / i[e - 1], i[e] -= n, o[e] -= n * o[e - 1];
    for (a[r - 1] = o[r - 1] / i[r - 1], e = r - 2; e >= 0; --e) a[e] = (o[e] - a[e + 1]) / i[e];
    for (i[r - 1] = (t[r] + a[r - 1]) / 2, e = 0; e < r - 1; ++e) i[e] = 2 * t[e + 1] - a[e + 1];
    return [a, i]
}

function ds(t) {
    return new bh(t)
}
var Th = b(() => {
    bh.prototype = {
        areaStart: function() {
            this._line = 0
        },
        areaEnd: function() {
            this._line = NaN
        },
        lineStart: function() {
            this._x = [], this._y = []
        },
        lineEnd: function() {
            var t = this._x,
                e = this._y,
                r = t.length;
            if (r)
                if (this._line ? this._context.lineTo(t[0], e[0]) : this._context.moveTo(t[0], e[0]), r === 2) this._context.lineTo(t[1], e[1]);
                else
                    for (var n = yh(t), a = yh(e), i = 0, o = 1; o < r; ++i, ++o) this._context.bezierCurveTo(n[0][i], a[0][i], n[1][i], a[1][i], t[o], e[o]);
            (this._line || this._line !== 0 && r === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null
        },
        point: function(t, e) {
            this._x.push(+t), this._y.push(+e)
        }
    }
});

function Za(t, e) {
    this._context = t, this._t = e
}

function hs(t) {
    return new Za(t, .5)
}

function ps(t) {
    return new Za(t, 0)
}

function gs(t) {
    return new Za(t, 1)
}
var wh = b(() => {
    Za.prototype = {
        areaStart: function() {
            this._line = 0
        },
        areaEnd: function() {
            this._line = NaN
        },
        lineStart: function() {
            this._x = this._y = NaN, this._point = 0
        },
        lineEnd: function() {
            0 < this._t && this._t < 1 && this._point === 2 && this._context.lineTo(this._x, this._y), (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line)
        },
        point: function(t, e) {
            switch (t = +t, e = +e, this._point) {
                case 0:
                    this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
                    break;
                case 1:
                    this._point = 2;
                default:
                    {
                        if (this._t <= 0) this._context.lineTo(this._x, e),
                        this._context.lineTo(t, e);
                        else {
                            var r = this._x * (1 - this._t) + t * this._t;
                            this._context.lineTo(r, this._y), this._context.lineTo(r, e)
                        }
                        break
                    }
            }
            this._x = t, this._y = e
        }
    }
});
var $h = b(() => {
    Wd();
    Zd();
    Wo();
    th();
    rh();
    ah();
    In();
    oh();
    rs();
    as();
    Dn();
    ch();
    fh();
    Wa();
    hh();
    Xa();
    _h();
    Th();
    wh()
});

function Ah(t) {
    return t
}
var Sh = b(() => {});

function m_(t) {
    return "translate(" + t + ",0)"
}

function x_(t) {
    return "translate(0," + t + ")"
}

function __(t) {
    return e => +t(e)
}

function y_(t, e) {
    return e = Math.max(0, t.bandwidth() - e * 2) / 2, t.round() && (e = Math.round(e)), r => +t(r) + e
}

function b_() {
    return !this.__axis
}

function Qa(t, e) {
    var r = [],
        n = null,
        a = null,
        i = 6,
        o = 6,
        s = 3,
        l = typeof window < "u" && window.devicePixelRatio > 1 ? 0 : .5,
        c = t === ja || t === Pn ? -1 : 1,
        u = t === Pn || t === Ka ? "x" : "y",
        f = t === ja || t === vs ? m_ : x_;

    function d(h) {
        var p = n ? ? (e.ticks ? e.ticks.apply(e, r) : e.domain()),
            g = a ? ? (e.tickFormat ? e.tickFormat.apply(e, r) : Ah),
            m = Math.max(i, 0) + s,
            v = e.range(),
            x = +v[0] + l,
            y = +v[v.length - 1] + l,
            _ = (e.bandwidth ? y_ : __)(e.copy(), l),
            w = h.selection ? h.selection() : h,
            T = w.selectAll(".domain").data([null]),
            $ = w.selectAll(".tick").data(p, e).order(),
            C = $.exit(),
            M = $.enter().append("g").attr("class", "tick"),
            R = $.select("line"),
            A = $.select("text");
        T = T.merge(T.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), $ = $.merge(M), R = R.merge(M.append("line").attr("stroke", "currentColor").attr(u + "2", c * i)), A = A.merge(M.append("text").attr("fill", "currentColor").attr(u, c * m).attr("dy", t === ja ? "0em" : t === vs ? "0.71em" : "0.32em")), h !== w && (T = T.transition(h), $ = $.transition(h), R = R.transition(h), A = A.transition(h), C = C.transition(h).attr("opacity", kh).attr("transform", function(L) {
            return isFinite(L = _(L)) ? f(L + l) : this.getAttribute("transform")
        }), M.attr("opacity", kh).attr("transform", function(L) {
            var S = this.parentNode.__axis;
            return f((S && isFinite(S = S(L)) ? S : _(L)) + l)
        })), C.remove(), T.attr("d", t === Pn || t === Ka ? o ? "M" + c * o + "," + x + "H" + l + "V" + y + "H" + c * o : "M" + l + "," + x + "V" + y : o ? "M" + x + "," + c * o + "V" + l + "H" + y + "V" + c * o : "M" + x + "," + l + "H" + y), $.attr("opacity", 1).attr("transform", function(L) {
            return f(_(L) + l)
        }), R.attr(u + "2", c * i), A.attr(u, c * m).text(g), w.filter(b_).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", t === Ka ? "start" : t === Pn ? "end" : "middle"), w.each(function() {
            this.__axis = _
        })
    }
    return d.scale = function(h) {
        return arguments.length ? (e = h, d) : e
    }, d.ticks = function() {
        return r = Array.from(arguments), d
    }, d.tickArguments = function(h) {
        return arguments.length ? (r = h == null ? [] : Array.from(h), d) : r.slice()
    }, d.tickValues = function(h) {
        return arguments.length ? (n = h == null ? null : Array.from(h), d) : n && n.slice()
    }, d.tickFormat = function(h) {
        return arguments.length ? (a = h, d) : a
    }, d.tickSize = function(h) {
        return arguments.length ? (i = o = +h, d) : i
    }, d.tickSizeInner = function(h) {
        return arguments.length ? (i = +h, d) : i
    }, d.tickSizeOuter = function(h) {
        return arguments.length ? (o = +h, d) : o
    }, d.tickPadding = function(h) {
        return arguments.length ? (s = +h, d) : s
    }, d.offset = function(h) {
        return arguments.length ? (l = +h, d) : l
    }, d
}

function ms(t) {
    return Qa(ja, t)
}

function xs(t) {
    return Qa(Ka, t)
}

function Ja(t) {
    return Qa(vs, t)
}

function ti(t) {
    return Qa(Pn, t)
}
var ja, Ka, vs, Pn, kh, Ch = b(() => {
    Sh();
    ja = 1, Ka = 2, vs = 3, Pn = 4, kh = 1e-6
});
var Rh = b(() => {
    Ch()
});
var T_ = b(() => {});
var Mh = b(() => {});
var Eh = b(() => {});

function Ce(t, e, r) {
    this.k = t, this.x = e, this.y = r
}

function ei(t) {
    for (; !t.__zoom;)
        if (!(t = t.parentNode)) return Fn;
    return t.__zoom
}
var Fn, _s = b(() => {
    Ce.prototype = {
        constructor: Ce,
        scale: function(t) {
            return t === 1 ? this : new Ce(this.k * t, this.x, this.y)
        },
        translate: function(t, e) {
            return t === 0 & e === 0 ? this : new Ce(this.k, this.x + this.k * t, this.y + this.k * e)
        },
        apply: function(t) {
            return [t[0] * this.k + this.x, t[1] * this.k + this.y]
        },
        applyX: function(t) {
            return t * this.k + this.x
        },
        applyY: function(t) {
            return t * this.k + this.y
        },
        invert: function(t) {
            return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k]
        },
        invertX: function(t) {
            return (t - this.x) / this.k
        },
        invertY: function(t) {
            return (t - this.y) / this.k
        },
        rescaleX: function(t) {
            return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t))
        },
        rescaleY: function(t) {
            return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t))
        },
        toString: function() {
            return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")"
        }
    };
    Fn = new Ce(1, 0, 0);
    ei.prototype = Ce.prototype
});
var Lh = b(() => {});
var Ih = b(() => {
    ka();
    Mh();
    Eh();
    _s();
    Lh()
});
var Dh = b(() => {
    Ih();
    _s()
});

function $_() {
    return typeof globalThis == "object" && globalThis !== null && globalThis.Object === Object && globalThis || typeof globalThis == "object" && globalThis !== null && globalThis.Object === Object && globalThis || typeof self == "object" && self !== null && self.Object === Object && self || Function("return this")()
}

function A_(t) {
    var e = typeof t ? .requestAnimationFrame == "function" && typeof t ? .cancelAnimationFrame == "function",
        r = typeof t ? .requestIdleCallback == "function" && typeof t ? .cancelIdleCallback == "function",
        n = function(i) {
            return setTimeout(i, 1)
        },
        a = function(i) {
            return clearTimeout(i)
        };
    return [e ? t.requestAnimationFrame : n, e ? t.cancelAnimationFrame : a, r ? t.requestIdleCallback : n, r ? t.cancelIdleCallback : a]
}

function gt(t, e, r) {
    if (r || arguments.length === 2)
        for (var n = 0, a = e.length, i; n < a; n++)(i || !(n in e)) && (i || (i = Array.prototype.slice.call(e, 0, n)), i[n] = e[n]);
    return t.concat(i || Array.prototype.slice.call(e))
}

function Le(t, e, r) {
    return nt(t[e]) ? t[e] : r
}

function C_(t, e) {
    var r = !1;
    return Object.keys(t).forEach(function(n) {
        return t[n] === e && (r = !0)
    }), r
}

function ft(t, e) {
    for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
    var a = X(t);
    return a && t.call.apply(t, gt([e], r, !1)), a
}

function ii(t, e) {
    var r = 0,
        n = function() {
            for (var a = [], i = 0; i < arguments.length; i++) a[i] = arguments[i];
            !--r && e.apply.apply(e, gt([this], a, !1))
        };
    "duration" in t ? t.each(function() {
        return ++r
    }).on("end", n) : (++r, t.call(n))
}

function bs(t) {
    return et(t) ? t.replace(/<(script|img)?/ig, "&lt;").replace(/(script)?>/ig, "&gt;") : t
}

function oi(t, e, r, n) {
    if (r === void 0 && (r = [-1, 1]), n === void 0 && (n = !1), !(!t || !et(e)))
        if (e.indexOf(`
`) === -1) t.text(e);
        else {
            var a = [t.text(), e].map(function(s) {
                return s.replace(/[\s\n]/g, "")
            });
            if (a[0] !== a[1]) {
                var i = e.split(`
`),
                    o = n ? i.length - 1 : 1;
                t.html(""), i.forEach(function(s, l) {
                    t.append("tspan").attr("x", 0).attr("dy", "".concat(l === 0 ? r[0] * o : r[1], "em")).text(s)
                })
            }
        }
}

function Kh(t) {
    var e = t.getBBox(),
        r = e.x,
        n = e.y,
        a = e.width,
        i = e.height;
    return [{
        x: r,
        y: n + i
    }, {
        x: r,
        y: n
    }, {
        x: r + a,
        y: n
    }, {
        x: r + a,
        y: n + i
    }]
}

function R_(t) {
    var e = t.getBoundingClientRect(),
        r = e.width,
        n = e.height,
        a = Kh(t),
        i = a[0].x,
        o = Math.min(a[0].y, a[1].y);
    return {
        x: i,
        y: o,
        width: r,
        height: n
    }
}

function xe(t, e) {
    var r, n = t && ((r = t.touches || t.sourceEvent && t.sourceEvent.touches) === null || r === void 0 ? void 0 : r[0]),
        a = [0, 0];
    try {
        a = br(n || t, e)
    } catch {}
    return a.map(function(i) {
        return isNaN(i) ? 0 : i
    })
}

function Qh(t) {
    var e = t.event,
        r = t.$el,
        n = r.subchart.main || r.main,
        a;
    return e && e.type === "brush" ? a = e.selection : n && (a = n.select(".bb-brush").node()) && (a = ho(a)), a
}

function ni(t) {
    var e = !("rect" in t) || "rect" in t && t.hasAttribute("width") && t.rect.width !== +t.getAttribute("width");
    return e ? t.rect = t.getBoundingClientRect() : t.rect
}

function sr(t, e, r) {
    t === void 0 && (t = !0), e === void 0 && (e = 0), r === void 0 && (r = 1e4);
    var n = Q.crypto || Q.msCrypto,
        a = n ? e + n.getRandomValues(new Uint32Array(1))[0] % (r - e + 1) : Math.floor(Math.random() * (r - e) + e);
    return t ? String(a) : a
}

function ks(t, e, r, n, a) {
    if (r > n) return -1;
    var i = Math.floor((r + n) / 2),
        o = t[i],
        s = o.x,
        l = o.w,
        c = l === void 0 ? 0 : l;
    return a && (s = t[i].y, c = t[i].h), e >= s && e <= s + c ? i : e < s ? ks(t, e, r, i - 1, a) : ks(t, e, i + 1, n, a)
}

function M_(t) {
    var e = Qh(t);
    return e ? e[0] === e[1] : !0
}

function E_() {
    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
    var r = function(n) {
        if (at(n) && n.constructor) {
            var a = new n.constructor;
            for (var i in n) a[i] = r(n[i]);
            return a
        }
        return n
    };
    return t.map(function(n) {
        return r(n)
    }).reduce(function(n, a) {
        return U(U({}, n), a)
    })
}

function Wt(t, e) {
    t === void 0 && (t = {}), K(e) && e.forEach(function(n) {
        return Wt(t, n)
    });
    for (var r in e) /^\d+$/.test(r) || r in t || (t[r] = e[r]);
    return t
}

function L_(t, e) {
    return e === void 0 && (e = "-"), t.split(e).map(function(r, n) {
        return n ? r.charAt(0).toUpperCase() + r.slice(1).toLowerCase() : r.toLowerCase()
    }).join("")
}

function I_(t, e, r) {
    var n = t.rootSelctor,
        a = t.sheet,
        i = function(s) {
            return s.replace(/\s?(bb-)/g, ".$1").replace(/\.+/g, ".")
        },
        o = "".concat(n, " ").concat(i(e), " {").concat(r.join(";"), "}");
    return a[a.insertRule ? "insertRule" : "addRule"](o, a.cssRules.length)
}

function D_(t) {
    var e = [];
    return t.forEach(function(r) {
        var n;
        try {
            r.cssRules && r.cssRules.length && (e = e.concat(Pr(r.cssRules)))
        } catch (a) {
            (n = Q.console) === null || n === void 0 || n.warn("Error while reading rules from ".concat(r.href, ": ").concat(a.toString()))
        }
    }), e
}

function Oh(t) {
    var e = t ? t.transform : null,
        r = e && e.baseVal;
    return r && r.numberOfItems ? r.getItem(0).matrix : {
        a: 0,
        b: 0,
        c: 0,
        d: 0,
        e: 0,
        f: 0
    }
}

function Cs(t) {
    var e = t[0] instanceof Date,
        r = (e ? t.map(Number) : t).filter(function(n, a, i) {
            return i.indexOf(n) === a
        });
    return e ? r.map(function(n) {
        return new Date(n)
    }) : r
}

function Ts(t) {
    return t && t.length ? t.reduce(function(e, r) {
        return e.concat(r)
    }) : []
}

function Fr(t) {
    for (var e = [], r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
    if (!e.length || e.length === 1 && !e[0]) return t;
    var n = e.shift();
    return at(t) && at(n) && Object.keys(n).forEach(function(a) {
        var i = n[a];
        at(i) ? (!t[a] && (t[a] = {}), t[a] = Fr(t[a], i)) : t[a] = K(i) ? i.concat() : i
    }), Fr.apply(void 0, gt([t], e, !1))
}

function zr(t, e) {
    e === void 0 && (e = !0);
    var r;
    return t[0] instanceof Date ? r = e ? function(n, a) {
        return n - a
    } : function(n, a) {
        return a - n
    } : e && !t.every(isNaN) ? r = function(n, a) {
        return n - a
    } : e || (r = function(n, a) {
        return n > a && -1 || n < a && 1 || n === a && 0
    }), t.concat().sort(r)
}

function Me(t, e) {
    var r = e.filter(function(n) {
        return dt(n)
    });
    return r.length ? z(r[0]) ? r = Math[t].apply(Math, r) : r[0] instanceof Date && (r = zr(r, t === "min")[0]) : r = void 0, r
}

function si(t, e) {
    var r = t;
    for (var n in e) r = r.replace(new RegExp("{=".concat(n, "}"), "g"), e[n]);
    return r
}

function te(t) {
    var e, r;
    if (t instanceof Date) r = t;
    else if (et(t)) {
        var n = this,
            a = n.config,
            i = n.format;
        r = (e = i.dataTime(a.data_xFormat)(t)) !== null && e !== void 0 ? e : new Date(t)
    } else z(t) && !isNaN(t) && (r = new Date(+t));
    return (!r || isNaN(+r)) && console && console.error && console.error("Failed to parse x '".concat(t, "' to Date object")), r
}

function Xn() {
    return lt ? .hidden === !1 || lt ? .visibilityState === "visible"
}

function P_(t, e) {
    var r = Q.DocumentTouch,
        n = Q.matchMedia,
        a = Q.navigator,
        i = !1;
    if (e)
        if (a && "maxTouchPoints" in a) i = a.maxTouchPoints > 0;
        else if ("ontouchmove" in Q || r && lt instanceof r) i = !0;
    else if (n ? .("(pointer:coarse)").matches) i = !0;
    else {
        var o = a.userAgent;
        i = /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(o) || /\b(Android|Windows Phone|iPad|iPod)\b/i.test(o)
    }
    var s = t && ["any-hover:hover", "any-pointer:fine"].some(function(l) {
        return n ? .("(".concat(l, ")")).matches
    });
    return s && "mouse" || i && "touch" || "mouse"
}

function Jh(t, e) {
    e() === !1 ? S_(function() {
        return Jh(t, e)
    }) : t()
}

function F_(t) {
    var e = t,
        r = e.config,
        n = "";
    if (le(r.data_type || r.data_types) && !e[ys.LINE]) n = "line";
    else
        for (var a in ys) {
            var i = Y[a];
            if (e.hasType(i) && !e[ys[a]]) {
                n = i;
                break
            }
        }
    n && z_("Please, make sure if %c".concat(L_(n)), "module has been imported and specified correctly.")
}

function z_(t, e) {
    var r, n = "[billboard.js]",
        a = "https://github.com/naver/billboard.js/wiki/CHANGELOG-v2#modularization-by-its-functionality",
        i = (r = Q.console) === null || r === void 0 ? void 0 : r.error;
    throw i && (console.error("\u274C ".concat(n, " ").concat(t), "background:red;color:white;display:block;font-size:15px", e), console.info("%c\u2139\uFE0F", "font-size:15px", a)), Error("".concat(n, " ").concat(t.replace(/\%c([a-z-]+)/i, "'$1' "), " ").concat(e))
}

function e0(t) {
    var e = [],
        r, n = function() {
            n.clear(), t === !1 ? Zh(function() {
                e.forEach(function(a) {
                    return a()
                })
            }, {
                timeout: 200
            }) : r = J_(function() {
                e.forEach(function(a) {
                    return a()
                })
            }, z(t) ? t : 200)
        };
    return n.clear = function() {
        r && (t0(r), r = null)
    }, n.add = function(a) {
        return e.push(a)
    }, n.remove = function(a) {
        return e.splice(e.indexOf(a), 1)
    }, n
}

function rp() {
    var t = [],
        e = function(r, n) {
            function a() {
                for (var i, o = 0, s = 0, l = void 0; l = t[s]; s++) {
                    if (l === !0 || !((i = l.empty) === null || i === void 0) && i.call(l)) {
                        o++;
                        continue
                    }
                    if (Xn() === !1) {
                        o = t.length;
                        break
                    }
                    try {
                        l.transition()
                    } catch {
                        o++
                    }
                }
                return o === t.length
            }
            Jh(function() {
                n ? .()
            }, a)
        };
    return e.add = function(r) {
        K(r) ? t = t.concat(r) : t.push(r)
    }, e
}

function r0(t, e) {
    var r, n = t.toString(),
        a = n.replace(/(function|[\s\W\n])/g, "").substring(0, 15);
    return a in ws || (ws[a] = new Q.Blob(["".concat((r = e ? .map(String).join(";")) !== null && r !== void 0 ? r : "", `

			self.onmessage=function({data}) {
				const result = (`).concat(n, `).apply(null, data);
				self.postMessage(result);
			};`)], {
        type: "text/javascript"
    })), Q.URL.createObjectURL(ws[a])
}

function n0(t) {
    var e = new Q.Worker(t);
    return e.onerror = function(r) {
        console.error ? console.error(r) : console.log(r)
    }, e
}

function $s(t, e, r, n) {
    t === void 0 && (t = !0);
    var a = function() {
        for (var s = [], l = 0; l < arguments.length; l++) s[l] = arguments[l];
        var c = e.apply(void 0, s);
        r(c)
    };
    if (Q.Worker && t) {
        var i = r0(e, n),
            o = n0(i);
        a = function() {
            for (var s = [], l = 0; l < arguments.length; l++) s[l] = arguments[l];
            o.postMessage(s), o.onmessage = function(c) {
                return Q.URL.revokeObjectURL(i), r(c.data)
            }
        }
    }
    return a
}

function Ls(t) {
    var e = [];
    return t.forEach(function(r, n) {
        var a = r[0];
        r.forEach(function(i, o) {
            if (o > 0) {
                if (typeof e[o - 1] > "u" && (e[o - 1] = {}), typeof i > "u") throw new Error("Source data is missing a component at (".concat(n, ", ").concat(o, ")!"));
                e[o - 1][a] = i
            }
        })
    }), e
}

function Is(t) {
    var e = t[0],
        r = [];
    return t.forEach(function(n, a) {
        if (a > 0) {
            var i = {};
            n.forEach(function(o, s) {
                if (typeof o > "u") throw new Error("Source data is missing a component at (".concat(a, ", ").concat(s, ")!"));
                i[e[s]] = o
            }), r.push(i)
        }
    }), r
}

function np(t, e) {
    var r = [],
        n, a;
    if (Array.isArray(t)) {
        var i = function(o, s) {
            if (o[s] !== void 0) return o[s];
            var l = s.replace(/\[(\w+)\]/g, ".$1"),
                c = l.replace(/^\./, "").split("."),
                u = o;
            return c.some(function(f) {
                return !(u = u && f in u ? u[f] : void 0)
            }), u
        };
        e.x ? n = e.value.concat(e.x) : n = e.value, r.push(n), t.forEach(function(o) {
            var s = n.map(function(l) {
                var c = i(o, l);
                return typeof c > "u" && (c = null), c
            });
            r.push(s)
        }), a = Is(r)
    } else Object.keys(t).forEach(function(o) {
        var s, l = t[o].concat();
        (s = l.unshift) === null || s === void 0 || s.call(l, o), r.push(l)
    }), a = Ls(r);
    return a
}

function a0(t, e, r, n, a) {
    e === void 0 && (e = "csv");
    var i = new XMLHttpRequest,
        o = {
            csv: i0,
            tsv: o0,
            json: np
        };
    i.open("GET", t), r && Object.keys(r).forEach(function(s) {
        i.setRequestHeader(s, r[s])
    }), i.onreadystatechange = function() {
        if (i.readyState === 4)
            if (i.status === 200) {
                var s = i.responseText;
                s && a.call(this, o[e](e === "json" ? JSON.parse(s) : s, n))
            } else throw new Error("".concat(t, ": Something went wrong loading!"))
    }, i.send()
}

function ap(t, e) {
    var r = t.rows(e),
        n;
    return r.length === 1 ? (n = [{}], r[0].forEach(function(a) {
        n[0][a] = null
    })) : n = t.parse(e), n
}

function i0(t) {
    return ap({
        rows: _o,
        parse: xo
    }, t)
}

function o0(t) {
    return ap({
        rows: bo,
        parse: yo
    }, t)
}

function Fh(t, e) {
    var r = t || e ? .data_keys;
    return r ? .x && (e.data_x = r.x), r
}

function ip(t, e) {
    e === void 0 && (e = !1);
    var r = this,
        n = r.api;
    e && r.api.flush(!0), t ? .call(n)
}

function p0(t) {
    var e = Jt.colorPattern,
        r = lt.body,
        n = r[e];
    if (!n) {
        var a = ";",
            i = t.classed(Es.colorPattern, !0).style("background-image");
        t.classed(Es.colorPattern, !1), i.indexOf(a) > -1 && (n = i.replace(/url[^#]*|["'()]|(\s|%20)/g, "").split(a).map(function(o) {
            return o.trim().replace(/[\"'\s]/g, "")
        }).filter(Boolean), r[e] = n)
    }
    return n
}

function zh(t, e, r) {
    var n = t.config,
        a = "axis_".concat(e, "_tick_format"),
        i = n[a] ? n[a] : t.defaultValueFormat;
    return i.call(t.api, r)
}

function ri(t) {
    var e = this,
        r = e.getDataById(t),
        n = e.levelColor ? e.levelColor(r.values[0].value) : e.color(r);
    return n
}

function or(t, e, r) {
    t === void 0 && (t = "linear"), e === void 0 && (e = 0), r === void 0 && (r = 1);
    var n = {
        linear: tr,
        log: kn,
        _log: Sn,
        time: Ia,
        utc: Da
    }[t]();
    return n.type = t, /_?log/.test(t) && n.clamp(!0), n.range([e, r])
}

function T0(t) {
    var e = this,
        r;
    return e.isLineType(t) ? r = e.generateGetLinePoints(e.getShapeIndices(e.isLineType)) : e.isBarType(t) && (r = e.generateGetBarPoints(e.getShapeIndices(e.isBarType))), r
}

function S0(t) {
    var e = "middle";
    return t > 0 && t <= 170 ? e = "end" : t > 190 && t <= 360 && (e = "start"), e
}

function k0(t, e, r, n, a) {
    var i, o = this,
        s = t.value,
        l = o.isCandlestickType(t),
        c = z(s) && s < 0 || l && !(!((i = o.getCandlestickData(t)) === null || i === void 0) && i._isUp),
        u = e.x,
        f = e.y,
        d = 4,
        h = d * 2;
    return n ? r === "start" ? (u += c ? 0 : h, f += d) : r === "middle" ? (u += h, f -= h) : r === "end" && (c && (u -= h), f += d) : (r === "start" ? (u += d, c && (f += h * 2)) : r === "middle" ? f -= h : r === "end" && (u -= d, c && (f += h * 2)), a && (f += c ? -17 : l ? 13 : 7)), {
        x: u,
        y: f
    }
}

function Nh(t, e) {
    var r, n = this.config.data_labels_position,
        a = t.id,
        i = t.index,
        o = t.value;
    return (r = X(n) ? n.bind(this.api)(e, o, a, i, this.$el.text) : (a in n ? n[a] : n)[e]) !== null && r !== void 0 ? r : 0
}

function Bh(t, e) {
    t === void 0 && (t = "left");
    var r = z(e),
        n;
    return t.indexOf("center") > -1 ? n = r ? e / 2 : "middle" : t.indexOf("right") > -1 ? n = r ? e : "end" : n = r ? 0 : "start", n
}

function I0(t) {
    var e = this.config,
        r, n, a, i = function() {
            var o = n.shift();
            if (o && r && se(r) && o in r) return r = r[o], i();
            if (!o) return r
        };
    Object.keys(e).forEach(function(o) {
        r = t, n = o.split("_"), a = i(), nt(a) && (e[o] = a)
    }), this.api && (this.state.orgConfig = t)
}

function z0(t, e, r) {
    var n = e || r,
        a = n.width,
        i = n.height,
        o = new XMLSerializer,
        s = t.cloneNode(!0),
        l = D_(Pr(lt.styleSheets)).filter(function(h) {
            return h.cssText
        }).map(function(h) {
            return h.cssText
        });
    s.setAttribute("xmlns", pe.xhtml), s.style.margin = "0", s.style.padding = "0", e.preserveFontStyle && s.querySelectorAll("text").forEach(function(h) {
        h.innerHTML = ""
    });
    var c = o.serializeToString(s),
        u = lt.createElement("style");
    u.appendChild(lt.createTextNode(l.join(`
`)));
    var f = o.serializeToString(u),
        d = '<svg xmlns="'.concat(pe.svg, '" width="').concat(a, '" height="').concat(i, `" 
		viewBox="0 0 `).concat(r.width, " ").concat(r.height, `" 
		preserveAspectRatio="`).concat(e ? .preserveAspectRatio === !1 ? "none" : "xMinYMid meet", `">
			<foreignObject width="100%" height="100%">
				`).concat(f, `
				`).concat(c.replace(/(url\()[^#]+/g, "$1"), `
			</foreignObject></svg>`);
    return "data:image/svg+xml;base64,".concat(F0(d))
}

function N0(t, e) {
    var r = e.top,
        n = e.left,
        a = t.getBBox(),
        i = a.x,
        o = a.y,
        s = t.getScreenCTM(),
        l = s.a,
        c = s.b,
        u = s.c,
        f = s.d,
        d = s.e,
        h = s.f,
        p = t.getBoundingClientRect(),
        g = p.width,
        m = p.height;
    return {
        x: l * i + u * o + d - n,
        y: c * i + f * o + h - r + (m - Math.round(m / 4)),
        width: g,
        height: m
    }
}

function B0(t) {
    var e = t.getBoundingClientRect(),
        r = e.left,
        n = e.top,
        a = function(o) {
            return o.textContent || o.childElementCount
        },
        i = [];
    return Pr(t.querySelectorAll("text")).filter(a).forEach(function(o) {
        var s = function(c) {
            var u, f = Q.getComputedStyle(c),
                d = f.fill,
                h = f.fontFamily,
                p = f.fontSize,
                g = f.textAnchor,
                m = f.transform,
                v = N0(c, {
                    left: r,
                    top: n
                }),
                x = v.x,
                y = v.y,
                _ = v.width,
                w = v.height;
            return u = {}, u[c.textContent] = {
                x,
                y,
                width: _,
                height: w,
                fill: d,
                fontFamily: h,
                fontSize: p,
                textAnchor: g,
                transform: m
            }, u
        };
        if (o.childElementCount > 1) {
            var l = [];
            return Pr(o.querySelectorAll("tspan")).filter(a).forEach(function(c) {
                i.push(s(c))
            }), l
        } else i.push(s(o))
    }), i
}

function X0(t, e) {
    e.forEach(function(r) {
        Object.keys(r).forEach(function(n) {
            var a = r[n],
                i = a.x,
                o = a.y,
                s = a.width,
                l = a.height,
                c = a.fill,
                u = a.fontFamily,
                f = a.fontSize,
                d = a.transform;
            if (t.save(), t.font = "".concat(f, " ").concat(u), t.fillStyle = c, d === "none") t.fillText(n, i, o);
            else {
                var h = d.replace(/(matrix|\(|\))/g, "").split(",");
                h.splice(4).every(function(p) {
                    return +p == 0
                }) ? (h.push(i + s - s / 4), h.push(o - l + l / 3)) : (h.push(i), h.push(o)), t.transform.apply(t, h), t.fillText(n, 0, 0)
            }
            t.restore()
        })
    })
}

function Xh(t, e, r) {
    var n = this,
        a = this.internal,
        i = a.mapToTargetIds(e),
        o = a.state.hiddenTargetIds.map(function(c) {
            return i.indexOf(c) > -1 && c
        }).filter(Boolean);
    a.state.toggling = !0, a["".concat(t ? "remove" : "add", "HiddenTargetIds")](i);
    var s = a.$el.svg.selectAll(a.selectorTargets(i)),
        l = t ? null : "0";
    t && o.length && (s.style("display", null), ft(a.config.data_onshown, this, o)), a.$T(s).style("opacity", l, "important").call(ii, function() {
        !t && o.length === 0 && (s.style("display", "none"), ft(a.config.data_onhidden, n, i)), s.style("opacity", l)
    }), r.withLegend && a["".concat(t ? "show" : "hide", "Legend")](i), a.redraw({
        withUpdateOrgXDomain: !0,
        withUpdateXDomain: !0,
        withLegend: !0
    }), a.state.toggling = !1
}

function Yh(t, e, r) {
    var n = t.config,
        a = function(i, o) {
            var s = z(o) ? o : o === !1 ? void 0 : null;
            s !== null && (n["axis_".concat(i, "_").concat(e)] = s)
        };
    nt(r) && (se(r) ? Object.keys(r).forEach(function(i) {
        a(i, r[i])
    }) : (z(r) || r === !1) && ["y", "y2"].forEach(function(i) {
        a(i, r)
    }), t.redraw({
        withUpdateOrgXDomain: !0,
        withUpdateXDomain: !0
    }))
}

function Vh(t, e) {
    var r = t.config;
    return {
        x: r["axis_x_".concat(e)],
        y: r["axis_y_".concat(e)],
        y2: r["axis_y2_".concat(e)]
    }
}

function Os(t, e) {
    var r = this.internal,
        n = r.config,
        a = n.transition_duration && Xn(),
        i = "grid_".concat(e, "_lines");
    return t && (n[i] = t, r.updateGrid(), r.redrawGrid(a)), n[i]
}

function sp(t, e) {
    var r = "grid_".concat(e, "_lines");
    return Os.bind(this)(this.internal.config[r].concat(t || []), e)
}

function lp(t, e) {
    this.internal.removeGridLines(t, e)
}

function fp(t, e) {
    e === void 0 && (e = !1);
    var r = this.internal,
        n = r.config,
        a = n.transition_duration && Xn();
    return t ? (n.regions = e ? n.regions.concat(t) : t, r.updateRegion(), r.redrawRegion(a), e ? n.regions : t) : n.regions
}

function Uh(t, e, r) {
    return function(n) {
        var a = t ? 0 : e;
        return n.position === "start" ? a = t ? -r : 0 : n.position === "middle" && (a = (t ? -r : e) / 2), a
    }
}

function Hh(t, e) {
    e === "grid" && t.each(function() {
        var r = P(this);
        ["x1", "x2", "y1", "y2"].forEach(function(n) {
            return r.attr(n, Math.ceil(+r.attr(n)))
        })
    })
}

function Wh(t) {
    t === void 0 && (t = 0);
    var e = this,
        r = e.config,
        n = e.state,
        a = e.hasMultiArcGauge(),
        i = n.gaugeArcWidth / e.filterTargetsToShow(e.data.targets).length,
        o = t ? Math.min(n.radiusExpanded * t - n.radius, i * .8 - (1 - t) * 100) : 0;
    return {
        inner: function(s) {
            var l = e.getRadius(s).innerRadius;
            return a ? n.radius - i * (s.index + 1) : z(l) ? l : 0
        },
        outer: function(s) {
            var l = e.getRadius(s).outerRadius,
                c;
            if (a) c = n.radius - i * s.index + o;
            else if (e.hasType("polar") && !t) c = e.getPolarOuterRadius(s, l);
            else if (c = l, t) {
                var u = n.radiusExpanded;
                n.radius !== l && (u -= Math.abs(n.radius - l)), c = u * t
            }
            return c
        },
        corner: function(s, l) {
            var c = r.arc_cornerRadius_ratio,
                u = c === void 0 ? 0 : c,
                f = r.arc_cornerRadius,
                d = f === void 0 ? 0 : f,
                h = s.data.id,
                p = s.value,
                g = 0;
            return u ? g = u * l : g = z(d) ? d : d.call(e.api, h, p, l), g
        }
    }
}

function As(t) {
    return function(e) {
        var r = function(a) {
                var i = a.startAngle,
                    o = i === void 0 ? 0 : i,
                    s = a.endAngle,
                    l = s === void 0 ? 0 : s,
                    c = a.padAngle,
                    u = c === void 0 ? 0 : c;
                return {
                    startAngle: o,
                    endAngle: l,
                    padAngle: u
                }
            },
            n = ne(r(this._current), r(e));
        return this._current = e,
            function(a) {
                var i = n(a),
                    o = e.data,
                    s = e.index,
                    l = e.value;
                return t(U(U({}, i), {
                    data: o,
                    index: s,
                    value: l
                }))
            }
    }
}

function vp(t, e) {
    Wt(ci.prototype, Ty.concat(t)), Wt(Ds.prototype, by), li.setOptions(wy.concat(e || []))
}

function ui(t, e) {
    vp([ky, Sy].concat(t || [])), li.setOptions([Cy, My].concat(e || []))
}

function Iy(t, e) {
    Wt(ci.prototype, [$y].concat(t || [])), li.setOptions(e)
}
var Q, lt, qh, S_, Zh, Y, ys, Re, U, H, X, et, z, bt, nt, jh, k_, zn, Nn, se, le, dt, K, at, _e, Pr, O_, Z, ct, Rs, yt, Qt, Ms, St, Es, ir, oe, tt, Ee, Kt, st, ut, N_, Bn, mt, Mt, tp, Pt, ai, ep, B_, At, X_, Y_, Ph, V_, G_, U_, H_, W_, q_, Z_, j_, K_, li, Jt, Q_, J_, t0, ws, s0, l0, c0, u0, f0, d0, h0, g0, v0, m0, x0, _0, y0, b0, w0, $0, A0, C0, R0, M0, E0, L0, ci, D0, O0, op, P0, F0, Y0, V0, G0, U0, H0, W0, q0, Z0, Ds, j0, K0, Q0, cp, up, J0, ty, dp, ey, ry, ny, Gh, ay, iy, oy, sy, ly, cy, uy, fy, dy, hy, py, gy, vy, my, xy, _y, yy, by, Ty, wy, $y, hp, Ay, Sy, Or, ky, $M, Cy, pp, Ry, My, gp, Ey, AM, Ly, Dy, Oy, Py, Fy, zy, Ny, By, Xy, Yy, SM, Ss, kM, Vy = b(() => {
    Wn();
    Xt();
    ed();
    sd();
    fu();
    Bd();
    ka();
    $h();
    Rh();
    uo();
    $r();
    Dh();
    Q = $_(), lt = Q ? .document, qh = A_(Q), S_ = qh[0], Zh = qh[2], Y = {
        AREA: "area",
        AREA_LINE_RANGE: "area-line-range",
        AREA_SPLINE: "area-spline",
        AREA_SPLINE_RANGE: "area-spline-range",
        AREA_STEP: "area-step",
        BAR: "bar",
        BUBBLE: "bubble",
        CANDLESTICK: "candlestick",
        DONUT: "donut",
        GAUGE: "gauge",
        LINE: "line",
        PIE: "pie",
        POLAR: "polar",
        RADAR: "radar",
        SCATTER: "scatter",
        SPLINE: "spline",
        STEP: "step",
        TREEMAP: "treemap"
    }, ys = {
        AREA: "initArea",
        AREA_LINE_RANGE: "initArea",
        AREA_SPLINE: "initArea",
        AREA_SPLINE_RANGE: "initArea",
        AREA_STEP: "initArea",
        BAR: "initBar",
        BUBBLE: "initCircle",
        CANDLESTICK: "initCandlestick",
        DONUT: "initArc",
        GAUGE: "initArc",
        LINE: "initLine",
        PIE: "initArc",
        POLAR: "initPolar",
        RADAR: "initCircle",
        SCATTER: "initCircle",
        SPLINE: "initLine",
        STEP: "initLine",
        TREEMAP: "initTreemap"
    }, Re = {
        Area: [Y.AREA, Y.AREA_SPLINE, Y.AREA_SPLINE_RANGE, Y.AREA_LINE_RANGE, Y.AREA_STEP],
        AreaRange: [Y.AREA_SPLINE_RANGE, Y.AREA_LINE_RANGE],
        Arc: [Y.PIE, Y.DONUT, Y.GAUGE, Y.POLAR, Y.RADAR],
        Line: [Y.LINE, Y.SPLINE, Y.AREA, Y.AREA_SPLINE, Y.AREA_SPLINE_RANGE, Y.AREA_LINE_RANGE, Y.STEP, Y.AREA_STEP],
        Step: [Y.STEP, Y.AREA_STEP],
        Spline: [Y.SPLINE, Y.AREA_SPLINE, Y.AREA_SPLINE_RANGE]
    }, U = function() {
        return U = Object.assign || function(e) {
            for (var r, n = 1, a = arguments.length; n < a; n++) {
                r = arguments[n];
                for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i])
            }
            return e
        }, U.apply(this, arguments)
    };
    H = function(t) {
        return t || t === 0
    }, X = function(t) {
        return typeof t == "function"
    }, et = function(t) {
        return typeof t == "string"
    }, z = function(t) {
        return typeof t == "number"
    }, bt = function(t) {
        return typeof t > "u"
    }, nt = function(t) {
        return typeof t < "u"
    }, jh = function(t) {
        return typeof t == "boolean"
    }, k_ = function(t) {
        return Math.ceil(t / 10) * 10
    }, zn = function(t) {
        return Math.ceil(t) + .5
    }, Nn = function(t) {
        return t[1] - t[0]
    }, se = function(t) {
        return typeof t == "object"
    }, le = function(t) {
        return bt(t) || t === null || et(t) && t.length === 0 || se(t) && !(t instanceof Date) && Object.keys(t).length === 0 || z(t) && isNaN(t)
    }, dt = function(t) {
        return !le(t)
    }, K = function(t) {
        return Array.isArray(t)
    }, at = function(t) {
        return t && !t ? .nodeType && se(t) && !K(t)
    };
    _e = function(t) {
        return t.charAt(0).toUpperCase() + t.slice(1)
    };
    Pr = function(t) {
        return [].slice.call(t)
    };
    O_ = {
        mouse: function() {
            var t = function() {
                return {
                    bubbles: !1,
                    cancelable: !1,
                    screenX: 0,
                    screenY: 0,
                    clientX: 0,
                    clientY: 0
                }
            };
            try {
                return new MouseEvent("t"),
                    function(e, r, n) {
                        n === void 0 && (n = t()), e.dispatchEvent(new MouseEvent(r, n))
                    }
            } catch {
                return function(r, n, a) {
                    a === void 0 && (a = t());
                    var i = lt.createEvent("MouseEvent");
                    i.initMouseEvent(n, a.bubbles, a.cancelable, Q, 0, a.screenX, a.screenY, a.clientX, a.clientY, !1, !1, !1, !1, 0, null), r.dispatchEvent(i)
                }
            }
        }(),
        touch: function(t, e, r) {
            var n = new Touch(Fr({
                identifier: Date.now(),
                target: t,
                radiusX: 2.5,
                radiusY: 2.5,
                rotationAngle: 10,
                force: .5
            }, r));
            t.dispatchEvent(new TouchEvent(e, {
                cancelable: !0,
                bubbles: !0,
                shiftKey: !0,
                touches: [n],
                targetTouches: [],
                changedTouches: [n]
            }))
        }
    };
    Z = {
        button: "bb-button",
        chart: "bb-chart",
        empty: "bb-empty",
        main: "bb-main",
        target: "bb-target",
        EXPANDED: "_expanded_"
    }, ct = {
        arc: "bb-arc",
        arcLabelLine: "bb-arc-label-line",
        arcs: "bb-arcs",
        chartArc: "bb-chart-arc",
        chartArcs: "bb-chart-arcs",
        chartArcsBackground: "bb-chart-arcs-background",
        chartArcsTitle: "bb-chart-arcs-title",
        needle: "bb-needle"
    }, Rs = {
        area: "bb-area",
        areas: "bb-areas"
    }, yt = {
        axis: "bb-axis",
        axisX: "bb-axis-x",
        axisXLabel: "bb-axis-x-label",
        axisY: "bb-axis-y",
        axisY2: "bb-axis-y2",
        axisY2Label: "bb-axis-y2-label",
        axisYLabel: "bb-axis-y-label"
    }, Qt = {
        bar: "bb-bar",
        bars: "bb-bars",
        chartBar: "bb-chart-bar",
        chartBars: "bb-chart-bars"
    }, Ms = {
        candlestick: "bb-candlestick",
        candlesticks: "bb-candlesticks",
        chartCandlestick: "bb-chart-candlestick",
        chartCandlesticks: "bb-chart-candlesticks",
        valueDown: "bb-value-down",
        valueUp: "bb-value-up"
    }, St = {
        chartCircles: "bb-chart-circles",
        circle: "bb-circle",
        circles: "bb-circles"
    }, Es = {
        colorPattern: "bb-color-pattern",
        colorScale: "bb-colorscale"
    }, ir = {
        dragarea: "bb-dragarea",
        INCLUDED: "_included_"
    }, oe = {
        chartArcsGaugeMax: "bb-chart-arcs-gauge-max",
        chartArcsGaugeMin: "bb-chart-arcs-gauge-min",
        chartArcsGaugeUnit: "bb-chart-arcs-gauge-unit",
        chartArcsGaugeTitle: "bb-chart-arcs-gauge-title",
        gaugeValue: "bb-gauge-value"
    }, tt = {
        legend: "bb-legend",
        legendBackground: "bb-legend-background",
        legendItem: "bb-legend-item",
        legendItemEvent: "bb-legend-item-event",
        legendItemHidden: "bb-legend-item-hidden",
        legendItemPoint: "bb-legend-item-point",
        legendItemTile: "bb-legend-item-tile"
    }, Ee = {
        chartLine: "bb-chart-line",
        chartLines: "bb-chart-lines",
        line: "bb-line",
        lines: "bb-lines"
    }, Kt = {
        eventRect: "bb-event-rect",
        eventRects: "bb-event-rects",
        eventRectsMultiple: "bb-event-rects-multiple",
        eventRectsSingle: "bb-event-rects-single"
    }, st = {
        focused: "bb-focused",
        defocused: "bb-defocused",
        legendItemFocused: "bb-legend-item-focused",
        xgridFocus: "bb-xgrid-focus",
        ygridFocus: "bb-ygrid-focus"
    }, ut = {
        grid: "bb-grid",
        gridLines: "bb-grid-lines",
        xgrid: "bb-xgrid",
        xgridLine: "bb-xgrid-line",
        xgridLines: "bb-xgrid-lines",
        xgrids: "bb-xgrids",
        ygrid: "bb-ygrid",
        ygridLine: "bb-ygrid-line",
        ygridLines: "bb-ygrid-lines",
        ygrids: "bb-ygrids"
    }, N_ = {
        chartRadar: "bb-chart-radar",
        chartRadars: "bb-chart-radars"
    }, Bn = {
        region: "bb-region",
        regions: "bb-regions"
    }, mt = {
        selectedCircle: "bb-selected-circle",
        selectedCircles: "bb-selected-circles",
        SELECTED: "_selected_"
    }, Mt = {
        shape: "bb-shape",
        shapes: "bb-shapes"
    }, tp = {
        brush: "bb-brush",
        subchart: "bb-subchart"
    }, Pt = {
        chartText: "bb-chart-text",
        chartTexts: "bb-chart-texts",
        text: "bb-text",
        texts: "bb-texts",
        title: "bb-title",
        TextOverlapping: "text-overlapping"
    }, ai = {
        tooltip: "bb-tooltip",
        tooltipContainer: "bb-tooltip-container",
        tooltipName: "bb-tooltip-name"
    }, ep = {
        treemap: "bb-treemap",
        chartTreemap: "bb-chart-treemap",
        chartTreemaps: "bb-chart-treemaps"
    }, B_ = {
        buttonZoomReset: "bb-zoom-reset",
        zoomBrush: "bb-zoom-brush"
    }, At = U(U(U(U(U(U(U(U(U(U(U(U(U(U(U(U(U(U(U(U(U(U(U(U({}, Z), ct), Rs), yt), Qt), Ms), St), Es), ir), oe), tt), Ee), Kt), st), ut), N_), Bn), mt), Mt), tp), Pt), ai), ep), B_), X_ = function() {
        function t() {
            var e = {
                chart: null,
                main: null,
                svg: null,
                axis: {
                    x: null,
                    y: null,
                    y2: null,
                    subX: null
                },
                defs: null,
                tooltip: null,
                legend: null,
                title: null,
                subchart: {
                    main: null,
                    bar: null,
                    line: null,
                    area: null
                },
                arcs: null,
                bar: null,
                candlestick: null,
                line: null,
                area: null,
                circle: null,
                radar: null,
                text: null,
                grid: {
                    main: null,
                    x: null,
                    y: null
                },
                gridLines: {
                    main: null,
                    x: null,
                    y: null
                },
                region: {
                    main: null,
                    list: null
                },
                eventRect: null,
                zoomResetBtn: null
            };
            return e
        }
        return t
    }(), Y_ = function() {
        function t() {
            return {
                width: 0,
                width2: 0,
                height: 0,
                height2: 0,
                margin: {
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0
                },
                margin2: {
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0
                },
                margin3: {
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0
                },
                arcWidth: 0,
                arcHeight: 0,
                xAxisHeight: 0,
                hasAxis: !1,
                hasRadar: !1,
                hasTreemap: !1,
                cssRule: {},
                current: {
                    domain: void 0,
                    width: 0,
                    height: 0,
                    dataMax: 0,
                    maxTickSize: {
                        x: {
                            width: 0,
                            height: 0,
                            ticks: [],
                            clipPath: 0,
                            domain: ""
                        },
                        y: {
                            width: 0,
                            height: 0,
                            domain: ""
                        },
                        y2: {
                            width: 0,
                            height: 0,
                            domain: ""
                        }
                    },
                    types: [],
                    needle: void 0
                },
                isLegendRight: !1,
                isLegendInset: !1,
                isLegendTop: !1,
                isLegendLeft: !1,
                legendStep: 0,
                legendItemWidth: 0,
                legendItemHeight: 0,
                legendHasRendered: !1,
                eventReceiver: {
                    currentIdx: -1,
                    rect: {},
                    data: [],
                    coords: []
                },
                axis: {
                    x: {
                        padding: {
                            left: 0,
                            right: 0
                        },
                        tickCount: 0
                    }
                },
                rotatedPadding: {
                    left: 30,
                    right: 0,
                    top: 5
                },
                withoutFadeIn: {},
                inputType: "",
                datetimeId: "",
                clip: {
                    id: "",
                    idXAxis: "",
                    idYAxis: "",
                    idXAxisTickTexts: "",
                    idGrid: "",
                    idSubchart: "",
                    path: "",
                    pathXAxis: "",
                    pathYAxis: "",
                    pathXAxisTickTexts: "",
                    pathGrid: ""
                },
                event: null,
                dragStart: null,
                dragging: !1,
                flowing: !1,
                cancelClick: !1,
                mouseover: !1,
                rendered: !1,
                transiting: !1,
                redrawing: !1,
                resizing: !1,
                toggling: !1,
                zooming: !1,
                hasNegativeValue: !1,
                hasPositiveValue: !0,
                orgAreaOpacity: "0.2",
                orgConfig: {},
                hiddenTargetIds: [],
                hiddenLegendIds: [],
                focusedTargetIds: [],
                defocusedTargetIds: [],
                radius: 0,
                innerRadius: 0,
                outerRadius: void 0,
                innerRadiusRatio: 0,
                gaugeArcWidth: 0,
                radiusExpanded: 0,
                xgridAttr: {
                    x1: null,
                    x2: null,
                    y1: null,
                    y2: null
                }
            }
        }
        return t
    }(), Ph = {
        element: X_,
        state: Y_
    }, V_ = function() {
        function t() {
            var e = this;
            Object.keys(Ph).forEach(function(r) {
                e[r] = new Ph[r]
            })
        }
        return t.prototype.getStore = function(e) {
            return this[e]
        }, t
    }(), G_ = {
        bindto: "#chart",
        background: {},
        clipPath: !0,
        svg_classname: void 0,
        size_width: void 0,
        size_height: void 0,
        padding: !0,
        padding_mode: void 0,
        padding_left: void 0,
        padding_right: void 0,
        padding_top: void 0,
        padding_bottom: void 0,
        resize_auto: !0,
        resize_timer: !0,
        onclick: void 0,
        onover: void 0,
        onout: void 0,
        onresize: void 0,
        onresized: void 0,
        onbeforeinit: void 0,
        oninit: void 0,
        onafterinit: void 0,
        onrendered: void 0,
        transition_duration: 250,
        plugins: [],
        render: {},
        regions: []
    }, U_ = {
        boost_useCssRule: !1,
        boost_useWorker: !1
    }, H_ = {
        data_x: void 0,
        data_idConverter: function(t) {
            return t
        },
        data_names: {},
        data_classes: {},
        data_type: void 0,
        data_types: {},
        data_order: "desc",
        data_groups: [],
        data_groupsZeroAs: "positive",
        data_color: void 0,
        data_colors: {},
        data_labels: {},
        data_labels_backgroundColors: void 0,
        data_labels_colors: void 0,
        data_labels_position: {},
        data_hide: !1,
        data_filter: void 0,
        data_onclick: function() {},
        data_onover: function() {},
        data_onout: function() {},
        data_onshown: void 0,
        data_onhidden: void 0,
        data_onmin: void 0,
        data_onmax: void 0,
        data_url: void 0,
        data_headers: void 0,
        data_json: void 0,
        data_rows: void 0,
        data_columns: void 0,
        data_mimeType: "csv",
        data_keys: void 0,
        data_empty_label_text: ""
    }, W_ = {
        color_pattern: [],
        color_tiles: void 0,
        color_threshold: {},
        color_onover: void 0
    }, q_ = {
        interaction_enabled: !0,
        interaction_brighten: !0,
        interaction_inputType_mouse: !0,
        interaction_inputType_touch: {}
    }, Z_ = {
        legend_contents_bindto: void 0,
        legend_contents_template: "<span style='color:#fff;padding:5px;background-color:{=COLOR}'>{=TITLE}</span>",
        legend_equally: !1,
        legend_hide: !1,
        legend_inset_anchor: "top-left",
        legend_inset_x: 10,
        legend_inset_y: 0,
        legend_inset_step: void 0,
        legend_item_interaction: !0,
        legend_item_dblclick: !1,
        legend_item_onclick: void 0,
        legend_item_onover: void 0,
        legend_item_onout: void 0,
        legend_item_tile_width: 10,
        legend_item_tile_height: 10,
        legend_item_tile_r: 5,
        legend_item_tile_type: "rectangle",
        legend_padding: 0,
        legend_position: "bottom",
        legend_show: !0,
        legend_usePoint: !1
    }, j_ = {
        title_text: void 0,
        title_padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        },
        title_position: "center"
    }, K_ = {
        tooltip_show: !0,
        tooltip_doNotHide: !1,
        tooltip_grouped: !0,
        tooltip_format_title: void 0,
        tooltip_format_name: void 0,
        tooltip_format_value: void 0,
        tooltip_position: void 0,
        tooltip_contents: {},
        tooltip_init_show: !1,
        tooltip_init_x: 0,
        tooltip_init_position: void 0,
        tooltip_linked: !1,
        tooltip_linked_name: "",
        tooltip_onshow: function() {},
        tooltip_onhide: function() {},
        tooltip_onshown: function() {},
        tooltip_onhidden: function() {},
        tooltip_order: null
    }, li = function() {
        function t() {
            return E_(G_, U_, H_, W_, q_, Z_, j_, K_, t.data)
        }
        return t.setOptions = function(e) {
            this.data = e.reduce(function(r, n) {
                return U(U({}, r), n)
            }, this.data)
        }, t.data = {}, t
    }(), Jt = {
        bubbleBaseLength: "$baseLength",
        colorPattern: "__colorPattern__",
        dataMinMax: "$dataMinMax",
        dataTotalSum: "$dataTotalSum",
        dataTotalPerIndex: "$totalPerIndex",
        legendItemTextBox: "legendItemTextBox",
        radarPoints: "$radarPoints",
        setOverOut: "setOverOut",
        callOverOutForTouch: "callOverOutForTouch",
        textRect: "textRect"
    }, Q_ = function() {
        function t() {
            this.cache = {}
        }
        return t.prototype.add = function(e, r, n) {
            return n === void 0 && (n = !1), this.cache[e] = n ? this.cloneTarget(r) : r, this.cache[e]
        }, t.prototype.remove = function(e) {
            var r = this;
            (et(e) ? [e] : e).forEach(function(n) {
                return delete r.cache[n]
            })
        }, t.prototype.get = function(e, r) {
            if (r === void 0 && (r = !1), r && Array.isArray(e)) {
                for (var n = [], a = 0, i = void 0; i = e[a]; a++) i in this.cache && n.push(this.cloneTarget(this.cache[i]));
                return n
            } else {
                var o = this.cache[e];
                return H(o) ? o : null
            }
        }, t.prototype.reset = function(e) {
            var r = this;
            for (var n in r.cache)(e || /^\$/.test(n)) && (r.cache[n] = null)
        }, t.prototype.cloneTarget = function(e) {
            return {
                id: e.id,
                id_org: e.id_org,
                values: e.values.map(function(r) {
                    return {
                        x: r.x,
                        value: r.value,
                        id: r.id
                    }
                })
            }
        }, t
    }(), J_ = Q.setTimeout, t0 = Q.clearTimeout;
    ws = {};
    s0 = {
        convertData: function(t, e) {
            var r = this.config,
                n = r.boost_useWorker,
                a = t;
            if (t.bindto && (a = {}, ["url", "mimeType", "headers", "keys", "json", "keys", "rows", "columns"].forEach(function(i) {
                    var o = "data_".concat(i);
                    o in t && (a[i] = t[o])
                })), a.url && e) a0(a.url, a.mimeType, a.headers, Fh(a.keys, r), e);
            else if (a.json) $s(n, np, e, [Ls, Is])(a.json, Fh(a.keys, r));
            else if (a.rows) $s(n, Is, e)(a.rows);
            else if (a.columns) $s(n, Ls, e)(a.columns);
            else if (t.bindto) throw Error("url or json or rows or columns is required.")
        },
        convertDataToTargets: function(t, e) {
            var r = this,
                n = this,
                a = n.axis,
                i = n.config,
                o = n.state,
                s = i.data_type,
                l = !1,
                c = !1,
                u = !1;
            a && (l = a.isCategorized(), c = a.isTimeSeries(), u = a.isCustomX());
            var f = Object.keys(t[0] || {}),
                d = f.length ? f.filter(n.isNotX, n) : [],
                h = f.length ? f.filter(n.isX, n) : [],
                p;
            d.forEach(function(v) {
                var x = r.getXKey(v);
                u || c ? h.indexOf(x) >= 0 ? p = (e && n.data.xs[v] || []).concat(t.map(function(y) {
                    return y[x]
                }).filter(H).map(function(y, _) {
                    return n.generateTargetX(y, v, _)
                })) : i.data_x ? p = r.getOtherTargetXs() : dt(i.data_xs) && (p = n.getXValuesOfXKey(x, n.data.targets)) : p = t.map(function(y, _) {
                    return _
                }), p && (r.data.xs[v] = p)
            }), d.forEach(function(v) {
                if (!r.data.xs[v]) throw new Error('x is not defined for id = "'.concat(v, '".'))
            });
            var g = d.map(function(v, x) {
                var y = i.data_idConverter.bind(n.api)(v),
                    _ = n.getXKey(v),
                    w = u && l,
                    T = w && t.map(function(M) {
                        return M.x
                    }).every(function(M) {
                        return i.axis_x_categories.indexOf(M) > -1
                    }),
                    $ = t.__append__,
                    C = _ === null && $ ? n.api.data.values(v).length : 0;
                return {
                    id: y,
                    id_org: v,
                    values: t.map(function(M, R) {
                        var A = M[_],
                            L = M[v],
                            S;
                        return L = L !== null && !isNaN(L) && !at(L) ? +L : K(L) || at(L) ? L : null, (w || o.hasRadar) && x === 0 && !bt(A) ? (!T && x === 0 && R === 0 && !$ && (i.axis_x_categories = []), S = i.axis_x_categories.indexOf(A), S === -1 && (S = i.axis_x_categories.length, i.axis_x_categories.push(A))) : S = n.generateTargetX(A, v, C + R), (bt(L) || n.data.xs[v].length <= R) && (S = void 0), {
                            x: S,
                            value: L,
                            id: y,
                            index: -1
                        }
                    }).filter(function(M) {
                        return nt(M.x)
                    })
                }
            });
            if (g.forEach(function(v) {
                    var x;
                    i.data_xSort && (v.values = v.values.sort(function(y, _) {
                        var w = y.x || y.x === 0 ? y.x : 1 / 0,
                            T = _.x || _.x === 0 ? _.x : 1 / 0;
                        return w - T
                    })), v.values.forEach(function(y, _) {
                        return y.index = _
                    }), (x = n.data.xs[v.id]) === null || x === void 0 || x.sort(function(y, _) {
                        return y - _
                    })
                }), o.hasNegativeValue = n.hasNegativeValueInTargets(g), o.hasPositiveValue = n.hasPositiveValueInTargets(g), s && n.isValidChartType(s)) {
                var m = n.mapToIds(g).filter(function(v) {
                    return !(v in i.data_types) || !n.isValidChartType(i.data_types[v])
                });
                n.setTargetType(m, s)
            }
            return g.forEach(function(v) {
                return n.cache.add(v.id_org, v, !0)
            }), g
        }
    }, l0 = {
        isX: function(t) {
            var e = this,
                r = e.config,
                n = r.data_x && t === r.data_x,
                a = dt(r.data_xs) && C_(r.data_xs, t);
            return n || a
        },
        isNotX: function(t) {
            return !this.isX(t)
        },
        isStackNormalized: function() {
            var t = this.config;
            return !!(t.data_stack_normalize && t.data_groups.length)
        },
        isGrouped: function(t) {
            var e = this.config.data_groups;
            return t ? e.some(function(r) {
                return r.indexOf(t) >= 0 && r.length > 1
            }) : e.length > 0
        },
        getXKey: function(t) {
            var e = this,
                r = e.config;
            return r.data_x ? r.data_x : dt(r.data_xs) ? r.data_xs[t] : null
        },
        getXValuesOfXKey: function(t, e) {
            var r = this,
                n = e && dt(e) ? r.mapToIds(e) : [],
                a;
            return n.forEach(function(i) {
                r.getXKey(i) === t && (a = r.data.xs[i])
            }), a
        },
        getIndexByX: function(t, e) {
            var r = this;
            return e ? e.indexOf(et(t) ? t : +t) : (r.filterByX(r.data.targets, t)[0] || {
                index: null
            }).index
        },
        getXValue: function(t, e) {
            var r = this;
            return t in r.data.xs && r.data.xs[t] && H(r.data.xs[t][e]) ? r.data.xs[t][e] : e
        },
        getOtherTargetXs: function() {
            var t = this,
                e = Object.keys(t.data.xs);
            return e.length ? t.data.xs[e[0]] : null
        },
        getOtherTargetX: function(t) {
            var e = this.getOtherTargetXs();
            return e && t < e.length ? e[t] : null
        },
        addXs: function(t) {
            var e = this,
                r = e.config;
            Object.keys(t).forEach(function(n) {
                r.data_xs[n] = t[n]
            })
        },
        isMultipleX: function() {
            return dt(this.config.data_xs) || this.hasType("bubble") || this.hasType("scatter")
        },
        addName: function(t) {
            var e = this,
                r = e.config,
                n;
            return t && (n = r.data_names[t.id], t.name = n !== void 0 ? n : t.id), t
        },
        getAllValuesOnIndex: function(t, e) {
            e === void 0 && (e = !1);
            var r = this,
                n = r.filterTargetsToShow(r.data.targets).map(function(a) {
                    return r.addName(r.getValueOnIndex(a.values, t))
                });
            return e && (n = n.filter(function(a) {
                return a && "value" in a && H(a.value)
            })), n
        },
        getValueOnIndex: function(t, e) {
            var r = t.filter(function(n) {
                return n.index === e
            });
            return r.length ? r[0] : null
        },
        updateTargetX: function(t, e) {
            var r = this;
            t.forEach(function(n) {
                n.values.forEach(function(a, i) {
                    a.x = r.generateTargetX(e[i], n.id, i)
                }), r.data.xs[n.id] = e
            })
        },
        updateTargetXs: function(t, e) {
            var r = this;
            t.forEach(function(n) {
                e[n.id] && r.updateTargetX([n], e[n.id])
            })
        },
        generateTargetX: function(t, e, r) {
            var n = this,
                a = n.axis,
                i = a ? .isCategorized() ? r : t || r;
            if (a ? .isTimeSeries()) {
                var o = te.bind(n);
                i = o(t || n.getXValue(e, r))
            } else a ? .isCustomX() && !a ? .isCategorized() && (i = H(t) ? +t : n.getXValue(e, r));
            return i
        },
        updateXs: function(t) {
            t.length && (this.axis.xs = t.map(function(e) {
                return e.x
            }))
        },
        getPrevX: function(t) {
            var e = this.axis.xs[t - 1];
            return nt(e) ? e : null
        },
        getNextX: function(t) {
            var e = this.axis.xs[t + 1];
            return nt(e) ? e : null
        },
        getBaseValue: function(t) {
            var e = this,
                r = e.state.hasAxis,
                n = t.value;
            return n && r && (e.isAreaRangeType(t) ? n = e.getRangedData(t, "mid") : e.isBubbleZType(t) && (n = e.getBubbleZData(n, "y"))), n
        },
        getMinMaxValue: function(t) {
            var e = this.getBaseValue.bind(this),
                r, n;
            return (t || this.data.targets.map(function(a) {
                return a.values
            })).forEach(function(a, i) {
                var o = a.map(e).filter(z);
                r = Math.min.apply(Math, gt([i ? r : 1 / 0], o, !1)), n = Math.max.apply(Math, gt([i ? n : -1 / 0], o, !1))
            }), {
                min: r,
                max: n
            }
        },
        getMinMaxData: function() {
            var t = this,
                e = Jt.dataMinMax,
                r = t.cache.get(e);
            if (!r) {
                var n = t.data.targets.map(function(s) {
                        return s.values
                    }),
                    a = t.getMinMaxValue(n),
                    i = [],
                    o = [];
                n.forEach(function(s) {
                    var l = t.getFilteredDataByValue(s, a.min),
                        c = t.getFilteredDataByValue(s, a.max);
                    l.length && (i = i.concat(l)), c.length && (o = o.concat(c))
                }), t.cache.add(e, r = {
                    min: i,
                    max: o
                })
            }
            return r
        },
        getTotalPerIndex: function() {
            var t = this,
                e = Jt.dataTotalPerIndex,
                r = t.cache.get(e);
            return (t.config.data_groups.length || t.isStackNormalized()) && !r && (r = [], t.data.targets.forEach(function(n) {
                n.values.forEach(function(a, i) {
                    r[i] || (r[i] = 0), r[i] += z(a.value) ? a.value : 0
                })
            })), r
        },
        getTotalDataSum: function(t) {
            var e = this,
                r = Jt.dataTotalSum,
                n = e.cache.get(r);
            if (!z(n)) {
                var a = Ts(e.data.targets.map(function(i) {
                    return i.values
                })).map(function(i) {
                    return i.value
                });
                n = a.length ? a.reduce(function(i, o) {
                    return i + o
                }) : 0, e.cache.add(r, n)
            }
            return t && (n -= e.getHiddenTotalDataSum()), n
        },
        getHiddenTotalDataSum: function() {
            var t = this,
                e = t.api,
                r = t.state.hiddenTargetIds,
                n = 0;
            return r.length && (n = e.data.values.bind(e)(r).reduce(function(a, i) {
                return a + i
            })), n
        },
        getFilteredDataByValue: function(t, e) {
            var r = this;
            return t.filter(function(n) {
                return r.getBaseValue(n) === e
            })
        },
        getMaxDataCount: function() {
            return Math.max.apply(Math, gt(gt([], this.data.targets.map(function(t) {
                return t.values.length
            }), !1), [0], !1))
        },
        getMaxDataCountTarget: function() {
            var t = this.filterTargetsToShow() || [],
                e = t.length,
                r = this.config.axis_x_inverted;
            return e > 1 ? (t = t.map(function(n) {
                return n.values
            }).reduce(function(n, a) {
                return n.concat(a)
            }).map(function(n) {
                return n.x
            }), t = zr(Cs(t)).map(function(n, a, i) {
                return {
                    x: n,
                    index: r ? i.length - a - 1 : a
                }
            })) : e && (t = t[0].values.concat()), t
        },
        mapToIds: function(t) {
            return t.map(function(e) {
                return e.id
            })
        },
        mapToTargetIds: function(t) {
            var e = this;
            return t ? K(t) ? t.concat() : [t] : e.mapToIds(e.data.targets)
        },
        hasTarget: function(t, e) {
            for (var r = this.mapToIds(t), n = 0, a = void 0; a = r[n]; n++)
                if (a === e) return !0;
            return !1
        },
        isTargetToShow: function(t) {
            return this.state.hiddenTargetIds.indexOf(t) < 0
        },
        isLegendToShow: function(t) {
            return this.state.hiddenLegendIds.indexOf(t) < 0
        },
        filterTargetsToShow: function(t) {
            var e = this;
            return (t || e.data.targets).filter(function(r) {
                return e.isTargetToShow(r.id)
            })
        },
        mapTargetsToUniqueXs: function(t) {
            var e = this,
                r = e.axis,
                n = [];
            return t ? .length && (n = Cs(Ts(t.map(function(a) {
                return a.values.map(function(i) {
                    return +i.x
                })
            }))), n = r ? .isTimeSeries() ? n.map(function(a) {
                return new Date(+a)
            }) : n.map(Number)), zr(n)
        },
        addTargetIds: function(t, e) {
            var r = this.state,
                n = K(e) ? e : [e];
            n.forEach(function(a) {
                r[t].indexOf(a) < 0 && r[t].push(a)
            })
        },
        removeTargetIds: function(t, e) {
            var r = this.state,
                n = K(e) ? e : [e];
            n.forEach(function(a) {
                var i = r[t].indexOf(a);
                i >= 0 && r[t].splice(i, 1)
            })
        },
        addHiddenTargetIds: function(t) {
            this.addTargetIds("hiddenTargetIds", t)
        },
        removeHiddenTargetIds: function(t) {
            this.removeTargetIds("hiddenTargetIds", t)
        },
        addHiddenLegendIds: function(t) {
            this.addTargetIds("hiddenLegendIds", t)
        },
        removeHiddenLegendIds: function(t) {
            this.removeTargetIds("hiddenLegendIds", t)
        },
        getValuesAsIdKeyed: function(t) {
            var e = this,
                r = e.state.hasAxis,
                n = {},
                a = e.isMultipleX(),
                i = a ? e.mapTargetsToUniqueXs(t).map(function(o) {
                    return et(o) ? o : +o
                }) : null;
            return t.forEach(function(o) {
                var s = [];
                o.values.filter(function(l) {
                    var c = l.value;
                    return H(c) || c === null
                }).forEach(function(l) {
                    var c = l.value;
                    c !== null && e.isCandlestickType(l) && (c = K(c) ? c.slice(0, 4) : [c.open, c.high, c.low, c.close]), K(c) ? s.push.apply(s, c) : at(c) && "high" in c ? s.push.apply(s, Object.values(c)) : e.isBubbleZType(l) ? s.push(r && e.getBubbleZData(c, "y")) : a ? s[e.getIndexByX(l.x, i)] = c : s.push(c)
                }), n[o.id] = s
            }), n
        },
        checkValueInTargets: function(t, e) {
            for (var r = Object.keys(t), n, a = 0; a < r.length; a++) {
                n = t[r[a]].values;
                for (var i = 0; i < n.length; i++)
                    if (e(n[i].value)) return !0
            }
            return !1
        },
        hasMultiTargets: function() {
            return this.filterTargetsToShow().length > 1
        },
        hasNegativeValueInTargets: function(t) {
            return this.checkValueInTargets(t, function(e) {
                return e < 0
            })
        },
        hasPositiveValueInTargets: function(t) {
            return this.checkValueInTargets(t, function(e) {
                return e > 0
            })
        },
        orderTargets: function(t) {
            var e = this,
                r = gt([], t, !0),
                n = e.getSortCompareFn();
            return n && r.sort(n), r
        },
        getSortCompareFn: function(t) {
            t === void 0 && (t = !1);
            var e = this,
                r = e.config,
                n = r.data_order,
                a = /asc/i.test(n),
                i = /desc/i.test(n),
                o;
            if (a || i) {
                var s = function(l, c) {
                    return l + Math.abs(c.value)
                };
                o = function(l, c) {
                    var u = "values" in l ? l.values.reduce(s, 0) : l.value,
                        f = "values" in c ? c.values.reduce(s, 0) : c.value;
                    return t ? a ? u - f : f - u : a ? f - u : u - f
                }
            } else X(n) && (o = n.bind(e.api));
            return o || null
        },
        filterByX: function(t, e) {
            return Ts(t.map(function(r) {
                return r.values
            })).filter(function(r) {
                return r.x - e === 0
            })
        },
        filterRemoveNull: function(t) {
            var e = this;
            return t.filter(function(r) {
                return H(e.getBaseValue(r))
            })
        },
        filterByXDomain: function(t, e) {
            return t.map(function(r) {
                return {
                    id: r.id,
                    id_org: r.id_org,
                    values: r.values.filter(function(n) {
                        return e[0] <= n.x && n.x <= e[1]
                    })
                }
            })
        },
        hasDataLabel: function() {
            var t = this.config.data_labels;
            return jh(t) && t || se(t) && dt(t)
        },
        getDataIndexFromEvent: function(t) {
            var e = this,
                r = e.config,
                n = e.state,
                a = n.hasRadar,
                i = n.inputType,
                o = n.eventReceiver,
                s = o.coords,
                l = o.rect,
                c;
            if (a) {
                var u = t.target;
                /tspan/i.test(u.tagName) && (u = u.parentNode);
                var f = P(u).datum();
                c = f && Object.keys(f).length === 1 ? f.index : void 0
            } else {
                var d = r.axis_rotated,
                    h = i === "touch" && t.changedTouches ? t.changedTouches[0] : t;
                c = ks(s, d ? h.clientY - l.top : h.clientX - l.left, 0, s.length - 1, d)
            }
            return c
        },
        getDataLabelLength: function(t, e, r) {
            var n = this,
                a = [0, 0],
                i = 1.3;
            return n.$el.chart.select("svg").selectAll(".dummy").data([t, e]).enter().append("text").text(function(o) {
                return n.dataLabelFormat(o.id)(o)
            }).each(function(o, s) {
                a[s] = this.getBoundingClientRect()[r] * i
            }).remove(), a
        },
        isNoneArc: function(t) {
            return this.hasTarget(this.data.targets, t.id)
        },
        isArc: function(t) {
            return "data" in t && this.hasTarget(this.data.targets, t.data.id)
        },
        findSameXOfValues: function(t, e) {
            var r = t[e].x,
                n = [],
                a;
            for (a = e - 1; a >= 0 && r === t[a].x; a--) n.push(t[a]);
            for (a = e; a < t.length && r === t[a].x; a++) n.push(t[a]);
            return n
        },
        findClosestFromTargets: function(t, e) {
            var r = this,
                n = t.map(function(a) {
                    return r.findClosest(a.values, e)
                });
            return r.findClosest(n, e)
        },
        findClosest: function(t, e) {
            var r = this,
                n = r.$el.main,
                a = t.filter(function(s) {
                    return s && H(s.value)
                }),
                i, o;
            return a.filter(function(s) {
                return r.isBarType(s.id) || r.isCandlestickType(s.id)
            }).forEach(function(s) {
                var l = r.isBarType(s.id) ? ".".concat(Qt.chartBar, ".").concat(Z.target).concat(r.getTargetSelectorSuffix(s.id), " .").concat(Qt.bar, "-").concat(s.index) : ".".concat(Ms.chartCandlestick, ".").concat(Z.target).concat(r.getTargetSelectorSuffix(s.id), " .").concat(Ms.candlestick, "-").concat(s.index, " path");
                !o && r.isWithinBar(n.select(l).node()) && (o = s)
            }), a.filter(function(s) {
                return !r.isBarType(s.id) && !r.isCandlestickType(s.id)
            }).forEach(function(s) {
                var l = r.dist(s, e);
                i = r.getPointSensitivity(s), l < i && (i = l, o = s)
            }), o
        },
        dist: function(t, e) {
            var r = this,
                n = r.config.axis_rotated,
                a = r.scale,
                i = +n,
                o = +!n,
                s = r.circleY(t, t.index),
                l = (a.zoom || a.x)(t.x);
            return Math.sqrt(Math.pow(l - e[i], 2) + Math.pow(s - e[o], 2))
        },
        convertValuesToStep: function(t) {
            var e = this,
                r = e.axis,
                n = e.config,
                a = n.line_step_type,
                i = r ? r.isCategorized() : !1,
                o = K(t) ? t.concat() : [t];
            if (!(i || /step\-(after|before)/.test(a))) return t;
            if (o.length) {
                var s = o[0],
                    l = o[o.length - 1],
                    c = s.id,
                    u = s.x;
                o.unshift({
                    x: --u,
                    value: s.value,
                    id: c
                }), i && a === "step-after" && o.unshift({
                    x: --u,
                    value: s.value,
                    id: c
                }), u = l.x, o.push({
                    x: ++u,
                    value: l.value,
                    id: c
                }), i && a === "step-before" && o.push({
                    x: ++u,
                    value: l.value,
                    id: c
                })
            }
            return o
        },
        convertValuesToRange: function(t) {
            var e = K(t) ? t.concat() : [t],
                r = [];
            return e.forEach(function(n) {
                var a = n.x,
                    i = n.id;
                r.push({
                    x: a,
                    id: i,
                    value: n.value[0]
                }), r.push({
                    x: a,
                    id: i,
                    value: n.value[2]
                })
            }), r
        },
        updateDataAttributes: function(t, e) {
            var r = this,
                n = r.config,
                a = n["data_".concat(t)];
            return bt(e) || (Object.keys(e).forEach(function(i) {
                a[i] = e[i]
            }), r.redraw({
                withLegend: !0
            })), a
        },
        getRangedData: function(t, e, r) {
            e === void 0 && (e = ""), r === void 0 && (r = "areaRange");
            var n = t ? .value;
            if (K(n)) {
                if (r === "bar") return n.reduce(function(i, o) {
                    return o - i
                });
                var a = {
                    areaRange: ["high", "mid", "low"],
                    candlestick: ["open", "high", "low", "close", "volume"]
                }[r].indexOf(e);
                return a >= 0 && n ? n[a] : void 0
            } else if (n && e) return n[e];
            return n
        },
        setRatioForGroupedData: function(t) {
            var e = this,
                r = e.config;
            if (r.data_groups.length && t.some(function(a) {
                    return e.isGrouped(a.id)
                })) {
                var n = function(a) {
                    return e.getRatio("index", a, !0)
                };
                t.forEach(function(a) {
                    "values" in a ? a.values.forEach(n) : n(a)
                })
            }
        },
        getRatio: function(t, e, r) {
            r === void 0 && (r = !1);
            var n = this,
                a = n.config,
                i = n.state,
                o = n.api,
                s = 0;
            if (e && o.data.shown().length)
                if (s = e.ratio || e.value, t === "arc")
                    if (n.pie.padAngle()()) s = e.value / n.getTotalDataSum(!0);
                    else {
                        var l = a.gauge_fullCircle ? n.getArcLength() : n.getGaugeStartAngle() * -2,
                            c = n.hasType("gauge") ? l : Math.PI * 2;
                        s = (e.endAngle - e.startAngle) / c
                    }
            else if (t === "index") {
                var u = o.data.values.bind(o),
                    f = this.getTotalPerIndex();
                if (i.hiddenTargetIds.length) {
                    var d = u(i.hiddenTargetIds, !1);
                    d.length && (d = d.reduce(function(m, v) {
                        return m.map(function(x, y) {
                            return (z(x) ? x : 0) + v[y]
                        })
                    }), f = f.map(function(m, v) {
                        return m - d[v]
                    }))
                }
                var h = f[e.index];
                e.ratio = z(e.value) && f && h ? e.value / h : 0, s = e.ratio
            } else if (t === "radar") s = parseFloat(String(Math.max(e.value, 0))) / i.current.dataMax * a.radar_size_ratio;
            else if (t === "bar") {
                var p = n.getYScaleById.bind(n)(e.id),
                    g = p.domain().reduce(function(m, v) {
                        return v - m
                    });
                s = g === 0 ? 0 : Math.abs(n.getRangedData(e, null, t) / g)
            } else t === "treemap" && (s /= n.getTotalDataSum(!0));
            return r && s ? s * 100 : s
        },
        updateDataIndexByX: function(t) {
            var e = this,
                r = t.reduce(function(n, a, i) {
                    return n[Number(a.x)] = i, n
                }, {});
            e.data.targets.forEach(function(n) {
                n.values.forEach(function(a, i) {
                    var o = r[Number(a.x)];
                    o === void 0 && (o = i), a.index = o
                })
            })
        },
        isBubbleZType: function(t) {
            var e = this;
            return e.isBubbleType(t) && (at(t.value) && ("z" in t.value || "y" in t.value) || K(t.value) && t.value.length >= 2)
        },
        isBarRangeType: function(t) {
            var e = this,
                r = t.value;
            return e.isBarType(t) && K(r) && r.length >= 2 && r.every(function(n) {
                return z(n)
            })
        },
        getDataById: function(t) {
            var e, r = this.cache.get(t) || this.api.data(t);
            return (e = r ? .[0]) !== null && e !== void 0 ? e : r
        }
    };
    c0 = {
        load: function(t, e) {
            var r = this,
                n = r.data,
                a = e.append,
                i = t;
            i && (e.filter && (i = i.filter(e.filter)), (e.type || e.types) && i.forEach(function(o) {
                var s, l = ((s = e.types) === null || s === void 0 ? void 0 : s[o.id]) || e.type;
                r.setTargetType(o.id, l)
            }), n.targets.forEach(function(o) {
                for (var s = 0; s < i.length; s++)
                    if (o.id === i[s].id) {
                        o.values = a ? o.values.concat(i[s].values) : i[s].values, i.splice(s, 1);
                        break
                    }
            }), n.targets = n.targets.concat(i)), r.updateTargets(n.targets), r.redraw({
                withUpdateOrgXDomain: !0,
                withUpdateXDomain: !0,
                withLegend: !0
            }), r.updateTypesElements(), ip.call(r, e.done, e.resizeAfter)
        },
        loadFromArgs: function(t) {
            var e = this;
            e.config && (e.cache.reset(), e.convertData(t, function(r) {
                var n = t.data || r;
                t.append && (n.__append__ = !0), n && e.load(e.convertDataToTargets(n), t)
            }))
        },
        unload: function(t, e) {
            var r = this,
                n = r.state,
                a = r.$el,
                i = r.$T,
                o = e,
                s = t;
            if (r.cache.reset(), o || (o = function() {}), s = s.filter(function(c) {
                    return r.hasTarget(r.data.targets, c)
                }), !s || s.length === 0) {
                o();
                return
            }
            var l = a.svg.selectAll(s.map(function(c) {
                return r.selectorTarget(c)
            }));
            i(l).style("opacity", "0").remove().call(ii, o), s.forEach(function(c) {
                n.withoutFadeIn[c] = !1, a.legend && a.legend.selectAll(".".concat(tt.legendItem).concat(r.getTargetSelectorSuffix(c))).remove(), r.data.targets = r.data.targets.filter(function(u) {
                    return u.id !== c
                })
            }), n.hasTreemap && r.updateTargetsForTreemap(r.data.targets), r.updateTypesElements()
        }
    }, u0 = {
        setExpand: function(t, e, r) {
            var n = this,
                a = n.config,
                i = n.$el.circle;
            i && a.point_focus_expand_enabled && n.expandCircles(t, e, r), n.expandBarTypeShapes(!0, t, e, r)
        },
        expandBarTypeShapes: function(t, e, r, n) {
            t === void 0 && (t = !0);
            var a = this;
            ["bar", "candlestick"].filter(function(i) {
                return a.$el[i]
            }).forEach(function(i) {
                n && a.$el[i].classed(Z.EXPANDED, !1), a.getShapeByIndex(i, e, r).classed(Z.EXPANDED, t)
            })
        },
        setOverOut: function(t, e) {
            var r = this,
                n = r.config,
                a = r.state,
                i = a.hasRadar,
                o = a.hasTreemap,
                s = r.$el.main,
                l = at(e);
            if (l || e !== -1) {
                var c = n[t ? "data_onover" : "data_onout"].bind(r.api);
                if (n.color_onover && r.setOverColor(t, e, l), l) {
                    var u = o ? ep.treemap : ct.arc;
                    c(e, s.select(".".concat(u).concat(r.getTargetSelectorSuffix(e.id))).node())
                } else if (n.tooltip_grouped) t && (i && r.isPointFocusOnly() ? r.showCircleFocus(r.getAllValuesOnIndex(e, !0)) : r.setExpand(e, null, !0)), !r.isMultipleX() && s.selectAll(".".concat(Mt.shape, "-").concat(e)).each(function(g) {
                    c(g, this)
                });
                else {
                    var f = r.cache.get(Jt.setOverOut) || [],
                        d = s.selectAll(".".concat(Mt.shape, "-").concat(e)).filter(function(g) {
                            return r.isWithinShape(this, g)
                        }),
                        h = d.filter(function() {
                            var g = this;
                            return f.every(function(m) {
                                return m !== g
                            })
                        });
                    if (!t || d.empty() || f.length === h.size() && h.nodes().every(function(g, m) {
                            return g !== f[m]
                        }))
                        for (; f.length;) {
                            var p = f.pop();
                            n.data_onout.bind(r.api)(P(p).datum(), p)
                        }
                    h.each(function() {
                        t && (c(P(this).datum(), this), f.push(this))
                    }), r.cache.add(Jt.setOverOut, f)
                }
            }
        },
        callOverOutForTouch: function(t) {
            var e = this,
                r = e.cache.get(Jt.callOverOutForTouch);
            (at(t) && r ? t.id !== r.id : t !== r) && ((r || z(r)) && e.setOverOut(!1, r), (t || z(t)) && e.setOverOut(!0, t), e.cache.add(Jt.callOverOutForTouch, t))
        },
        getDraggableSelection: function() {
            var t = this,
                e = t.config,
                r = t.state;
            return e.interaction_enabled && e.data_selection_draggable && t.drag ? Ui().on("drag", function(n) {
                r.event = n, t.drag(xe(n, this))
            }).on("start", function(n) {
                r.event = n, t.dragstart(xe(n, this))
            }).on("end", function(n) {
                r.event = n, t.dragend()
            }) : function() {}
        },
        dispatchEvent: function(t, e, r) {
            var n, a, i = this,
                o = i.config,
                s = i.state,
                l = s.eventReceiver,
                c = s.hasAxis,
                u = s.hasRadar,
                f = s.hasTreemap,
                d = i.$el,
                h = d.eventRect,
                p = d.radar,
                g = d.treemap,
                m = (a = f && l.rect || u && p.axes.select(".".concat(yt.axis, "-").concat(e, " text")) || h || ((n = i.getArcElementByIdOrIndex) === null || n === void 0 ? void 0 : n.call(i, e))) === null || a === void 0 ? void 0 : a.node();
            if (m) {
                var v = i.isMultipleX(),
                    x = o.axis_rotated,
                    y = m.getBoundingClientRect(),
                    _ = y.width,
                    w = y.left,
                    T = y.top;
                if (c && !u && !v) {
                    var $ = l.coords[e];
                    $ ? (_ = $.w, w += $.x, T += $.y) : (_ = 0, w = 0, T = 0)
                }
                var C = w + (r ? r[0] : 0) + (v || x ? 0 : _ / 2),
                    M = T + (r ? r[1] : 0) + (x ? 4 : 0),
                    R = {
                        screenX: C,
                        screenY: M,
                        clientX: C,
                        clientY: M
                    };
                O_[/^(mouse|click)/.test(t) ? "mouse" : "touch"](f ? g.node() : m, t, R)
            }
        },
        setDragStatus: function(t) {
            this.state.dragging = t
        },
        unbindZoomEvent: function() {
            var t = this,
                e = t.$el,
                r = e.eventRect,
                n = e.zoomResetBtn;
            r ? .on(".zoom wheel.zoom .drag", null), n ? .on("click", null).style("display", "none")
        },
        unbindAllEvents: function() {
            var t, e = this,
                r = e.$el,
                n = r.arcs,
                a = r.eventRect,
                i = r.legend,
                o = r.region,
                s = r.svg,
                l = r.treemap,
                c = e.brush,
                u = ["wheel", "click", "mouseover", "mousemove", "mouseout", "touchstart", "touchmove", "touchend", "touchstart.eventRect", "touchmove.eventRect", "touchend.eventRect", ".brush", ".drag", ".zoom", "wheel.zoom", "dblclick.zoom"].join(" ");
            [s, a, o ? .list, c ? .getSelection(), n ? .selectAll("path"), i ? .selectAll("g"), l].forEach(function(f) {
                return f ? .on(u, null)
            }), (t = e.unbindZoomEvent) === null || t === void 0 || t.call(e)
        }
    }, f0 = {
        generateClass: function(t, e) {
            return " ".concat(t, " ").concat(t + this.getTargetSelectorSuffix(e))
        },
        getClass: function(t, e) {
            var r = this,
                n = /s$/.test(t),
                a = /^(area|arc|line|treemap)s?$/.test(t),
                i = n ? "id" : "index";
            return function(o) {
                var s = o.data || o,
                    l = (e ? r.generateClass(At[n ? "shapes" : "shape"], s[i]) : "") + r.generateClass(At[t], s[a ? "id" : i]);
                return l.trim()
            }
        },
        getChartClass: function(t) {
            var e = this;
            return function(r) {
                return At["chart".concat(t)] + e.classTarget((r.data ? r.data : r).id)
            }
        },
        generateExtraLineClass: function() {
            var t = this,
                e = t.config.line_classes || [],
                r = [];
            return function(n) {
                var a, i = n.id || ((a = n.data) === null || a === void 0 ? void 0 : a.id) || n;
                return r.indexOf(i) < 0 && r.push(i), e[r.indexOf(i) % e.length]
            }
        },
        classRegion: function(t, e) {
            return "".concat(this.generateClass(At.region, e), " ").concat("class" in t ? t.class : "")
        },
        classTarget: function(t) {
            var e = this.config.data_classes[t],
                r = "";
            return e && (r = " ".concat(At.target, "-").concat(e)), this.generateClass(At.target, t) + r
        },
        classFocus: function(t) {
            return this.classFocused(t) + this.classDefocused(t)
        },
        classFocused: function(t) {
            return " ".concat(this.state.focusedTargetIds.indexOf(t.id) >= 0 ? At.focused : "")
        },
        classDefocused: function(t) {
            return " ".concat(this.state.defocusedTargetIds.indexOf(t.id) >= 0 ? At.defocused : "")
        },
        getTargetSelectorSuffix: function(t) {
            var e = t || t === 0 ? "-".concat(t) : "";
            return e.replace(/([\s?!@#$%^&*()_=+,.<>'":;\[\]\/|~`{}\\])/g, "-")
        },
        selectorTarget: function(t, e, r) {
            e === void 0 && (e = ""), r === void 0 && (r = "");
            var n = this.getTargetSelectorSuffix(t);
            return "".concat(e, ".").concat(At.target + n, " ").concat(r, ", ").concat(e, ".").concat(At.circles + n, " ").concat(r)
        },
        selectorTargets: function(t, e) {
            var r = this,
                n = t || [];
            return n.length ? n.map(function(a) {
                return r.selectorTarget(a, e)
            }) : null
        },
        selectorLegend: function(t) {
            return ".".concat(At.legendItem + this.getTargetSelectorSuffix(t))
        },
        selectorLegends: function(t) {
            var e = this;
            return t ? .length ? t.map(function(r) {
                return e.selectorLegend(r)
            }) : null
        }
    }, d0 = {
        categoryName: function(t) {
            var e, r = this.config.axis_x_categories;
            return (e = r ? .[t]) !== null && e !== void 0 ? e : t
        }
    }, h0 = function(t, e, r) {
        var n = P(t.cloneNode(!0));
        return n.attr("id", r).insert("rect", ":first-child").attr("width", n.attr("width")).attr("height", n.attr("height")).style("fill", e), {
            id: r,
            node: n.node()
        }
    };
    g0 = ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b", "#e377c2", "#7f7f7f", "#bcbd22", "#17becf"], v0 = {
        generateColor: function() {
            var t = this,
                e = t.$el,
                r = t.config,
                n = r.data_colors,
                a = r.data_color,
                i = [],
                o = dt(r.color_pattern) ? r.color_pattern : _n(p0(e.chart) || g0).range(),
                s = o;
            if (X(r.color_tiles)) {
                var l = r.color_tiles.bind(t.api)(),
                    c = o.map(function(u, f) {
                        var d = u.replace(/[#\(\)\s,]/g, ""),
                            h = "".concat(t.state.datetimeId, "-pattern-").concat(d, "-").concat(f);
                        return h0(l[f % l.length], u, h)
                    });
                o = c.map(function(u) {
                    return "url(#".concat(u.id, ")")
                }), t.patterns = c
            }
            return function(u) {
                var f, d = u.id || ((f = u.data) === null || f === void 0 ? void 0 : f.id) || u,
                    h = t.isTypeOf(d, ["line", "spline", "step"]) || !r.data_types[d],
                    p;
                return X(n[d]) ? p = n[d].bind(t.api)(u) : n[d] ? p = n[d] : (i.indexOf(d) < 0 && i.push(d), p = h ? s[i.indexOf(d) % s.length] : o[i.indexOf(d) % o.length], n[d] = p), X(a) ? a.bind(t.api)(p, u) : p
            }
        },
        generateLevelColor: function() {
            var t = this,
                e = t.config,
                r = e.color_pattern,
                n = e.color_threshold,
                a = n.unit === "value",
                i = n.max || 100,
                o = n.values && n.values.length ? n.values : [];
            return dt(n) ? function(s) {
                for (var l = a ? s : s * 100 / i, c = r[r.length - 1], u = 0, f = o.length; u < f; u++)
                    if (l <= o[u]) {
                        c = r[u];
                        break
                    }
                return c
            } : null
        },
        generateDataLabelBackgroundColorFilter: function(t) {
            var e = this,
                r = e.$el,
                n = e.config,
                a = e.state,
                i = t || n.data_labels_backgroundColors;
            if (i) {
                var o = [];
                et(i) ? o.push("") : at(i) && (o = Object.keys(i)), o.forEach(function(s) {
                    var l = "".concat(a.datetimeId, "-labels-bg").concat(e.getTargetSelectorSuffix(s)).concat(t ? e.getTargetSelectorSuffix(t) : "");
                    r.defs.append("filter").attr("x", "0").attr("y", "0").attr("width", "1").attr("height", "1").attr("id", l).html('<feFlood flood-color="'.concat(s === "" ? i : i[s], '" /><feComposite in="SourceGraphic"/>'))
                })
            }
        },
        getGradienColortUrl: function(t) {
            return "url(#".concat(this.state.datetimeId, "-gradient").concat(this.getTargetSelectorSuffix(t), ")")
        },
        updateLinearGradient: function() {
            var t = this,
                e = t.config,
                r = t.data.targets,
                n = t.state.datetimeId,
                a = t.$el.defs;
            r.forEach(function(i) {
                var o = "".concat(n, "-gradient").concat(t.getTargetSelectorSuffix(i.id)),
                    s = t.hasPointType() && e.point_radialGradient,
                    l = t.isAreaType(i) && "area" || t.isBarType(i) && "bar";
                if ((s || l) && a.select("#".concat(o)).empty()) {
                    var c = t.color(i),
                        u = {
                            defs: null,
                            stops: []
                        };
                    if (s) {
                        var f = s.cx,
                            d = f === void 0 ? .3 : f,
                            h = s.cy,
                            p = h === void 0 ? .3 : h,
                            g = s.r,
                            m = g === void 0 ? .7 : g,
                            v = s.stops,
                            x = v === void 0 ? [
                                [.1, c, 0],
                                [.9, c, 1]
                            ] : v;
                        u.stops = x, u.defs = a.append("radialGradient").attr("id", "".concat(o)).attr("cx", d).attr("cy", p).attr("r", m)
                    } else {
                        var y = e.axis_rotated,
                            _ = e["".concat(l, "_linearGradient")],
                            w = _.x,
                            T = w === void 0 ? y ? [1, 0] : [0, 0] : w,
                            $ = _.y,
                            C = $ === void 0 ? y ? [0, 0] : [0, 1] : $,
                            M = _.stops,
                            x = M === void 0 ? [
                                [0, c, 1],
                                [1, c, 0]
                            ] : M;
                        u.stops = x, u.defs = a.append("linearGradient").attr("id", "".concat(o)).attr("x1", T[0]).attr("x2", T[1]).attr("y1", C[0]).attr("y2", C[1])
                    }
                    u.stops.forEach(function(R) {
                        var A = R[0],
                            L = R[1],
                            S = R[2],
                            E = X(L) ? L.bind(t.api)(i.id) : L;
                        u.defs && u.defs.append("stop").attr("offset", A).attr("stop-color", E || c).attr("stop-opacity", S)
                    })
                }
            })
        },
        setOverColor: function(t, e) {
            var r = this,
                n = r.config,
                a = r.$el.main,
                i = n.color_onover,
                o = t ? i : r.color;
            at(o) ? o = function(s) {
                var l = s.id;
                return l in i ? i[l] : r.color(l)
            } : et(o) ? o = function() {
                return i
            } : X(i) && (o = o.bind(r.api)), a.selectAll(at(e) ? ".".concat(ct.arc).concat(r.getTargetSelectorSuffix(e.id)) : ".".concat(Mt.shape, "-").concat(e)).style("fill", o)
        }
    }, m0 = {
        getYDomainMinMax: function(t, e) {
            var r = this,
                n = r.axis,
                a = r.config,
                i = e === "min",
                o = a.data_groups,
                s = r.mapToIds(t),
                l = r.getValuesAsIdKeyed(t);
            if (o.length > 0) {
                var c = r["has".concat(i ? "Negative" : "Positive", "ValueInTargets")](t);
                o.forEach(function(u) {
                    var f = u.filter(function(p) {
                        return s.indexOf(p) >= 0
                    });
                    if (f.length) {
                        var d = f[0],
                            h = n.getId(d);
                        c && l[d] && (l[d] = l[d].map(function(p) {
                            return (i ? p < 0 : p > 0) ? p : 0
                        })), f.filter(function(p, g) {
                            return g > 0
                        }).forEach(function(p) {
                            if (l[p]) {
                                var g = n.getId(p);
                                l[p].forEach(function(m, v) {
                                    var x = +m,
                                        y = i ? x > 0 : x < 0;
                                    g === h && !(c && y) && (l[d][v] += x)
                                })
                            }
                        })
                    }
                })
            }
            return Me(e, Object.keys(l).map(function(u) {
                return Me(e, l[u])
            }))
        },
        isHiddenTargetWithYDomain: function(t) {
            var e = this;
            return e.state.hiddenTargetIds.some(function(r) {
                return e.axis.getId(r) === t
            })
        },
        getYDomain: function(t, e, r) {
            var n = this,
                a = n.axis,
                i = n.config,
                o = n.scale,
                s = "axis_".concat(e);
            if (n.isStackNormalized()) return [0, 100];
            var l = o ? .[e] && o[e].type === "log",
                c = t.filter(function(E) {
                    return a.getId(E.id) === e
                }),
                u = r ? n.filterByXDomain(c, r) : c;
            if (u.length === 0) return n.isHiddenTargetWithYDomain(e) ? o[e].domain() : e === "y2" ? o.y.domain() : n.getYDomain(t, "y2", r);
            var f = i["".concat(s, "_min")],
                d = i["".concat(s, "_max")],
                h = i["".concat(s, "_center")],
                p = i["".concat(s, "_inverted")],
                g = n.hasDataLabel() && i.axis_rotated,
                m = n.hasDataLabel() && !i.axis_rotated,
                v = n.getYDomainMinMax(u, "min"),
                x = n.getYDomainMinMax(u, "max"),
                y = gt([Y.BAR, Y.BUBBLE, Y.SCATTER], Re.Line, !0).some(function(E) {
                    var rt = E.indexOf("area") > -1 ? "area" : E;
                    return n.hasType(E, u, !0) && i["".concat(rt, "_zerobased")]
                });
            v = H(f) ? f : H(d) ? v <= d ? v : d - 10 : v, x = H(d) ? d : H(f) ? f <= x ? x : f + 10 : x, isNaN(v) && (v = 0), isNaN(x) && (x = v), v === x && (v < 0 ? x = 0 : v = 0);
            var _ = v >= 0 && x >= 0,
                w = v <= 0 && x <= 0;
            (H(f) && _ || H(d) && w) && (y = !1), y && (_ && (v = 0), w && (x = 0));
            var T = Math.abs(x - v),
                $ = {
                    top: T * .1,
                    bottom: T * .1
                };
            if (nt(h)) {
                var C = Math.max(Math.abs(v), Math.abs(x));
                x = h + C, v = h - C
            }
            if (g) {
                var M = Nn(o.y.range()),
                    R = n.getDataLabelLength(v, x, "width").map(function(E) {
                        return E / M
                    });
                ["bottom", "top"].forEach(function(E, rt) {
                    $[E] += T * (R[rt] / (1 - R[0] - R[1]))
                })
            } else if (m) {
                var A = n.getDataLabelLength(v, x, "height");
                ["bottom", "top"].forEach(function(E, rt) {
                    $[E] += n.convertPixelToScale("y", A[rt], T)
                })
            }
            $ = n.getResettedPadding($);
            var L = i["".concat(s, "_padding")];
            dt(L) && ["bottom", "top"].forEach(function(E) {
                $[E] = a.getPadding(L, E, $[E], T)
            }), y && (_ && ($.bottom = v), w && ($.top = -x));
            var S = l ? [v, x].map(function(E) {
                return E < 0 ? 0 : E
            }) : [v - $.bottom, x + $.top];
            return p ? S.reverse() : S
        },
        getXDomainMinMax: function(t, e) {
            var r, n = this,
                a = n.config["axis_x_".concat(e)],
                i = Me(e, t.map(function(s) {
                    return Me(e, s.values.map(function(l) {
                        return l.x
                    }))
                })),
                o = at(a) ? a.value : a;
            return o = nt(o) && (!((r = n.axis) === null || r === void 0) && r.isTimeSeries()) ? te.bind(this)(o) : o, at(a) && a.fit && (e === "min" && o < i || e === "max" && o > i) && (o = void 0), nt(o) ? o : i
        },
        getXDomainPadding: function(t, e) {
            var r = this,
                n = r.axis,
                a = r.config,
                i = a.axis_x_padding,
                o = n.isTimeSeries() && e,
                s = Nn(t),
                l;
            if (n.isCategorized() || o) l = 0;
            else if (r.hasType("bar")) {
                var c = r.getMaxDataCount();
                l = c > 1 ? s / (c - 1) / 2 : .5
            } else l = r.getResettedPadding(s * .01);
            var u = z(i) ? {
                    left: i,
                    right: i
                } : i,
                f = u.left,
                d = f === void 0 ? l : f,
                h = u.right,
                p = h === void 0 ? l : h;
            if (i.unit === "px") {
                var g = Math.abs(s + s * .2);
                d = n.getPadding(i, "left", l, g), p = n.getPadding(i, "right", l, g)
            } else {
                var m = s + d + p;
                if (o && m) {
                    var v = s / e / m;
                    d = d / m / v, p = p / m / v
                }
            }
            return {
                left: d,
                right: p
            }
        },
        getXDomain: function(t) {
            var e = this,
                r = e.axis,
                n = e.config,
                a = e.scale.x,
                i = n.axis_x_inverted,
                o = [e.getXDomainMinMax(t, "min"), e.getXDomainMinMax(t, "max")],
                s = o[0],
                l = s === void 0 ? 0 : s,
                c = o[1],
                u = c === void 0 ? 0 : c;
            if (a.type !== "log") {
                var f = r.isCategorized(),
                    d = r.isTimeSeries(),
                    h = e.getXDomainPadding(o),
                    p = o[0],
                    g = o[1];
                p - g === 0 && !f && (d ? (p = new Date(p.getTime() * .5), g = new Date(g.getTime() * 1.5)) : (p = p === 0 ? 1 : p * .5, g = g === 0 ? -1 : g * 1.5)), (p || p === 0) && (l = d ? new Date(p.getTime() - h.left) : p - h.left), (g || g === 0) && (u = d ? new Date(g.getTime() + h.right) : g + h.right)
            }
            return i ? [u, l] : [l, u]
        },
        updateXDomain: function(t, e, r, n, a) {
            var i, o = this,
                s = o.config,
                l = o.org,
                c = o.scale,
                u = c.x,
                f = c.subX,
                d = s.zoom_enabled;
            if (r && (u.domain(a || zr(o.getXDomain(t), !s.axis_x_inverted)), l.xDomain = u.domain(), f.domain(u.domain()), (i = o.brush) === null || i === void 0 || i.scale(f)), e) {
                var h = a || !o.brush || M_(o) ? l.xDomain : Qh(o).map(f.invert);
                u.domain(h)
            }
            return (r || e) && d && o.zoom.updateScaleExtent(), n && u.domain(o.trimXDomain(u.orgDomain())), u.domain()
        },
        trimXDomain: function(t) {
            var e = this,
                r = e.config.axis_x_inverted,
                n = e.getZoomDomain(),
                a = n[0],
                i = n[1];
            return (r ? t[0] >= a : t[0] <= a) && (t[1] = +t[1] + (a - t[0]), t[0] = a), (r ? t[1] <= i : t[1] >= i) && (t[0] = +t[0] - (t[1] - i), t[1] = i), t
        },
        getZoomDomain: function(t, e) {
            t === void 0 && (t = "zoom"), e === void 0 && (e = !1);
            var r = this,
                n = r.config,
                a = r.scale,
                i = r.org,
                o = e && a[t] ? a[t].domain() : i.xDomain,
                s = o[0],
                l = o[1];
            return t === "zoom" && (nt(n.zoom_x_min) && (s = Me("min", [s, n.zoom_x_min])), nt(n.zoom_x_max) && (l = Me("max", [l, n.zoom_x_max]))), [s, l]
        },
        convertPixelToScale: function(t, e, r) {
            var n = this,
                a = n.config,
                i = n.state,
                o = a.axis_rotated,
                s;
            return t === "x" ? s = o ? "height" : "width" : s = o ? "width" : "height", r * (e / i[s])
        },
        withinRange: function(t, e, r) {
            var n = this,
                a = n.config.axis_x_inverted,
                i = r,
                o = i[0],
                s = i[1];
            if (Array.isArray(t)) {
                var l = gt([], t, !0);
                if (a && l.reverse(), l[0] < l[1]) return t.every(function(c, u) {
                    return (u === 0 ? a ? +c <= o : +c >= o : a ? +c >= s : +c <= s) && !t.every(function(f, d) {
                        return f === e[d]
                    })
                })
            }
            return !1
        }
    };
    x0 = {
        yFormat: function(t) {
            return zh(this, "y", t)
        },
        y2Format: function(t) {
            return zh(this, "y2", t)
        },
        getDefaultValueFormat: function() {
            var t = this,
                e = t.defaultArcValueFormat,
                r = t.yFormat,
                n = t.y2Format,
                a = t.hasArcType(null, ["gauge", "polar", "radar"]);
            return function(i, o, s) {
                var l = a ? e : t.axis && t.axis.getId(s) === "y2" ? n : r;
                return l.call(t, i, o)
            }
        },
        defaultValueFormat: function(t) {
            return K(t) ? t.join("~") : H(t) ? +t : ""
        },
        defaultArcValueFormat: function(t, e) {
            return "".concat((e * 100).toFixed(1), "%")
        },
        defaultPolarValueFormat: function(t) {
            return "".concat(t)
        },
        dataLabelFormat: function(t) {
            var e = this,
                r = e.config.data_labels,
                n = function(i) {
                    var o = "~",
                        s = i;
                    return K(i) ? s = i.join(o) : at(i) && (s = Object.values(i).join(o)), s
                },
                a = n;
            return X(r.format) ? a = r.format : se(r.format) && (r.format[t] ? a = r.format[t] === !0 ? n : r.format[t] : a = function() {
                return ""
            }), a.bind(e.api)
        }
    };
    _0 = {
        initLegend: function() {
            var t = this,
                e = t.config,
                r = t.$el;
            t.legendItemTextBox = {}, t.state.legendHasRendered = !1, e.legend_show ? (e.legend_contents_bindto || (r.legend = t.$el.svg.append("g").classed(tt.legend, !0).attr("transform", t.getTranslate("legend"))), t.updateLegend()) : t.state.hiddenLegendIds = t.mapToIds(t.data.targets)
        },
        updateLegend: function(t, e, r) {
            var n, a = this,
                i = a.config,
                o = a.state,
                s = a.scale,
                l = a.$el,
                c = e || {
                    withTransform: !1,
                    withTransitionForTransform: !1,
                    withTransition: !1
                };
            c.withTransition = Le(c, "withTransition", !0), c.withTransitionForTransform = Le(c, "withTransitionForTransform", !0), i.legend_contents_bindto && i.legend_contents_template ? a.updateLegendTemplate() : o.hasTreemap || a.updateLegendElement(t || a.mapToIds(a.data.targets), c, r), (n = l.legend) === null || n === void 0 || n.selectAll(".".concat(tt.legendItem)).classed(tt.legendItemHidden, function(u) {
                var f = !a.isTargetToShow(u);
                return f && (this.style.opacity = null), f
            }), a.updateScales(!1, !s.zoom), a.updateSvgSize(), a.transformAll(c.withTransitionForTransform, r), o.legendHasRendered = !0
        },
        updateLegendTemplate: function() {
            var t = this,
                e = t.config,
                r = t.$el,
                n = P(e.legend_contents_bindto),
                a = e.legend_contents_template;
            if (!n.empty()) {
                var i = t.mapToIds(t.data.targets),
                    o = [],
                    s = "";
                i.forEach(function(c) {
                    var u = X(a) ? a.bind(t.api)(c, t.color(c), t.api.data(c)[0].values) : si(a, {
                        COLOR: t.color(c),
                        TITLE: c
                    });
                    u && (o.push(c), s += u)
                });
                var l = n.html(s).selectAll(function() {
                    return this.childNodes
                }).data(o);
                t.setLegendItem(l), r.legend = n
            }
        },
        updateSizeForLegend: function(t) {
            var e = this,
                r = e.config,
                n = e.state,
                a = n.isLegendTop,
                i = n.isLegendLeft,
                o = n.isLegendRight,
                s = n.isLegendInset,
                l = n.current,
                c = t.width,
                u = t.height,
                f = {
                    top: a ? e.getCurrentPaddingByDirection("top") + r.legend_inset_y + 5.5 : l.height - u - e.getCurrentPaddingByDirection("bottom") - r.legend_inset_y,
                    left: i ? e.getCurrentPaddingByDirection("left") + r.legend_inset_x + .5 : l.width - c - e.getCurrentPaddingByDirection("right") - r.legend_inset_x + .5
                };
            e.state.margin3 = {
                top: o ? 0 : s ? f.top : l.height - u,
                right: NaN,
                bottom: 0,
                left: o ? l.width - c : s ? f.left : 0
            }
        },
        transformLegend: function(t) {
            var e = this,
                r = e.$el.legend,
                n = e.$T;
            n(r, t).attr("transform", e.getTranslate("legend"))
        },
        updateLegendStep: function(t) {
            this.state.legendStep = t
        },
        updateLegendItemWidth: function(t) {
            this.state.legendItemWidth = t
        },
        updateLegendItemHeight: function(t) {
            this.state.legendItemHeight = t
        },
        updateLegendItemColor: function(t, e) {
            var r = this.$el.legend;
            r && r.select(".".concat(tt.legendItem, "-").concat(t, " line")).style("stroke", e)
        },
        getLegendWidth: function() {
            var t = this,
                e = t.state,
                r = e.current.width,
                n = e.isLegendRight,
                a = e.isLegendInset,
                i = e.legendItemWidth,
                o = e.legendStep;
            return t.config.legend_show ? n || a ? i * (o + 1) : r : 0
        },
        getLegendHeight: function() {
            var t, e = this,
                r = e.state,
                n = r.current,
                a = r.isLegendRight,
                i = r.legendItemHeight,
                o = r.legendStep,
                s = ((t = e.config.padding) === null || t === void 0 ? void 0 : t.mode) === "fit";
            return e.config.legend_show ? a ? n.height : (s ? 10 : Math.max(20, i)) * (o + 1) : 0
        },
        opacityForUnfocusedLegend: function(t) {
            return t.classed(tt.legendItemHidden) ? null : "0.3"
        },
        toggleFocusLegend: function(t, e) {
            var r = this,
                n = r.$el.legend,
                a = r.$T,
                i = r.mapToTargetIds(t);
            n && a(n.selectAll(".".concat(tt.legendItem)).filter(function(o) {
                return i.indexOf(o) >= 0
            }).classed(st.legendItemFocused, e)).style("opacity", function() {
                return e ? null : r.opacityForUnfocusedLegend.call(r, P(this))
            })
        },
        revertLegend: function() {
            var t = this,
                e = t.$el.legend,
                r = t.$T;
            e && r(e.selectAll(".".concat(tt.legendItem)).classed(st.legendItemFocused, !1)).style("opacity", null)
        },
        showLegend: function(t) {
            var e = this,
                r = e.config,
                n = e.$el,
                a = e.$T;
            r.legend_show || (r.legend_show = !0, n.legend ? n.legend.style("visibility", null) : e.initLegend(), !e.state.legendHasRendered && e.updateLegend()), e.removeHiddenLegendIds(t), a(n.legend.selectAll(e.selectorLegends(t)).style("visibility", null)).style("opacity", null)
        },
        hideLegend: function(t) {
            var e = this,
                r = e.config,
                n = e.$el.legend;
            r.legend_show && le(t) && (r.legend_show = !1, n.style("visibility", "hidden")), e.addHiddenLegendIds(t), n.selectAll(e.selectorLegends(t)).style("opacity", "0").style("visibility", "hidden")
        },
        getLegendItemTextBox: function(t, e) {
            var r = this,
                n = r.cache,
                a = r.state,
                i, o = Jt.legendItemTextBox;
            return t && (i = !a.redrawing && n.get(o) || {}, i[t] || (i[t] = r.getTextRect(e, tt.legendItem), n.add(o, i)), i = i[t]), i
        },
        setLegendItem: function(t) {
            var e = this,
                r = e.$el,
                n = e.api,
                a = e.config,
                i = e.state,
                o = i.inputType === "touch",
                s = e.hasType("gauge"),
                l = a.boost_useCssRule,
                c = a.legend_item_interaction;
            t.attr("class", function(u) {
                var f = P(this),
                    d = !f.empty() && f.attr("class") || "";
                return d + e.generateClass(tt.legendItem, u)
            }).style("visibility", function(u) {
                return e.isLegendToShow(u) ? null : "hidden"
            }), a.interaction_enabled && (l && [
                [".".concat(tt.legendItem), "cursor:pointer"],
                [".".concat(tt.legendItem, " text"), "pointer-events:none"],
                [".".concat(tt.legendItemPoint, " text"), "pointer-events:none"],
                [".".concat(tt.legendItemTile), "pointer-events:none"],
                [".".concat(tt.legendItemEvent), "fill-opacity:0"]
            ].forEach(function(u) {
                var f = u[0],
                    d = u[1];
                e.setCssRule(!1, f, [d])(r.legend)
            }), t.on(c.dblclick ? "dblclick" : "click", c || X(a.legend_item_onclick) ? function(u, f) {
                if (!ft(a.legend_item_onclick, n, f)) {
                    var d = u.altKey,
                        h = u.target,
                        p = u.type;
                    p === "dblclick" || d ? i.hiddenTargetIds.length && h.parentNode.getAttribute("class").indexOf(tt.legendItemHidden) === -1 ? n.show() : (n.hide(), n.show(f)) : (n.toggle(f), P(this).classed(st.legendItemFocused, !1))
                }
                o && e.hideTooltip()
            } : null), !o && t.on("mouseout", c || X(a.legend_item_onout) ? function(u, f) {
                ft(a.legend_item_onout, n, f) || (P(this).classed(st.legendItemFocused, !1), s && e.undoMarkOverlapped(e, ".".concat(oe.gaugeValue)), e.api.revert())
            } : null).on("mouseover", c || X(a.legend_item_onover) ? function(u, f) {
                ft(a.legend_item_onover, n, f) || (P(this).classed(st.legendItemFocused, !0), s && e.markOverlapped(f, e, ".".concat(oe.gaugeValue)), !i.transiting && e.isTargetToShow(f) && n.focus(f))
            } : null), !t.empty() && t.on("click mouseout mouseover") && t.style("cursor", e.getStylePropValue("pointer")))
        },
        updateLegendElement: function(t, e) {
            var r = this,
                n = r.config,
                a = r.state,
                i = r.$el.legend,
                o = r.$T,
                s = n.legend_item_tile_type,
                l = s !== "circle",
                c = n.legend_item_tile_r,
                u = {
                    width: l ? n.legend_item_tile_width : c * 2,
                    height: l ? n.legend_item_tile_height : c * 2
                },
                f = {
                    padding: {
                        top: 4,
                        right: 10
                    },
                    max: {
                        width: 0,
                        height: 0
                    },
                    posMin: 10,
                    step: 0,
                    tileWidth: u.width + 5,
                    totalLength: 0
                },
                d = {
                    offsets: {},
                    widths: {},
                    heights: {},
                    margins: [0],
                    steps: {}
                },
                h, p, g, m = t.filter(function(T) {
                    return !nt(n.data_names[T]) || n.data_names[T] !== null
                }),
                v = e.withTransition,
                x = r.getUpdateLegendPositions(m, f, d);
            a.isLegendInset && (f.step = n.legend_inset_step ? n.legend_inset_step : m.length, r.updateLegendStep(f.step)), a.isLegendRight ? (h = function(T) {
                return f.max.width * d.steps[T]
            }, p = function(T) {
                return d.margins[d.steps[T]] + d.offsets[T]
            }) : a.isLegendInset ? (h = function(T) {
                return f.max.width * d.steps[T] + 10
            }, p = function(T) {
                return d.margins[d.steps[T]] + d.offsets[T]
            }) : (h = function(T) {
                return d.margins[d.steps[T]] + d.offsets[T]
            }, p = function(T) {
                return f.max.height * d.steps[T]
            });
            var y = {
                xText: function(T, $) {
                    return h(T, $) + 4 + u.width
                },
                xRect: function(T, $) {
                    return h(T, $)
                },
                x1Tile: function(T, $) {
                    return h(T, $) - 2
                },
                x2Tile: function(T, $) {
                    return h(T, $) - 2 + u.width
                },
                yText: function(T, $) {
                    return p(T, $) + 9
                },
                yRect: function(T, $) {
                    return p(T, $) - 5
                },
                yTile: function(T, $) {
                    return p(T, $) + 4
                }
            };
            r.generateLegendItem(m, u, x, y), g = i.select(".".concat(tt.legendBackground, " rect")), a.isLegendInset && f.max.width > 0 && g.size() === 0 && (g = i.insert("g", ".".concat(tt.legendItem)).attr("class", tt.legendBackground).append("rect"));
            var _ = i.selectAll("text").data(m).text(function(T) {
                return nt(n.data_names[T]) ? n.data_names[T] : T
            }).each(function(T, $) {
                x(this, T, $)
            });
            o(_, v).attr("x", y.xText).attr("y", y.yText);
            var w = i.selectAll("rect.".concat(tt.legendItemEvent)).data(m);
            o(w, v).attr("width", function(T) {
                return d.widths[T]
            }).attr("height", function(T) {
                return d.heights[T]
            }).attr("x", y.xRect).attr("y", y.yRect), r.updateLegendItemPos(m, v, y), g && o(g, v).attr("height", r.getLegendHeight() - 12).attr("width", f.max.width * (f.step + 1) + 10), r.updateLegendItemWidth(f.max.width), r.updateLegendItemHeight(f.max.height), r.updateLegendStep(f.step)
        },
        getUpdateLegendPositions: function(t, e, r) {
            var n = this,
                a = n.config,
                i = n.state,
                o = i.isLegendRight || i.isLegendInset;
            return function(s, l, c) {
                var u = c === 0,
                    f = c === t.length - 1,
                    d = n.getLegendItemTextBox(l, s),
                    h = d.width + e.tileWidth + (f && !o ? 0 : e.padding.right) + a.legend_padding,
                    p = d.height + e.padding.top,
                    g = o ? p : h,
                    m = o ? n.getLegendHeight() : n.getLegendWidth(),
                    v, x = function(_, w) {
                        w || (v = (m - e.totalLength - g) / 2, v < e.posMin && (v = (m - g) / 2, e.totalLength = 0, e.step++)), r.steps[_] = e.step, r.margins[e.step] = i.isLegendInset ? 10 : v, r.offsets[_] = e.totalLength, e.totalLength += g
                    };
                if (u && (e.totalLength = 0, e.step = 0, e.max.width = 0, e.max.height = 0), a.legend_show && !n.isLegendToShow(l)) {
                    r.widths[l] = 0, r.heights[l] = 0, r.steps[l] = 0, r.offsets[l] = 0;
                    return
                }
                r.widths[l] = h, r.heights[l] = p, (!e.max.width || h >= e.max.width) && (e.max.width = h), (!e.max.height || p >= e.max.height) && (e.max.height = p);
                var y = o ? e.max.height : e.max.width;
                a.legend_equally ? (Object.keys(r.widths).forEach(function(_) {
                    return r.widths[_] = e.max.width
                }), Object.keys(r.heights).forEach(function(_) {
                    return r.heights[_] = e.max.height
                }), v = (m - y * t.length) / 2, v < e.posMin ? (e.totalLength = 0, e.step = 0, t.forEach(function(_) {
                    return x(_)
                })) : x(l, !0)) : x(l)
            }
        },
        generateLegendItem: function(t, e, r, n) {
            var a = this,
                i = a.config,
                o = a.state,
                s = a.$el.legend,
                l = i.legend_usePoint,
                c = i.legend_item_tile_r,
                u = i.legend_item_tile_type,
                f = u !== "circle",
                d = o.isLegendRight || o.isLegendInset,
                h = -200,
                p = s.selectAll(".".concat(tt.legendItem)).data(t).enter().append("g");
            if (a.setLegendItem(p), p.append("text").text(function(m) {
                    return nt(i.data_names[m]) ? i.data_names[m] : m
                }).each(function(m, v) {
                    r(this, m, v)
                }).style("pointer-events", a.getStylePropValue("none")).attr("x", d ? n.xText : h).attr("y", d ? h : n.yText), p.append("rect").attr("class", tt.legendItemEvent).style("fill-opacity", a.getStylePropValue("0")).attr("x", d ? n.xRect : h).attr("y", d ? h : n.yRect), l) {
                var g = [];
                p.append(function(m) {
                    var v = dt(i.point_pattern) ? i.point_pattern : [i.point_type];
                    g.indexOf(m) === -1 && g.push(m);
                    var x = v[g.indexOf(m) % v.length];
                    return x === "rectangle" && (x = "rect"), lt.createElementNS(pe.svg, "hasValidPointType" in a && a.hasValidPointType(x) ? x : "use")
                }).attr("class", tt.legendItemPoint).style("fill", ri.bind(a)).style("pointer-events", a.getStylePropValue("none")).attr("href", function(m, v, x) {
                    var y = x[v],
                        _ = y.nodeName.toLowerCase(),
                        w = a.getTargetSelectorSuffix(m);
                    return _ === "use" ? "#".concat(o.datetimeId, "-point").concat(w) : void 0
                })
            } else p.append(f ? "line" : u).attr("class", tt.legendItemTile).style("stroke", ri.bind(a)).style("pointer-events", a.getStylePropValue("none")).call(function(m) {
                u === "circle" ? m.attr("r", c).style("fill", ri.bind(a)).attr("cx", d ? n.x2Tile : h).attr("cy", d ? h : n.yTile) : f && m.attr("stroke-width", e.height).attr("x1", d ? n.x1Tile : h).attr("y1", d ? h : n.yTile).attr("x2", d ? n.x2Tile : h).attr("y2", d ? h : n.yTile)
            })
        },
        updateLegendItemPos: function(t, e, r) {
            var n = this,
                a = n.config,
                i = n.$el.legend,
                o = n.$T,
                s = a.legend_usePoint,
                l = a.legend_item_tile_type,
                c = l !== "circle";
            if (s) {
                var u = i.selectAll(".".concat(tt.legendItemPoint)).data(t);
                o(u, e).each(function() {
                    var f = this.nodeName.toLowerCase(),
                        d = a.point_r,
                        h = "x",
                        p = "y",
                        g = 2,
                        m = 2.5,
                        v = null,
                        x = null,
                        y = null;
                    if (f === "circle") {
                        var _ = d * .2;
                        h = "cx", p = "cy", v = d + _, g = d * 2, m = -_
                    } else if (f === "rect") {
                        var _ = d * 2.5;
                        x = _, y = _, m = 3
                    }
                    P(this).attr(h, function(w) {
                        return r.x1Tile(w) + g
                    }).attr(p, function(w) {
                        return r.yTile(w) - m
                    }).attr("r", v).attr("width", x).attr("height", y)
                })
            } else {
                var u = i.selectAll(".".concat(tt.legendItemTile)).data(t);
                o(u, e).style("stroke", ri.bind(n)).call(function(d) {
                    l === "circle" ? d.attr("cx", function(h) {
                        var p = r.x2Tile(h);
                        return p - (p - r.x1Tile(h)) / 2
                    }).attr("cy", r.yTile) : c && d.attr("x1", r.x1Tile).attr("y1", r.yTile).attr("x2", r.x2Tile).attr("y2", r.yTile)
                })
            }
        }
    }, y0 = {
        redraw: function(t) {
            var e, r, n;
            t === void 0 && (t = {});
            var a = this,
                i = a.config,
                o = a.state,
                s = a.$el,
                l = s.main,
                c = s.treemap;
            o.redrawing = !0;
            var u = a.filterTargetsToShow(a.data.targets),
                f = t.flow,
                d = t.initializing,
                h = a.getWithOption(t),
                p = h.Transition ? i.transition_duration : 0,
                g = h.TransitionForExit ? p : 0,
                m = h.TransitionForAxis ? p : 0,
                v = (e = a.axis) === null || e === void 0 ? void 0 : e.generateTransitions(m);
            a.updateSizes(d), h.Legend && i.legend_show ? (t.withTransition = !!p, !c && a.updateLegend(a.mapToIds(a.data.targets), t, v)) : h.Dimension && a.updateDimension(!0), i.data_empty_label_text && l.select("text.".concat(Pt.text, ".").concat(Z.empty)).attr("x", o.width / 2).attr("y", o.height / 2).text(i.data_empty_label_text).style("display", u.length ? "none" : null), o.hasAxis ? (a.axis.redrawAxis(u, h, v, f, d), a.hasGrid() && a.updateGrid(), i.regions.length && a.updateRegion(), ["bar", "candlestick", "line", "area"].forEach(function(x) {
                var y = _e(x);
                (/^(line|area)$/.test(x) && a.hasTypeOf(y) || a.hasType(x)) && a["update".concat(y)](h.TransitionForExit)
            }), s.text && l.selectAll(".".concat(mt.selectedCircles)).filter(a.isBarType.bind(a)).selectAll("circle").remove(), i.interaction_enabled && !f && h.EventRect && (a.redrawEventRect(), (r = a.bindZoomEvent) === null || r === void 0 || r.call(a))) : (s.arcs && a.redrawArc(p, g, h.Transform), s.radar && a.redrawRadar(), s.polar && a.redrawPolar(), c && a.updateTreemap(g)), !o.resizing && !c && (a.hasPointType() || o.hasRadar) && a.updateCircle(), a.hasDataLabel() && !a.hasArcType(null, ["radar"]) && a.updateText(), (n = a.redrawTitle) === null || n === void 0 || n.call(a), d && a.updateTypesElements(), a.generateRedrawList(u, f, p, h.Subchart), a.updateTooltipOnRedraw(), a.callPluginHook("$redraw", t, p)
        },
        generateRedrawList: function(t, e, r, n) {
            var a = this,
                i = a.config,
                o = a.state,
                s = a.getDrawShape();
            o.hasAxis && i.subchart_show && a.redrawSubchart(n, r, s);
            var l = e && a.generateFlow({
                    targets: t,
                    flow: e,
                    duration: e.duration,
                    shape: s,
                    xv: a.xv.bind(a)
                }),
                c = (r || l) && Xn(),
                u = a.getRedrawList(s, e, l, c),
                f = function() {
                    l && l(), o.redrawing = !1, ft(i.onrendered, a.api)
                };
            if (f)
                if (c && u.length) {
                    var d = rp();
                    mn().duration(r).each(function() {
                        u.reduce(function(h, p) {
                            return h.concat(p)
                        }, []).forEach(function(h) {
                            return d.add(h)
                        })
                    }).call(d, f)
                } else o.transiting || f();
            a.mapToIds(a.data.targets).forEach(function(h) {
                o.withoutFadeIn[h] = !0
            })
        },
        getRedrawList: function(t, e, r, n) {
            var a = this,
                i = a.config,
                o = a.state,
                s = o.hasAxis,
                l = o.hasRadar,
                c = o.hasTreemap,
                u = a.$el.grid,
                f = t.pos,
                d = f.cx,
                h = f.cy,
                p = f.xForText,
                g = f.yForText,
                m = [];
            return s && ((i.grid_x_lines.length || i.grid_y_lines.length) && m.push(a.redrawGrid(n)), i.regions.length && m.push(a.redrawRegion(n)), Object.keys(t.type).forEach(function(v) {
                var x = _e(v),
                    y = t.type[v];
                (/^(area|line)$/.test(v) && a.hasTypeOf(x) || a.hasType(v)) && m.push(a["redraw".concat(x)](y, n))
            }), !e && u.main && m.push(a.updateGridFocus())), (!a.hasArcType() || l) && dt(i.data_labels) && i.data_labels !== !1 && m.push(a.redrawText(p, g, e, n)), (a.hasPointType() || l) && !a.isPointFocusOnly() && a.redrawCircle && m.push(a.redrawCircle(d, h, n, r)), c && m.push(a.redrawTreemap(n)), m
        },
        updateAndRedraw: function(t) {
            t === void 0 && (t = {});
            var e = this,
                r = e.config,
                n = e.state,
                a;
            t.withTransition = Le(t, "withTransition", !0), t.withTransform = Le(t, "withTransform", !1), t.withLegend = Le(t, "withLegend", !1), t.withUpdateXDomain = !0, t.withUpdateOrgXDomain = !0, t.withTransitionForExit = !1, t.withTransitionForTransform = Le(t, "withTransitionForTransform", t.withTransition), t.withLegend && r.legend_show || (n.hasAxis && (a = e.axis.generateTransitions(t.withTransitionForAxis ? r.transition_duration : 0)), e.updateScales(), e.updateSvgSize(), e.transformAll(t.withTransitionForTransform, a)), e.redraw(t, a)
        }
    };
    b0 = {
        getXScale: function(t, e, r, n) {
            var a = this,
                i = a.scale.zoom || or(a.axis.getAxisType("x"), t, e);
            return a.getCustomizedXScale(r ? i.domain(r) : i, n)
        },
        getYScale: function(t, e, r, n) {
            var a = this,
                i = or(a.axis.getAxisType(t), e, r);
            return n && i.domain(n), i
        },
        getYScaleById: function(t, e) {
            var r;
            e === void 0 && (e = !1);
            var n = ((r = this.axis) === null || r === void 0 ? void 0 : r.getId(t)) === "y2",
                a = e ? n ? "subY2" : "subY" : n ? "y2" : "y";
            return this.scale[a]
        },
        getCustomizedXScale: function(t, e) {
            var r = this,
                n = e || function() {
                    return r.axis.x.tickOffset()
                },
                a = r.config.axis_x_inverted,
                i = function(s, l) {
                    var c = t(s) + n();
                    return l ? c : Math.ceil(c)
                };
            for (var o in t) i[o] = t[o];
            return i.orgDomain = function() {
                return t.domain()
            }, i.orgScale = function() {
                return t
            }, r.axis.isCategorized() && (i.domain = function(s) {
                var l = s;
                return arguments.length ? (t.domain(l), i) : (l = this.orgDomain(), a ? [l[0] + 1, l[1]] : [l[0], l[1] + 1])
            }), i
        },
        updateScales: function(t, e) {
            var r, n;
            e === void 0 && (e = !0);
            var a = this,
                i = a.axis,
                o = a.config,
                s = a.format,
                l = a.org,
                c = a.scale,
                u = a.state,
                f = u.current,
                d = u.width,
                h = u.height,
                p = u.width2,
                g = u.height2,
                m = u.hasAxis,
                v = u.hasTreemap;
            if (m) {
                var x = o.axis_rotated,
                    y = a.getResettedPadding(1),
                    _ = {
                        x: x ? y : 0,
                        y: x ? 0 : h,
                        subX: x ? 1 : 0,
                        subY: x ? 0 : g
                    },
                    w = {
                        x: x ? h : d,
                        y: x ? d : y,
                        subX: x ? h : d,
                        subY: x ? p : 1
                    },
                    T = e && ((r = c.x) === null || r === void 0 ? void 0 : r.orgDomain()),
                    $ = e && l.xDomain;
                c.x = a.getXScale(_.x, w.x, T, function() {
                    return i.x.tickOffset()
                }), c.subX = a.getXScale(_.x, w.x, $, function(M) {
                    var R;
                    return M % 1 ? 0 : ((R = i.subX) !== null && R !== void 0 ? R : i.x).tickOffset()
                }), s.xAxisTick = i.getXAxisTickFormat(), s.subXAxisTick = i.getXAxisTickFormat(!0), i.setAxis("x", c.x, o.axis_x_tick_outer, t), o.subchart_show && i.setAxis("subX", c.subX, o.axis_x_tick_outer, t), c.y = a.getYScale("y", _.y, w.y, c.y ? c.y.domain() : o.axis_y_default), c.subY = a.getYScale("y", _.subY, w.subY, c.subY ? c.subY.domain() : o.axis_y_default), i.setAxis("y", c.y, o.axis_y_tick_outer, t), o.axis_y2_show && (c.y2 = a.getYScale("y2", _.y, w.y, c.y2 ? c.y2.domain() : o.axis_y2_default), c.subY2 = a.getYScale("y2", _.subY, w.subY, c.subY2 ? c.subY2.domain() : o.axis_y2_default), i.setAxis("y2", c.y2, o.axis_y2_tick_outer, t))
            } else if (v) {
                var C = a.getCurrentPadding();
                c.x = tr().rangeRound([C.left, f.width - C.right]), c.y = tr().rangeRound([C.top, f.height - C.bottom])
            } else(n = a.updateArc) === null || n === void 0 || n.call(a)
        },
        xx: function(t) {
            var e = this,
                r = e.config,
                n = e.scale,
                a = n.x,
                i = n.zoom,
                o = r.zoom_enabled && i ? i : a;
            return t ? o(H(t.x) ? t.x : t) : null
        },
        xv: function(t) {
            var e = this,
                r = e.axis,
                n = e.config,
                a = e.scale,
                i = a.x,
                o = a.zoom,
                s = n.zoom_enabled && o ? o : i,
                l = e.getBaseValue(t);
            return r.isTimeSeries() ? l = te.call(e, l) : r.isCategorized() && et(l) && (l = n.axis_x_categories.indexOf(l)), Math.ceil(s(l))
        },
        yv: function(t) {
            var e = this,
                r = e.scale,
                n = r.y,
                a = r.y2,
                i = t.axis && t.axis === "y2" ? a : n;
            return Math.ceil(i(e.getBaseValue(t)))
        },
        subxx: function(t) {
            return t ? this.scale.subX(t.x) : null
        }
    };
    w0 = {
        getDrawShape: function() {
            var t = this,
                e = t.config.axis_rotated,
                r = t.state,
                n = r.hasRadar,
                a = r.hasTreemap,
                i = {
                    type: {},
                    indices: {},
                    pos: {}
                };
            if (!a && ["bar", "candlestick", "line", "area"].forEach(function(l) {
                    var c = _e(/^(bubble|scatter)$/.test(l) ? "line" : l);
                    if (t.hasType(l) || t.hasTypeOf(c) || l === "line" && (t.hasType("bubble") || t.hasType("scatter"))) {
                        var u = t.getShapeIndices(t["is".concat(c, "Type")]),
                            f = t["generateDraw".concat(c)];
                        i.indices[l] = u, i.type[l] = f ? f.bind(t)(u, !1) : void 0
                    }
                }), !t.hasArcType() || n || a) {
                var o = void 0,
                    s = void 0;
                a || (o = n ? t.radarCircleX : e ? t.circleY : t.circleX, s = n ? t.radarCircleY : e ? t.circleX : t.circleY), i.pos = {
                    xForText: t.generateXYForText(i.indices, !0),
                    yForText: t.generateXYForText(i.indices, !1),
                    cx: (o || function() {}).bind(t),
                    cy: (s || function() {}).bind(t)
                }
            }
            return i
        },
        getShapeIndices: function(t) {
            var e = this,
                r = e.config,
                n = r.data_xs,
                a = dt(n),
                i = {},
                o = a ? {} : 0;
            return a && Cs(Object.keys(n).map(function(s) {
                return n[s]
            })).forEach(function(s) {
                o[s] = 0, i[s] = {}
            }), e.filterTargetsToShow(e.data.targets.filter(t, e)).forEach(function(s) {
                for (var l, c = (s.id in n) ? n[s.id] : "", u = c ? i[c] : i, f = 0, d = void 0; d = r.data_groups[f]; f++)
                    if (!(d.indexOf(s.id) < 0))
                        for (var h = 0, p = void 0; p = d[h]; h++) {
                            if (p in u) {
                                u[s.id] = u[p];
                                break
                            }
                            s.id !== p && c && (u[p] = (l = u[s.id]) !== null && l !== void 0 ? l : o[c])
                        }
                bt(u[s.id]) && (u[s.id] = c ? o[c]++ : o++, u.__max__ = (c ? o[c] : o) - 1)
            }), i
        },
        getIndices: function(t, e, r) {
            var n = this,
                a = n.config,
                i = a.data_xs,
                o = a.bar_indices_removeNull,
                s = e.id,
                l = e.index;
            if (n.isBarType(s) && o) {
                var c = {};
                return n.getAllValuesOnIndex(l, !0).forEach(function(u, f) {
                    c[u.id] = f, c.__max__ = f
                }), c
            }
            return dt(i) ? t[i[s]] : t
        },
        getIndicesMax: function(t) {
            return dt(this.config.data_xs) ? Object.keys(t).map(function(e) {
                return t[e].__max__ || 0
            }).reduce(function(e, r) {
                return e + r
            }) : t.__max__
        },
        getShapeX: function(t, e, r) {
            var n = this,
                a = n.config,
                i = n.scale,
                o = r ? i.subX : i.zoom || i.x,
                s = a.bar_overlap,
                l = a.bar_padding,
                c = function(f, d) {
                    return f + d
                },
                u = se(t) && (t._$total.length ? t._$total.reduce(c) / 2 : 0);
            return function(f) {
                var d = n.getIndices(e, f, "getShapeX"),
                    h = f.id in d ? d[f.id] : 0,
                    p = (d.__max__ || 0) + 1,
                    g = 0;
                if (dt(f.x)) {
                    var m = o(f.x, !0);
                    if (u) {
                        var v = t[f.id] || t._$width;
                        g = s ? m - v / 2 : m - v + t._$total.slice(0, h + 1).reduce(c) - u
                    } else g = m - (z(t) ? t : t._$width) * (p / 2 - (s ? 1 : h))
                }
                return t && g && p > 1 && l && (h && (g += l * h), p > 2 ? g -= (p - 1) * l / 2 : p === 2 && (g -= l / 2)), g
            }
        },
        getShapeY: function(t) {
            var e = this,
                r = e.isStackNormalized();
            return function(n) {
                var a = n.value;
                return z(n) ? a = n : e.isAreaRangeType(n) ? a = e.getBaseValue(n, "mid") : r ? a = e.getRatio("index", n, !0) : e.isBubbleZType(n) ? a = e.getBubbleZData(n.value, "y") : e.isBarRangeType(n) && (a = a[1]), e.getYScaleById(n.id, t)(a)
            }
        },
        getShapeYMin: function(t) {
            var e = this,
                r = e.axis.getId(t),
                n = e.scale[r],
                a = n.domain()[0],
                i = e.config["axis_".concat(r, "_inverted")];
            return !e.isGrouped(t) && !i && a > 0 ? a : 0
        },
        getShapeOffsetData: function(t) {
            var e = this,
                r = e.orderTargets(e.filterTargetsToShow(e.data.targets.filter(t, e))),
                n = e.isStackNormalized(),
                a = r.map(function(o) {
                    var s = o.values,
                        l = {};
                    e.isStepType(o) && (s = e.convertValuesToStep(s));
                    var c = s.reduce(function(u, f) {
                        var d = Number(f.x);
                        return u[d] = f, l[d] = n ? e.getRatio("index", f, !0) : f.value, u
                    }, {});
                    return {
                        id: o.id,
                        rowValues: s,
                        rowValueMapByXValue: c,
                        values: l
                    }
                }),
                i = r.reduce(function(o, s, l) {
                    var c = s.id;
                    return o[c] = l, o
                }, {});
            return {
                indexMapByTargetId: i,
                shapeOffsetTargets: a
            }
        },
        getShapeOffset: function(t, e, r) {
            var n = this,
                a = n.getShapeOffsetData(t),
                i = a.shapeOffsetTargets,
                o = a.indexMapByTargetId,
                s = n.config.data_groupsZeroAs;
            return function(l, c) {
                var u = l.id,
                    f = l.value,
                    d = l.x,
                    h = n.getIndices(e, l),
                    p = n.getYScaleById(u, r);
                if (n.isBarRangeType(l)) return p(f[0]);
                var g = Number(d),
                    m = p(s === "zero" ? 0 : n.getShapeYMin(u)),
                    v = m;
                return i.filter(function(x) {
                    return x.id !== u && h[x.id] === h[u]
                }).forEach(function(x) {
                    var y = x.id,
                        _ = x.rowValueMapByXValue,
                        w = x.rowValues,
                        T = x.values;
                    if (o[y] < o[u]) {
                        var $ = T[g],
                            C = w[c];
                        if ((!C || Number(C.x) !== g) && (C = _[g]), C ? .value * f >= 0 && z($)) {
                            var M = f === 0 ? s === "positive" && $ > 0 || s === "negative" && $ < 0 : !0;
                            M && (v += p($) - m)
                        }
                    }
                }), v
            }
        },
        circleY: function(t, e) {
            var r = this,
                n = t.id,
                a;
            return r.isGrouped(n) && (a = T0.bind(r)(t)), a ? a(t, e)[0][1] : r.getYScaleById(n)(r.getBaseValue(t))
        },
        getBarW: function(t, e, r) {
            var n = this,
                a = n.config,
                i = n.org,
                o = n.scale,
                s = n.getMaxDataCount(),
                l = t === "bar" && a.data_groups.length,
                c = "".concat(t, "_width"),
                u = o.zoom && !n.axis.isCategorized() ? i.xDomain.map(function(h) {
                    return o.zoom(h)
                }).reduce(function(h, p) {
                    return Math.abs(h) + p
                }) / s : e.tickInterval(s),
                f = function(h) {
                    var p = h ? a[c][h] : a[c],
                        g = h ? p.ratio : a["".concat(c, "_ratio")],
                        m = h ? p.max : a["".concat(c, "_max")],
                        v = z(p) ? p : r ? u * g / r : 0;
                    return m && v > m ? m : v
                },
                d = f();
            return !l && se(a[c]) && (d = {
                _$width: d,
                _$total: []
            }, n.filterTargetsToShow(n.data.targets).forEach(function(h) {
                a[c][h.id] && (d[h.id] = f(h.id), d._$total.push(d[h.id] || d._$width))
            })), d
        },
        getShapeByIndex: function(t, e, r) {
            var n = this,
                a = n.$el,
                i = H(e) ? "-".concat(e) : "",
                o = a[t];
            return o && !o.empty() ? o = o.filter(function(s) {
                return r ? s.id === r : !0
            }).filter(function(s) {
                return H(e) ? s.index === e : !0
            }) : o = (r ? a.main.selectAll(".".concat(At["".concat(t, "s")]).concat(n.getTargetSelectorSuffix(r))) : a.main).selectAll(".".concat(At[t]).concat(i)), o
        },
        isWithinShape: function(t, e) {
            var r, n = this,
                a = P(t),
                i;
            return n.isTargetToShow(e.id) ? !((r = n.hasValidPointType) === null || r === void 0) && r.call(n, t.nodeName) ? i = n.isStepType(e) ? n.isWithinStep(t, n.getYScaleById(e.id)(e.value)) : n.isWithinCircle(t, n.isBubbleType(e) ? n.pointSelectR(e) * 1.5 : 0) : t.nodeName === "path" && (i = a.classed(At.bar) ? n.isWithinBar(t) : !0) : i = !1, i
        },
        getInterpolate: function(t) {
            var e = this,
                r = e.getInterpolateType(t);
            return {
                basis: jo,
                "basis-closed": Ko,
                "basis-open": Qo,
                bundle: Jo,
                cardinal: ts,
                "cardinal-closed": es,
                "cardinal-open": ns,
                "catmull-rom": is,
                "catmull-rom-closed": os,
                "catmull-rom-open": ss,
                "monotone-x": us,
                "monotone-y": fs,
                natural: ds,
                "linear-closed": ls,
                linear: ar,
                step: hs,
                "step-after": gs,
                "step-before": ps
            }[r]
        },
        getInterpolateType: function(t) {
            var e = this,
                r = e.config,
                n = r.spline_interpolation_type,
                a = e.isInterpolationType(n) ? n : "cardinal";
            return e.isSplineType(t) ? a : e.isStepType(t) ? r.line_step_type : "linear"
        },
        isWithinBar: function(t) {
            var e = xe(this.state.event, t),
                r = Kh(t),
                n = r[0],
                a = r[1],
                i = Math.min(n.x, a.x),
                o = Math.min(n.y, a.y),
                s = this.config.bar_sensitivity,
                l = t.getBBox(),
                c = l.width,
                u = l.height,
                f = i - s,
                d = i + c + s,
                h = o + u + s,
                p = o - s,
                g = f < e[0] && e[0] < d && p < e[1] && e[1] < h;
            return g
        }
    }, $0 = {
        setContainerSize: function() {
            var t = this,
                e = t.state;
            e.current.width = t.getCurrentWidth(), e.current.height = t.getCurrentHeight()
        },
        getCurrentWidth: function() {
            var t = this;
            return t.config.size_width || t.getParentWidth()
        },
        getCurrentHeight: function() {
            var t = this,
                e = t.config,
                r = e.size_height || t.getParentHeight();
            return r > 0 ? r : 320 / (t.hasType("gauge") && !e.gauge_fullCircle ? 2 : 1)
        },
        getParentRectValue: function(t) {
            for (var e = "offset".concat(_e(t)), r = this.$el.chart.node(), n = 0; n < 30 && r && r.tagName !== "BODY";) {
                try {
                    n = r.getBoundingClientRect()[t]
                } catch {
                    e in r && (n = r[e])
                }
                r = r.parentNode
            }
            var a = lt.body[e];
            return n > a && (n = a), n
        },
        getParentWidth: function() {
            return this.getParentRectValue("width")
        },
        getParentHeight: function() {
            var t = this.$el.chart.style("height"),
                e = 0;
            return t && (e = /px$/.test(t) ? parseInt(t, 10) : this.getParentRectValue("height")), e
        },
        getSvgLeft: function(t) {
            var e = this,
                r = e.config,
                n = e.state.hasAxis,
                a = e.$el,
                i = r.axis_rotated,
                o = i || !i && !r.axis_y_inner,
                s = i ? yt.axisX : yt.axisY,
                l = a.main.select(".".concat(s)).node(),
                c = n && r["axis_".concat(i ? "x" : "y", "_label")],
                u = 0;
            if (n && (et(c) || et(c.text) || /^inner-/.test(c ? .position))) {
                var f = a.main.select(".".concat(s, "-label"));
                f.empty() || (u = f.node().getBoundingClientRect().left)
            }
            var d = l && o ? l.getBoundingClientRect() : {
                    right: 0
                },
                h = a.chart.node().getBoundingClientRect().left + u,
                p = e.hasArcType(),
                g = d.right - h - (p ? 0 : e.getCurrentPaddingByDirection("left", t));
            return g > 0 ? g : 0
        },
        updateDimension: function(t) {
            var e, r = this,
                n = r.config,
                a = r.state.hasAxis,
                i = r.$el;
            a && !t && r.axis.x && n.axis_rotated && ((e = r.axis.subX) === null || e === void 0 || e.create(i.axis.subX)), r.updateScales(t), r.updateSvgSize(), r.transformAll(!1)
        },
        updateSvgSize: function() {
            var t = this,
                e = t.state,
                r = e.clip,
                n = e.current,
                a = e.hasAxis,
                i = e.width,
                o = e.height,
                s = t.$el.svg;
            if (s.attr("width", n.width).attr("height", n.height), a) {
                var l = s.select(".".concat(tp.brush, " .overlay")),
                    c = {
                        width: 0,
                        height: 0
                    };
                l.size() && (c.width = +l.attr("width"), c.height = +l.attr("height")), s.selectAll(["#".concat(r.id), "#".concat(r.idGrid)]).select("rect").attr("width", i).attr("height", o), s.select("#".concat(r.idXAxis)).select("rect").call(t.setXAxisClipPath.bind(t)), s.select("#".concat(r.idYAxis)).select("rect").call(t.setYAxisClipPath.bind(t)), r.idSubchart && s.select("#".concat(r.idSubchart)).select("rect").attr("width", i).attr("height", c.height)
            }
        },
        getCurrentPaddingByDirection: function(t, e, r) {
            var n;
            e === void 0 && (e = !1), r === void 0 && (r = !1);
            var a = this,
                i = a.config,
                o = a.$el,
                s = a.state.hasAxis,
                l = i.axis_rotated,
                c = ((n = i.padding) === null || n === void 0 ? void 0 : n.mode) === "fit",
                u = z(i["padding_".concat(t)]) ? i["padding_".concat(t)] : void 0,
                f = s ? {
                    top: l ? "y2" : null,
                    bottom: l ? "y" : "x",
                    left: l ? "x" : "y",
                    right: l ? null : "y2"
                }[t] : null,
                d = /^(left|right)$/.test(t),
                h = f && i["axis_".concat(f, "_inner")],
                p = f && i["axis_".concat(f, "_show")],
                g = f ? i["axis_".concat(f, "_axes")].length : 0,
                m = f ? d ? a.getAxisWidthByAxisId(f, e) : a.getHorizontalAxisHeight(f) : 0,
                v = 20,
                x = 0;
            !c && d && (m = k_(m));
            var y = s && d && (h || bt(u) && !p) ? 0 : c ? (p ? m : 0) + (u ? ? 0) : bt(u) ? m : u;
            return d && s ? (f && (c || h) && i["axis_".concat(f, "_label")].text && (y += a.axis.getAxisLabelPosition(f).isOuter ? v : 0), t === "right" ? (y += l ? !c && bt(u) ? 10 : 2 : !p || h ? c ? 2 : 1 : 0, y += r ? a.axis.getXAxisTickTextY2Overflow(v) : 0) : t === "left" && l && bt(u) && (y = i.axis_x_show ? c ? m : Math.max(m, 40) : 1)) : t === "top" ? (o.title && o.title.node() && (y += a.getTitlePadding()), x = l && !h ? g : 0) : t === "bottom" && s && l && !p && (y += 1), y + m * g - x
        },
        getCurrentPadding: function(t) {
            t === void 0 && (t = !1);
            var e = this,
                r = ["top", "bottom", "left", "right"].map(function(s) {
                    return e.getCurrentPaddingByDirection(s, null, t)
                }),
                n = r[0],
                a = r[1],
                i = r[2],
                o = r[3];
            return {
                top: n,
                bottom: a,
                left: i,
                right: o
            }
        },
        getResettedPadding: function(t) {
            var e = this,
                r = e.config,
                n = z(t),
                a = n ? 0 : {};
            return r.padding === !1 ? !n && Object.keys(t).forEach(function(i) {
                a[i] = !le(r.data_labels) && r.data_labels !== !1 && i === "top" ? t[i] : 0
            }) : a = t, a
        },
        updateSizes: function(t) {
            var e, r, n, a = this,
                i = a.config,
                o = a.state,
                s = a.$el.legend,
                l = i.axis_rotated,
                c = a.hasArcType() || o.hasTreemap,
                u = ((e = i.padding) === null || e === void 0 ? void 0 : e.mode) === "fit";
            !t && a.setContainerSize();
            var f = {
                width: s ? a.getLegendWidth() : 0,
                height: s ? a.getLegendHeight() : 0
            };
            !c && i.axis_x_show && i.axis_x_tick_autorotate && a.updateXAxisTickClip();
            var d = {
                    right: i.legend_show && o.isLegendRight ? a.getLegendWidth() + (u ? 0 : 20) : 0,
                    bottom: !i.legend_show || o.isLegendRight || o.isLegendInset ? 0 : f.height
                },
                h = l || c ? 0 : a.getHorizontalAxisHeight("x"),
                p = i.subchart_axis_x_show && i.subchart_axis_x_tick_text_show ? h : 30,
                g = i.subchart_show && !c ? i.subchart_size_height + p : 0,
                m = a.hasType("gauge") && i.arc_needle_show && !i.gauge_fullCircle && !i.gauge_label_show ? 10 : 0,
                v = a.getCurrentPadding(!0);
            if (o.margin = !c && l ? {
                    top: v.top,
                    right: c ? 0 : v.right + d.right,
                    bottom: d.bottom + v.bottom,
                    left: g + (c ? 0 : v.left)
                } : {
                    top: (u ? 0 : 4) + v.top,
                    right: c ? 0 : v.right + d.right,
                    bottom: m + g + d.bottom + v.bottom,
                    left: c ? 0 : v.left
                }, o.margin = a.getResettedPadding(o.margin), o.margin2 = l ? {
                    top: o.margin.top,
                    right: NaN,
                    bottom: 20 + d.bottom,
                    left: a.state.rotatedPadding.left
                } : {
                    top: o.current.height - g - d.bottom,
                    right: NaN,
                    bottom: p + d.bottom,
                    left: o.margin.left
                }, o.margin3 = {
                    top: 0,
                    right: NaN,
                    bottom: 0,
                    left: 0
                }, (r = a.updateSizeForLegend) === null || r === void 0 || r.call(a, f), o.width = o.current.width - o.margin.left - o.margin.right, o.height = o.current.height - o.margin.top - o.margin.bottom, o.width < 0 && (o.width = 0), o.height < 0 && (o.height = 0), o.width2 = l ? o.margin.left - o.rotatedPadding.left - o.rotatedPadding.right : o.width, o.height2 = l ? o.height : o.current.height - o.margin2.top - o.margin2.bottom, o.width2 < 0 && (o.width2 = 0), o.height2 < 0 && (o.height2 = 0), a.hasArcType()) {
                var x = a.hasType("gauge"),
                    y = i.legend_show && o.isLegendRight;
                o.arcWidth = o.width - (y ? f.width + 10 : 0), o.arcHeight = o.height - (y && !x ? 0 : 10), x && !i.gauge_fullCircle && (o.arcHeight += o.height - a.getPaddingBottomForGauge()), (n = a.updateRadius) === null || n === void 0 || n.call(a)
            }
            o.isLegendRight && c && (o.margin3.left = o.arcWidth / 2 + o.radiusExpanded * 1.1)
        }
    }, A0 = {
        setCssRule: function(t, e, r, n) {
            var a = this,
                i = a.config,
                o = a.state,
                s = o.cssRule,
                l = o.style;
            return i.boost_useCssRule ? function(c) {
                c.each(function(u) {
                    var f = n && n ? .call(a, u),
                        d = "".concat(t ? ".".concat(Mt.shapes + a.getTargetSelectorSuffix(u.id)) : "").concat(e);
                    e in s && l.sheet.deleteRule(s[d]), a.state.cssRule[d] = I_(l, d, r.filter(Boolean).map(function(h) {
                        return et(f) && h.indexOf(":") === -1 ? "".concat(h, ": ").concat(f) : h || ""
                    }))
                })
            } : function() {}
        },
        getStylePropValue: function(t) {
            var e = this.config.boost_useCssRule;
            return e ? null : X(t) ? t.bind(this) : t
        }
    };
    C0 = {
        opacityForText: function(t) {
            var e = this;
            return e.isBarType(t) && !e.meetsLabelThreshold(Math.abs(e.getRatio("bar", t)), "bar") ? "0" : e.hasDataLabel ? null : "0"
        },
        initText: function() {
            var t = this.$el;
            t.main.select(".".concat(Z.chart)).append("g").attr("class", Pt.chartTexts).style("pointer-events", t.treemap ? "none" : null)
        },
        updateTargetsForText: function(t) {
            var e = this,
                r = e.getChartClass("Text"),
                n = e.getClass("texts", "id"),
                a = e.classFocus.bind(e),
                i = e.$el.main.select(".".concat(Pt.chartTexts)).selectAll(".".concat(Pt.chartText)).data(t).attr("class", function(s) {
                    return "".concat(r(s)).concat(a(s)).trim()
                }),
                o = i.enter().append("g").style("opacity", "0").attr("class", r).call(e.setCssRule(!0, " .".concat(Pt.text), ["fill", "pointer-events:none"], e.updateTextColor));
            o.append("g").attr("class", n)
        },
        updateText: function() {
            var t = this,
                e = t.$el,
                r = t.$T,
                n = t.config,
                a = t.axis,
                i = t.getClass("text", "index"),
                o = n.data_labels.centered,
                s = e.main.selectAll(".".concat(Pt.texts)).selectAll(".".concat(Pt.text)).data(t.labelishData.bind(t));
            r(s.exit()).style("fill-opacity", "0").remove(), e.text = s.enter().append("text").merge(s).attr("class", i).attr("text-anchor", function(l) {
                var c = n["axis_".concat(a ? .getId(l.id), "_inverted")],
                    u = c ? l.value > 0 : l.value < 0;
                if (t.isCandlestickType(l)) {
                    var f = t.getCandlestickData(l);
                    u = !f ? ._isUp
                } else if (t.isTreemapType(l)) return o ? "middle" : "start";
                return n.axis_rotated ? u ? "end" : "start" : "middle"
            }).style("fill", t.getStylePropValue(t.updateTextColor)).style("fill-opacity", "0").each(function(l, c, u) {
                var f = P(this),
                    d = l.value;
                if (t.isBubbleZType(l)) d = t.getBubbleZData(d, "z");
                else if (t.isCandlestickType(l)) {
                    var h = t.getCandlestickData(l);
                    h && (d = h.close)
                }
                d = t.isTreemapType(l) ? t.treemapDataLabelFormat(l)(f) : t.dataLabelFormat(l.id)(d, l.id, l.index, u), z(d) ? this.textContent = d : oi(f, d)
            })
        },
        updateTextColor: function(t) {
            var e = this,
                r = e.config,
                n = r.data_labels_colors,
                a = e.isArcType(t) && !e.isRadarType(t) || e.isTreemapType(t) ? null : e.color(t),
                i;
            if (et(n)) i = n;
            else if (at(n)) {
                var o = (t.data || t).id;
                i = n[o]
            } else X(n) && (i = n.bind(e.api)(a, t));
            if (e.isCandlestickType(t) && !X(n)) {
                var s = e.getCandlestickData(t);
                if (!s ? ._isUp) {
                    var l = r.candlestick_color_down;
                    i = at(l) ? l[t.id] : l
                }
            }
            return i || a
        },
        updateTextBackgroundColor: function(t) {
            var e = this,
                r = e.$el,
                n = e.config,
                a = n.data_labels_backgroundColors,
                i = "";
            if (et(a) || at(a)) {
                var o = et(a) ? "" : e.getTargetSelectorSuffix("id" in t ? t.id : t.data.id),
                    s = r.defs.select(["filter[id*='labels-bg", "']"].join(o));
                s.size() && (i = "url(#".concat(s.attr("id"), ")"))
            }
            return i || null
        },
        redrawText: function(t, e, r, n) {
            var a = this,
                i = a.$T,
                o = a.axis,
                s = a.config,
                l = a.state.hasTreemap,
                c = sr(!0),
                u = s.axis_rotated,
                f = s.data_labels.rotate,
                d = S0(f),
                h = f ? "rotate(".concat(f, ")") : "";
            return a.$el.text.style("fill", a.getStylePropValue(a.updateTextColor)).attr("filter", a.updateTextBackgroundColor.bind(a)).style("fill-opacity", r ? 0 : a.opacityForText.bind(a)).each(function(p, g) {
                var m = i(l && this.childElementCount ? this.parentNode : this, !!(n && this.getAttribute("x")), c),
                    v = s["axis_".concat(o ? .getId(p.id), "_inverted")],
                    x = {
                        x: t.bind(this)(p, g),
                        y: e.bind(this)(p, g)
                    };
                f && (x = k0.bind(a)(p, x, d, u, v), m.attr("text-anchor", d)), this.childElementCount || f ? m.attr("transform", "translate(".concat(x.x, " ").concat(x.y, ") ").concat(h)) : m.attr("x", x.x).attr("y", x.y)
            }), !0
        },
        getTextRect: function(t, e) {
            var r = this,
                n = t.node ? t.node() : t;
            /text/i.test(n.tagName) || (n = n.querySelector("text"));
            var a = n.textContent,
                i = "".concat(Jt.textRect, "-").concat(a.replace(/\W/g, "_")),
                o = r.cache.get(i);
            return o || (r.$el.svg.append("text").style("visibility", "hidden").style("font", P(n).style("font")).classed(e, !0).text(a).call(function(s) {
                o = ni(s.node())
            }).remove(), r.cache.add(i, o)), o
        },
        generateXYForText: function(t, e) {
            var r = this,
                n = r.state,
                a = n.hasRadar,
                i = n.hasTreemap,
                o = Object.keys(t),
                s = {},
                l = e ? r.getXForText : r.getYForText;
            return a && o.push("radar"), i && o.push("treemap"), o.forEach(function(c) {
                    s[c] = r["generateGet".concat(_e(c), "Points")](t[c], !1)
                }),
                function(c, u) {
                    var f = r.isAreaType(c) && "area" || r.isBarType(c) && "bar" || r.isCandlestickType(c) && "candlestick" || r.isRadarType(c) && "radar" || r.isTreemapType(c) && "treemap" || "line";
                    return l.call(r, s[f](c, u), c, this)
                }
        },
        getCenteredTextPos: function(t, e, r, n) {
            var a = this,
                i = a.config,
                o = i.axis_rotated,
                s = a.isBarType(t),
                l = a.isTreemapType(t);
            if (i.data_labels.centered && (s || l)) {
                var c = ni(r);
                if (s) {
                    var u = a.getRangedData(t, null, "bar") >= 0;
                    if (o) {
                        var f = (u ? e[1][1] - e[0][1] : e[0][1] - e[1][1]) / 2 + c.width / 2;
                        return u ? -f - 3 : f + 2
                    } else {
                        var d = (u ? e[0][1] - e[1][1] : e[1][1] - e[0][1]) / 2 + c.height / 2;
                        return u ? d : -d - 2
                    }
                } else if (l) return n === "x" ? (e[1][0] - e[0][0]) / 2 : (e[1][1] - e[0][1]) / 2 + c.height / 2
            }
            return 0
        },
        getXForText: function(t, e, r) {
            var n, a = this,
                i = a.config,
                o = i.axis_rotated,
                s = a.isTreemapType(e),
                l = t[0][0];
            if (a.isCandlestickType(e)) o ? l = !((n = a.getCandlestickData(e)) === null || n === void 0) && n._isUp ? t[2][2] + 4 : t[2][1] - 4 : l += (t[1][0] - l) / 2;
            else if (s) l += i.data_labels.centered ? 0 : 5;
            else if (o) {
                var c = i["axis_".concat(a.axis.getId(e.id), "_inverted")],
                    u = a.isBarType(e) ? 4 : 6,
                    f = e.value;
                l = t[2][1], c ? l -= u * (f > 0 ? 1 : -1) : l += u * (f < 0 ? -1 : 1)
            } else l = a.hasType("bar") ? (t[2][0] + t[0][0]) / 2 : l;
            return (o || s) && (l += a.getCenteredTextPos(e, t, r, "x")), l + Nh.call(this, e, "x")
        },
        getYForText: function(t, e, r) {
            var n = this,
                a = n.axis,
                i = n.config,
                o = n.state,
                s = i.axis_rotated,
                l = i["axis_".concat(a ? .getId(e.id), "_inverted")],
                c = n.isBarType(e),
                u = n.isTreemapType(e),
                f = i.point_r,
                d = ni(r),
                h = e.value,
                p = 3,
                g;
            if (n.isCandlestickType(e)) h = n.getCandlestickData(e), s ? (g = t[0][0], g += (t[1][0] - g) / 2 + p) : (g = h && h._isUp ? t[2][2] - p : t[2][1] + p * 4, l && (g += 15 * (h._isUp ? 1 : -1)));
            else if (u) g = t[0][1] + (i.data_labels.centered ? 0 : d.height + 5);
            else if (s) g = (t[0][0] + t[2][0] + d.height * .6) / 2;
            else if (g = t[2][1], z(f) && f > 5 && (n.isLineType(e) || n.isScatterType(e)) && (p += i.point_r / 2.3), h < 0 || h === 0 && !o.hasPositiveValue && o.hasNegativeValue) g += l ? c ? -3 : -5 : d.height + (c ? -p : p);
            else {
                var m = -p * 2;
                c ? m = -p : n.isBubbleType(e) && (m = p), l && (m = c ? 10 : 15), g += m
            }
            return (!s || u) && (g += n.getCenteredTextPos(e, t, r, "y")), g + Nh.call(this, e, "y")
        },
        markOverlapped: function(t, e, r) {
            var n = e.$el.arcs.selectAll(r),
                a = n.filter(function(l) {
                    return l.data.id !== t
                }),
                i = n.filter(function(l) {
                    return l.data.id === t
                }),
                o = Oh(i.node()),
                s = function(l, c) {
                    return Math.sqrt(Math.pow(l, 2) + Math.pow(c, 2))
                };
            i.node() && a.each(function() {
                var l = Oh(this),
                    c = P(this),
                    u = s(o.e, o.f) > s(l.e, l.f) ? i : c,
                    f = Math.ceil(Math.abs(o.e - l.e)) < Math.ceil(u.node().getComputedTextLength()),
                    d = Math.ceil(Math.abs(o.f - l.f)) < parseInt(i.style("font-size"), 10);
                c.classed(Pt.TextOverlapping, f && d)
            })
        },
        undoMarkOverlapped: function(t, e) {
            t.$el.arcs.selectAll(e).each(function() {
                ra([this, this.previousSibling]).classed(Pt.TextOverlapping, !1)
            })
        },
        meetsLabelThreshold: function(t, e) {
            t === void 0 && (t = 0);
            var r = this,
                n = r.config,
                a = n["".concat(e, "_label_threshold")] || 0;
            return t >= a
        }
    };
    R0 = {
        initTitle: function() {
            var t = this,
                e = t.config,
                r = t.$el;
            if (e.title_text) {
                r.title = r.svg.append("g");
                var n = r.title.append("text").style("text-anchor", Bh(e.title_position)).attr("class", Pt.title);
                oi(n, e.title_text, [.3, 1.5])
            }
        },
        redrawTitle: function() {
            var t = this,
                e = t.config,
                r = t.state.current,
                n = t.$el.title;
            if (n) {
                var a = Bh(e.title_position, r.width),
                    i = (e.title_padding.top || 0) + t.getTextRect(t.$el.title, Pt.title).height;
                n.attr("transform", "translate(".concat(a, ", ").concat(i, ")"))
            }
        },
        getTitlePadding: function() {
            var t = this,
                e = t.$el,
                r = t.config;
            return (r.title_padding.top || 0) + t.getTextRect(e.title, Pt.title).height + (r.title_padding.bottom || 0)
        }
    }, M0 = {
        initTooltip: function() {
            var t = this,
                e = t.config,
                r = t.$el;
            r.tooltip = P(e.tooltip_contents.bindto), r.tooltip.empty() && (r.tooltip = r.chart.append("div").attr("class", ai.tooltipContainer).style("position", "absolute").style("pointer-events", "none").style("display", "none")), t.bindTooltipResizePos()
        },
        initShowTooltip: function() {
            var t, e, r = this,
                n = r.config,
                a = r.$el,
                i = r.state,
                o = i.hasAxis,
                s = i.hasRadar;
            if (n.tooltip_init_show) {
                var l = !(o || s);
                !((e = r.axis) === null || e === void 0) && e.isTimeSeries() && et(n.tooltip_init_x) && (n.tooltip_init_x = te.call(r, n.tooltip_init_x)), r.api.tooltip.show({
                    data: (t = {}, t[l ? "index" : "x"] = n.tooltip_init_x, t)
                });
                var c = n.tooltip_init_position;
                if (!n.tooltip_contents.bindto && !le(c)) {
                    var u = c.top,
                        f = u === void 0 ? 0 : u,
                        d = c.left,
                        h = d === void 0 ? 50 : d;
                    a.tooltip.style("top", et(f) ? f : "".concat(f, "px")).style("left", et(h) ? h : "".concat(h, "px")).style("display", null)
                }
            }
        },
        getTooltipHTML: function() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            var r = this,
                n = r.api,
                a = r.config;
            return X(a.tooltip_contents) ? a.tooltip_contents.bind(n).apply(void 0, t) : r.getTooltipContent.apply(r, t)
        },
        getTooltipContent: function(t, e, r, n) {
            var a = this,
                i = a.api,
                o = a.config,
                s = a.state,
                l = a.$el,
                c = ["title", "name", "value"].map(function(O) {
                    var I = o["tooltip_format_".concat(O)];
                    return X(I) ? I.bind(i) : I
                }),
                u = c[0],
                f = c[1],
                d = c[2],
                h = function() {
                    for (var O = [], I = 0; I < arguments.length; I++) O[I] = arguments[I];
                    return bs((u || e).apply(void 0, O))
                },
                p = function() {
                    for (var O = [], I = 0; I < arguments.length; I++) O[I] = arguments[I];
                    return bs((f || function(B) {
                        return B
                    }).apply(void 0, O))
                },
                g = function() {
                    for (var O = [], I = 0; I < arguments.length; I++) O[I] = arguments[I];
                    var B = d || (s.hasTreemap || a.isStackNormalized() ? function(F, it) {
                        return "".concat((it * 100).toFixed(2), "%")
                    } : r);
                    return bs(B.apply(void 0, O))
                },
                m = o.tooltip_order,
                v = function(O) {
                    return a.axis && a.isBubbleZType(O) ? a.getBubbleZData(O.value, "z") : a.getBaseValue(O)
                },
                x = a.levelColor ? function(O) {
                    return a.levelColor(O.value)
                } : function(O) {
                    return n(O)
                },
                y = o.tooltip_contents,
                _ = y.template,
                w = a.mapToTargetIds();
            if (m === null && o.data_groups.length) {
                var T = a.orderTargets(a.data.targets).map(function(O) {
                    return O.id
                }).reverse();
                t.sort(function(O, I) {
                    var B = O ? O.value : null,
                        F = I ? I.value : null;
                    return B > 0 && F > 0 && (B = O.id ? T.indexOf(O.id) : null, F = I.id ? T.indexOf(I.id) : null), B - F
                })
            } else if (/^(asc|desc)$/.test(m)) {
                var $ = m === "asc";
                t.sort(function(O, I) {
                    var B = O ? v(O) : null,
                        F = I ? v(I) : null;
                    return $ ? B - F : F - B
                })
            } else X(m) && t.sort(m.bind(i));
            var C = a.getTooltipContentTemplate(_),
                M = t.length,
                R, A, L, S, E, rt = function() {
                    if (A = t[E], !A || !(v(A) || v(A) === 0)) return "continue";
                    if (bt(R)) {
                        var O = (s.hasAxis || s.hasRadar) && h(A.x);
                        R = si(C[0], {
                            CLASS_TOOLTIP: ai.tooltip,
                            TITLE: H(O) ? _ ? O : '<tr><th colspan="2">'.concat(O, "</th></tr>") : ""
                        })
                    }
                    if (!A.ratio && l.arcs && (L = ["arc", a.$el.arcs.select("path.".concat(ct.arc, "-").concat(A.id)).data()[0]], A.ratio = a.getRatio.apply(a, L)), L = [A.ratio, A.id, A.index], a.isAreaRangeType(A)) {
                        var I = ["high", "low"].map(function(k) {
                                return g.apply(void 0, gt([a.getRangedData(A, k)], L, !1))
                            }),
                            B = I[0],
                            F = I[1],
                            it = g.apply(void 0, gt([v(A)], L, !1));
                        S = "<b>Mid:</b> ".concat(it, " <b>High:</b> ").concat(B, " <b>Low:</b> ").concat(F)
                    } else if (a.isCandlestickType(A)) {
                        var ht = ["open", "high", "low", "close", "volume"].map(function(j) {
                                var Ct = a.getRangedData(A, j, "candlestick");
                                return Ct ? g.apply(void 0, gt([a.getRangedData(A, j, "candlestick")], L, !1)) : void 0
                            }),
                            Et = ht[0],
                            B = ht[1],
                            F = ht[2],
                            Yt = ht[3],
                            W = ht[4];
                        S = "<b>Open:</b> ".concat(Et, " <b>High:</b> ").concat(B, " <b>Low:</b> ").concat(F, " <b>Close:</b> ").concat(Yt).concat(W ? " <b>Volume:</b> ".concat(W) : "")
                    } else if (a.isBarRangeType(A)) {
                        var pt = A.value,
                            Ft = A.id,
                            kt = A.index;
                        S = "".concat(g(pt, void 0, Ft, kt))
                    } else S = g.apply(void 0, gt([v(A)], L, !1));
                    if (S !== void 0) {
                        if (A.name === null) return "continue";
                        var Ie = p.apply(void 0, gt([A.name], L, !1)),
                            D = x(A),
                            N = {
                                CLASS_TOOLTIP_NAME: ai.tooltipName + a.getTargetSelectorSuffix(A.id),
                                COLOR: _ || !a.patterns ? D : '<svg><rect style="fill:'.concat(D, '" width="10" height="10"></rect></svg>'),
                                NAME: Ie,
                                VALUE: S
                            };
                        if (_ && at(y.text)) {
                            var V = w.indexOf(A.id);
                            Object.keys(y.text).forEach(function(k) {
                                N[k] = y.text[k][V]
                            })
                        }
                        R += si(C[1], N)
                    }
                };
            for (E = 0; E < M; E++) rt();
            return "".concat(R, "</table>")
        },
        getTooltipContentTemplate: function(t) {
            return (t || `<table class="{=CLASS_TOOLTIP}"><tbody>
				{=TITLE}
				{{<tr class="{=CLASS_TOOLTIP_NAME}">
					<td class="name">`.concat(this.patterns ? "{=COLOR}" : '<span style="background-color:{=COLOR}"></span>', `{=NAME}</td>
					<td class="value">{=VALUE}</td>
				</tr>}}
			</tbody></table>`)).replace(/(\r?\n|\t)/g, "").split(/{{(.*)}}/)
        },
        setTooltipPosition: function(t, e) {
            var r, n, a = this,
                i = a.config,
                o = a.scale,
                s = a.state,
                l = a.$el,
                c = l.eventRect,
                u = l.tooltip,
                f = i.tooltip_contents.bindto,
                d = i.axis_rotated,
                h = u ? .datum();
            if (!f && h) {
                var p = t ? ? JSON.parse(h.current),
                    g = xe(s.event, e ? ? c ? .node()),
                    m = g[0],
                    v = g[1],
                    x = {
                        x: m,
                        y: v
                    };
                if (s.hasAxis && o.x && h && "x" in h) {
                    var y = function(M, R, A) {
                        var L;
                        M === void 0 && (M = 0), A === void 0 && (A = "y");
                        var S = o[R ? (L = a.axis) === null || L === void 0 ? void 0 : L.getId(R) : A];
                        return S ? S(M) + (d ? s.margin.left : s.margin.top) : 0
                    };
                    x.xAxis = o.x(h.x) + (i.tooltip_position ? d ? s.margin.top : s.margin.left : 0), p.length === 1 ? x.yAxis = y(p[0].value, p[0].id) : x.yAxis = y
                }
                var _ = h.width,
                    w = _ === void 0 ? 0 : _,
                    T = h.height,
                    $ = T === void 0 ? 0 : T,
                    C = (n = (r = i.tooltip_position) === null || r === void 0 ? void 0 : r.bind(a.api)(p, w, $, c ? .node(), x)) !== null && n !== void 0 ? n : a.getTooltipPosition.bind(a)(w, $, x);
                ["top", "left"].forEach(function(M) {
                    var R = C[M];
                    u.style(M, "".concat(R, "px")), M === "left" && !h.xPosInPercent && (h.xPosInPercent = R / s.current.width * 100)
                })
            }
        },
        getTooltipPosition: function(t, e, r) {
            var n = this,
                a = n.config,
                i = n.scale,
                o = n.state,
                s = o.width,
                l = o.height,
                c = o.current,
                u = o.isLegendRight,
                f = o.inputType,
                d = n.hasType("gauge") && !a.gauge_fullCircle,
                h = o.hasTreemap,
                p = a.axis_rotated,
                g = n.hasArcType(),
                m = n.getSvgLeft(!0),
                v = m + c.width - n.getCurrentPaddingByDirection("right"),
                x = 20,
                y = r.x,
                _ = r.y;
            if (g) {
                var w = f === "touch" || n.hasType("radar");
                w || (y += (s - (u ? n.getLegendWidth() : 0)) / 2, _ += d ? l : l / 2)
            } else if (!h) {
                var T = {
                    top: n.getCurrentPaddingByDirection("top", !0),
                    left: n.getCurrentPaddingByDirection("left", !0)
                };
                p ? (y += m + T.left + x, _ = T.top + r.xAxis + x, v -= m) : (y = m + T.left + x + (i.zoom ? y : r.xAxis), _ += T.top - 5)
            }
            if (y + t + 15 > v && (y -= t + (h || g ? 0 : p ? x * 2 : 38)), _ + e > c.height) {
                var $ = h ? 0 : 30;
                _ -= d ? e * 3 : e + $
            }
            var C = {
                top: _,
                left: y
            };
            return Object.keys(C).forEach(function(M) {
                C[M] < 0 && (C[M] = 0)
            }), C
        },
        showTooltip: function(t, e) {
            var r = this,
                n = r.config,
                a = r.$el.tooltip,
                i = t.filter(function(f) {
                    return f && H(r.getBaseValue(f))
                });
            if (!(!a || i.length === 0 || !n.tooltip_show)) {
                var o = a.datum(),
                    s = JSON.stringify(t);
                if (!o || o.current !== s) {
                    var l = t.concat().sort()[0],
                        c = l.index,
                        u = l.x;
                    ft(n.tooltip_onshow, r.api, t), a.html(r.getTooltipHTML(t, r.axis ? r.axis.getXAxisTickFormat() : r.categoryName.bind(r), r.getDefaultValueFormat(), r.color)).style("display", null).style("visibility", null).datum(o = {
                        index: c,
                        x: u,
                        current: s,
                        width: a.property("offsetWidth"),
                        height: a.property("offsetHeight")
                    }), ft(n.tooltip_onshown, r.api, t), r._handleLinkedCharts(!0, c)
                }
                r.setTooltipPosition(i, e)
            }
        },
        bindTooltipResizePos: function() {
            var t = this,
                e = t.resizeFunction,
                r = t.state,
                n = t.$el.tooltip;
            e.add(function() {
                if (n.style("display") === "block") {
                    var a = r.current,
                        i = n.datum(),
                        o = i.width,
                        s = i.xPosInPercent,
                        l = a.width / 100 * s,
                        c = a.width - (l + o);
                    c < 0 && (l += c), n.style("left", "".concat(l, "px"))
                }
            })
        },
        hideTooltip: function(t) {
            var e, r = this,
                n = r.api,
                a = r.config,
                i = r.$el.tooltip;
            if (i && i.style("display") !== "none" && (!a.tooltip_doNotHide || t)) {
                var o = JSON.parse((e = i.datum().current) !== null && e !== void 0 ? e : {});
                ft(a.tooltip_onhide, n, o), i.style("display", "none").style("visibility", "hidden").datum(null), ft(a.tooltip_onhidden, n, o)
            }
        },
        _handleLinkedCharts: function(t, e) {
            var r = this,
                n = r.charts,
                a = r.config,
                i = r.state.event;
            if (i ? .isTrusted && a.tooltip_linked && n.length > 1) {
                var o = a.tooltip_linked_name;
                n.filter(function(s) {
                    return s !== r.api
                }).forEach(function(s) {
                    var l = s.internal,
                        c = l.config,
                        u = l.$el,
                        f = c.tooltip_linked,
                        d = c.tooltip_linked_name,
                        h = lt.body.contains(u.chart.node());
                    if (f && o === d && h) {
                        var p = u.tooltip.data()[0],
                            g = e !== p ? .index;
                        try {
                            s.tooltip[t && g ? "show" : "hide"]({
                                index: e
                            })
                        } catch {}
                    }
                })
            }
        },
        updateTooltipOnRedraw: function(t, e) {
            var r, n = this,
                a = n.config,
                i = n.$el,
                o = i.eventRect,
                s = i.svg,
                l = i.tooltip,
                c = n.state,
                u = c.event,
                f = c.hasAxis,
                d = c.hasRadar,
                h = c.hasTreemap;
            if (l ? .style("display") === "block" && u) {
                var p = t ? ? ((r = d ? s : o) === null || r === void 0 ? void 0 : r.node());
                if (f || d)
                    if (n.isMultipleX()) n.selectRectForMultipleXs(p, !1);
                    else {
                        var g = e ? ? n.getDataIndexFromEvent(u);
                        e === -1 ? n.api.tooltip.hide() : (n.selectRectForSingle(p, g), n.setExpand(g, null, !0))
                    }
                else {
                    var m = u.clientX,
                        v = u.clientY;
                    setTimeout(function() {
                        var x = lt.elementFromPoint(m, v),
                            y = P(x).datum();
                        if (y) {
                            var _ = n.hasArcType() ? n.convertToArcData(n.updateAngle(y)) : y ? .data;
                            h && (x = s.node()), _ && n.showTooltip([_], x)
                        } else n.api.tooltip.hide()
                    }, a.transition_duration)
                }
            }
        }
    }, E0 = {
        getTranslate: function(t, e) {
            e === void 0 && (e = 0);
            var r = this,
                n = r.config,
                a = r.state,
                i = n.axis_rotated,
                o = 0,
                s, l;
            if (e && /^(x|y2?)$/.test(t) && (o = r.getAxisSize(t) * e), t === "main") s = zn(a.margin.left), l = zn(a.margin.top);
            else if (t === "context") s = zn(a.margin2.left), l = zn(a.margin2.top);
            else if (t === "legend") s = a.margin3.left, l = a.margin3.top;
            else if (t === "x") s = i ? -o : 0, l = i ? 0 : a.height + o;
            else if (t === "y") s = i ? 0 : -o, l = i ? a.height + o : 0;
            else if (t === "y2") s = i ? 0 : a.width + o, l = i ? -o - 1 : 0;
            else if (t === "subX") s = 0, l = i ? 0 : a.height2;
            else if (t === "arc") s = a.arcWidth / 2, l = a.arcHeight / 2;
            else if (t === "polar") s = a.arcWidth / 2, l = a.arcHeight / 2;
            else if (t === "radar") {
                var c = r.getRadarSize()[0];
                s = a.width / 2 - c, l = zn(a.margin.top)
            }
            return "translate(".concat(s, ", ").concat(l, ")")
        },
        transformMain: function(t, e) {
            var r = this,
                n = r.$el.main,
                a = r.$T,
                i = e ? .axisX ? e.axisX : a(n.select(".".concat(yt.axisX)), t),
                o = e ? .axisY ? e.axisY : a(n.select(".".concat(yt.axisY)), t),
                s = e ? .axisY2 ? e.axisY2 : a(n.select(".".concat(yt.axisY2)), t);
            a(n, t).attr("transform", r.getTranslate("main")), i.attr("transform", r.getTranslate("x")), o.attr("transform", r.getTranslate("y")), s.attr("transform", r.getTranslate("y2")), n.select(".".concat(ct.chartArcs)).attr("transform", r.getTranslate("arc"))
        },
        transformAll: function(t, e) {
            var r = this,
                n = r.config,
                a = r.state,
                i = a.hasAxis,
                o = a.hasTreemap,
                s = r.$el;
            !o && r.transformMain(t, e), i && n.subchart_show && r.transformContext(t, e), s.legend && r.transformLegend(t)
        }
    }, L0 = {
        isValidChartType: function(t) {
            return !!(t && Object.values(Y).indexOf(t) > -1)
        },
        setTargetType: function(t, e) {
            var r = this,
                n = r.config,
                a = r.state.withoutFadeIn;
            r.mapToTargetIds(t).forEach(function(i) {
                a[i] = e === n.data_types[i], n.data_types[i] = e
            }), t || (n.data_type = e)
        },
        updateTypesElements: function() {
            var t = this,
                e = t.state.current;
            Object.keys(Y).forEach(function(r) {
                var n = Y[r],
                    a = t.hasType(n, null, !0),
                    i = e.types.indexOf(n);
                i === -1 && a ? e.types.push(n) : i > -1 && !a && e.types.splice(i, 1)
            }), t.setChartElements()
        },
        hasType: function(t, e, r) {
            var n;
            r === void 0 && (r = !1);
            var a = this,
                i = a.config,
                o = a.state.current,
                s = i.data_types,
                l = e || a.data.targets,
                c = !1;
            return !r && ((n = o.types) === null || n === void 0 ? void 0 : n.indexOf(t)) > -1 ? c = !0 : l ? .length ? l.forEach(function(u) {
                var f = s[u.id];
                (f === t || !f && t === "line") && (c = !0)
            }) : Object.keys(s).length ? Object.keys(s).forEach(function(u) {
                s[u] === t && (c = !0)
            }) : c = i.data_type === t, c
        },
        hasTypeOf: function(t, e, r) {
            var n = this;
            return r === void 0 && (r = []), t in Re ? !Re[t].filter(function(a) {
                return r.indexOf(a) === -1
            }).every(function(a) {
                return !n.hasType(a, e)
            }) : !1
        },
        isTypeOf: function(t, e) {
            var r = et(t) ? t : t.id,
                n = this.config.data_types[r] || this.config.data_type;
            return K(e) ? e.indexOf(n) >= 0 : n === e
        },
        hasPointType: function() {
            var t = this;
            return t.hasTypeOf("Line") || t.hasType("bubble") || t.hasType("scatter")
        },
        hasArcType: function(t, e) {
            return this.hasTypeOf("Arc", t, e)
        },
        hasMultiArcGauge: function() {
            return this.hasType("gauge") && this.config.gauge_type === "multi"
        },
        isLineType: function(t) {
            var e = et(t) ? t : t.id;
            return !this.config.data_types[e] || this.isTypeOf(e, Re.Line)
        },
        isStepType: function(t) {
            return this.isTypeOf(t, Re.Step)
        },
        isSplineType: function(t) {
            return this.isTypeOf(t, Re.Spline)
        },
        isAreaType: function(t) {
            return this.isTypeOf(t, Re.Area)
        },
        isAreaRangeType: function(t) {
            return this.isTypeOf(t, Re.AreaRange)
        },
        isBarType: function(t) {
            return this.isTypeOf(t, "bar")
        },
        isBubbleType: function(t) {
            return this.isTypeOf(t, "bubble")
        },
        isCandlestickType: function(t) {
            return this.isTypeOf(t, "candlestick")
        },
        isScatterType: function(t) {
            return this.isTypeOf(t, "scatter")
        },
        isTreemapType: function(t) {
            return this.isTypeOf(t, "treemap")
        },
        isPieType: function(t) {
            return this.isTypeOf(t, "pie")
        },
        isGaugeType: function(t) {
            return this.isTypeOf(t, "gauge")
        },
        isDonutType: function(t) {
            return this.isTypeOf(t, "donut")
        },
        isPolarType: function(t) {
            return this.isTypeOf(t, "polar")
        },
        isRadarType: function(t) {
            return this.isTypeOf(t, "radar")
        },
        isArcType: function(t) {
            return this.isPieType(t) || this.isDonutType(t) || this.isGaugeType(t) || this.isPolarType(t) || this.isRadarType(t)
        },
        isCirclePoint: function(t) {
            var e = this.config,
                r = e.point_pattern,
                n = !1;
            return t ? .tagName === "circle" ? n = !0 : n = e.point_type === "circle" && (!r || K(r) && r.length === 0), n
        },
        lineData: function(t) {
            return this.isLineType(t) ? [t] : []
        },
        arcData: function(t) {
            return this.isArcType(t.data) ? [t] : []
        },
        labelishData: function(t) {
            return this.isBarType(t) || this.isLineType(t) || this.isScatterType(t) || this.isBubbleType(t) || this.isCandlestickType(t) || this.isRadarType(t) || this.isTreemapType(t) ? t.values.filter(function(e) {
                return z(e.value) || Boolean(e.value)
            }) : []
        },
        barLineBubbleData: function(t) {
            return this.isBarType(t) || this.isLineType(t) || this.isBubbleType(t) ? t.values : []
        },
        isInterpolationType: function(t) {
            return ["basis", "basis-closed", "basis-open", "bundle", "cardinal", "cardinal-closed", "cardinal-open", "catmull-rom", "catmull-rom-closed", "catmull-rom-open", "linear", "linear-closed", "monotone-x", "monotone-y", "natural"].indexOf(t) >= 0
        }
    }, ci = function() {
        function t(e) {
            this.data = {
                xs: {},
                targets: []
            }, this.scale = {
                x: null,
                y: null,
                y2: null,
                subX: null,
                subY: null,
                subY2: null,
                zoom: null
            }, this.org = {
                xScale: null,
                xDomain: null
            }, this.format = {
                extraLineClasses: null,
                xAxisTick: null,
                dataTime: null,
                defaultAxisTime: null,
                axisTime: null
            };
            var r = this;
            r.api = e, r.config = new li, r.cache = new Q_;
            var n = new V_;
            r.$el = n.getStore("element"), r.state = n.getStore("state"), r.$T = r.$T.bind(r)
        }
        return t.prototype.$T = function(e, r, n) {
            var a = this,
                i = a.config,
                o = a.state,
                s = i.transition_duration,
                l = i.subchart_show,
                c = e;
            if (c) {
                "tagName" in c && (c = P(c));
                var u = (r !== !1 && s || r) && (!o.zooming || o.dragging) && !o.resizing && o.rendered && !l;
                c = u ? c.transition(n).duration(s) : c
            }
            return c
        }, t.prototype.beforeInit = function() {
            var e = this;
            e.callPluginHook("$beforeInit"), ft(e.config.onbeforeinit, e.api)
        }, t.prototype.afterInit = function() {
            var e = this;
            e.callPluginHook("$afterInit"), ft(e.config.onafterinit, e.api)
        }, t.prototype.init = function() {
            var e = this,
                r = e.config,
                n = e.state,
                a = e.$el,
                i = r.boost_useCssRule;
            if (F_(e), n.hasRadar = !n.hasAxis && e.hasType("radar"), n.hasTreemap = !n.hasAxis && e.hasType("treemap"), n.hasAxis = !e.hasArcType() && !n.hasTreemap, n.datetimeId = "bb-".concat(+new Date * sr()), i) {
                var o = lt.createElement("style");
                o.type = "text/css", lt.head.appendChild(o), n.style = {
                    rootSelctor: ".".concat(n.datetimeId),
                    sheet: o.sheet
                }, a.style = o
            }
            var s = {
                element: r.bindto,
                classname: "bb"
            };
            at(r.bindto) && (s.element = r.bindto.element || "#chart", s.classname = r.bindto.classname || s.classname), a.chart = X(s.element.node) ? r.bindto.element : P(s.element || []), a.chart.empty() && (a.chart = P(lt.body.appendChild(lt.createElement("div")))), a.chart.html("").classed(s.classname, !0).classed(n.datetimeId, i).style("position", "relative"), e.initParams(), e.initToRender()
        }, t.prototype.initToRender = function(e) {
            var r = this,
                n = r.config,
                a = r.state,
                i = r.$el.chart,
                o = function() {
                    return i.style("display") === "none" || i.style("visibility") === "hidden"
                },
                s = n.render.lazy || o(),
                l = Q.MutationObserver;
            s && l && n.render.observe !== !1 && !e && new l(function(c, u) {
                o() || (u.disconnect(), !a.rendered && r.initToRender(!0))
            }).observe(i.node(), {
                attributes: !0,
                attributeFilter: ["class", "style"]
            }), (!s || e) && r.convertData(n, function(c) {
                r.initWithData(c), r.afterInit()
            })
        }, t.prototype.initParams = function() {
            var e = this,
                r = e.config,
                n = e.format,
                a = e.state,
                i = r.axis_rotated;
            if (e.color = e.generateColor(), e.levelColor = e.generateLevelColor(), r.padding === !1 && (r.axis_x_show = !1, r.axis_y_show = !1, r.axis_y2_show = !1, r.subchart_show = !1), e.hasPointType() && (e.point = e.generatePoint()), a.hasAxis) {
                e.initClip(), n.extraLineClasses = e.generateExtraLineClass(), n.dataTime = r.data_xLocaltime ? Un : Hn, n.axisTime = r.axis_x_localtime ? _r : yr;
                var o = e.config.zoom_enabled && e.config.zoom_type === "drag";
                n.defaultAxisTime = function(s) {
                    var l = e.scale,
                        c = l.x,
                        u = l.zoom,
                        f = o ? u : u && c.orgDomain().toString() !== u.domain().toString(),
                        d = s.getMilliseconds() && ".%L" || s.getSeconds() && ".:%S" || s.getMinutes() && "%I:%M" || s.getHours() && "%I %p" || s.getDate() !== 1 && "%b %d" || f && s.getDate() === 1 && "%b'%y" || s.getMonth() && "%-m/%-d" || "%Y";
                    return n.axisTime(d)(s)
                }
            }
            a.isLegendRight = r.legend_position === "right", a.isLegendInset = r.legend_position === "inset", a.isLegendTop = r.legend_inset_anchor === "top-left" || r.legend_inset_anchor === "top-right", a.isLegendLeft = r.legend_inset_anchor === "top-left" || r.legend_inset_anchor === "bottom-left", a.rotatedPadding.top = e.getResettedPadding(a.rotatedPadding.top), a.rotatedPadding.right = i && !r.axis_x_show ? 0 : 30, a.inputType = P_(r.interaction_inputType_mouse, r.interaction_inputType_touch)
        }, t.prototype.initWithData = function(e) {
            var r, n, a = this,
                i = a.config,
                o = a.scale,
                s = a.state,
                l = a.$el,
                c = a.org,
                u = s.hasAxis,
                f = s.hasTreemap,
                d = i.interaction_enabled,
                h = a.hasType("polar");
            if (u && (a.axis = a.getAxisInstance(), i.zoom_enabled && a.initZoom()), a.data.xs = {}, a.data.targets = a.convertDataToTargets(e), i.data_filter && (a.data.targets = a.data.targets.filter(i.data_filter.bind(a.api))), i.data_hide && a.addHiddenTargetIds(i.data_hide === !0 ? a.mapToIds(a.data.targets) : i.data_hide), i.legend_hide && a.addHiddenLegendIds(i.legend_hide === !0 ? a.mapToIds(a.data.targets) : i.legend_hide), a.updateSizes(), a.updateScales(!0), u) {
                var p = o.x,
                    g = o.y,
                    m = o.y2,
                    v = o.subX,
                    x = o.subY,
                    y = o.subY2;
                p && (p.domain(zr(a.getXDomain(a.data.targets), !i.axis_x_inverted)), v.domain(p.domain()), c.xDomain = p.domain()), g && (g.domain(a.getYDomain(a.data.targets, "y")), x.domain(g.domain())), m && (m.domain(a.getYDomain(a.data.targets, "y2")), y && y.domain(m.domain()))
            }
            if (l.svg = l.chart.append("svg").style("overflow", "hidden").style("display", "block"), d && s.inputType) {
                var _ = s.inputType === "touch",
                    w = i.onclick,
                    T = i.onover,
                    $ = i.onout;
                l.svg.on("click", w ? .bind(a.api) || null).on(_ ? "touchstart" : "mouseenter", T ? .bind(a.api) || null).on(_ ? "touchend" : "mouseleave", $ ? .bind(a.api) || null)
            }
            i.svg_classname && l.svg.attr("class", i.svg_classname);
            var C = X(i.color_tiles) && a.patterns;
            (u || C || h || f || i.data_labels_backgroundColors) && (l.defs = l.svg.append("defs"), u && ["id", "idXAxis", "idYAxis", "idGrid"].forEach(function(A) {
                a.appendClip(l.defs, s.clip[A])
            }), a.generateDataLabelBackgroundColorFilter(), C && a.patterns.forEach(function(A) {
                return l.defs.append(function() {
                    return A.node
                })
            })), a.updateSvgSize(), a.bindResize();
            var M = l.svg.append("g").classed(Z.main, !0).attr("transform", f ? null : a.getTranslate("main"));
            if (l.main = M, i.subchart_show && a.initSubchart(), i.tooltip_show && a.initTooltip(), i.title_text && a.initTitle(), !f && i.legend_show && a.initLegend(), i.data_empty_label_text && M.append("text").attr("class", "".concat(Pt.text, " ").concat(Z.empty)).attr("text-anchor", "middle").attr("dominant-baseline", "middle"), u && (i.regions.length && a.initRegion(), !i.clipPath && a.axis.init()), M.append("g").classed(Z.chart, !0).attr("clip-path", u ? s.clip.path : null), a.callPluginHook("$init"), a.initChartElements(), u && (d && ((r = a.initEventRect) === null || r === void 0 || r.call(a)), a.initGrid(), i.clipPath && ((n = a.axis) === null || n === void 0 || n.init())), a.updateTargets(a.data.targets), a.updateDimension(), ft(i.oninit, a.api), a.setBackground(), a.redraw({
                    withTransition: !1,
                    withTransform: !0,
                    withUpdateXDomain: !0,
                    withUpdateOrgXDomain: !0,
                    withTransitionForAxis: !1,
                    initializing: !0
                }), i.data_onmin || i.data_onmax) {
                var R = a.getMinMaxData();
                ft(i.data_onmin, a.api, R.min), ft(i.data_onmax, a.api, R.max)
            }
            i.tooltip_show && a.initShowTooltip(), s.rendered = !0
        }, t.prototype.initChartElements = function() {
            var e = this,
                r = e.state,
                n = r.hasAxis,
                a = r.hasRadar,
                i = r.hasTreemap,
                o = [];
            if (n) {
                var s = ["bar", "bubble", "candlestick", "line"];
                e.config.bar_front && s.push(s.shift()), s.forEach(function(c) {
                    var u = _e(c);
                    (c === "line" && e.hasTypeOf(u) || e.hasType(c)) && o.push(u)
                })
            } else if (i) o.push("Treemap");
            else {
                var l = e.hasType("polar");
                a || o.push("Arc", "Pie"), e.hasType("gauge") ? o.push("Gauge") : a ? o.push("Radar") : l && o.push("Polar")
            }
            o.forEach(function(c) {
                e["init".concat(c)]()
            }), dt(e.config.data_labels) && !e.hasArcType(null, ["radar"]) && e.initText()
        }, t.prototype.setChartElements = function() {
            var e = this,
                r = e.$el,
                n = r.chart,
                a = r.svg,
                i = r.defs,
                o = r.main,
                s = r.tooltip,
                l = r.legend,
                c = r.title,
                u = r.grid,
                f = r.needle,
                d = r.arcs,
                h = r.circle,
                p = r.bar,
                g = r.candlestick,
                m = r.line,
                v = r.area,
                x = r.text;
            e.api.$ = {
                chart: n,
                svg: a,
                defs: i,
                main: o,
                tooltip: s,
                legend: l,
                title: c,
                grid: u,
                arc: d,
                circles: h,
                bar: {
                    bars: p
                },
                candlestick: g,
                line: {
                    lines: m,
                    areas: v
                },
                needle: f,
                text: {
                    texts: x
                }
            }
        }, t.prototype.setBackground = function() {
            var e = this,
                r = e.config.background,
                n = e.state,
                a = e.$el.svg;
            if (dt(r)) {
                var i = a.select("g").insert(r.imgUrl ? "image" : "rect", ":first-child");
                r.imgUrl ? i.attr("href", r.imgUrl) : r.color && i.style("fill", r.color).attr("clip-path", n.clip.path), i.attr("class", r.class || null).attr("width", "100%").attr("height", "100%")
            }
        }, t.prototype.updateTargets = function(e) {
            var r, n = this,
                a = n.state,
                i = a.hasAxis,
                o = a.hasRadar,
                s = a.hasTreemap,
                l = function(f) {
                    return n["updateTargetsFor".concat(f)](e.filter(n["is".concat(f, "Type")].bind(n)))
                };
            if (n.updateTargetsForText(e), i)["bar", "candlestick", "line"].forEach(function(f) {
                var d = _e(f);
                (f === "line" && n.hasTypeOf(d) || n.hasType(f)) && l(d)
            }), n.updateTargetsForSubchart && n.updateTargetsForSubchart(e);
            else if (n.hasArcType(e)) {
                var c = "Arc";
                o ? c = "Radar" : n.hasType("polar") && (c = "Polar"), l(c)
            } else s && l("Treemap");
            var u = n.hasType("bubble") || n.hasType("scatter");
            u && ((r = n.updateTargetForCircle) === null || r === void 0 || r.call(n)), n.filterTargetsToShowAtInit(u)
        }, t.prototype.filterTargetsToShowAtInit = function(e) {
            e === void 0 && (e = !1);
            var r = this,
                n = r.$el.svg,
                a = r.$T,
                i = ".".concat(Z.target);
            e && (i += ", .".concat(St.chartCircles, " > .").concat(St.circles)), a(n.selectAll(i).filter(function(o) {
                return r.isTargetToShow(o.id)
            })).style("opacity", null)
        }, t.prototype.getWithOption = function(e) {
            var r = {
                Dimension: !0,
                EventRect: !0,
                Legend: !1,
                Subchart: !0,
                Transform: !1,
                Transition: !0,
                TrimXDomain: !0,
                UpdateXAxis: "UpdateXDomain",
                UpdateXDomain: !1,
                UpdateOrgXDomain: !1,
                TransitionForExit: "Transition",
                TransitionForAxis: "Transition",
                Y: !0
            };
            return Object.keys(r).forEach(function(n) {
                var a = r[n];
                et(a) && (a = r[a]), r[n] = Le(e, "with".concat(n), a)
            }), r
        }, t.prototype.initialOpacity = function(e) {
            var r = this,
                n = r.state.withoutFadeIn,
                a = r.getBaseValue(e) !== null && n[e.id] ? null : "0";
            return a
        }, t.prototype.bindResize = function() {
            var e = this,
                r = e.config,
                n = e.state,
                a = e0(r.resize_timer),
                i = [];
            i.push(function() {
                return ft(r.onresize, e.api)
            }), r.resize_auto && i.push(function() {
                n.resizing = !0, r.legend_show && (e.updateSizes(), e.updateLegend()), e.api.flush(!1)
            }), i.push(function() {
                ft(r.onresized, e.api), n.resizing = !1
            }), i.forEach(function(o) {
                return a.add(o)
            }), e.resizeFunction = a, Q.addEventListener("resize", e.resizeFunction = a)
        }, t.prototype.callPluginHook = function(e) {
            for (var r = this, n = [], a = 1; a < arguments.length; a++) n[a - 1] = arguments[a];
            this.config.plugins.forEach(function(i) {
                e === "$beforeInit" && (i.$$ = r, r.api.plugins.push(i)), i[e].apply(i, n)
            })
        }, t
    }();
    Wt(ci.prototype, [s0, l0, c0, d0, f0, v0, m0, u0, x0, _0, y0, b0, w0, $0, A0, C0, R0, M0, E0, L0]);
    D0 = {
        resize: function(t) {
            var e = this.internal,
                r = e.config,
                n = e.state;
            n.rendered && (r.size_width = t ? t.width : null, r.size_height = t ? t.height : null, n.resizing = !0, this.flush(!1), e.resizeFunction())
        },
        flush: function(t) {
            var e, r, n = this.internal,
                a = n.state,
                i = n.$el.zoomResetBtn;
            a.rendered ? (a.resizing ? (e = n.brush) === null || e === void 0 || e.updateResize() : (r = n.axis) === null || r === void 0 || r.setOrient(), i ? .style("display", "none"), n.scale.zoom = null, t ? n.redraw({
                withTransform: !0,
                withUpdateXDomain: !0,
                withUpdateOrgXDomain: !0,
                withLegend: !0
            }) : n.updateAndRedraw({
                withLegend: !0,
                withTransition: !1,
                withTransitionForTransform: !1
            }), !a.resizing && n.brush && (n.brush.getSelection().call(n.brush.move), n.unselectRect())) : n.initToRender(!0)
        },
        destroy: function() {
            var t = this,
                e = this.internal,
                r = e.$el,
                n = r.chart,
                a = r.style,
                i = r.svg;
            if (dt(e)) {
                e.callPluginHook("$willDestroy"), e.charts.splice(e.charts.indexOf(this), 1), e.unbindAllEvents(), i.select("*").interrupt(), e.resizeFunction.clear(), Q.removeEventListener("resize", e.resizeFunction), n.classed("bb", !1).style("position", null).selectChildren().remove(), a && a.parentNode.removeChild(a), Object.keys(this).forEach(function(s) {
                    s === "internal" && Object.keys(e).forEach(function(l) {
                        e[l] = null
                    }), t[s] = null, delete t[s]
                });
                for (var o in this) this[o] = function() {}
            }
            return null
        },
        config: function(t, e, r) {
            var n = this.internal,
                a = n.config,
                i = n.state,
                o = t ? .replace(/\./g, "_"),
                s;
            return t && o in a ? nt(e) ? (a[o] = e, s = e, r && this.flush()) : s = a[o] : (arguments.length === 0 || le(t)) && (s = i.orgConfig), s
        }
    }, O0 = {
        color: function(t) {
            return this.internal.color(t)
        }
    }, op = function(t) {
        var e = this.internal.data.targets;
        if (!bt(t)) {
            var r = K(t) ? t : [t];
            return e.filter(function(n) {
                return r.some(function(a) {
                    return a === n.id
                })
            })
        }
        return e
    };
    Wt(op, {
        shown: function(t) {
            return this.internal.filterTargetsToShow(this.data(t))
        },
        values: function(t, e) {
            e === void 0 && (e = !0);
            var r = null;
            if (t) {
                var n = this.data(t);
                K(n) && (r = [], n.forEach(function(a) {
                    var i = a.values.map(function(o) {
                        return o.value
                    });
                    e ? r = r.concat(i) : r.push(i)
                }))
            }
            return r
        },
        names: function(t) {
            var e = this.internal;
            return e.updateDataAttributes("names", t)
        },
        colors: function(t) {
            return this.internal.updateDataAttributes("colors", t)
        },
        axes: function(t) {
            return this.internal.updateDataAttributes("axes", t)
        },
        min: function() {
            return this.internal.getMinMaxData().min
        },
        max: function() {
            return this.internal.getMinMaxData().max
        }
    });
    P0 = {
        data: op
    }, F0 = function(t) {
        var e;
        return (e = Q.btoa) === null || e === void 0 ? void 0 : e.call(Q, encodeURIComponent(t).replace(/%([0-9A-F]{2})/g, function(r, n) {
            return String.fromCharCode(Number("0x".concat(n)))
        }))
    };
    Y0 = {
        export: function(t, e) {
            var r = this,
                n = this.internal,
                a = n.state,
                i = n.$el,
                o = i.chart,
                s = i.svg,
                l = a.current,
                c = l.width,
                u = l.height,
                f = Fr({
                    width: c,
                    height: u,
                    preserveAspectRatio: !0,
                    preserveFontStyle: !1,
                    mimeType: "image/png"
                }, t),
                d = z0(o.node(), f, {
                    width: c,
                    height: u
                }),
                h = f.preserveFontStyle ? B0(s.node()) : [];
            if (e && X(e)) {
                var p = new Image;
                p.crossOrigin = "Anonymous", p.onload = function() {
                    var g = lt.createElement("canvas"),
                        m = g.getContext("2d");
                    g.width = f.width || c, g.height = f.height || u, m.drawImage(p, 0, 0), h.length && (X0(m, h), h.length = 0), e.bind(r)(g.toDataURL(f.mimeType))
                }, p.src = d
            }
            return d
        }
    }, V0 = {
        focus: function(t) {
            var e = this.internal,
                r = e.state,
                n = e.mapToTargetIds(t),
                a = e.$el.svg.selectAll(e.selectorTargets(n.filter(e.isTargetToShow, e)));
            this.revert(), this.defocus(), a.classed(st.focused, !0).classed(st.defocused, !1), e.hasArcType() && !r.hasRadar && (e.expandArc(n), e.hasType("gauge") && e.markOverlapped(t, e, ".".concat(oe.gaugeValue))), e.toggleFocusLegend(n, !0), r.focusedTargetIds = n, r.defocusedTargetIds = r.defocusedTargetIds.filter(function(i) {
                return n.indexOf(i) < 0
            })
        },
        defocus: function(t) {
            var e = this.internal,
                r = e.state,
                n = e.mapToTargetIds(t),
                a = e.$el.svg.selectAll(e.selectorTargets(n.filter(e.isTargetToShow, e)));
            a.classed(st.focused, !1).classed(st.defocused, !0), e.hasArcType(null, ["polar"]) && (e.unexpandArc(n), e.hasType("gauge") && e.undoMarkOverlapped(e, ".".concat(oe.gaugeValue))), e.toggleFocusLegend(n, !1), r.focusedTargetIds = r.focusedTargetIds.filter(function(i) {
                return n.indexOf(i) < 0
            }), r.defocusedTargetIds = n
        },
        revert: function(t) {
            var e = this.internal,
                r = e.config,
                n = e.state,
                a = e.$el,
                i = e.mapToTargetIds(t),
                o = a.svg.selectAll(e.selectorTargets(i));
            o.classed(st.focused, !1).classed(st.defocused, !1), e.hasArcType(null, ["polar"]) && e.unexpandArc(i), r.legend_show && (e.showLegend(i.filter(e.isLegendToShow.bind(e))), a.legend.selectAll(e.selectorLegends(i)).filter(function() {
                return P(this).classed(st.legendItemFocused)
            }).classed(st.legendItemFocused, !1)), n.focusedTargetIds = [], n.defocusedTargetIds = []
        }
    }, G0 = {
        show: function(t) {
            var e = this.internal;
            e.showLegend(e.mapToTargetIds(t)), e.updateAndRedraw({
                withLegend: !0
            })
        },
        hide: function(t) {
            var e = this.internal;
            e.hideLegend(e.mapToTargetIds(t)), e.updateAndRedraw({
                withLegend: !0
            })
        }
    }, U0 = {
        legend: G0
    }, H0 = {
        load: function(t) {
            var e = this.internal,
                r = e.config;
            t.xs && e.addXs(t.xs), "names" in t && this.data.names(t.names), "classes" in t && Object.keys(t.classes).forEach(function(n) {
                r.data_classes[n] = t.classes[n]
            }), "categories" in t && e.axis.isCategorized() && (r.axis_x_categories = t.categories), "axes" in t && Object.keys(t.axes).forEach(function(n) {
                r.data_axes[n] = t.axes[n]
            }), "colors" in t && Object.keys(t.colors).forEach(function(n) {
                r.data_colors[n] = t.colors[n]
            }), "unload" in t && t.unload !== !1 ? e.unload(e.mapToTargetIds(t.unload === !0 ? null : t.unload), function() {
                Zh(function() {
                    return e.loadFromArgs(t)
                })
            }) : e.loadFromArgs(t)
        },
        unload: function(t) {
            var e = this.internal,
                r = t || {};
            le(r) && this.tooltip.hide(), K(r) ? r = {
                ids: r
            } : et(r) && (r = {
                ids: [r]
            });
            var n = e.mapToTargetIds(r.ids);
            e.unload(n, function() {
                e.redraw({
                    withUpdateOrgXDomain: !0,
                    withUpdateXDomain: !0,
                    withLegend: !0
                }), e.cache.remove(n), ip.call(e, r.done, r.resizeAfter)
            })
        }
    };
    W0 = {
        show: function(t, e) {
            e === void 0 && (e = {}), Xh.call(this, !0, t, e)
        },
        hide: function(t, e) {
            e === void 0 && (e = {}), Xh.call(this, !1, t, e)
        },
        toggle: function(t, e) {
            var r = this;
            e === void 0 && (e = {});
            var n = this.internal,
                a = {
                    show: [],
                    hide: []
                };
            n.mapToTargetIds(t).forEach(function(i) {
                return a[n.isTargetToShow(i) ? "hide" : "show"].push(i)
            }), a.show.length && this.show(a.show, e), a.hide.length && setTimeout(function() {
                return r.hide(a.hide, e)
            }, 0)
        }
    }, q0 = {
        show: function(t) {
            var e, r, n, a = this.internal,
                i = a.$el,
                o = a.config,
                s = a.state,
                l = s.eventReceiver,
                c = s.hasTreemap,
                u = s.inputType,
                f, d;
            if (t.mouse && (d = t.mouse), t.data) {
                var h = t.data,
                    p = (e = a.getYScaleById(h.id)) === null || e === void 0 ? void 0 : e(h.value);
                c && h.id ? l.rect = i.main.select("".concat(a.selectorTarget(h.id, void 0, "rect"))) : a.isMultipleX() ? d = [a.xx(h), p] : (o.tooltip_grouped || (d = [0, p]), f = (r = h.index) !== null && r !== void 0 ? r : a.hasArcType() && h.id ? (n = a.getArcElementByIdOrIndex(h.id)) === null || n === void 0 ? void 0 : n.datum().index : a.getIndexByX(h.x))
            } else nt(t.x) ? f = a.getIndexByX(t.x) : nt(t.index) && (f = t.index);
            (u === "mouse" ? ["mouseover", "mousemove"] : ["touchstart"]).forEach(function(g) {
                a.dispatchEvent(g, f, d)
            })
        },
        hide: function() {
            var t, e, r, n = this.internal,
                a = n.state.inputType,
                i = n.$el.tooltip,
                o = i ? .datum();
            if (o) {
                var s = JSON.parse(o.current)[0].index;
                (a === "mouse" ? ["mouseout"] : ["touchend"]).forEach(function(l) {
                    n.dispatchEvent(l, s)
                })
            }
            a === "touch" && n.callOverOutForTouch(), n.hideTooltip(!0), (t = n.hideGridFocus) === null || t === void 0 || t.call(n), (e = n.unexpandCircles) === null || e === void 0 || e.call(n), (r = n.expandBarTypeShapes) === null || r === void 0 || r.call(n, !1)
        }
    }, Z0 = {
        tooltip: q0
    }, Ds = function() {
        function t(e) {
            this.plugins = [];
            var r = new ci(this);
            this.internal = r,
                function n(a, i, o) {
                    Object.keys(a).forEach(function(s) {
                        var l = X(a[s]),
                            c = i !== o,
                            u = dt(a[s]),
                            f = u && Object.keys(a[s]).length > 0;
                        l && (!c && f || c) ? i[s] = a[s].bind(o) : u && !l ? i[s] = {} : i[s] = a[s], f && n(a[s], i[s], o)
                    })
                }(t.prototype, this, this), I0.call(r, e), r.beforeInit(), r.init()
        }
        return t
    }();
    Wt(Ds.prototype, [D0, O0, P0, Y0, V0, U0, H0, W0, Z0]);
    j0 = {
        labels: function(t) {
            var e = this.internal,
                r;
            return t && (Object.keys(t).forEach(function(n) {
                e.axis.setLabelText(n, t[n])
            }), e.axis.updateLabels()), ["x", "y", "y2"].forEach(function(n) {
                var a = e.axis.getLabelText(n);
                a && (!r && (r = {}), r[n] = a)
            }), r
        },
        min: function(t) {
            var e = this.internal;
            return H(t) || t === !1 ? Yh(e, "min", t) : Vh(e, "min")
        },
        max: function(t) {
            var e = this.internal;
            return H(t) || t === !1 ? Yh(e, "max", t) : Vh(e, "max")
        },
        range: function(t) {
            var e = this.axis;
            if (arguments.length) {
                var r = t.min,
                    n = t.max;
                nt(n) && e.max(n), nt(r) && e.min(r)
            } else return {
                max: e.max(),
                min: e.min()
            }
        }
    }, K0 = {
        axis: j0
    }, Q0 = {
        category: function(t, e) {
            var r = this.internal,
                n = r.config;
            return arguments.length > 1 && (n.axis_x_categories[t] = e, r.redraw()), n.axis_x_categories[t]
        },
        categories: function(t) {
            var e = this.internal,
                r = e.config;
            if (!t || !Array.isArray(t)) {
                var n = r.axis_x_categories;
                return le(n) ? Object.values(e.data.xs)[0] : n
            }
            return r.axis_x_categories = t, e.redraw(), r.axis_x_categories
        }
    };
    cp = function(t) {
        return Os.bind(this)(t, "x")
    };
    Wt(cp, {
        add: function(t) {
            return sp.bind(this)(t, "x")
        },
        remove: function(t) {
            return lp.bind(this)(t, !0)
        }
    });
    up = function(t) {
        return Os.bind(this)(t, "y")
    };
    Wt(up, {
        add: function(t) {
            return sp.bind(this)(t, "y")
        },
        remove: function(t) {
            return lp.bind(this)(t, !1)
        }
    });
    J0 = {
        xgrids: cp,
        ygrids: up
    }, ty = {
        groups: function(t) {
            var e = this.internal,
                r = e.config;
            return bt(t) || (r.data_groups = t, e.redraw()), r.data_groups
        }
    };
    dp = function(t) {
        return fp.bind(this)(t)
    };
    Wt(dp, {
        add: function(t) {
            return fp.bind(this)(t, !0)
        },
        remove: function(t) {
            var e = this.internal,
                r = e.config,
                n = e.$T,
                a = t || {},
                i = Le(a, "classes", [Bn.region]),
                o = e.$el.main.select(".".concat(Bn.regions)).selectAll(i.map(function(s) {
                    return ".".concat(s)
                }));
            return n(o).style("opacity", "0").remove(), o = r.regions, Object.keys(a).length ? (o = o.filter(function(s) {
                var l = !1;
                return s.class ? (s.class.split(" ").forEach(function(c) {
                    i.indexOf(c) >= 0 && (l = !0)
                }), !l) : !0
            }), r.regions = o) : r.regions = [], o
        }
    });
    ey = {
        regions: dp
    }, ry = {
        x: function(t) {
            var e = this.internal,
                r = e.axis,
                n = e.data,
                a = r.isCustomX() && r.isCategorized();
            return K(t) && (a ? this.categories(t) : (e.updateTargetX(n.targets, t), e.redraw({
                withUpdateOrgXDomain: !0,
                withUpdateXDomain: !0
            }))), a ? this.categories() : n.xs
        },
        xs: function(t) {
            var e = this.internal;
            return at(t) && (e.updateTargetXs(e.data.targets, t), e.redraw({
                withUpdateOrgXDomain: !0,
                withUpdateXDomain: !0
            })), e.data.xs
        }
    }, ny = {
        flow: function(t) {
            var e = this.internal,
                r;
            (t.json || t.rows || t.columns) && e.convertData(t, function(a) {
                r = a, n()
            });

            function n() {
                var a, i = 0,
                    o = 0,
                    s, l;
                if (!(e.state.redrawing || !r || !Xn())) {
                    var c = [],
                        u = e.getMaxDataCount(),
                        f = e.convertDataToTargets(r, !0),
                        d = e.axis.isTimeSeries();
                    e.data.targets.forEach(function(g) {
                        for (var m = !1, v = 0; v < f.length; v++)
                            if (g.id === f[v].id) {
                                m = !0, g.values[g.values.length - 1] && (o = g.values[g.values.length - 1].index + 1), i = f[v].values.length;
                                for (var x = 0; x < i; x++) f[v].values[x].index = o + x, d || (f[v].values[x].x = o + x);
                                g.values = g.values.concat(f[v].values), f.splice(v, 1);
                                break
                            }!m && c.push(g.id)
                    }), e.data.targets.forEach(function(g) {
                        for (var m = 0; m < c.length; m++)
                            if (g.id === c[m]) {
                                o = g.values[g.values.length - 1].index + 1;
                                for (var v = 0; v < i; v++) g.values.push({
                                    id: g.id,
                                    index: o + v,
                                    x: d ? e.getOtherTargetX(o + v) : o + v,
                                    value: null
                                })
                            }
                    }), e.data.targets.length && f.forEach(function(g) {
                        for (var m = [], v = e.data.targets[0].values[0].index; v < o; v++) m.push({
                            id: g.id,
                            index: v,
                            x: d ? e.getOtherTargetX(v) : v,
                            value: null
                        });
                        g.values.forEach(function(x) {
                            x.index += o, d || (x.x += o)
                        }), g.values = m.concat(g.values)
                    }), e.data.targets = e.data.targets.concat(f);
                    var h = e.data.targets[0],
                        p = h.values[0];
                    nt(t.to) ? (i = 0, l = d ? te.call(e, t.to) : t.to, h.values.forEach(function(g) {
                        g.x < l && i++
                    })) : nt(t.length) && (i = t.length), u ? u === 1 && d && (s = (h.values[h.values.length - 1].x - p.x) / 2, a = [new Date(+p.x - s), new Date(+p.x + s)]) : (d ? s = h.values.length > 1 ? h.values[h.values.length - 1].x - p.x : p.x - e.getXDomain(e.data.targets)[0] : s = 1, a = [p.x - s, p.x]), a && e.updateXDomain(null, !0, !0, !1, a), e.updateTargets(e.data.targets), e.redraw({
                        flow: {
                            index: p.index,
                            length: i,
                            duration: H(t.duration) ? t.duration : e.config.transition_duration,
                            done: t.done,
                            orgDataCount: u
                        },
                        withLegend: !0,
                        withTransition: u > 1,
                        withTrimXDomain: !1,
                        withUpdateXAxis: !0
                    })
                }
            }
        }
    }, Gh = function() {
        function t(e) {
            var r = or(),
                n = e.config,
                a = e.params;
            this.owner = e, this.config = n, this.scale = r, (n.noTransition || !a.config.transition_duration) && (n.withoutTransition = !0), n.range = this.scaleExtent((a.orgXScale || r).range())
        }
        return t.getSizeFor1Char = function(e) {
            var r = {
                w: 5.5,
                h: 11.5
            };
            return !e.empty() && e.select("text").text("0").call(function(n) {
                try {
                    var a = n.node().getBBox(),
                        i = a.width,
                        o = a.height;
                    i && o && (r.w = i, r.h = o)
                } catch {} finally {
                    n.text("")
                }
            }), this.getSizeFor1Char = function() {
                return r
            }, r
        }, t.prototype.getTickTransformSetter = function(e) {
            var r = this.config,
                n = e === "x" ? function(a) {
                    return "translate(".concat(a + r.tickOffset, ",0)")
                } : function(a) {
                    return "translate(0,".concat(a, ")")
                };
            return function(a, i) {
                a.attr("transform", function(o) {
                    return H(o) ? n(Math.ceil(i(o))) : null
                })
            }
        }, t.prototype.scaleExtent = function(e) {
            var r = e[0],
                n = e[e.length - 1];
            return r < n ? [r, n] : [n, r]
        }, t.prototype.generateTicks = function(e, r) {
            var n = this.owner.params.tickStepSize,
                a = e.domain(),
                i = a[0],
                o = a[1],
                s = [];
            if (r && n)
                for (var l = Math.round(i); l <= o;) s.push(l), l += n;
            else if (e.ticks) {
                var c = this.config.tickArguments;
                if (e.type === "log" && !c) {
                    var u = or("_log").domain([i > 0 ? i : 1, o]).range(e.range());
                    s = u.ticks();
                    for (var f = o.toFixed().length; s.length > 15; f--) s = u.ticks(f);
                    s.splice(0, 1, i), s.splice(s.length - 1, 1, o)
                } else s = e.ticks.apply(e, this.config.tickArguments || []);
                s = s.map(function(d) {
                    var h = et(d) && z(d) && !isNaN(d) && Math.round(d * 10) / 10 || d;
                    return h
                })
            }
            return s
        }, t.prototype.copyScale = function() {
            var e = this.scale.copy();
            return e.domain().length || e.domain(this.scale.domain()), e.type = this.scale.type, e
        }, t.prototype.textFormatted = function(e) {
            var r = this.config.tickFormat,
                n = /\d+\.\d+0{5,}\d$/.test(e) ? +String(e).replace(/0+\d$/, "") : e,
                a = r ? r(n) : n;
            return nt(a) ? a : ""
        }, t.prototype.transitionise = function(e) {
            var r = this.config,
                n = e;
            if (r.withoutTransition) n = e.interrupt();
            else if (r.transition || !this.owner.params.noTransition) try {
                n = e.transition(r.transition)
            } catch {}
            return n
        }, t
    }(), ay = function() {
        function t(e) {
            e === void 0 && (e = {});
            var r = {
                innerTickSize: 6,
                outerTickSize: e.outerTick ? 6 : 0,
                orient: "bottom",
                range: [],
                tickArguments: null,
                tickCentered: null,
                tickCulling: !0,
                tickFormat: null,
                tickLength: 9,
                tickOffset: 0,
                tickPadding: 3,
                tickValues: null,
                transition: null,
                noTransition: e.noTransition
            };
            r.tickLength = Math.max(r.innerTickSize, 0) + r.tickPadding, this.config = r, this.params = e, this.helper = new Gh(this)
        }
        return t.prototype.create = function(e) {
            var r = this,
                n = r.config,
                a = r.helper,
                i = r.params,
                o = a.scale,
                s = n.orient,
                l = this.splitTickText.bind(r),
                c = /^(left|right)$/.test(s),
                u = /^(top|bottom)$/.test(s),
                f = a.getTickTransformSetter(u ? "x" : "y"),
                d = f === a.axisX ? "y" : "x",
                h = /^(top|left)$/.test(s) ? -1 : 1,
                p = i.tickTextRotate;
            this.config.range = o.rangeExtent ? o.rangeExtent() : a.scaleExtent((i.orgXScale || o).range());
            var g = n.innerTickSize,
                m = n.tickLength,
                v = n.range,
                x = i.id,
                y = x && /^(x|y|y2)$/.test(x) ? i.config["axis_".concat(x, "_tick_text_position")] : {
                    x: 0,
                    y: 0
                },
                _ = x === "subX" ? "subchart_axis_x" : "axis_".concat(x),
                w = i.config["".concat(_, "_show")],
                T = {
                    tick: w ? i.config["".concat(_, "_tick_show")] : !1,
                    text: w ? i.config["".concat(_, "_tick_text_show")] : !1
                },
                $;
            e.each(function() {
                var C = P(this),
                    M = this.__chart__ || o,
                    R = a.copyScale();
                $ = C, this.__chart__ = R, n.tickOffset = i.isCategory ? Math.ceil((R(1) - R(0)) / 2) : 0;
                var A = C.selectAll(".domain").data([0]);
                if (A.enter().append("path").attr("class", "domain").merge(A).attr("d", function() {
                        var W = n.outerTickSize * h;
                        return u ? "M".concat(v[0], ",").concat(W, "V0H").concat(v[1], "V").concat(W) : "M".concat(W, ",").concat(v[0], "H0V").concat(v[1], "H").concat(W)
                    }), T.tick || T.text) {
                    var L = n.tickValues || a.generateTicks(R, c);
                    r.generatedTicks = L;
                    var S = C.selectAll(".tick").data(L, R),
                        E = S.enter().insert("g", ".domain").attr("class", "tick"),
                        rt = S.exit().remove();
                    S = E.merge(S), T.tick && E.append("line"), T.text && E.append("text");
                    var O = Gh.getSizeFor1Char(S),
                        I = [],
                        B = S.select("text").selectAll("tspan").data(function(W, pt) {
                            var Ft = i.tickMultiline ? l(W, R, L, c, O.w) : K(a.textFormatted(W)) ? a.textFormatted(W).concat() : [a.textFormatted(W)];
                            return I[pt] = Ft.length, Ft.map(function(kt) {
                                return {
                                    index: pt,
                                    splitted: kt
                                }
                            })
                        });
                    B.exit().remove(), B = B.enter().append("tspan").merge(B).text(function(W) {
                        return W.splitted
                    }), B.attr("x", u ? 0 : m * h).attr("dx", function() {
                        var W = 0;
                        return /(top|bottom)/.test(s) && p && (W = 8 * Math.sin(Math.PI * (p / 180)) * (s === "top" ? -1 : 1)), W + (y.x || 0)
                    }()).attr("dy", function(W, pt) {
                        var Ft = ".71em",
                            kt = 0;
                        return s !== "top" && (kt = O.h, pt === 0 && (kt = c ? -((I[W.index] - 1) * (O.h / 2) - 3) : y.y === 0 ? Ft : 0)), z(kt) && y.y ? kt + y.y : kt || Ft
                    });
                    var F = S.select("line"),
                        it = S.select("text");
                    if (E.select("line").attr("".concat(d, "2"), g * h), E.select("text").attr(d, m * h), r.setTickLineTextPosition(F, it), i.tickTitle) {
                        var ht = it.select("title");
                        (ht.empty() ? it.append("title") : ht).text(function(W) {
                            return i.tickTitle[W]
                        })
                    }
                    if (R.bandwidth) {
                        var Et = R,
                            Yt = Et.bandwidth() / 2;
                        M = function(W) {
                            return Et(W) + Yt
                        }, R = M
                    } else M.bandwidth ? M = R : f(rt, R);
                    S = i.owner.state.flowing ? a.transitionise(S) : i.owner.$T(S), f(E, M), f(S.style("opacity", null), R)
                }
            }), this.g = $
        }, t.prototype.getGeneratedTicks = function(e) {
            var r, n = ((r = this.generatedTicks) === null || r === void 0 ? void 0 : r.length) - 1,
                a = this.generatedTicks;
            if (n > e) {
                var i = Math.round(n / e + .1);
                a = this.generatedTicks.map(function(o, s) {
                    return s % i === 0 ? o : null
                }).filter(function(o) {
                    return o !== null
                }).splice(0, e)
            }
            return a
        }, t.prototype.getTickXY = function() {
            var e = this.config,
                r = {
                    x: 0,
                    y: 0
                };
            return this.params.isCategory && (r.x = e.tickCentered ? 0 : e.tickOffset, r.y = e.tickCentered ? e.tickOffset : 0), r
        }, t.prototype.getTickSize = function(e) {
            var r = this.helper.scale,
                n = this.config,
                a = n.innerTickSize,
                i = n.range,
                o = r(e) + (n.tickCentered ? 0 : n.tickOffset);
            return i[0] < o && o < i[1] ? a : 0
        }, t.prototype.setTickLineTextPosition = function(e, r) {
            var n = this.getTickXY(),
                a = this.config,
                i = a.innerTickSize,
                o = a.orient,
                s = a.tickLength,
                l = a.tickOffset,
                c = this.params.tickTextRotate,
                u = function(h) {
                    var p = ["start", "end"];
                    return o === "top" && p.reverse(), h ? p[h > 0 ? 0 : 1] : "middle"
                },
                f = function(h) {
                    return h ? "rotate(".concat(h, ")") : null
                },
                d = function(h) {
                    var p = h / (o === "bottom" ? 15 : 23);
                    return h ? 11.5 - 2.5 * p * (h > 0 ? 1 : -1) : s
                };
            switch (o) {
                case "bottom":
                    e.attr("x1", n.x).attr("x2", n.x).attr("y2", this.getTickSize.bind(this)), r.attr("x", 0).attr("y", d(c)).style("text-anchor", u(c)).attr("transform", f(c));
                    break;
                case "top":
                    e.attr("x2", 0).attr("y2", -i), r.attr("x", 0).attr("y", -d(c) * 2).style("text-anchor", u(c)).attr("transform", f(c));
                    break;
                case "left":
                    e.attr("x2", -i).attr("y1", n.y).attr("y2", n.y), r.attr("x", -s).attr("y", l).style("text-anchor", "end");
                    break;
                case "right":
                    e.attr("x2", i).attr("y2", 0), r.attr("x", s).attr("y", 0).style("text-anchor", "start")
            }
        }, t.prototype.splitTickText = function(e, r, n, a, i) {
            var o = this.params,
                s = this.helper.textFormatted(e),
                l = et(s) && s.indexOf(`
`) > -1 ? s.split(`
`) : [];
            if (l.length) return l;
            if (K(s)) return s;
            var c = o.tickWidth;
            (!c || c <= 0) && (c = a ? 95 : o.isCategory ? Math.ceil(o.isInverted ? r(n[0]) - r(n[1]) : r(n[1]) - r(n[0])) - 12 : 110);

            function u(f, d) {
                for (var h, p, g, m = 1; m < d.length; m++)
                    if (d.charAt(m) === " " && (p = m), h = d.substr(0, m + 1), g = i * h.length, c < g) return u(f.concat(d.substr(0, p || m)), d.slice(p ? p + 1 : m));
                return f.concat(d)
            }
            return u(l, String(s))
        }, t.prototype.scale = function(e) {
            return arguments.length ? (this.helper.scale = e, this) : this.helper.scale
        }, t.prototype.orient = function(e) {
            return arguments.length ? (this.config.orient = e in {
                top: 1,
                right: 1,
                bottom: 1,
                left: 1
            } ? String(e) : "bottom", this) : this.config.orient
        }, t.prototype.tickFormat = function(e) {
            var r = this.config;
            return arguments.length ? (r.tickFormat = e, this) : r.tickFormat
        }, t.prototype.tickCentered = function(e) {
            var r = this.config;
            return arguments.length ? (r.tickCentered = e, this) : r.tickCentered
        }, t.prototype.tickOffset = function() {
            return this.config.tickOffset
        }, t.prototype.tickInterval = function(e) {
            var r = this,
                n = this.config,
                a = n.outerTickSize,
                i = n.tickOffset,
                o = n.tickValues,
                s;
            if (this.params.isCategory) s = i * 2;
            else {
                var l = this.g.select("path.domain").node().getTotalLength() - a * 2;
                s = l / (e || this.g.selectAll("line").size());
                var c = o ? o.map(function(u, f, d) {
                    var h = f + 1;
                    return h < d.length ? r.helper.scale(d[h]) - r.helper.scale(u) : null
                }).filter(Boolean) : [];
                s = Math.min.apply(Math, gt(gt([], c, !1), [s], !1))
            }
            return s === 1 / 0 ? 0 : s
        }, t.prototype.ticks = function() {
            for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
            var n = this.config;
            return e.length ? (n.tickArguments = Pr(e), this) : n.tickArguments
        }, t.prototype.tickCulling = function(e) {
            var r = this.config;
            return arguments.length ? (r.tickCulling = e, this) : r.tickCulling
        }, t.prototype.tickValues = function(e) {
            var r = this,
                n = this.config;
            if (X(e)) n.tickValues = function() {
                return e(r.helper.scale.domain())
            };
            else {
                if (!arguments.length) return n.tickValues;
                n.tickValues = e
            }
            return this
        }, t.prototype.setTransition = function(e) {
            return this.config.transition = e, this
        }, t
    }(), iy = {
        getAxisInstance: function() {
            return this.axis || new oy(this)
        }
    }, oy = function() {
        function t(e) {
            this.axesList = {}, this.tick = {
                x: null,
                y: null,
                y2: null
            }, this.xs = [], this.orient = {
                x: "bottom",
                y: "left",
                y2: "right",
                subX: "bottom"
            }, this.owner = e, this.setOrient()
        }
        return t.prototype.getAxisClassName = function(e) {
            return "".concat(yt.axis, " ").concat(yt["axis".concat(_e(e))])
        }, t.prototype.isHorizontal = function(e, r) {
            var n = e.config.axis_rotated;
            return r ? n : !n
        }, t.prototype.isCategorized = function() {
            var e = this.owner,
                r = e.config,
                n = e.state;
            return r.axis_x_type.indexOf("category") >= 0 || n.hasRadar
        }, t.prototype.isCustomX = function() {
            var e = this.owner.config;
            return !this.isTimeSeries() && (e.data_x || dt(e.data_xs))
        }, t.prototype.isTimeSeries = function(e) {
            return e === void 0 && (e = "x"), this.owner.config["axis_".concat(e, "_type")] === "timeseries"
        }, t.prototype.isLog = function(e) {
            return e === void 0 && (e = "x"), this.owner.config["axis_".concat(e, "_type")] === "log"
        }, t.prototype.isTimeSeriesY = function() {
            return this.isTimeSeries("y")
        }, t.prototype.getAxisType = function(e) {
            e === void 0 && (e = "x");
            var r = "linear";
            return this.isTimeSeries(e) ? r = this.owner.config.axis_x_localtime ? "time" : "utc" : this.isLog(e) && (r = "log"), r
        }, t.prototype.init = function() {
            var e = this,
                r = this.owner,
                n = r.config,
                a = r.$el,
                i = a.main,
                o = a.axis,
                s = r.state.clip,
                l = n.axis_rotated,
                c = ["x", "y"];
            n.axis_y2_show && c.push("y2"), c.forEach(function(u) {
                var f = e.getAxisClassName(u),
                    d = yt["axis".concat(u.toUpperCase(), "Label")];
                o[u] = i.append("g").attr("class", f).attr("clip-path", function() {
                    var h = null;
                    return u === "x" ? h = s.pathXAxis : u === "y" && (h = s.pathYAxis), h
                }).attr("transform", r.getTranslate(u)).style("visibility", n["axis_".concat(u, "_show")] ? null : "hidden"), o[u].append("text").attr("class", d).attr("transform", ["rotate(-90)", null][u === "x" ? +!l : +l]).style("text-anchor", function() {
                    return e.textAnchorForAxisLabel(u)
                }), e.generateAxes(u)
            })
        }, t.prototype.setOrient = function() {
            var e = this.owner,
                r = e.config,
                n = r.axis_rotated,
                a = r.axis_y_inner,
                i = r.axis_y2_inner;
            this.orient = {
                x: n ? "left" : "bottom",
                y: n ? a ? "top" : "bottom" : a ? "right" : "left",
                y2: n ? i ? "bottom" : "top" : i ? "left" : "right",
                subX: n ? "left" : "bottom"
            }
        }, t.prototype.generateAxes = function(e) {
            var r = this.owner,
                n = r.config,
                a = [],
                i = n["axis_".concat(e, "_axes")],
                o = n.axis_rotated,
                s;
            e === "x" ? s = o ? ti : Ja : e === "y" ? s = o ? Ja : ti : e === "y2" && (s = o ? ms : xs), i.length && i.forEach(function(l) {
                var c = l.tick || {},
                    u = r.scale[e].copy();
                l.domain && u.domain(l.domain), a.push(s(u).ticks(c.count).tickFormat(X(c.format) ? c.format.bind(r.api) : function(f) {
                    return f
                }).tickValues(c.values).tickSizeOuter(c.outer === !1 ? 0 : 6))
            }), this.axesList[e] = a
        }, t.prototype.updateAxes = function() {
            var e = this,
                r = this.owner,
                n = r.config,
                a = r.$el.main,
                i = r.$T;
            Object.keys(this.axesList).forEach(function(o) {
                var s = n["axis_".concat(o, "_axes")],
                    l = r.scale[o].copy(),
                    c = l.range();
                e.axesList[o].forEach(function(u, f) {
                    var d = u.scale().range();
                    c.every(function(g, m) {
                        return g === d[m]
                    }) || u.scale().range(c);
                    var h = "".concat(e.getAxisClassName(o), "-").concat(f + 1),
                        p = a.select(".".concat(h.replace(/\s/, ".")));
                    p.empty() ? p = a.append("g").attr("class", h).style("visibility", n["axis_".concat(o, "_show")] ? null : "hidden").call(u) : (s[f].domain && l.domain(s[f].domain), i(p).call(u.scale(l))), p.attr("transform", r.getTranslate(o, f + 1))
                })
            })
        }, t.prototype.setAxis = function(e, r, n, a) {
            var i = this.owner;
            e !== "subX" && (this.tick[e] = this.getTickValues(e)), this[e] = this.getAxis(e, r, n, e === "x" && (i.scale.zoom || i.config.subchart_show || i.state.resizing) ? !0 : a)
        }, t.prototype.getAxis = function(e, r, n, a, i) {
            var o = this.owner,
                s = o.config,
                l = /^(x|subX)$/.test(e),
                c = l ? "x" : e,
                u = l && this.isCategorized(),
                f = this.orient[e],
                d = i ? 0 : o.getAxisTickRotate(c),
                h;
            if (l) h = e === "subX" ? o.format.subXAxisTick : o.format.xAxisTick;
            else {
                var p = s["axis_".concat(e, "_tick_format")];
                X(p) && (h = p.bind(o.api))
            }
            var g = this.tick[c],
                m = Fr({
                    outerTick: n,
                    noTransition: a,
                    config: s,
                    id: e,
                    tickTextRotate: d,
                    owner: o
                }, l && {
                    isCategory: u,
                    isInverted: s.axis_x_inverted,
                    tickMultiline: s.axis_x_tick_multiline,
                    tickWidth: s.axis_x_tick_width,
                    tickTitle: u && s.axis_x_tick_tooltip && o.api.categories(),
                    orgXScale: o.scale.x
                });
            l || (m.tickStepSize = s["axis_".concat(c, "_tick_stepSize")]);
            var v = new ay(m).scale(l && o.scale.zoom || r).orient(f);
            if (l && this.isTimeSeries() && g && !X(g)) {
                var x = te.bind(o);
                g = g.map(function(_) {
                    return x(_)
                })
            } else !l && this.isTimeSeriesY() && (v.ticks(s.axis_y_tick_time_value), g = null);
            g && v.tickValues(g), v.tickFormat(h || !l && o.isStackNormalized() && function(_) {
                return "".concat(_, "%")
            }), u && (v.tickCentered(s.axis_x_tick_centered), le(s.axis_x_tick_culling) && (s.axis_x_tick_culling = !1));
            var y = s["axis_".concat(c, "_tick_count")];
            return y && v.ticks(y), v
        }, t.prototype.updateXAxisTickValues = function(e, r) {
            var n, a = this.owner,
                i = a.config,
                o = i.axis_x_tick_fit,
                s = i.axis_x_tick_count,
                l;
            return (o || s && o) && (l = a.mapTargetsToUniqueXs(e), this.isCategorized() && s > l.length && (s = l.length), l = this.generateTickValues(l, s, this.isTimeSeries())), r ? r.tickValues(l) : this.x && (this.x.tickValues(l), (n = this.subX) === null || n === void 0 || n.tickValues(l)), l
        }, t.prototype.getId = function(e) {
            var r = this.owner,
                n = r.config,
                a = r.scale,
                i = n.data_axes[e];
            return (!i || !a[i]) && (i = "y"), i
        }, t.prototype.getXAxisTickFormat = function(e) {
            var r = this.owner,
                n = r.config,
                a = r.format,
                i = e && n.subchart_axis_x_tick_format || n.axis_x_tick_format,
                o = this.isTimeSeries(),
                s = this.isCategorized(),
                l;
            return i ? X(i) ? l = i.bind(r.api) : o && (l = function(c) {
                return c ? a.axisTime(i)(c) : ""
            }) : l = o ? a.defaultAxisTime : s ? r.categoryName : function(c) {
                return c < 0 ? c.toFixed(0) : c
            }, X(l) ? function(c) {
                return l.apply(r, s ? [c, r.categoryName(c)] : [c])
            } : l
        }, t.prototype.getTickValues = function(e) {
            var r = this.owner,
                n = r.config["axis_".concat(e, "_tick_values")],
                a = r["".concat(e, "Axis")];
            return (X(n) ? n.call(r.api) : n) || (a ? a.tickValues() : void 0)
        }, t.prototype.getLabelOptionByAxisId = function(e) {
            return this.owner.config["axis_".concat(e, "_label")]
        }, t.prototype.getLabelText = function(e) {
            var r = this.getLabelOptionByAxisId(e);
            return et(r) ? r : r ? r.text : null
        }, t.prototype.setLabelText = function(e, r) {
            var n = this.owner,
                a = n.config,
                i = this.getLabelOptionByAxisId(e);
            et(i) ? a["axis_".concat(e, "_label")] = r : i && (i.text = r)
        }, t.prototype.getLabelPosition = function(e, r) {
            var n = this.owner.config.axis_rotated,
                a = this.getLabelOptionByAxisId(e),
                i = se(a) && a.position ? a.position : r[+!n],
                o = function(s) {
                    return !!~i.indexOf(s)
                };
            return {
                isInner: o("inner"),
                isOuter: o("outer"),
                isLeft: o("left"),
                isCenter: o("center"),
                isRight: o("right"),
                isTop: o("top"),
                isMiddle: o("middle"),
                isBottom: o("bottom")
            }
        }, t.prototype.getAxisLabelPosition = function(e) {
            return this.getLabelPosition(e, e === "x" ? ["inner-top", "inner-right"] : ["inner-right", "inner-top"])
        }, t.prototype.getLabelPositionById = function(e) {
            return this.getAxisLabelPosition(e)
        }, t.prototype.xForAxisLabel = function(e) {
            var r = this.owner,
                n = r.state,
                a = n.width,
                i = n.height,
                o = this.getAxisLabelPosition(e),
                s = o.isMiddle ? -i / 2 : 0;
            return this.isHorizontal(r, e !== "x") ? s = o.isLeft ? 0 : o.isCenter ? a / 2 : a : o.isBottom && (s = -i), s
        }, t.prototype.dxForAxisLabel = function(e) {
            var r = this.owner,
                n = this.getAxisLabelPosition(e),
                a = n.isBottom ? "0.5em" : "0";
            return this.isHorizontal(r, e !== "x") ? a = n.isLeft ? "0.5em" : n.isRight ? "-0.5em" : "0" : n.isTop && (a = "-0.5em"), a
        }, t.prototype.textAnchorForAxisLabel = function(e) {
            var r = this.owner,
                n = this.getAxisLabelPosition(e),
                a = n.isMiddle ? "middle" : "end";
            return this.isHorizontal(r, e !== "x") ? a = n.isLeft ? "start" : n.isCenter ? "middle" : "end" : n.isBottom && (a = "start"), a
        }, t.prototype.dyForAxisLabel = function(e) {
            var r = this.owner,
                n = r.config,
                a = n.axis_rotated,
                i = this.getAxisLabelPosition(e).isInner,
                o = n["axis_".concat(e, "_tick_rotate")] ? r.getHorizontalAxisHeight(e) : 0,
                s = this.getMaxTickSize(e).width,
                l;
            if (e === "x") {
                var c = n.axis_x_height;
                a ? l = i ? "1.2em" : -25 - s : i ? l = "-0.5em" : c ? l = c - 10 : o ? l = o - 10 : l = "3em"
            } else l = {
                y: ["-0.5em", 10, "3em", "1.2em", 10],
                y2: ["1.2em", -20, "-2.2em", "-0.5em", 15]
            }[e], a ? i ? l = l[0] : o ? l = o * (e === "y2" ? -1 : 1) - l[1] : l = l[2] : l = i ? l[3] : (l[4] + (n["axis_".concat(e, "_inner")] ? 0 : s + l[4])) * (e === "y" ? -1 : 1);
            return l
        }, t.prototype.getMaxTickSize = function(e, r) {
            var n = this.owner,
                a = n.config,
                i = n.state.current,
                o = n.$el,
                s = o.svg,
                l = o.chart,
                c = i.maxTickSize[e],
                u = "axis_".concat(e),
                f = {
                    width: 0,
                    height: 0
                };
            if (r || !a["".concat(u, "_show")] || c.width > 0 && n.filterTargetsToShow().length === 0) return c;
            if (s) {
                var d = /^y2?$/.test(e),
                    h = n.filterTargetsToShow(n.data.targets),
                    p = n.scale[e].copy().domain(n["get".concat(d ? "Y" : "X", "Domain")](h, e)),
                    g = p.domain(),
                    m = g[0] === g[1] && g.every(function($) {
                        return $ > 0
                    }),
                    v = K(c.domain) && c.domain[0] === c.domain[1] && c.domain.every(function($) {
                        return $ > 0
                    });
                if (m || v) return c.size;
                c.domain = g, d || c.ticks.splice(0);
                var x = this.getAxis(e, p, !1, !1, !0),
                    y = a["".concat(u, "_tick_rotate")],
                    _ = a["".concat(u, "_tick_count")],
                    w = a["".concat(u, "_tick_values")];
                !w && _ && x.tickValues(this.generateTickValues(g, _, d ? this.isTimeSeriesY() : this.isTimeSeries())), !d && this.updateXAxisTickValues(h, x);
                var T = l.append("svg").style("visibility", "hidden").style("position", "fixed").style("top", "0").style("left", "0");
                x.create(T), T.selectAll("text").attr("transform", z(y) ? "rotate(".concat(y, ")") : null).each(function($, C) {
                    var M = this.getBoundingClientRect(),
                        R = M.width,
                        A = M.height;
                    f.width = Math.max(f.width, R), f.height = Math.max(f.height, A), d || (c.ticks[C] = R)
                }), T.remove()
            }
            return Object.keys(f).forEach(function($) {
                f[$] > 0 && (c[$] = f[$])
            }), c
        }, t.prototype.getXAxisTickTextY2Overflow = function(e) {
            var r = this.owner,
                n = r.axis,
                a = r.config,
                i = r.state,
                o = r.getAxisTickRotate("x"),
                s = o > 0 && o < 90;
            if ((n.isCategorized() || n.isTimeSeries()) && a.axis_x_tick_fit && (!a.axis_x_tick_culling || le(a.axis_x_tick_culling)) && !a.axis_x_tick_multiline && s) {
                var l = i.current.width - r.getCurrentPaddingByDirection("left"),
                    c = this.getXAxisTickMaxOverflow(o, l - e),
                    u = Math.max(0, c) + e;
                return Math.min(u, l / 2)
            }
            return 0
        }, t.prototype.getXAxisTickMaxOverflow = function(e, r) {
            for (var n = this.owner, a = n.axis, i = n.config, o = n.state, s = a.isTimeSeries(), l = o.current.maxTickSize.x.ticks, c = l.length, u = o.axis.x.padding, f = u.left, d = u.right, h = 0, p = c - (s && i.axis_x_tick_fit ? .5 : 0), g = 0; g < c; g++) {
                var m = g + 1,
                    v = Math.cos(Math.PI * e / 180) * l[g],
                    x = m - (s ? 1 : .5) + f;
                if (!(x <= 0)) {
                    var y = r - v,
                        _ = y / x,
                        w = p - m,
                        T = d * _,
                        $ = w * _ + T,
                        C = v - _ / 2 - $;
                    h = Math.max(h, C)
                }
            }
            var M = n.filterTargetsToShow(n.data.targets),
                R = 0;
            if (!s && i.axis_x_tick_count <= M.length && M[0].values.length) {
                var A = or(n.axis.getAxisType("x"), 0, r - h).domain([f * -1, n.getXDomainMax(n.data.targets) + 1 + d]);
                R = Math.ceil((A(1) - A(0)) / 2)
            }
            return h + R
        }, t.prototype.updateLabels = function(e) {
            var r = this,
                n = this.owner,
                a = n.$el.main,
                i = n.$T,
                o = {
                    x: a.select(".".concat(yt.axisX, " .").concat(yt.axisXLabel)),
                    y: a.select(".".concat(yt.axisY, " .").concat(yt.axisYLabel)),
                    y2: a.select(".".concat(yt.axisY2, " .").concat(yt.axisY2Label))
                };
            Object.keys(o).filter(function(s) {
                return !o[s].empty()
            }).forEach(function(s) {
                var l = o[s];
                i(l, e).attr("x", function() {
                    return r.xForAxisLabel(s)
                }).attr("dx", function() {
                    return r.dxForAxisLabel(s)
                }).attr("dy", function() {
                    return r.dyForAxisLabel(s)
                }).text(function() {
                    return r.getLabelText(s)
                })
            })
        }, t.prototype.getPadding = function(e, r, n, a) {
            var i = z(e) ? e : e[r];
            return H(i) ? this.owner.convertPixelToScale(/(bottom|top)/.test(r) ? "y" : "x", i, a) : n
        }, t.prototype.generateTickValues = function(e, r, n) {
            var a = e;
            if (r) {
                var i = X(r) ? r() : r;
                if (i === 1) a = [e[0]];
                else if (i === 2) a = [e[0], e[e.length - 1]];
                else if (i > 2) {
                    var o = this.isCategorized(),
                        s = i - 2,
                        l = e[0],
                        c = e[e.length - 1],
                        u = (c - l) / (s + 1),
                        f = void 0;
                    a = [l];
                    for (var d = 0; d < s; d++) f = +l + u * (d + 1), a.push(n ? new Date(f) : o ? Math.round(f) : f);
                    a.push(c)
                }
            }
            return n || (a = a.sort(function(h, p) {
                return h - p
            })), a
        }, t.prototype.generateTransitions = function(e) {
            var r = this.owner,
                n = r.$el.axis,
                a = r.$T,
                i = ["x", "y", "y2", "subX"].map(function(u) {
                    return a(n[u], e)
                }),
                o = i[0],
                s = i[1],
                l = i[2],
                c = i[3];
            return {
                axisX: o,
                axisY: s,
                axisY2: l,
                axisSubX: c
            }
        }, t.prototype.redraw = function(e, r, n) {
            var a = this,
                i = this.owner,
                o = i.config,
                s = i.$el,
                l = r ? "0" : null;
            ["x", "y", "y2", "subX"].forEach(function(c) {
                var u = a[c],
                    f = s.axis[c];
                u && f && (!n && !o.transition_duration && (u.config.withoutTransition = !0), f.style("opacity", l), u.create(e["axis".concat(_e(c))]))
            }), this.updateAxes()
        }, t.prototype.redrawAxis = function(e, r, n, a, i) {
            var o = this,
                s, l, c, u = this.owner,
                f = u.config,
                d = u.scale,
                h = u.$el,
                p = !!d.zoom,
                g;
            !p && this.isCategorized() && e.length === 0 && d.x.domain([0, h.axis.x.selectAll(".tick").size()]), d.x && e.length ? (!p && u.updateXDomain(e, r.UpdateXDomain, r.UpdateOrgXDomain, r.TrimXDomain), f.axis_x_tick_values || this.updateXAxisTickValues(e)) : this.x && (this.x.tickValues([]), (s = this.subX) === null || s === void 0 || s.tickValues([])), f.zoom_rescale && !a && (g = d.x.orgDomain()), ["y", "y2"].forEach(function(m) {
                var v = "axis_".concat(m, "_"),
                    x = d[m];
                if (x) {
                    var y = f["".concat(v, "tick_values")],
                        _ = f["".concat(v, "tick_count")];
                    if (x.domain(u.getYDomain(e, m, g)), !y && _) {
                        var w = u.axis[m],
                            T = x.domain();
                        w.tickValues(o.generateTickValues(T, T.every(function($) {
                            return $ === 0
                        }) ? 1 : _, o.isTimeSeriesY()))
                    }
                }
            }), this.redraw(n, u.hasArcType(), i), this.updateLabels(r.Transition), (r.UpdateXDomain || r.UpdateXAxis || r.Y) && e.length && this.setCulling(), r.Y && ((l = d.subY) === null || l === void 0 || l.domain(u.getYDomain(e, "y")), (c = d.subY2) === null || c === void 0 || c.domain(u.getYDomain(e, "y2")))
        }, t.prototype.setCulling = function() {
            var e = this.owner,
                r = e.config,
                n = e.state,
                a = n.clip,
                i = n.current,
                o = e.$el;
            ["subX", "x", "y", "y2"].forEach(function(s) {
                var l = o.axis[s],
                    c = s === "subX" ? "x" : s,
                    u = "axis_".concat(c, "_tick_culling"),
                    f = r[u];
                if (l && f) {
                    var d = l.selectAll(".tick"),
                        h = zr(d.data()),
                        p = h.length,
                        g = r["".concat(u, "_max")],
                        m = r["".concat(u, "_lines")],
                        v;
                    if (p) {
                        for (var x = 1; x < p; x++)
                            if (p / x < g) {
                                v = x;
                                break
                            }
                        d.each(function(_) {
                            var w = m ? this.querySelector("text") : this;
                            w && (w.style.display = h.indexOf(_) % v ? "none" : null)
                        })
                    } else d.style("display", null);
                    if (s === "x") {
                        var y = i.maxTickSize.x.clipPath ? a.pathXAxisTickTexts : null;
                        o.svg.selectAll(".".concat(yt.axisX, " .tick text")).attr("clip-path", y)
                    }
                }
            })
        }, t
    }(), sy = {
        initEventRect: function() {
            var t = this;
            t.$el.main.select(".".concat(Z.chart)).append("g").attr("class", Kt.eventRects).style("fill-opacity", "0")
        },
        redrawEventRect: function() {
            var t, e = this,
                r = e.config,
                n = e.state,
                a = e.$el,
                i = e.isMultipleX(),
                o = r.axis_x_inverted;
            if (a.eventRect) e.updateEventRect(a.eventRect, !0);
            else if (e.data.targets.length) {
                var s = e.$el.main.select(".".concat(Kt.eventRects)).style("cursor", r.zoom_enabled && r.zoom_type !== "drag" ? r.axis_rotated ? "ns-resize" : "ew-resize" : null).classed(Kt.eventRectsMultiple, i).classed(Kt.eventRectsSingle, !i),
                    l = s.selectAll(".".concat(Kt.eventRect)).data([0]).enter().append("rect");
                e.updateEventRect(l), i ? e.generateEventRectsForMultipleXs(l) : e.generateEventRectsForSingleX(l), l.call(e.getDraggableSelection()), a.eventRect = l, e.state.inputType === "touch" && !a.svg.on("touchstart.eventRect") && !e.hasArcType() && e.bindTouchOnEventRect(), n.rendered && e.updateEventRect(a.eventRect, !0)
            }
            if (!i) {
                var c = e.getMaxDataCountTarget();
                (!r.data_xSort || o) && c.sort(function(u, f) {
                    return o ? f.x - u.x : u.x - f.x
                }), e.updateDataIndexByX(c), e.updateXs(c), (t = e.updatePointClass) === null || t === void 0 || t.call(e, !0), n.eventReceiver.data = c
            }
            e.updateEventRectData()
        },
        bindTouchOnEventRect: function() {
            var t = this,
                e = t.config,
                r = t.state,
                n = t.$el,
                a = n.eventRect,
                i = n.svg,
                o = function(h) {
                    if (t.isMultipleX()) t.selectRectForMultipleXs(h);
                    else {
                        var p = t.getDataIndexFromEvent(r.event);
                        t.callOverOutForTouch(p), p === -1 ? t.unselectRect() : t.selectRectForSingle(h, p)
                    }
                },
                s = function() {
                    t.unselectRect(), t.callOverOutForTouch()
                },
                l = e.interaction_inputType_touch.preventDefault,
                c = jh(l) && l || !1,
                u = !isNaN(l) && l || null,
                f, d = function(h) {
                    var p = h.type,
                        g = h.changedTouches[0],
                        m = g["client".concat(e.axis_rotated ? "Y" : "X")];
                    p === "touchstart" ? c ? h.preventDefault() : u !== null && (f = m) : p === "touchmove" && (c || f === !0 || u !== null && Math.abs(f - m) >= u) && (f = !0, h.preventDefault())
                };
            a.on("touchstart", function(h) {
                r.event = h, t.updateEventRect()
            }).on("touchstart.eventRect touchmove.eventRect", function(h) {
                if (r.event = h, !a.empty() && a.classed(Kt.eventRect)) {
                    if (r.dragging || r.flowing || t.hasArcType() || h.touches.length > 1) return;
                    d(h), o(a.node())
                } else s()
            }, !0).on("touchend.eventRect", function(h) {
                r.event = h, !a.empty() && a.classed(Kt.eventRect) && (t.hasArcType() || !t.toggleShape || r.cancelClick) && r.cancelClick && (r.cancelClick = !1)
            }, !0), i.on("touchstart", function(h) {
                r.event = h;
                var p = h.target;
                p && p !== a.node() && s()
            })
        },
        updateEventRect: function(t, e) {
            e === void 0 && (e = !1);
            var r = this,
                n = r.state,
                a = r.$el,
                i = n.eventReceiver,
                o = n.width,
                s = n.height,
                l = n.rendered,
                c = n.resizing,
                u = t || a.eventRect,
                f = function() {
                    i && (i.rect = u.node().getBoundingClientRect())
                };
            (!l || c || e) && (u.attr("x", 0).attr("y", 0).attr("width", o).attr("height", s), (!l || e) && u.classed(Kt.eventRect, !0)), f()
        },
        updateEventRectData: function() {
            var t = this,
                e = t.config,
                r = t.scale,
                n = t.state,
                a = r.zoom || r.x,
                i = e.axis_rotated,
                o, s, l, c;
            if (t.isMultipleX()) o = 0, s = 0, l = n.width, c = n.height;
            else {
                var u, f = void 0;
                if (t.axis.isCategorized()) u = t.getEventRectWidth(), f = function(g) {
                    return a(g.x) - u / 2
                };
                else {
                    var d = function(g) {
                        var m = g.index;
                        return {
                            prev: t.getPrevX(m),
                            next: t.getNextX(m)
                        }
                    };
                    u = function(g) {
                        var m = d(g),
                            v = a.domain(),
                            x;
                        return m.prev === null && m.next === null ? x = i ? n.height : n.width : m.prev === null ? x = (a(m.next) + a(g.x)) / 2 : m.next === null ? x = a(v[1]) - (a(m.prev) + a(g.x)) / 2 : (Object.keys(m).forEach(function(y, _) {
                            var w;
                            m[y] = (w = m[y]) !== null && w !== void 0 ? w : v[_]
                        }), x = Math.max(0, (a(m.next) - a(m.prev)) / 2)), x
                    }, f = function(g) {
                        var m = d(g),
                            v;
                        return m.prev === null && m.next === null ? v = 0 : m.prev === null ? v = a(a.domain()[0]) : v = (a(g.x) + a(m.prev)) / 2, v
                    }
                }
                o = i ? 0 : f, s = i ? f : 0, l = i ? n.width : u, c = i ? u : n.height
            }
            var h = n.eventReceiver,
                p = function(g, m) {
                    return X(g) ? g(m) : g
                };
            h.coords.splice(h.data.length), h.data.forEach(function(g, m) {
                h.coords[m] = {
                    x: p(o, g),
                    y: p(s, g),
                    w: p(l, g),
                    h: p(c, g)
                }
            })
        },
        selectRectForSingle: function(t, e) {
            var r, n, a = this,
                i = a.config,
                o = a.$el,
                s = o.main,
                l = o.circle,
                c = i.data_selection_enabled,
                u = i.data_selection_grouped,
                f = i.data_selection_isselectable,
                d = i.tooltip_grouped,
                h = a.getAllValuesOnIndex(e);
            if (!(d && (a.showTooltip(h, t), (r = a.showGridFocus) === null || r === void 0 || r.call(a, h), !c || u))) {
                !l && s.selectAll(".".concat(Z.EXPANDED, ":not(.").concat(Mt.shape, "-").concat(e, ")")).classed(Z.EXPANDED, !1);
                var p = s.selectAll(".".concat(Mt.shape, "-").concat(e)).classed(Z.EXPANDED, !0).style("cursor", f ? "pointer" : null).filter(function(g) {
                    return a.isWithinShape(this, g)
                });
                p.empty() && !d && ((n = a.hideGridFocus) === null || n === void 0 || n.call(a), a.hideTooltip(), !u && a.setExpand(e)), p.call(function(g) {
                    var m, v, x = g.data();
                    c && (u || f ? .bind(a.api)(x)) && (t.style.cursor = "pointer"), d || (a.showTooltip(x, t), (m = a.showGridFocus) === null || m === void 0 || m.call(a, x), (v = a.unexpandCircles) === null || v === void 0 || v.call(a), g.each(function(y) {
                        return a.setExpand(e, y.id)
                    }))
                })
            }
        },
        selectRectForMultipleXs: function(t, e) {
            e === void 0 && (e = !0);
            var r = this,
                n = r.config,
                a = r.state,
                i = r.filterTargetsToShow(r.data.targets);
            if (!(a.dragging || r.hasArcType(i))) {
                var o = xe(a.event, t),
                    s = r.findClosestFromTargets(i, o);
                if (e && a.mouseover && (!s || s.id !== a.mouseover.id) && (n.data_onout.call(r.api, a.mouseover), a.mouseover = void 0), !s) {
                    r.unselectRect();
                    return
                }
                var l = r.isBubbleType(s) || r.isScatterType(s) || !n.tooltip_grouped ? [s] : r.filterByX(i, s.x),
                    c = l.map(function(f) {
                        return r.addName(f)
                    });
                r.showTooltip(c, t), r.setExpand(s.index, s.id, !0), r.showGridFocus(c);
                var u = r.dist(s, o);
                (r.isBarType(s.id) || u < r.getPointSensitivity(s)) && (r.$el.svg.select(".".concat(Kt.eventRect)).style("cursor", "pointer"), e && !a.mouseover && (n.data_onover.call(r.api, s), a.mouseover = s))
            }
        },
        unselectRect: function() {
            var t = this,
                e = t.$el,
                r = e.circle,
                n = e.tooltip;
            t.$el.svg.select(".".concat(Kt.eventRect)).style("cursor", null), t.hideGridFocus(), n && (t.hideTooltip(), t._handleLinkedCharts(!1)), r && !t.isPointFocusOnly() && t.unexpandCircles(), t.expandBarTypeShapes(!1)
        },
        generateEventRectsForSingleX: function(t) {
            var e = this,
                r = e.config,
                n = e.state,
                a = n.eventReceiver,
                i = t.style("cursor", r.data_selection_enabled && r.data_selection_grouped ? "pointer" : null).on("click", function(s) {
                    n.event = s;
                    var l = a.currentIdx,
                        c = a.data,
                        u = c[l === -1 ? e.getDataIndexFromEvent(s) : l];
                    e.clickHandlerForSingleX.bind(this)(u, e)
                });
            if (n.inputType === "mouse") {
                var o = function(s) {
                    var l = s ? e.getDataIndexFromEvent(s) : a.currentIdx;
                    return l > -1 ? a.data[l] : null
                };
                i.on("mouseover", function(s) {
                    n.event = s, e.updateEventRect()
                }).on("mousemove", function(s) {
                    var l = o(s);
                    if (n.event = s, !!l) {
                        var c = l.index,
                            u = r.line_step_type;
                        if (r.line_step_tooltipMatch && e.hasType("step") && /^step\-(before|after)$/.test(u)) {
                            var f = e.scale.zoom || e.scale.x,
                                d = e.axis.xs[c],
                                h = f.invert(xe(s, this)[0]);
                            u === "step-after" && h < d ? c -= 1 : u === "step-before" && h > d && (c += 1)
                        }
                        var p = r.tooltip_grouped && c === a.currentIdx;
                        if (n.dragging || n.flowing || e.hasArcType() || p) {
                            r.tooltip_show && p && e.setTooltipPosition();
                            return
                        }
                        c !== a.currentIdx && (e.setOverOut(!1, a.currentIdx), a.currentIdx = c), c === -1 ? e.unselectRect() : e.selectRectForSingle(this, c), e.setOverOut(c !== -1, c)
                    }
                }).on("mouseout", function(s) {
                    n.event = s, !(!r || e.hasArcType() || a.currentIdx === -1) && (e.unselectRect(), e.setOverOut(!1, a.currentIdx), a.currentIdx = -1)
                })
            }
            return i
        },
        clickHandlerForSingleX: function(t, e) {
            var r = e,
                n = r.config,
                a = r.state,
                i = r.$el.main;
            if (!t || r.hasArcType() || a.cancelClick) {
                a.cancelClick && (a.cancelClick = !1);
                return
            }
            var o = t.index;
            i.selectAll(".".concat(Mt.shape, "-").concat(o)).each(function(s) {
                var l;
                (n.data_selection_grouped || r.isWithinShape(this, s)) && ((l = r.toggleShape) === null || l === void 0 || l.call(r, this, s, o), n.data_onclick.bind(r.api)(s, this))
            })
        },
        generateEventRectsForMultipleXs: function(t) {
            var e = this,
                r = e.state;
            t.on("click", function(n) {
                r.event = n, e.clickHandlerForMultipleXS.bind(this)(e)
            }), r.inputType === "mouse" && t.on("mouseover mousemove", function(n) {
                r.event = n, e.selectRectForMultipleXs(this)
            }).on("mouseout", function(n) {
                r.event = n, !(!e.config || e.hasArcType()) && e.unselectRect()
            })
        },
        clickHandlerForMultipleXS: function(t) {
            var e = t,
                r = e.config,
                n = e.state,
                a = e.filterTargetsToShow(e.data.targets);
            if (!e.hasArcType(a)) {
                var i = xe(n.event, this),
                    o = e.findClosestFromTargets(a, i),
                    s = r.point_sensitivity === "radius" ? o.r : r.point_sensitivity;
                o && (e.isBarType(o.id) || e.dist(o, i) < s) && e.$el.main.selectAll(".".concat(Mt.shapes).concat(e.getTargetSelectorSuffix(o.id))).selectAll(".".concat(Mt.shape, "-").concat(o.index)).each(function() {
                    var l;
                    (r.data_selection_grouped || e.isWithinShape(this, o)) && ((l = e.toggleShape) === null || l === void 0 || l.call(e, this, o, o.index), r.data_onclick.bind(e.api)(o, this))
                })
            }
        }
    }, ly = {
        generateFlow: function(t) {
            var e = this,
                r = e.data,
                n = e.state,
                a = e.$el;
            return function() {
                var i = t.flow.length;
                n.flowing = !0, r.targets.forEach(function(s) {
                    s.values.splice(0, i)
                }), e.updateXGrid && e.updateXGrid(!0);
                var o = {};
                ["axis.x", "grid.x", "gridLines.x", "region.list", "text", "bar", "line", "area", "circle"].forEach(function(s) {
                    var l = s.split("."),
                        c = a[l[0]];
                    c && l.length > 1 && (c = c[l[1]]), c ? .size() && (o[s] = c)
                }), e.hideGridFocus(), e.setFlowList(o, t)
            }
        },
        setFlowList: function(t, e) {
            var r = this,
                n = e.flow,
                a = e.targets,
                i = n.duration,
                o = i === void 0 ? e.duration : i,
                s = n.index,
                l = n.length,
                c = n.orgDataCount,
                u = r.getFlowTransform(a, c, s, l),
                f = rp(),
                d;
            f.add(Object.keys(t).map(function(h) {
                return d = t[h].transition().ease(co).duration(o), h === "axis.x" ? d = d.call(function(p) {
                    r.axis.x.setTransition(p).create(p)
                }) : h === "region.list" ? d = d.filter(r.isRegionOnX).attr("transform", u) : d = d.attr("transform", u), d
            })), d.call(f, function() {
                r.cleanUpFlow(t, e)
            })
        },
        cleanUpFlow: function(t, e) {
            var r = this,
                n = r.config,
                a = r.state,
                i = r.$el.svg,
                o = n.axis_rotated,
                s = e.flow,
                l = e.shape,
                c = e.xv,
                u = l.pos,
                f = u.cx,
                d = u.cy,
                h = u.xForText,
                p = u.yForText,
                g = s.done,
                m = g === void 0 ? function() {} : g,
                v = s.length;
            v && (["circle", "text", "shape", "eventRect"].forEach(function(x) {
                for (var y = [], _ = 0; _ < v; _++) y.push(".".concat(At[x], "-").concat(_));
                i.selectAll(".".concat(At["".concat(x, "s")])).selectAll(y).remove()
            }), i.select(".".concat(At.xgrid)).remove()), Object.keys(t).forEach(function(x) {
                var y = t[x];
                if (x !== "axis.x" && y.attr("transform", null), x === "grid.x") y.attr(a.xgridAttr);
                else if (x === "gridLines.x") y.attr("x1", o ? 0 : c).attr("x2", o ? a.width : c), y.select("text").attr("x", o ? a.width : 0).attr("y", c);
                else if (/^(area|bar|line)$/.test(x)) y.attr("d", l.type[x]);
                else if (x === "text") y.attr("x", h).attr("y", p).style("fill-opacity", r.opacityForText.bind(r));
                else if (x === "circle")
                    if (r.isCirclePoint()) y.attr("cx", f).attr("cy", d);
                    else {
                        var _ = function(T) {
                                return f(T) - n.point_r
                            },
                            w = function(T) {
                                return d(T) - n.point_r
                            };
                        y.attr("x", _).attr("y", w)
                    }
                else x === "region.list" && y.select("rect").filter(r.isRegionOnX).attr("x", r.regionX.bind(r)).attr("width", r.regionWidth.bind(r))
            }), n.interaction_enabled && r.redrawEventRect(), m.call(r.api), a.flowing = !1
        },
        getFlowTransform: function(t, e, r, n) {
            var a = this,
                i = a.data,
                o = a.scale.x,
                s = i.targets[0].values,
                l = a.getValueOnIndex(s, r),
                c = a.getValueOnIndex(s, r + n),
                u, f = o.domain(),
                d = a.updateXDomain(t, !0, !0);
            e ? e === 1 || l ? .x === c ? .x ? u = o(f[0]) - o(d[0]) : u = a.axis.isTimeSeries() ? o(f[0]) - o(d[0]) : o(l ? .x || 0) - o(c.x) : s.length !== 1 ? u = o(f[0]) - o(d[0]) : a.axis.isTimeSeries() ? (l = a.getValueOnIndex(s, 0), c = a.getValueOnIndex(s, s.length - 1), u = o(l.x) - o(c.x)) : u = Nn(d) / 2;
            var h = Nn(f) / Nn(d);
            return "translate(".concat(u, ",0) scale(").concat(h, ",1)")
        }
    }, cy = {
        initClip: function() {
            var t = this,
                e = t.state,
                r = e.clip,
                n = e.datetimeId;
            r.id = "".concat(n, "-clip"), r.idXAxis = "".concat(r.id, "-xaxis"), r.idYAxis = "".concat(r.id, "-yaxis"), r.idGrid = "".concat(r.id, "-grid"), r.path = t.getClipPath(r.id), r.pathXAxis = t.getClipPath(r.idXAxis), r.pathYAxis = t.getClipPath(r.idYAxis), r.pathGrid = t.getClipPath(r.idGrid)
        },
        getClipPath: function(t) {
            var e = this,
                r = e.config;
            if (!r.clipPath && /-clip$/.test(t) || !r.axis_x_clipPath && /-clip-xaxis$/.test(t) || !r.axis_y_clipPath && /-clip-yaxis$/.test(t)) return null;
            var n = Q.navigator ? Q.navigator.appVersion.toLowerCase().indexOf("msie 9.") >= 0 : !1;
            return "url(".concat(n ? "" : lt.URL.split("#")[0], "#").concat(t, ")")
        },
        appendClip: function(t, e) {
            e && t.append("clipPath").attr("id", e).append("rect")
        },
        setXAxisClipPath: function(t) {
            var e = this,
                r = e.config,
                n = e.state,
                a = n.margin,
                i = n.width,
                o = n.height,
                s = r.axis_rotated,
                l = Math.max(30, a.left) - (s ? 0 : 20),
                c = (s ? a.top + o + 10 : a.bottom) + 20,
                u = s ? -(1 + l) : -(l - 1),
                f = -15,
                d = s ? a.left + 20 : i + 10 + l;
            t.attr("x", u).attr("y", f).attr("width", d).attr("height", c)
        },
        setYAxisClipPath: function(t) {
            var e = this,
                r = e.config,
                n = e.state,
                a = n.margin,
                i = n.width,
                o = n.height,
                s = r.axis_rotated,
                l = Math.max(30, a.left) - (s ? 20 : 0),
                c = r.axis_y_inner,
                u = c && !s ? r.axis_y_label.text ? -20 : -1 : s ? -(1 + l) : -(l - 1),
                f = -(s ? 20 : a.top),
                d = (s ? i + 15 + l : a.left + 20) + (c ? 20 : 0),
                h = (s ? a.bottom + 10 : a.top + o) + 10;
            t.attr("x", u).attr("y", f).attr("width", d).attr("height", h)
        },
        updateXAxisTickClip: function() {
            var t = this,
                e = t.config,
                r = t.state,
                n = r.clip,
                a = r.xAxisHeight,
                i = t.$el.defs,
                o = t.getHorizontalAxisHeight("x");
            if (i && !n.idXAxisTickTexts) {
                var s = "".concat(n.id, "-xaxisticktexts");
                t.appendClip(i, s), n.pathXAxisTickTexts = t.getClipPath(n.idXAxisTickTexts), n.idXAxisTickTexts = s
            }!e.axis_x_tick_multiline && t.getAxisTickRotate("x") && o !== a && (t.setXAxisTickClipWidth(), t.setXAxisTickTextClipPathWidth()), t.state.xAxisHeight = o
        },
        setXAxisTickClipWidth: function() {
            var t = this,
                e = t.config,
                r = t.state.current.maxTickSize,
                n = t.getAxisTickRotate("x");
            if (!e.axis_x_tick_multiline && n) {
                var a = Math.sin(Math.PI / 180 * Math.abs(n));
                r.x.clipPath = (t.getHorizontalAxisHeight("x") - 20) / a
            } else r.x.clipPath = null
        },
        setXAxisTickTextClipPathWidth: function() {
            var t = this,
                e = t.state,
                r = e.clip,
                n = e.current,
                a = t.$el.svg;
            a && a.select("#".concat(r.idXAxisTickTexts, " rect")).attr("width", n.maxTickSize.x.clipPath).attr("height", 30)
        }
    }, uy = function(t) {
        return H(t.position) || "end"
    }, fy = function(t) {
        return t.position === "start" ? 4 : t.position === "middle" ? 0 : -4
    };
    dy = {
        hasGrid: function() {
            var t = this.config;
            return ["x", "y"].some(function(e) {
                return t["grid_".concat(e, "_show")] || t["grid_".concat(e, "_lines")].length
            })
        },
        initGrid: function() {
            var t = this;
            t.hasGrid() && t.initGridLines(), t.initFocusGrid()
        },
        initGridLines: function() {
            var t = this,
                e = t.config,
                r = t.state.clip,
                n = t.$el;
            (e.grid_x_lines.length || e.grid_y_lines.length) && (n.gridLines.main = n.main.insert("g", ".".concat(Z.chart).concat(e.grid_lines_front ? " + *" : "")).attr("clip-path", r.pathGrid).attr("class", "".concat(ut.grid, " ").concat(ut.gridLines)), n.gridLines.main.append("g").attr("class", ut.xgridLines), n.gridLines.main.append("g").attr("class", ut.ygridLines), n.gridLines.x = ra([]))
        },
        updateXGrid: function(t) {
            var e = this,
                r = e.config,
                n = e.scale,
                a = e.state,
                i = e.$el,
                o = i.main,
                s = i.grid,
                l = r.axis_rotated,
                c = e.generateGridData(r.grid_x_type, n.x),
                u = e.axis.isCategorized() ? e.axis.x.tickOffset() : 0,
                f = function(d) {
                    return (n.zoom || n.x)(d) + u * (l ? -1 : 1)
                };
            a.xgridAttr = l ? {
                x1: 0,
                x2: a.width,
                y1: f,
                y2: f
            } : {
                x1: f,
                x2: f,
                y1: 0,
                y2: a.height
            }, s.x = o.select(".".concat(ut.xgrids)).selectAll(".".concat(ut.xgrid)).data(c), s.x.exit().remove(), s.x = s.x.enter().append("line").attr("class", ut.xgrid).merge(s.x), t || s.x.each(function() {
                var d = P(this);
                Object.keys(a.xgridAttr).forEach(function(h) {
                    d.attr(h, a.xgridAttr[h]).style("opacity", function() {
                        return d.attr(l ? "y1" : "x1") === (l ? a.height : 0) ? "0" : null
                    })
                })
            })
        },
        updateYGrid: function() {
            var t = this,
                e = t.axis,
                r = t.config,
                n = t.scale,
                a = t.state,
                i = t.$el,
                o = i.grid,
                s = i.main,
                l = r.axis_rotated,
                c = function(f) {
                    return Math.ceil(n.y(f))
                },
                u = e.y.getGeneratedTicks(r.grid_y_ticks) || t.scale.y.ticks(r.grid_y_ticks);
            o.y = s.select(".".concat(ut.ygrids)).selectAll(".".concat(ut.ygrid)).data(u), o.y.exit().remove(), o.y = o.y.enter().append("line").attr("class", ut.ygrid).merge(o.y), o.y.attr("x1", l ? c : 0).attr("x2", l ? c : a.width).attr("y1", l ? 0 : c).attr("y2", l ? a.height : c), Hh(o.y, "grid")
        },
        updateGrid: function() {
            var t = this,
                e = t.$el,
                r = e.grid,
                n = e.gridLines;
            !n.main && t.initGridLines(), r.main.style("visibility", t.hasArcType() ? "hidden" : null), t.hideGridFocus(), t.updateGridLines("x"), t.updateGridLines("y")
        },
        updateGridLines: function(t) {
            var e = this,
                r = e.config,
                n = e.$el,
                a = n.gridLines,
                i = n.main,
                o = e.$T,
                s = r.axis_rotated,
                l = t === "x";
            r["grid_".concat(t, "_show")] && e["update".concat(t.toUpperCase(), "Grid")]();
            var c = i.select(".".concat(ut["".concat(t, "gridLines")])).selectAll(".".concat(ut["".concat(t, "gridLine")])).data(r["grid_".concat(t, "_lines")]);
            o(c.exit()).style("opacity", "0").remove();
            var u = c.enter().append("g");
            u.append("line").style("opacity", "0"), c = u.merge(c), c.each(function(f) {
                var d = P(this);
                d.select("text").empty() && f.text && d.append("text").style("opacity", "0")
            }), o(c.attr("class", function(f) {
                return "".concat(ut["".concat(t, "gridLine")], " ").concat(f.class || "").trim()
            }).select("text").attr("text-anchor", uy).attr("transform", function() {
                return l ? s ? null : "rotate(-90)" : s ? "rotate(-90)" : null
            }).attr("dx", fy).attr("dy", -5)).text(function(f) {
                var d;
                return (d = f.text) !== null && d !== void 0 ? d : this.remove()
            }), a[t] = c
        },
        redrawGrid: function(t) {
            var e = this,
                r = e.config.axis_rotated,
                n = e.state,
                a = n.width,
                i = n.height,
                o = e.$el.gridLines,
                s = e.$T,
                l = e.xv.bind(e),
                c = e.yv.bind(e),
                u = o.x.select("line"),
                f = o.x.select("text"),
                d = o.y.select("line"),
                h = o.y.select("text");
            return u = s(u, t).attr("x1", r ? 0 : l).attr("x2", r ? a : l).attr("y1", r ? l : 0).attr("y2", r ? l : i), f = s(f, t).attr("x", Uh(!r, a, i)).attr("y", l), d = s(d, t).attr("x1", r ? c : 0).attr("x2", r ? c : a).attr("y1", r ? 0 : c).attr("y2", r ? i : c), h = s(h, t).attr("x", Uh(r, a, i)).attr("y", c), [u.style("opacity", null), f.style("opacity", null), d.style("opacity", null), h.style("opacity", null)]
        },
        initFocusGrid: function() {
            var t = this,
                e = t.config,
                r = t.state.clip,
                n = t.$el,
                a = e.grid_front,
                i = ".".concat(a && n.gridLines.main ? ut.gridLines : Z.chart).concat(a ? " + *" : ""),
                o = n.main.insert("g", i).attr("clip-path", r.pathGrid).attr("class", ut.grid);
            n.grid.main = o, e.grid_x_show && o.append("g").attr("class", ut.xgrids), e.grid_y_show && o.append("g").attr("class", ut.ygrids), e.interaction_enabled && e.grid_focus_show && (o.append("g").attr("class", st.xgridFocus).append("line").attr("class", st.xgridFocus), e.grid_focus_y && !e.tooltip_grouped && o.append("g").attr("class", st.ygridFocus).append("line").attr("class", st.ygridFocus))
        },
        showGridFocus: function(t) {
            var e, r = this,
                n = r.config,
                a = r.state,
                i = a.width,
                o = a.height,
                s = n.axis_rotated,
                l = r.$el.main.selectAll("line.".concat(st.xgridFocus, ", line.").concat(st.ygridFocus)),
                c = (t || [l.datum()]).filter(function(d) {
                    return d && H(r.getBaseValue(d))
                });
            if (!(!n.tooltip_show || c.length === 0 || r.hasType("bubble") || r.hasArcType())) {
                var u = n.grid_focus_edge && !n.tooltip_grouped,
                    f = r.xx.bind(r);
                l.style("visibility", null).data(c.concat(c)).each(function(d) {
                    var h = P(this),
                        p = {
                            x: f(d),
                            y: r.getYScaleById(d.id)(d.value)
                        },
                        g;
                    if (h.classed(st.xgridFocus)) g = s ? [null, p.x, u ? p.y : i, p.x] : [p.x, u ? p.y : null, p.x, o];
                    else {
                        var m = r.axis.getId(d.id) === "y2";
                        g = s ? [p.y, u && !m ? p.x : null, p.y, u && m ? p.x : o] : [u && m ? p.x : null, p.y, u && !m ? p.x : i, p.y]
                    }["x1", "y1", "x2", "y2"].forEach(function(v, x) {
                        return h.attr(v, g[x])
                    })
                }), Hh(l, "grid"), (e = r.showCircleFocus) === null || e === void 0 || e.call(r, t)
            }
        },
        hideGridFocus: function() {
            var t, e = this,
                r = e.state,
                n = r.inputType,
                a = r.resizing,
                i = e.$el.main;
            (n === "mouse" || !a) && (i.selectAll("line.".concat(st.xgridFocus, ", line.").concat(st.ygridFocus)).style("visibility", "hidden"), (t = e.hideCircleFocus) === null || t === void 0 || t.call(e))
        },
        updateGridFocus: function() {
            var t, e = this,
                r = e.state,
                n = r.inputType,
                a = r.width,
                i = r.height,
                o = r.resizing,
                s = e.$el.grid,
                l = s.main.select("line.".concat(st.xgridFocus));
            if (n === "touch") l.empty() ? o && ((t = e.showCircleFocus) === null || t === void 0 || t.call(e)) : e.showGridFocus();
            else {
                var c = e.config.axis_rotated;
                l.attr("x1", c ? 0 : -10).attr("x2", c ? a : -10).attr("y1", c ? -10 : 0).attr("y2", c ? -10 : i)
            }
            return !0
        },
        generateGridData: function(t, e) {
            var r = this,
                n = r.$el.main.select(".".concat(yt.axisX)).selectAll(".tick").size(),
                a = [];
            if (t === "year")
                for (var i = r.getXDomain(), o = i.map(function(u) {
                        return u.getFullYear()
                    }), s = o[0], l = o[1], c = s; c <= l; c++) a.push(new Date("".concat(c, "-01-01 00:00:00")));
            else a = e.ticks(10), a.length > n && (a = a.filter(function(u) {
                return String(u).indexOf(".") < 0
            }));
            return a
        },
        getGridFilterToRemove: function(t) {
            return t ? function(e) {
                var r = !1;
                return (K(t) ? t.concat() : [t]).forEach(function(n) {
                    ("value" in n && e.value === n.value || "class" in n && e.class === n.class) && (r = !0)
                }), r
            } : function() {
                return !0
            }
        },
        removeGridLines: function(t, e) {
            var r = this,
                n = r.config,
                a = r.$T,
                i = r.getGridFilterToRemove(t),
                o = function(u) {
                    return !i(u)
                },
                s = e ? ut.xgridLines : ut.ygridLines,
                l = e ? ut.xgridLine : ut.ygridLine;
            a(r.$el.main.select(".".concat(s)).selectAll(".".concat(l)).filter(i)).style("opacity", "0").remove();
            var c = "grid_".concat(e ? "x" : "y", "_lines");
            n[c] = n[c].filter(o)
        }
    }, hy = {
        initRegion: function() {
            var t = this,
                e = t.$el;
            e.region.main = e.main.insert("g", ":first-child").attr("clip-path", t.state.clip.path).attr("class", Bn.regions)
        },
        updateRegion: function() {
            var t = this,
                e = t.config,
                r = t.$el.region,
                n = t.$T;
            r.main || t.initRegion(), r.main.style("visibility", t.hasArcType() ? "hidden" : null);
            var a = r.main.selectAll(".".concat(Bn.region)).data(e.regions);
            n(a.exit()).style("opacity", "0").remove();
            var i = a.enter().append("g");
            i.append("rect").style("fill-opacity", "0"), r.list = i.merge(a).attr("class", t.classRegion.bind(t)), r.list.each(function(o) {
                var s, l = P(this);
                l.select("text").empty() && (!((s = o.label) === null || s === void 0) && s.text) && P(this).append("text").style("opacity", "0")
            })
        },
        redrawRegion: function(t) {
            var e = this,
                r = e.$el.region,
                n = e.$T,
                a = r.list.select("rect"),
                i = r.list.selectAll("text");
            return a = n(a, t).attr("x", e.regionX.bind(e)).attr("y", e.regionY.bind(e)).attr("width", e.regionWidth.bind(e)).attr("height", e.regionHeight.bind(e)), i = n(i, t).attr("transform", function(o) {
                var s, l = (s = o.label) !== null && s !== void 0 ? s : {},
                    c = l.x,
                    u = c === void 0 ? 0 : c,
                    f = l.y,
                    d = f === void 0 ? 0 : f,
                    h = l.rotated,
                    p = h === void 0 ? !1 : h;
                return "translate(".concat(e.regionX.bind(e)(o) + u, ", ").concat(e.regionY.bind(e)(o) + d, ")").concat(p ? " rotate(-90)" : "")
            }).attr("text-anchor", function(o) {
                var s;
                return !((s = o.label) === null || s === void 0) && s.rotated ? "end" : null
            }).attr("dy", "1em").style("fill", function(o) {
                var s, l;
                return (l = (s = o.label) === null || s === void 0 ? void 0 : s.color) !== null && l !== void 0 ? l : null
            }).text(function(o) {
                var s;
                return (s = o.label) === null || s === void 0 ? void 0 : s.text
            }), [a.style("fill-opacity", function(o) {
                return H(o.opacity) ? o.opacity : null
            }).on("end", function() {
                P(this.parentNode).selectAll("rect:not([x])").remove()
            }), i.style("opacity", null)]
        },
        getRegionXY: function(t, e) {
            var r = this,
                n = r.config,
                a = r.scale,
                i = n.axis_rotated,
                o = t === "x",
                s = "start",
                l, c = 0;
            return e.axis === "y" || e.axis === "y2" ? (o || (s = "end"), (o ? i : !i) && s in e && (l = a[e.axis], c = l(e[s]))) : (o ? !i : i) && s in e && (l = a.zoom || a.x, c = l(r.axis.isTimeSeries() ? te.call(r, e[s]) : e[s])), c
        },
        regionX: function(t) {
            return this.getRegionXY("x", t)
        },
        regionY: function(t) {
            return this.getRegionXY("y", t)
        },
        getRegionSize: function(t, e) {
            var r = this,
                n = r.config,
                a = r.scale,
                i = r.state,
                o = n.axis_rotated,
                s = t === "width",
                l = r[s ? "regionX" : "regionY"](e),
                c, u = "end",
                f = i[t];
            return e.axis === "y" || e.axis === "y2" ? (s || (u = "start"), (s ? o : !o) && u in e && (c = a[e.axis], f = c(e[u]))) : (s ? !o : o) && u in e && (c = a.zoom || a.x, f = c(r.axis.isTimeSeries() ? te.call(r, e[u]) : e[u])), f < l ? 0 : f - l
        },
        regionWidth: function(t) {
            return this.getRegionSize("width", t)
        },
        regionHeight: function(t) {
            return this.getRegionSize("height", t)
        },
        isRegionOnX: function(t) {
            return !t.axis || t.axis === "x"
        }
    }, py = {
        getAxisSize: function(t) {
            var e = this,
                r = e.config.axis_rotated;
            return r && t === "x" || !r && /y2?/.test(t) ? e.getAxisWidthByAxisId(t, !0) : e.getHorizontalAxisHeight(t)
        },
        getAxisWidthByAxisId: function(t, e) {
            var r, n, a = this;
            if (a.axis) {
                var i = (r = a.axis) === null || r === void 0 ? void 0 : r.getLabelPositionById(t),
                    o = a.axis.getMaxTickSize(t, e).width,
                    s = o === 0 ? .5 : 0;
                return o + (((n = a.config.padding) === null || n === void 0 ? void 0 : n.mode) === "fit" ? i.isInner ? 10 + s : 10 : i.isInner ? 20 + s : 40)
            } else return 40
        },
        getHorizontalAxisHeight: function(t) {
            var e, r, n = this,
                a = n.config,
                i = n.state,
                o = i.rotatedPadding,
                s = i.isLegendRight,
                l = i.isLegendInset,
                c = a.axis_rotated,
                u = ((e = a.padding) === null || e === void 0 ? void 0 : e.mode) === "fit",
                f = a["axis_".concat(t, "_inner")],
                d = a["axis_".concat(t, "_label")].text,
                h = 13,
                p = ((r = a.padding) === null || r === void 0 ? void 0 : r.mode) === "fit" ? f && !d ? t === "y" ? 1 : 0 : 20 : 30;
            if (t === "x" && !a.axis_x_show) return 8;
            if (t === "x" && z(a.axis_x_height)) return a.axis_x_height;
            if (t === "y" && !a.axis_y_show) return a.legend_show && !s && !l ? 10 : 1;
            if (t === "y2" && !a.axis_y2_show) return u ? 0 : o.top;
            var g = n.axis.getMaxTickSize(t);
            return g.height > h && (p += g.height - h), p + (n.axis.getLabelPositionById(t).isInner ? 0 : 10) + (t === "y2" && !c ? -10 : 0)
        },
        getEventRectWidth: function() {
            var t = this,
                e = t.config,
                r = t.axis,
                n = e.axis_x_inverted,
                a = r.x.tickInterval();
            return Math.max(0, n ? Math.abs(a) : a)
        },
        getAxisTickRotate: function(t) {
            var e = this,
                r = e.axis,
                n = e.config,
                a = e.state,
                i = e.$el,
                o = n["axis_".concat(t, "_tick_rotate")];
            if (t === "x") {
                var s = r.isCategorized() || r.isTimeSeries();
                if (n.axis_x_tick_fit && s) {
                    var l = n.axis_x_tick_count,
                        c = a.current.maxTickSize.x.ticks.length,
                        u = 0;
                    if (l ? u = l > c ? c : l : c && (u = c), u !== a.axis.x.tickCount) {
                        var f = e.data.targets;
                        a.axis.x.padding = e.getXDomainPadding([e.getXDomainMinMax(f, "min"), e.getXDomainMinMax(f, "max")], u)
                    }
                    a.axis.x.tickCount = u
                }
                i.svg && n.axis_x_tick_autorotate && n.axis_x_tick_fit && !n.axis_x_tick_multiline && !n.axis_x_tick_culling && s && (o = e.needToRotateXAxisTickTexts() ? n.axis_x_tick_rotate : 0)
            }
            return o
        },
        needToRotateXAxisTickTexts: function() {
            var t = this,
                e = t.state,
                r = e.axis,
                n = e.current,
                a = n.width - t.getCurrentPaddingByDirection("left") - t.getCurrentPaddingByDirection("right"),
                i = r.x.tickCount + r.x.padding.left + r.x.padding.right,
                o = t.axis.getMaxTickSize("x").width,
                s = i ? a / i : 0;
            return o > s
        }
    }, gy = {
        data_xs: {},
        data_xFormat: "%Y-%m-%d",
        data_xLocaltime: !0,
        data_xSort: !0,
        data_axes: {},
        data_regions: {},
        data_stack_normalize: !1
    }, vy = {
        axis_x_clipPath: !0,
        axis_x_show: !0,
        axis_x_type: "indexed",
        axis_x_localtime: !0,
        axis_x_categories: [],
        axis_x_tick_centered: !1,
        axis_x_tick_format: void 0,
        axis_x_tick_culling: {},
        axis_x_tick_culling_max: 10,
        axis_x_tick_culling_lines: !0,
        axis_x_tick_count: void 0,
        axis_x_tick_show: !0,
        axis_x_tick_text_show: !0,
        axis_x_tick_text_position: {
            x: 0,
            y: 0
        },
        axis_x_tick_fit: !0,
        axis_x_tick_values: null,
        axis_x_tick_autorotate: !1,
        axis_x_tick_rotate: 0,
        axis_x_tick_outer: !0,
        axis_x_tick_multiline: !0,
        axis_x_tick_width: null,
        axis_x_tick_tooltip: !1,
        axis_x_max: void 0,
        axis_x_min: void 0,
        axis_x_inverted: !1,
        axis_x_padding: {},
        axis_x_height: void 0,
        axis_x_extent: void 0,
        axis_x_label: {},
        axis_x_axes: []
    }, my = {
        axis_y_clipPath: !0,
        axis_y_show: !0,
        axis_y_type: "indexed",
        axis_y_max: void 0,
        axis_y_min: void 0,
        axis_y_inverted: !1,
        axis_y_center: void 0,
        axis_y_inner: !1,
        axis_y_label: {},
        axis_y_tick_format: void 0,
        axis_y_tick_culling: !1,
        axis_y_tick_culling_max: 5,
        axis_y_tick_culling_lines: !0,
        axis_y_tick_outer: !0,
        axis_y_tick_values: null,
        axis_y_tick_rotate: 0,
        axis_y_tick_count: void 0,
        axis_y_tick_show: !0,
        axis_y_tick_stepSize: null,
        axis_y_tick_text_show: !0,
        axis_y_tick_text_position: {
            x: 0,
            y: 0
        },
        axis_y_tick_time_value: void 0,
        axis_y_padding: {},
        axis_y_default: void 0,
        axis_y_axes: []
    }, xy = {
        axis_y2_show: !1,
        axis_y2_type: "indexed",
        axis_y2_max: void 0,
        axis_y2_min: void 0,
        axis_y2_inverted: !1,
        axis_y2_center: void 0,
        axis_y2_inner: !1,
        axis_y2_label: {},
        axis_y2_tick_format: void 0,
        axis_y2_tick_culling: !1,
        axis_y2_tick_culling_max: 5,
        axis_y2_tick_culling_lines: !0,
        axis_y2_tick_outer: !0,
        axis_y2_tick_values: null,
        axis_y2_tick_rotate: 0,
        axis_y2_tick_count: void 0,
        axis_y2_tick_show: !0,
        axis_y2_tick_stepSize: null,
        axis_y2_tick_text_show: !0,
        axis_y2_tick_text_position: {
            x: 0,
            y: 0
        },
        axis_y2_padding: {},
        axis_y2_default: void 0,
        axis_y2_axes: []
    }, _y = U(U(U({
        axis_rotated: !1
    }, vy), my), xy), yy = {
        grid_x_show: !1,
        grid_x_type: "tick",
        grid_x_lines: [],
        grid_y_show: !1,
        grid_y_lines: [],
        grid_y_ticks: void 0,
        grid_focus_edge: !1,
        grid_focus_show: !0,
        grid_focus_y: !1,
        grid_front: !1,
        grid_lines_front: !0
    }, by = [K0, Q0, ny, J0, ty, ey, ry], Ty = [iy, cy, sy, ly, dy, hy, py], wy = [gy, _y, yy];
    $y = {
        initPie: function() {
            var t = this,
                e = t.config,
                r = e.data_type,
                n = e["".concat(r, "_padding")],
                a = e["".concat(r, "_startingAngle")] || 0,
                i = (n ? n * .01 : e["".concat(r, "_padAngle")]) || 0;
            t.pie = Zo().startAngle(a).endAngle(a + 2 * Math.PI).padAngle(i).value(function(o) {
                return o.values.reduce(function(s, l) {
                    return s + l.value
                }, 0)
            }).sort(t.getSortCompareFn.bind(t)(!0))
        },
        updateRadius: function() {
            var t = this,
                e = t.config,
                r = t.state,
                n = e.data_type,
                a = e["".concat(n, "_padding")],
                i = e.gauge_width || e.donut_width,
                o = t.filterTargetsToShow(t.data.targets).length * e.gauge_arcs_minWidth;
            r.radiusExpanded = Math.min(r.arcWidth, r.arcHeight) / 2 * (t.hasMultiArcGauge() && e.gauge_label_show ? .85 : 1), r.radius = r.radiusExpanded * .95, r.innerRadiusRatio = i ? (r.radius - i) / r.radius : .6, r.gaugeArcWidth = i || (o <= r.radius - r.innerRadius ? r.radius - r.innerRadius : o <= r.radius ? o : r.radius);
            var s = e.pie_innerRadius || (a ? a * (r.innerRadiusRatio + .1) : 0);
            r.outerRadius = e.pie_outerRadius, r.innerRadius = t.hasType("donut") || t.hasType("gauge") ? r.radius * r.innerRadiusRatio : s
        },
        getRadius: function(t) {
            var e = this,
                r = t ? .data,
                n = e.state,
                a = n.innerRadius,
                i = n.outerRadius;
            return !z(a) && r && (a = a[r.id] || 0), at(i) && r && r.id in i ? i = i[r.id] : z(i) || (i = e.state.radius), {
                innerRadius: a,
                outerRadius: i
            }
        },
        updateArc: function() {
            var t = this;
            t.updateRadius(), t.svgArc = t.getSvgArc(), t.svgArcExpanded = t.getSvgArcExpanded()
        },
        getArcLength: function() {
            var t = this,
                e = t.config,
                r = e.gauge_arcLength * 3.6,
                n = 2 * (r / 360);
            return r < -360 ? n = -2 : r > 360 && (n = 2), n * Math.PI
        },
        getGaugeStartAngle: function() {
            var t = this,
                e = t.config,
                r = e.gauge_fullCircle,
                n = -1 * Math.PI / 2,
                a = Math.PI / 2,
                i = e.gauge_startingAngle;
            return !r && i <= n ? i = n : !r && i >= a ? i = a : (i > Math.PI || i < -1 * Math.PI) && (i = Math.PI), i
        },
        updateAngle: function(t) {
            var e = this,
                r = e.config,
                n = e.state,
                a = e.pie,
                i = t,
                o = !1;
            if (!r) return null;
            var s = e.getGaugeStartAngle(),
                l = r.gauge_fullCircle ? e.getArcLength() : s * -2;
            if (i.data && e.isGaugeType(i.data) && !e.hasMultiArcGauge()) {
                var c = r.gauge_min,
                    u = r.gauge_max,
                    f = e.getTotalDataSum(n.rendered),
                    d = l * ((f - c) / (u - c));
                a = a.startAngle(s).endAngle(d + s)
            }
            if (a(e.filterTargetsToShow()).forEach(function(v, x) {
                    var y;
                    !o && v.data.id === ((y = i.data) === null || y === void 0 ? void 0 : y.id) && (o = !0, i = v, i.index = x)
                }), isNaN(i.startAngle) && (i.startAngle = 0), isNaN(i.endAngle) && (i.endAngle = i.startAngle), i.data && e.hasMultiArcGauge()) {
                var h = r.gauge_min,
                    p = r.gauge_max,
                    g = l / (p - h),
                    m = i.value < h ? 0 : i.value < p ? i.value - h : p - h;
                i.startAngle = s, i.endAngle = s + g * m
            }
            return o ? i : null
        },
        getSvgArc: function() {
            var t = this,
                e = Wh.call(t),
                r = e.inner,
                n = e.outer,
                a = e.corner,
                i = Na().innerRadius(r).outerRadius(n),
                o = function(s, l) {
                    var c, u = "M 0 0";
                    if (s.value || s.data) {
                        var f = l ? s : (c = t.updateAngle(s)) !== null && c !== void 0 ? c : null;
                        f && (u = i.cornerRadius(a(f, n(f)))(f))
                    }
                    return u
                };
            return o.centroid = i.centroid, o
        },
        getSvgArcExpanded: function(t) {
            t === void 0 && (t = 1);
            var e = this,
                r = Wh.call(e, t),
                n = r.inner,
                a = r.outer,
                i = r.corner,
                o = Na().innerRadius(n).outerRadius(a);
            return function(s) {
                var l = e.updateAngle(s),
                    c = a(l),
                    u = 0;
                return l && (u = i(l, c)), l ? o.cornerRadius(u)(l) : "M 0 0"
            }
        },
        getArc: function(t, e, r) {
            return r || this.isArcType(t.data) ? this.svgArc(t, e) : "M 0 0"
        },
        transformForArcLabel: function(t) {
            var e, r = this,
                n = r.config,
                a = r.state.radiusExpanded,
                i = r.updateAngle(t),
                o = "";
            if (i) {
                if (r.hasMultiArcGauge()) {
                    var s = Math.sin(i.endAngle - Math.PI / 2),
                        l = Math.cos(i.endAngle - Math.PI / 2) * (a + 25),
                        c = s * (a + 15 - Math.abs(s * 10)) + 3;
                    o = "translate(".concat(l, ",").concat(c, ")")
                } else if (!r.hasType("gauge") || r.data.targets.length > 1) {
                    var u = r.getRadius(t).outerRadius;
                    r.hasType("polar") && (u = r.getPolarOuterRadius(t, u));
                    var f = this.svgArc.centroid(i),
                        d = f.map(function(v) {
                            return isNaN(v) ? 0 : v
                        }),
                        l = d[0],
                        c = d[1],
                        h = Math.sqrt(l * l + c * c),
                        p = (e = ["donut", "pie", "polar"].filter(r.hasType.bind(r)).map(function(v) {
                            return n["".concat(v, "_label_ratio")]
                        })) === null || e === void 0 ? void 0 : e[0];
                    p ? p = X(p) ? p.bind(r.api)(t, u, h) : p : p = u && (h ? (36 / u > .375 ? 1.175 - 36 / u : .8) * u / h : 0), o = "translate(".concat(l * p, ",").concat(c * p, ")")
                }
            }
            return o
        },
        convertToArcData: function(t) {
            return this.addName({
                id: "data" in t ? t.data.id : t.id,
                value: t.value,
                ratio: this.getRatio("arc", t),
                index: t.index
            })
        },
        textForArcLabel: function(t) {
            var e = this,
                r = e.hasType("gauge");
            e.shouldShowArcLabel() && t.style("fill", e.updateTextColor.bind(e)).attr("filter", e.updateTextBackgroundColor.bind(e)).each(function(n) {
                var a, i = P(this),
                    o = e.updateAngle(n),
                    s = e.getRatio("arc", o),
                    l = e.meetsLabelThreshold(s, (a = ["donut", "gauge", "pie", "polar"].filter(e.hasType.bind(e))) === null || a === void 0 ? void 0 : a[0]);
                if (l) {
                    var c = (o || n).value,
                        u = (e.getArcLabelFormat() || e.defaultArcValueFormat)(c, s, n.data.id).toString();
                    oi(i, u, [-1, 1], r)
                } else i.text("")
            })
        },
        expandArc: function(t) {
            var e = this,
                r = e.state.transiting,
                n = e.$el;
            if (r) {
                var a = setInterval(function() {
                    r || (clearInterval(a), n.legend.selectAll(".".concat(st.legendItemFocused)).size() > 0 && e.expandArc(t))
                }, 10);
                return
            }
            var i = e.mapToTargetIds(t);
            n.svg.selectAll(e.selectorTargets(i, ".".concat(ct.chartArc))).each(function(o) {
                if (e.shouldExpand(o.data.id)) {
                    var s = e.getExpandConfig(o.data.id, "duration"),
                        l = e.getSvgArcExpanded(e.getExpandConfig(o.data.id, "rate"));
                    P(this).selectAll("path").transition().duration(s).attrTween("d", As(e.svgArcExpanded.bind(e))).transition().duration(s * 2).attrTween("d", As(l.bind(e)))
                }
            })
        },
        unexpandArc: function(t) {
            var e = this,
                r = e.state.transiting,
                n = e.$el.svg;
            if (!r) {
                var a = e.mapToTargetIds(t);
                n.selectAll(e.selectorTargets(a, ".".concat(ct.chartArc))).selectAll("path").transition().duration(function(i) {
                    return e.getExpandConfig(i.data.id, "duration")
                }).attrTween("d", As(e.svgArc.bind(e))), n.selectAll("".concat(ct.arc)).style("opacity", null)
            }
        },
        getExpandConfig: function(t, e) {
            var r = this,
                n = r.config,
                a = {
                    duration: 50,
                    rate: .98
                },
                i;
            return r.isDonutType(t) ? i = "donut" : r.isGaugeType(t) ? i = "gauge" : r.isPieType(t) && (i = "pie"), i ? n["".concat(i, "_expand_").concat(e)] : a[e]
        },
        shouldExpand: function(t) {
            var e = this,
                r = e.config;
            return e.isDonutType(t) && r.donut_expand || e.isGaugeType(t) && r.gauge_expand || e.isPieType(t) && r.pie_expand
        },
        shouldShowArcLabel: function() {
            var t = this,
                e = t.config;
            return ["donut", "gauge", "pie", "polar"].some(function(r) {
                return t.hasType(r) && e["".concat(r, "_label_show")]
            })
        },
        getArcLabelFormat: function() {
            var t = this,
                e = t.config,
                r = function(n) {
                    return n
                };
            return ["donut", "gauge", "pie", "polar"].filter(t.hasType.bind(t)).forEach(function(n) {
                r = e["".concat(n, "_label_format")]
            }), X(r) ? r.bind(t.api) : r
        },
        updateTargetsForArc: function(t) {
            var e = this,
                r = e.$el,
                n = e.hasType("gauge"),
                a = e.getChartClass("Arc"),
                i = e.getClass("arcs", !0),
                o = e.classFocus.bind(e),
                s = r.main.select(".".concat(ct.chartArcs)),
                l = s.selectAll(".".concat(ct.chartArc)).data(e.pie(t)).attr("class", function(u) {
                    return a(u) + o(u.data)
                }),
                c = l.enter().append("g").attr("class", a).call(this.setCssRule(!1, ".".concat(ct.chartArcs, " text"), ["pointer-events:none", "text-anchor:middle"]));
            c.append("g").attr("class", i).merge(l), c.append("text").attr("dy", n && !e.hasMultiTargets() ? "-.1em" : ".35em").style("opacity", "0").style("text-anchor", e.getStylePropValue("middle")).style("pointer-events", e.getStylePropValue("none")), r.text = s.selectAll(".".concat(Z.target, " text"))
        },
        initArc: function() {
            var t = this,
                e = t.$el;
            e.arcs = e.main.select(".".concat(Z.chart)).append("g").attr("class", ct.chartArcs).attr("transform", t.getTranslate("arc")), t.setArcTitle()
        },
        setArcTitle: function(t) {
            var e = this,
                r = t || e.getArcTitle(),
                n = e.hasType("gauge");
            if (r) {
                var a = n ? oe.chartArcsGaugeTitle : ct.chartArcsTitle,
                    i = e.$el.arcs.select(".".concat(a));
                i.empty() && (i = e.$el.arcs.append("text").attr("class", a).style("text-anchor", "middle")), n && i.attr("dy", "-0.3em"), oi(i, r, n ? void 0 : [-.6, 1.35], !0)
            }
        },
        getArcTitle: function() {
            var t = this,
                e = t.hasType("donut") && "donut" || t.hasType("gauge") && "gauge";
            return e ? t.config["".concat(e, "_title")] : ""
        },
        getArcTitleWithNeedleValue: function() {
            var t = this,
                e = t.config,
                r = t.state,
                n = t.getArcTitle();
            if (n && t.config.arc_needle_show && /{=[A-Z_]+}/.test(n)) {
                var a = r.current.needle;
                return z(a) || (a = e.arc_needle_value), si(n, {
                    NEEDLE_VALUE: z(a) ? a : 0
                })
            }
            return !1
        },
        redrawArc: function(t, e, r) {
            var n = this,
                a = n.config,
                i = n.state,
                o = n.$el.main,
                s = a.interaction_enabled,
                l = s && a.data_selection_isselectable,
                c = o.selectAll(".".concat(ct.arcs)).selectAll(".".concat(ct.arc)).data(n.arcData.bind(n));
            c.exit().transition().duration(e).style("opacity", "0").remove(), c = c.enter().append("path").attr("class", n.getClass("arc", !0)).style("fill", function(u) {
                return n.color(u.data)
            }).style("cursor", function(u) {
                var f;
                return !((f = l ? .bind) === null || f === void 0) && f.call(l, n.api)(u) ? "pointer" : null
            }).style("opacity", "0").each(function(u) {
                n.isGaugeType(u.data) && (u.startAngle = a.gauge_startingAngle, u.endAngle = a.gauge_startingAngle), this._current = u
            }).merge(c), n.hasType("gauge") && (n.updateGaugeMax(), n.hasMultiArcGauge() && n.redrawMultiArcGauge()), c.attr("transform", function(u) {
                return !n.isGaugeType(u.data) && r ? "scale(0)" : ""
            }).style("opacity", function(u) {
                return u === this._current ? "0" : null
            }).each(function() {
                i.transiting = !0
            }).transition().duration(t).attrTween("d", function(u) {
                var f = n.updateAngle(u);
                if (!f) return function() {
                    return "M 0 0"
                };
                isNaN(this._current.startAngle) && (this._current.startAngle = 0), isNaN(this._current.endAngle) && (this._current.endAngle = this._current.startAngle);
                var d = ne(this._current, f);
                return this._current = d(0),
                    function(h) {
                        var p = d(h);
                        return p.data = u.data, n.getArc(p, !0)
                    }
            }).attr("transform", r ? "scale(1)" : "").style("fill", function(u) {
                var f;
                return n.levelColor ? (f = n.levelColor(u.data.values[0].value), a.data_colors[u.data.id] = f) : f = n.color(u.data), f
            }).style("opacity", null).call(ii, function() {
                if (n.levelColor) {
                    var u = P(this),
                        f = u.datum(this._current);
                    n.updateLegendItemColor(f.data.id, u.style("fill"))
                }
                i.transiting = !1, ft(a.onrendered, n.api)
            }), s && n.bindArcEvent(c), n.hasType("polar") && n.redrawPolar(), n.hasType("gauge") && n.redrawBackgroundArcs(), a.arc_needle_show && n.redrawNeedle(), n.redrawArcText(t)
        },
        redrawNeedle: function() {
            var t = this,
                e = t.$el,
                r = t.config,
                n = t.state,
                a = n.hiddenTargetIds,
                i = n.radius,
                o = (i - 1) / 100 * r.arc_needle_length,
                s = a.length !== t.data.targets.length,
                l = t.$el.arcs.select(".".concat(ct.needle)),
                c = r.arc_needle_path,
                u = r.arc_needle_bottom_width / 2,
                f = r.arc_needle_top_width / 2,
                d = r.arc_needle_top_rx,
                h = r.arc_needle_top_ry,
                p = r.arc_needle_bottom_len,
                g = r.arc_needle_bottom_rx,
                m = r.arc_needle_bottom_ry,
                v = t.getNeedleAngle(),
                x = function() {
                    var _ = t.getArcTitleWithNeedleValue();
                    _ && t.setArcTitle(_)
                };
            if (x(), l.empty() && (l = e.arcs.append("path").classed(ct.needle, !0), e.needle = l, e.needle.updateHelper = function(_, w) {
                    w === void 0 && (w = !1), e.needle.style("display") !== "none" && t.$T(e.needle).style("transform", "rotate(".concat(t.getNeedleAngle(_), "deg)")).call(ii, function() {
                        w && (r.arc_needle_value = _), x()
                    })
                }), s) {
                var y = X(c) ? c.call(t, o) : "M-".concat(u, " ").concat(p, " A").concat(g, " ").concat(m, " 0 0 0 ").concat(u, " ").concat(p, " L").concat(f, " -").concat(o, " A").concat(d, " ").concat(h, " 0 0 0 -").concat(f, " -").concat(o, " L-").concat(u, " ").concat(p, " Z");
                t.$T(l).attr("d", y).style("fill", r.arc_needle_color).style("display", null).style("transform", "rotate(".concat(v, "deg)"))
            } else l.style("display", "none")
        },
        getNeedleAngle: function(t) {
            var e = this,
                r = e.config,
                n = e.state,
                a = e.getArcLength(),
                i = e.hasType("gauge"),
                o = e.getTotalDataSum(!0),
                s = nt(t) ? t : r.arc_needle_value,
                l = r["".concat(r.data_type, "_startingAngle")] || 0,
                c = 0;
            if (z(s) || (s = i && e.data.targets.length === 1 ? o : 0), n.current.needle = s, i) {
                l = e.getGaugeStartAngle();
                var u = r.gauge_fullCircle ? a : l * -2,
                    f = r.gauge_min,
                    d = r.gauge_max;
                c = u * ((s - f) / (d - f))
            } else c = a * (s / o);
            return (l + c) * (180 / Math.PI)
        },
        redrawBackgroundArcs: function() {
            var t = this,
                e = t.config,
                r = t.state,
                n = t.hasMultiArcGauge(),
                a = e.gauge_fullCircle,
                i = t.filterTargetsToShow(t.data.targets).length === 0 && !!e.data_empty_label_text,
                o = t.getGaugeStartAngle(),
                s = a ? o + t.getArcLength() : o * -1,
                l = t.$el.arcs.select("".concat(n ? "g" : "", ".").concat(ct.chartArcsBackground));
            if (n) {
                var c = 0;
                l = l.selectAll("path.".concat(ct.chartArcsBackground)).data(t.data.targets), l.enter().append("path").attr("class", function(u, f) {
                    return "".concat(ct.chartArcsBackground, " ").concat(ct.chartArcsBackground, "-").concat(f)
                }).merge(l).style("fill", e.gauge_background || null).attr("d", function(u) {
                    var f = u.id;
                    if (i || r.hiddenTargetIds.indexOf(f) >= 0) return "M 0 0";
                    var d = {
                        data: [{
                            value: e.gauge_max
                        }],
                        startAngle: o,
                        endAngle: s,
                        index: c++
                    };
                    return t.getArc(d, !0, !0)
                }), l.exit().remove()
            } else l.attr("d", i ? "M 0 0" : function() {
                var u = {
                    data: [{
                        value: e.gauge_max
                    }],
                    startAngle: o,
                    endAngle: s
                };
                return t.getArc(u, !0, !0)
            })
        },
        bindArcEvent: function(t) {
            var e = this,
                r = e.config,
                n = e.state,
                a = n.inputType === "touch",
                i = n.inputType === "mouse";

            function o(c, u, f) {
                e.expandArc(f), e.api.focus(f), e.toggleFocusLegend(f, !0), e.showTooltip([u], c)
            }

            function s(c) {
                var u = c ? .id || void 0;
                e.unexpandArc(u), e.api.revert(), e.revertLegend(), e.hideTooltip()
            }
            if (t.on("click", function(c, u, f) {
                    var d, h = e.updateAngle(u),
                        p;
                    h && (p = e.convertToArcData(h), (d = e.toggleShape) === null || d === void 0 || d.call(e, this, p, f), r.data_onclick.bind(e.api)(p, this))
                }), i && t.on("mouseover", function(c, u) {
                    if (!n.transiting) {
                        n.event = c;
                        var f = e.updateAngle(u),
                            d = f ? e.convertToArcData(f) : null,
                            h = d ? .id || void 0;
                        o(this, d, h), e.setOverOut(!0, d)
                    }
                }).on("mouseout", function(c, u) {
                    if (!n.transiting) {
                        n.event = c;
                        var f = e.updateAngle(u),
                            d = f ? e.convertToArcData(f) : null;
                        s(), e.setOverOut(!1, d)
                    }
                }).on("mousemove", function(c, u) {
                    var f = e.updateAngle(u),
                        d = f ? e.convertToArcData(f) : null;
                    n.event = c, e.showTooltip([d], this)
                }), a && e.hasArcType() && !e.radars) {
                var l = function(c) {
                    var u, f, d = (f = (u = c.changedTouches) === null || u === void 0 ? void 0 : u[0]) !== null && f !== void 0 ? f : {
                            clientX: 0,
                            clientY: 0
                        },
                        h = d.clientX,
                        p = d.clientY,
                        g = P(lt.elementFromPoint(h, p));
                    return g
                };
                e.$el.svg.on("touchstart touchmove", function(c) {
                    if (!n.transiting) {
                        n.event = c;
                        var u = l(c),
                            f = u.datum(),
                            d = f ? .data && f.data.id ? e.updateAngle(f) : null,
                            h = d ? e.convertToArcData(d) : null,
                            p = h ? .id || void 0;
                        e.callOverOutForTouch(h), bt(p) ? s() : o(this, h, p)
                    }
                })
            }
        },
        redrawArcText: function(t) {
            var e = this,
                r = e.config,
                n = e.state,
                a = e.$el,
                i = a.main,
                o = a.arcs,
                s = e.hasType("gauge"),
                l = e.hasMultiArcGauge(),
                c;
            if (s && e.data.targets.length === 1 && r.gauge_title || (c = i.selectAll(".".concat(ct.chartArc)).select("text").style("opacity", "0").attr("class", function(f) {
                    return e.isGaugeType(f.data) ? oe.gaugeValue : null
                }).call(e.textForArcLabel.bind(e)).attr("transform", e.transformForArcLabel.bind(e)).style("font-size", function(f) {
                    return e.isGaugeType(f.data) && e.data.targets.length === 1 && !l ? "".concat(Math.round(n.radius / 5), "px") : null
                }).transition().duration(t).style("opacity", function(f) {
                    return e.isTargetToShow(f.data.id) && e.isArcType(f.data) ? null : "0"
                }), l && c.attr("dy", "-.1em")), i.select(".".concat(ct.chartArcsTitle)).style("opacity", e.hasType("donut") || s ? null : "0"), s) {
                var u = r.gauge_fullCircle;
                u && c ? .attr("dy", "".concat(l ? 0 : Math.round(n.radius / 14))), r.gauge_label_show && (o.select(".".concat(oe.chartArcsGaugeUnit)).attr("dy", "".concat(u ? 1.5 : .75, "em")).text(r.gauge_units), o.select(".".concat(oe.chartArcsGaugeMin)).attr("dx", "".concat(-1 * (n.innerRadius + (n.radius - n.innerRadius) / (u ? 1 : 2)), "px")).attr("dy", "1.2em").text(e.textForGaugeMinMax(r.gauge_min, !1)), !u && o.select(".".concat(oe.chartArcsGaugeMax)).attr("dx", "".concat(n.innerRadius + (n.radius - n.innerRadius) / 2, "px")).attr("dy", "1.2em").text(e.textForGaugeMinMax(r.gauge_max, !0)))
            }
        },
        getArcElementByIdOrIndex: function(t) {
            var e = this,
                r = e.$el.arcs,
                n = z(t) ? function(a) {
                    return a.index === t
                } : function(a) {
                    return a.data.id === t
                };
            return r ? .selectAll(".".concat(Z.target, " path")).filter(n)
        }
    }, hp = {
        initArea: function(t) {
            var e = this,
                r = e.config;
            t.insert("g", ".".concat(r.area_front ? St.circles : Ee.lines)).attr("class", e.getClass("areas", !0))
        },
        updateAreaColor: function(t) {
            var e = this;
            return e.config.area_linearGradient ? e.getGradienColortUrl(t.id) : e.color(t)
        },
        updateArea: function(t, e) {
            e === void 0 && (e = !1);
            var r = this,
                n = r.config,
                a = r.state,
                i = r.$el,
                o = r.$T,
                s = e ? i.subchart : i;
            n.area_linearGradient && r.updateLinearGradient();
            var l = s.main.selectAll(".".concat(Rs.areas)).selectAll(".".concat(Rs.area)).data(r.lineData.bind(r));
            o(l.exit(), t).style("opacity", "0").remove(), s.area = l.enter().append("path").attr("class", r.getClass("area", !0)).style("fill", r.updateAreaColor.bind(r)).style("opacity", function() {
                return a.orgAreaOpacity = P(this).style("opacity"), "0"
            }).merge(l), l.style("opacity", a.orgAreaOpacity), r.setRatioForGroupedData(s.area.data())
        },
        redrawArea: function(t, e, r) {
            r === void 0 && (r = !1);
            var n = this,
                a = (r ? this.$el.subchart : this.$el).area,
                i = n.state.orgAreaOpacity;
            return [n.$T(a, e, sr()).attr("d", t).style("fill", n.updateAreaColor.bind(n)).style("opacity", function(o) {
                return String(n.isAreaRangeType(o) ? i / 1.75 : i)
            })]
        },
        generateDrawArea: function(t, e) {
            var r = this,
                n = r.config,
                a = n.line_connectNull,
                i = n.axis_rotated,
                o = r.generateGetAreaPoints(t, e),
                s = r.getYScaleById.bind(r),
                l = function(f) {
                    return (e ? r.subxx : r.xx).call(r, f)
                },
                c = function(f, d) {
                    return r.isGrouped(f.id) ? o(f, d)[0][1] : s(f.id, e)(r.isAreaRangeType(f) ? r.getRangedData(f, "high") : r.getShapeYMin(f.id))
                },
                u = function(f, d) {
                    return r.isGrouped(f.id) ? o(f, d)[1][1] : s(f.id, e)(r.isAreaRangeType(f) ? r.getRangedData(f, "low") : f.value)
                };
            return function(f) {
                var d = a ? r.filterRemoveNull(f.values) : f.values,
                    h = 0,
                    p = 0,
                    g;
                if (r.isAreaType(f)) {
                    var m = qo();
                    m = i ? m.y(l).x0(c).x1(u) : m.x(l).y0(n.area_above ? 0 : n.area_below ? r.state.height : c).y1(u), a || (m = m.defined(function(v) {
                        return r.getBaseValue(v) !== null
                    })), r.isStepType(f) && (d = r.convertValuesToStep(d)), g = m.curve(r.getCurve(f))(d)
                } else d[0] && (h = r.scale.x(d[0].x), p = r.getYScaleById(f.id)(d[0].value)), g = i ? "M ".concat(p, " ").concat(h) : "M ".concat(h, " ").concat(p);
                return g || "M 0 0"
            }
        },
        generateGetAreaPoints: function(t, e) {
            var r = this,
                n = r.config,
                a = r.getShapeX(0, t, e),
                i = r.getShapeY(!!e),
                o = r.getShapeOffset(r.isAreaType, t, e),
                s = r.getYScaleById.bind(r);
            return function(l, c) {
                var u = s.call(r, l.id, e)(r.getShapeYMin(l.id)),
                    f = o(l, c) || u,
                    d = a(l),
                    h = l.value,
                    p = i(l);
                return n.axis_rotated && (h > 0 && p < u || h < 0 && u < p) && (p = u), [
                    [d, f],
                    [d, p - (u - f)],
                    [d, p - (u - f)],
                    [d, f]
                ]
            }
        }
    }, Ay = {
        initBar: function() {
            var t = this,
                e = t.$el,
                r = t.config,
                n = t.state.clip;
            e.bar = e.main.select(".".concat(Z.chart)), e.bar = r.bar_front ? e.bar.append("g") : e.bar.insert("g", ":first-child"), e.bar.attr("class", Qt.chartBars).call(this.setCssRule(!1, ".".concat(Qt.chartBars), ["pointer-events:none"])), r.clipPath === !1 && (r.bar_radius || r.bar_radius_ratio) && e.bar.attr("clip-path", n.pathXAxis.replace(/#[^)]*/, "#".concat(n.id)))
        },
        updateTargetsForBar: function(t) {
            var e = this,
                r = e.config,
                n = e.$el,
                a = e.getChartClass("Bar"),
                i = e.getClass("bars", !0),
                o = e.classFocus.bind(e),
                s = r.interaction_enabled && r.data_selection_isselectable;
            n.bar || e.initBar();
            var l = n.main.select(".".concat(Qt.chartBars)).selectAll(".".concat(Qt.chartBar)).data(t.filter(function(u) {
                    return u.values.some(function(f) {
                        return z(f.value) || e.isBarRangeType(f)
                    })
                })).attr("class", function(u) {
                    return a(u) + o(u)
                }),
                c = l.enter().append("g").attr("class", a).style("opacity", "0").style("pointer-events", e.getStylePropValue("none"));
            c.append("g").attr("class", i).style("cursor", function(u) {
                var f;
                return !((f = s ? .bind) === null || f === void 0) && f.call(s, e.api)(u) ? "pointer" : null
            }).call(e.setCssRule(!0, " .".concat(Qt.bar), ["fill"], e.color))
        },
        updateBar: function(t, e) {
            e === void 0 && (e = !1);
            var r = this,
                n = r.config,
                a = r.$el,
                i = r.$T,
                o = e ? a.subchart : a,
                s = r.getClass("bar", !0),
                l = r.initialOpacity.bind(r);
            n.bar_linearGradient && r.updateLinearGradient();
            var c = o.main.selectAll(".".concat(Qt.bars)).selectAll(".".concat(Qt.bar)).data(r.labelishData.bind(r));
            i(c.exit(), t).style("opacity", "0").remove(), o.bar = c.enter().append("path").attr("class", s).style("fill", r.updateBarColor.bind(r)).merge(c).style("opacity", l), r.setRatioForGroupedData(o.bar.data())
        },
        updateBarColor: function(t) {
            var e = this,
                r = e.getStylePropValue(e.color);
            return e.config.bar_linearGradient ? e.getGradienColortUrl(t.id) : r ? r(t) : null
        },
        redrawBar: function(t, e, r) {
            r === void 0 && (r = !1);
            var n = this,
                a = (r ? n.$el.subchart : n.$el).bar;
            return [n.$T(a, e, sr()).attr("d", function(i) {
                return (z(i.value) || n.isBarRangeType(i)) && t(i)
            }).style("fill", n.updateBarColor.bind(n)).style("opacity", null)]
        },
        generateDrawBar: function(t, e) {
            var r = this,
                n = r.config,
                a = r.generateGetBarPoints(t, e),
                i = n.axis_rotated,
                o = n.bar_radius,
                s = n.bar_radius_ratio,
                l = z(o) && o > 0 ? function() {
                    return o
                } : z(s) ? function(c) {
                    return c * s
                } : null;
            return function(c, u) {
                var f = a(c, u),
                    d = +i,
                    h = +!d,
                    p = c.value < 0,
                    g = n["axis_".concat(r.axis.getId(c.id), "_inverted")],
                    m = !g && p || g && !p,
                    v = ["", ""],
                    x = 0,
                    y = r.isGrouped(c.id),
                    _ = l && y ? r.isStackingRadiusData(c) : !1;
                if (l) {
                    var w = i ? h : d,
                        T = f[2][w] - f[0][w];
                    x = !y || _ ? l(T) : 0;
                    var $ = "a".concat(x, ",").concat(x, " ").concat(m ? "1 0 0" : "0 0 1", " ");
                    v[+!i] = "".concat($).concat(x, ",").concat(x), v[+i] = "".concat($).concat([-x, x][i ? "sort" : "reverse"]()), m && v.reverse()
                }
                var C = i ? "H".concat(f[1][d] + (m ? x : -x), " ").concat(v[0], "V").concat(f[2][h] - x, " ").concat(v[1], "H").concat(f[3][d]) : "V".concat(f[1][h] + (m ? -x : x), " ").concat(v[0], "H").concat(f[2][d] - x, " ").concat(v[1], "V").concat(f[3][h]);
                return "M".concat(f[0][d], ",").concat(f[0][h]).concat(C, "z")
            }
        },
        isStackingRadiusData: function(t) {
            var e = this,
                r = e.$el,
                n = e.config,
                a = e.data,
                i = e.state,
                o = t.id,
                s = t.index,
                l = t.value;
            if (i.hiddenTargetIds.indexOf(o) > -1) {
                var c = r.bar.filter(function(h) {
                    return h.id === o && h.value === l
                });
                return !c.empty() && /a\d+/i.test(c.attr("d"))
            }
            var u = n.data_groups.find(function(h) {
                    return h.indexOf(o) > -1
                }),
                f = e.orderTargets(e.filterTargetsToShow(a.targets.filter(e.isBarType, e))).filter(function(h) {
                    return u.indexOf(h.id) > -1
                }),
                d = f.map(function(h) {
                    return h.values.filter(function(p) {
                        return p.index === s && (z(l) && l > 0 ? p.value > 0 : p.value < 0)
                    })[0]
                }).filter(Boolean).map(function(h) {
                    return h.id
                });
            return l !== 0 && d.indexOf(o) === d.length - 1
        },
        generateGetBarPoints: function(t, e) {
            var r = this,
                n = r.config,
                a = e ? r.axis.subX : r.axis.x,
                i = r.getIndicesMax(t) + 1,
                o = r.getBarW("bar", a, i),
                s = r.getShapeX(o, t, !!e),
                l = r.getShapeY(!!e),
                c = r.getShapeOffset(r.isBarType, t, !!e),
                u = r.getYScaleById.bind(r);
            return function(f, d) {
                var h = f.id,
                    p = u.call(r, h, e)(r.getShapeYMin(h)),
                    g = c(f, d) || p,
                    m = z(o) ? o : o[f.id] || o._$width,
                    v = n["axis_".concat(r.axis.getId(h), "_inverted")],
                    x = f.value,
                    y = s(f),
                    _ = l(f);
                n.axis_rotated && !v && (x > 0 && _ < p || x < 0 && p < _) && (_ = p), r.isBarRangeType(f) || (_ -= p - g);
                var w = y + m;
                return [
                    [y, g],
                    [y, _],
                    [w, _],
                    [w, g]
                ]
            }
        }
    }, Sy = {
        initLine: function() {
            var t = this.$el;
            t.line = t.main.select(".".concat(Z.chart)).append("g").attr("class", Ee.chartLines).call(this.setCssRule(!1, ".".concat(Ee.chartLines), ["pointer-events:none"]))
        },
        updateTargetsForLine: function(t) {
            var e = this,
                r = e.$el,
                n = r.area,
                a = r.line,
                i = r.main,
                o = e.getChartClass("Line"),
                s = e.getClass("lines", !0),
                l = e.classFocus.bind(e);
            a || e.initLine();
            var c = t.filter(function(h) {
                    return !(e.isScatterType(h) || e.isBubbleType(h))
                }),
                u = i.select(".".concat(Ee.chartLines)).selectAll(".".concat(Ee.chartLine)).data(c).attr("class", function(h) {
                    return o(h) + l(h)
                }),
                f = u.enter().append("g").attr("class", o).style("opacity", "0").style("pointer-events", e.getStylePropValue("none"));
            if (f.append("g").attr("class", s), e.hasTypeOf("Area")) {
                var d = (!n && f.empty() ? u : f).filter(e.isAreaType.bind(e));
                e.initArea(d)
            }
            e.updateTargetForCircle(c, f)
        },
        updateLine: function(t, e) {
            e === void 0 && (e = !1);
            var r = this,
                n = r.format.extraLineClasses,
                a = r.$el,
                i = r.$T,
                o = e ? a.subchart : a,
                s = o.main.selectAll(".".concat(Ee.lines)).selectAll(".".concat(Ee.line)).data(r.lineData.bind(r));
            i(s.exit(), t).style("opacity", "0").remove(), o.line = s.enter().append("path").attr("class", function(l) {
                return "".concat(r.getClass("line", !0)(l), " ").concat(n(l) || "")
            }).style("stroke", r.color).merge(s).style("opacity", r.initialOpacity.bind(r)).attr("transform", null)
        },
        redrawLine: function(t, e, r) {
            r === void 0 && (r = !1);
            var n = this,
                a = n.$el,
                i = n.$T,
                o = (r ? a.subchart : a).line;
            return [i(o, e, sr()).attr("d", t).style("stroke", this.color).style("opacity", null)]
        },
        getCurve: function(t) {
            var e = this,
                r = e.config.axis_rotated && e.isStepType(t);
            return r ? function(n) {
                var a = e.getInterpolate(t)(n);
                return a.orgPoint = a.point, a.pointRotated = function(i, o) {
                    this._point === 1 && (this._point = 2);
                    var s = this._y * (1 - this._t) + o * this._t;
                    this._context.lineTo(this._x, s), this._context.lineTo(i, s), this._x = i, this._y = o
                }, a.point = function(i, o) {
                    this._point === 0 ? this.orgPoint(i, o) : this.pointRotated(i, o)
                }, a
            } : e.getInterpolate(t)
        },
        generateDrawLine: function(t, e) {
            var r = this,
                n = r.config,
                a = r.scale,
                i = n.line_connectNull,
                o = n.axis_rotated,
                s = r.generateGetLinePoints(t, e),
                l = r.getYScaleById.bind(r),
                c = function(h) {
                    return (e ? r.subxx : r.xx).call(r, h)
                },
                u = function(h, p) {
                    return r.isGrouped(h.id) ? s(h, p)[0][1] : l(h.id, e)(r.getBaseValue(h))
                },
                f = Mn();
            f = o ? f.x(u).y(c) : f.x(c).y(u), i || (f = f.defined(function(h) {
                return r.getBaseValue(h) !== null
            }));
            var d = e ? a.subX : a.x;
            return function(h) {
                var p = l(h.id, e),
                    g = i ? r.filterRemoveNull(h.values) : h.values,
                    m = 0,
                    v = 0,
                    x;
                if (r.isLineType(h)) {
                    var y = n.data_regions[h.id];
                    y ? x = r.lineWithRegions(g, a.zoom || d, p, y) : (r.isStepType(h) && (g = r.convertValuesToStep(g)), x = f.curve(r.getCurve(h))(g))
                } else g[0] && (m = d(g[0].x), v = p(g[0].value)), x = o ? "M ".concat(v, " ").concat(m) : "M ".concat(m, " ").concat(v);
                return x || "M 0 0"
            }
        },
        lineWithRegions: function(t, e, r, n) {
            var a = this,
                i = a.config,
                o = i.axis_rotated,
                s = a.axis.isTimeSeries(),
                l = [],
                c = "2 2",
                u, f, d, h;
            if (nt(n))
                for (var p = function(I, B) {
                        return bt(I) ? B : s ? te.call(a, I) : I
                    }, g = 0, m = void 0; m = n[g]; g++) {
                    var v = p(m.start, t[0].x),
                        x = p(m.end, t[t.length - 1].x),
                        y = m.style || {
                            dasharray: c
                        };
                    l[g] = {
                        start: v,
                        end: x,
                        style: y
                    }
                }
            for (var _ = o ? function(I) {
                    return r(I.value)
                } : function(I) {
                    return e(I.x)
                }, w = o ? function(I) {
                    return e(I.x)
                } : function(I) {
                    return r(I.value)
                }, T = function(I) {
                    return "M".concat(I[0][0], ",").concat(I[0][1], "L").concat(I[1][0], ",").concat(I[1][1])
                }, $ = s ? function(I, B, F, it) {
                    var ht = I.x.getTime(),
                        Et = B.x - I.x,
                        Yt = new Date(ht + Et * F),
                        W = new Date(ht + Et * (F + it)),
                        pt = o ? [
                            [r(f(F)), e(Yt)],
                            [r(f(F + d)), e(W)]
                        ] : [
                            [e(Yt), r(f(F))],
                            [e(W), r(f(F + d))]
                        ];
                    return T(pt)
                } : function(I, B, F, it) {
                    var ht = o ? [
                        [r(f(F), !0), e(u(F))],
                        [r(f(F + it), !0), e(u(F + it))]
                    ] : [
                        [e(u(F), !0), r(f(F))],
                        [e(u(F + it), !0), r(f(F + it))]
                    ];
                    return T(ht)
                }, C = {
                    x: a.axis.getAxisType("x"),
                    y: a.axis.getAxisType("y")
                }, M = "", g = 0, R = void 0; R = t[g]; g++) {
                var A = t[g - 1],
                    L = A && H(A.value),
                    y = a.isWithinRegions(R.x, l);
                if (H(R.value)) {
                    if (bt(l) || !y || !L) M += "".concat(g && L ? "L" : "M").concat(_(R), ",").concat(w(R));
                    else if (L) {
                        try {
                            y = y.dasharray.split(" ")
                        } catch {
                            y = c.split(" ")
                        }
                        u = or(C.x, A.x, R.x), f = or(C.y, A.value, R.value);
                        var S = e(R.x) - e(A.x),
                            E = r(R.value) - r(A.value),
                            rt = Math.sqrt(Math.pow(S, 2) + Math.pow(E, 2));
                        d = y[0] / rt, h = d * y[1];
                        for (var O = d; O <= 1; O += h) M += $(A, R, O, d), O + h >= 1 && (M += $(A, R, 1, 0))
                    }
                }
            }
            return M
        },
        isWithinRegions: function(t, e) {
            for (var r = 0, n = void 0; n = e[r]; r++)
                if (n.start < t && t <= n.end) return n.style;
            return !1
        },
        isWithinStep: function(t, e) {
            return Math.abs(e - xe(this.state.event, t)[1]) < 30
        },
        shouldDrawPointsForLine: function(t) {
            var e = this.config.line_point;
            return e === !0 || K(e) && e.indexOf(t.id) !== -1
        }
    }, Or = function() {
        return sr()
    }, ky = {
        hasValidPointType: function(t) {
            return /^(circle|rect(angle)?|polygon|ellipse|use)$/i.test(t || this.config.point_type)
        },
        hasValidPointDrawMethods: function(t) {
            var e = t || this.config.point_type;
            return se(e) && X(e.create) && X(e.update)
        },
        initialOpacityForCircle: function(t) {
            var e = this,
                r = e.config,
                n = e.state.withoutFadeIn,
                a = r.point_opacity;
            return bt(a) && (a = this.getBaseValue(t) !== null && n[t.id] ? this.opacityForCircle(t) : "0"), a
        },
        opacityForCircle: function(t) {
            var e, r = this.config,
                n = r.point_opacity;
            return bt(n) && (n = r.point_show && !(!((e = this.isPointFocusOnly) === null || e === void 0) && e.call(this)) ? null : "0", n = H(this.getBaseValue(t)) ? this.isBubbleType(t) || this.isScatterType(t) ? "0.5" : n : "0"), n
        },
        initCircle: function() {
            var t = this,
                e = t.$el.main;
            t.point = t.generatePoint(), (t.hasType("bubble") || t.hasType("scatter")) && e.select(".".concat(St.chartCircles)).empty() && e.select(".".concat(Z.chart)).append("g").attr("class", St.chartCircles)
        },
        updateTargetForCircle: function(t, e) {
            var r = this,
                n = this,
                a = n.config,
                i = n.data,
                o = n.$el,
                s = a.interaction_enabled && a.data_selection_enabled,
                l = s && a.data_selection_isselectable,
                c = n.getClass("circles", !0);
            if (a.point_show) {
                !o.circle && n.initCircle();
                var u = t,
                    f = e;
                if (!u) {
                    u = i.targets.filter(function(h) {
                        return r.isScatterType(h) || r.isBubbleType(h)
                    });
                    var d = o.main.select(".".concat(St.chartCircles)).style("pointer-events", "none").selectAll(".".concat(St.circles)).data(u);
                    d.exit().remove(), f = d.enter()
                }
                s && f.append("g").attr("class", function(h) {
                    return n.generateClass(mt.selectedCircles, h.id)
                }), f.append("g").attr("class", c).call(function(h) {
                    n.setCssRule(!0, ".".concat(St.circles), ["cursor:pointer"], l)(h), n.setCssRule(!0, " .".concat(St.circle), ["fill", "stroke"], n.color)(h)
                }).style("opacity", function() {
                    var h = P(this.parentNode);
                    return h.attr("class").indexOf(St.chartCircles) > -1 ? "0" : null
                }), s && u.forEach(function(h) {
                    o.main.selectAll(".".concat(mt.selectedCircles).concat(n.getTargetSelectorSuffix(h.id))).selectAll("".concat(mt.selectedCircle)).each(function(p) {
                        p.value = h.values[p.index].value
                    })
                })
            }
        },
        updateCircle: function(t) {
            t === void 0 && (t = !1);
            var e = this,
                r = e.config,
                n = e.state,
                a = e.$el,
                i = e.isPointFocusOnly(),
                o = t ? a.subchart : a;
            if (r.point_show && !n.toggling) {
                r.point_radialGradient && e.updateLinearGradient();
                var s = o.main.selectAll(".".concat(St.circles)).selectAll(".".concat(St.circle)).data(function(l) {
                    return e.isLineType(l) && e.shouldDrawPointsForLine(l) || e.isBubbleType(l) || e.isRadarType(l) || e.isScatterType(l) ? i ? [l.values[0]] : l.values : []
                });
                s.exit().remove(), s.enter().filter(Boolean).append(e.point("create", this, e.pointR.bind(e), e.updateCircleColor.bind(e))), o.circle = o.main.selectAll(".".concat(St.circles, " .").concat(St.circle)).style("stroke", e.getStylePropValue(e.color)).style("opacity", e.initialOpacityForCircle.bind(e))
            }
        },
        updateCircleColor: function(t) {
            var e = this,
                r = e.getStylePropValue(e.color);
            return e.config.point_radialGradient ? e.getGradienColortUrl(t.id) : r ? r(t) : null
        },
        redrawCircle: function(t, e, r, n, a) {
            a === void 0 && (a = !1);
            var i = this,
                o = i.state.rendered,
                s = i.$el,
                l = i.$T,
                c = a ? s.subchart : s,
                u = c.main.selectAll(".".concat(mt.selectedCircle));
            if (!i.config.point_show) return [];
            var f = i.point("update", i, t, e, i.updateCircleColor.bind(i), r, n, u),
                d = i.isCirclePoint() ? "c" : "",
                h = sr(),
                p = i.opacityForCircle.bind(i),
                g = [];
            return c.circle.each(function(m) {
                var v = f.bind(this)(m);
                v = l(v, r || !o, h).style("opacity", p), g.push(v)
            }), [g, l(u, r).attr("".concat(d, "x"), t).attr("".concat(d, "y"), e)]
        },
        showCircleFocus: function(t) {
            var e = this,
                r = e.state,
                n = r.hasRadar,
                a = r.resizing,
                i = r.toggling,
                o = r.transiting,
                s = e.$el,
                l = s.circle;
            if (o === !1 && l && e.isPointFocusOnly()) {
                var c = (n ? e.radarCircleX : e.circleX).bind(e),
                    u = (n ? e.radarCircleY : e.circleY).bind(e),
                    f = i || bt(t),
                    d = e.point("update", e, c, u, e.getStylePropValue(e.color), a ? !1 : f);
                t && (l = l.filter(function(h) {
                    var p, g = (p = t.filter) === null || p === void 0 ? void 0 : p.call(t, function(m) {
                        return m.id === h.id
                    });
                    return g.length ? P(this).datum(g[0]) : !1
                })), l.attr("class", this.updatePointClass.bind(this)).style("opacity", null).each(function(h) {
                    var p = h.id,
                        g = h.index,
                        m = h.value,
                        v = "hidden";
                    H(m) && (d.bind(this)(h), e.expandCircles(g, p), v = ""), this.style.visibility = v
                })
            }
        },
        hideCircleFocus: function() {
            var t = this,
                e = t.$el.circle;
            t.isPointFocusOnly() && e && (t.unexpandCircles(), e.style("visibility", "hidden"))
        },
        circleX: function(t) {
            return this.xx(t)
        },
        updateCircleY: function(t) {
            t === void 0 && (t = !1);
            var e = this,
                r = e.generateGetLinePoints(e.getShapeIndices(e.isLineType), t);
            return function(n, a) {
                var i = n.id;
                return e.isGrouped(i) ? r(n, a)[0][1] : e.getYScaleById(i, t)(e.getBaseValue(n))
            }
        },
        expandCircles: function(t, e, r) {
            var n = this,
                a = n.pointExpandedR.bind(n);
            r && n.unexpandCircles();
            var i = n.getShapeByIndex("circle", t, e).classed(Z.EXPANDED, !0),
                o = a(i) / n.config.point_r,
                s = 1 - o;
            n.isCirclePoint() ? i.attr("r", a) : i.each(function() {
                var l = P(this);
                if (this.tagName === "circle") l.attr("r", a);
                else {
                    var c = this.getBBox(),
                        u = c.width,
                        f = c.height,
                        d = s * (+l.attr("x") + u / 2),
                        h = s * (+l.attr("y") + f / 2);
                    l.attr("transform", "translate(".concat(d, " ").concat(h, ") scale(").concat(o, ")"))
                }
            })
        },
        unexpandCircles: function(t) {
            var e = this,
                r = e.pointR.bind(e),
                n = e.getShapeByIndex("circle", t).filter(function() {
                    return P(this).classed(Z.EXPANDED)
                }).classed(Z.EXPANDED, !1);
            if (n.attr("r", r), !e.isCirclePoint()) {
                var a = r(n) / e.config.point_r;
                n.attr("transform", a !== 1 ? "scale(".concat(a, ")") : null)
            }
        },
        pointR: function(t) {
            var e = this,
                r = e.config,
                n = r.point_r,
                a = n;
            return e.isBubbleType(t) ? a = e.getBubbleR(t) : X(n) && (a = n.bind(e.api)(t)), t.r = a, a
        },
        pointExpandedR: function(t) {
            var e = this,
                r = e.config,
                n = e.isBubbleType(t) ? 1.15 : 1.75;
            return r.point_focus_expand_enabled ? r.point_focus_expand_r || e.pointR(t) * n : e.pointR(t)
        },
        pointSelectR: function(t) {
            var e = this,
                r = e.config.point_select_r;
            return X(r) ? r(t) : r || e.pointR(t) * 4
        },
        isPointFocusOnly: function() {
            var t = this;
            return t.config.point_focus_only && !t.hasType("bubble") && !t.hasType("scatter") && !t.hasArcType(null, ["radar"])
        },
        isWithinCircle: function(t, e) {
            var r = this,
                n = r.config,
                a = r.state,
                i = xe(a.event, t),
                o = P(t),
                s = this.isCirclePoint(t) ? "c" : "",
                l = n.point_sensitivity === "radius" ? t.getAttribute("r") : n.point_sensitivity,
                c = +o.attr("".concat(s, "x")),
                u = +o.attr("".concat(s, "y"));
            if (!(c || u) && t.nodeType === 1) {
                var f = ni(t),
                    d = f.x,
                    h = f.y;
                c = d, u = h
            }
            return Math.sqrt(Math.pow(c - i[0], 2) + Math.pow(u - i[1], 2)) < (e || l)
        },
        getPointSensitivity: function(t) {
            var e = this,
                r = e.config.point_sensitivity;
            return X(r) ? r = r.call(e.api, t) : r === "radius" && (r = t.r), r
        },
        insertPointInfoDefs: function(t, e) {
            var r, n = this,
                a = function(c, u) {
                    for (var f = c.attributes, d = 0, h; h = f[d]; d++) h = h.name, u.setAttribute(h, c.getAttribute(h))
                },
                i = new DOMParser().parseFromString(t, "image/svg+xml"),
                o = i.documentElement,
                s = lt.createElementNS(pe.svg, o.nodeName.toLowerCase());
            if (s.id = e, s.style.fill = "inherit", s.style.stroke = "inherit", a(o, s), !((r = o.childNodes) === null || r === void 0) && r.length) {
                var l = P(s);
                "innerHTML" in s ? l.html(o.innerHTML) : Pr(o.childNodes).forEach(function(c) {
                    a(c, l.append(c.tagName).node())
                })
            }
            n.$el.defs.node().appendChild(s)
        },
        pointFromDefs: function(t) {
            return this.$el.defs.select("#".concat(t))
        },
        updatePointClass: function(t) {
            var e = this,
                r = e.$el.circle,
                n = !1;
            return (at(t) || r) && (n = t === !0 ? r.each(function(a) {
                var i = e.getClass("circle", !0)(a);
                this.getAttribute("class").indexOf(Z.EXPANDED) > -1 && (i += " ".concat(Z.EXPANDED)), this.setAttribute("class", i)
            }) : e.getClass("circle", !0)(t)), n
        },
        generateGetLinePoints: function(t, e) {
            var r = this,
                n = r.config,
                a = r.getShapeX(0, t, e),
                i = r.getShapeY(e),
                o = r.getShapeOffset(r.isLineType, t, e),
                s = r.getYScaleById.bind(r);
            return function(l, c) {
                var u = s.call(r, l.id, e)(r.getShapeYMin(l.id)),
                    f = o(l, c) || u,
                    d = a(l),
                    h = i(l);
                n.axis_rotated && (l.value > 0 && h < u || l.value < 0 && u < h) && (h = u);
                var p = [d, h - (u - f)];
                return [p, p, p, p]
            }
        },
        generatePoint: function() {
            var t = this,
                e = t.config,
                r = t.state.datetimeId,
                n = [],
                a = dt(e.point_pattern) ? e.point_pattern : [e.point_type];
            return function(i, o) {
                for (var s = [], l = 2; l < arguments.length; l++) s[l - 2] = arguments[l];
                return function(c) {
                    var u, f = t.getTargetSelectorSuffix(c.id || ((u = c.data) === null || u === void 0 ? void 0 : u.id) || c),
                        d = P(this);
                    n.indexOf(f) < 0 && n.push(f);
                    var h = a[n.indexOf(f) % a.length];
                    if (t.hasValidPointType(h)) h = t[h];
                    else if (!t.hasValidPointDrawMethods(h)) {
                        var p = "".concat(r, "-point").concat(f),
                            g = t.pointFromDefs(p);
                        if (g.size() < 1 && t.insertPointInfoDefs(h, p), i === "create") return t.custom.create.bind(o).apply(void 0, gt([d, p], s, !1));
                        if (i === "update") return t.custom.update.bind(o).apply(void 0, gt([d], s, !1))
                    }
                    return h[i].bind(o).apply(void 0, gt([d], s, !1))
                }
            }
        },
        custom: {
            create: function(t, e, r) {
                return t.append("use").attr("xlink:href", "#".concat(e)).attr("class", this.updatePointClass.bind(this)).style("fill", r).node()
            },
            update: function(t, e, r, n, a, i, o) {
                var s = this,
                    l = t.node().getBBox(),
                    c = l.width,
                    u = l.height,
                    f = function(p) {
                        return H(p.value) ? e(p) - c / 2 : 0
                    },
                    d = function(p) {
                        return H(p.value) ? r(p) - u / 2 : 0
                    },
                    h = t;
                return a && (i && h.attr("x", f), h = s.$T(h, a, Or()), o && s.$T(o, a, Or())), h.attr("x", f).attr("y", d).style("fill", n)
            }
        },
        circle: {
            create: function(t, e, r) {
                return t.append("circle").attr("class", this.updatePointClass.bind(this)).attr("r", e).style("fill", r).node()
            },
            update: function(t, e, r, n, a, i, o) {
                var s = this,
                    l = t;
                return s.hasType("bubble") && l.attr("r", s.pointR.bind(s)), a && (i && l.attr("cx", e), l.attr("cx") && (l = s.$T(l, a, Or())), o && s.$T(l, a, Or())), l.attr("cx", e).attr("cy", r).style("fill", n)
            }
        },
        rectangle: {
            create: function(t, e, r) {
                var n = function(a) {
                    return e(a) * 2
                };
                return t.append("rect").attr("class", this.updatePointClass.bind(this)).attr("width", n).attr("height", n).style("fill", r).node()
            },
            update: function(t, e, r, n, a, i, o) {
                var s = this,
                    l = s.config.point_r,
                    c = function(d) {
                        return e(d) - l
                    },
                    u = function(d) {
                        return r(d) - l
                    },
                    f = t;
                return a && (i && f.attr("x", c), f = s.$T(f, a, Or()), o && s.$T(o, a, Or())), f.attr("x", c).attr("y", u).style("fill", n)
            }
        }
    }, $M = Jt.radarPoints, Cy = {
        point_show: !0,
        point_r: 2.5,
        point_radialGradient: !1,
        point_sensitivity: 10,
        point_focus_expand_enabled: !0,
        point_focus_expand_r: void 0,
        point_focus_only: !1,
        point_opacity: void 0,
        point_pattern: [],
        point_select_r: void 0,
        point_type: "circle"
    }, pp = {
        area_above: !1,
        area_below: !1,
        area_front: !0,
        area_linearGradient: !1,
        area_zerobased: !0
    }, Ry = {
        bar_front: !1,
        bar_indices_removeNull: !1,
        bar_label_threshold: 0,
        bar_linearGradient: !1,
        bar_overlap: !1,
        bar_padding: 0,
        bar_radius: void 0,
        bar_radius_ratio: void 0,
        bar_sensitivity: 2,
        bar_width: void 0,
        bar_width_ratio: .6,
        bar_width_max: void 0,
        bar_zerobased: !0
    }, My = {
        line_connectNull: !1,
        line_step_type: "step",
        line_step_tooltipMatch: !1,
        line_zerobased: !1,
        line_classes: void 0,
        line_point: !0
    }, gp = {
        spline_interpolation_type: "cardinal"
    }, Ey = {
        arc_cornerRadius: 0,
        arc_cornerRadius_ratio: 0,
        arc_needle_show: !1,
        arc_needle_color: void 0,
        arc_needle_value: void 0,
        arc_needle_path: void 0,
        arc_needle_length: 100,
        arc_needle_top_rx: 0,
        arc_needle_top_ry: 0,
        arc_needle_top_width: 0,
        arc_needle_bottom_rx: 1,
        arc_needle_bottom_ry: 1,
        arc_needle_bottom_width: 15,
        arc_needle_bottom_len: 0
    }, AM = {
        gauge_background: "",
        gauge_fullCircle: !1,
        gauge_label_show: !0,
        gauge_label_format: void 0,
        gauge_label_extents: void 0,
        gauge_label_threshold: 0,
        gauge_min: 0,
        gauge_max: 100,
        gauge_type: "single",
        gauge_startingAngle: -1 * Math.PI / 2,
        gauge_arcLength: 100,
        gauge_title: "",
        gauge_units: void 0,
        gauge_width: void 0,
        gauge_arcs_minWidth: 5,
        gauge_expand: {},
        gauge_expand_rate: .98,
        gauge_expand_duration: 50
    }, Ly = {
        pie_label_show: !0,
        pie_label_format: void 0,
        pie_label_threshold: .05,
        pie_label_ratio: void 0,
        pie_expand: {},
        pie_expand_rate: .98,
        pie_expand_duration: 50,
        pie_innerRadius: 0,
        pie_outerRadius: void 0,
        pie_padAngle: 0,
        pie_padding: 0,
        pie_startingAngle: 0
    };
    Dy = function() {
        return ui(hp, [pp]), (Dy = function() {
            return Y.AREA
        })()
    }, Oy = function() {
        return ui(hp, [pp, gp]), (Oy = function() {
            return Y.AREA_SPLINE
        })()
    }, Py = function() {
        return ui(), (Py = function() {
            return Y.LINE
        })()
    }, Fy = function() {
        return ui(void 0, [gp]), (Fy = function() {
            return Y.SPLINE
        })()
    }, zy = function() {
        return Iy(void 0, [Ey, Ly]), (zy = function() {
            return Y.PIE
        })()
    }, Ny = function() {
        return vp([Ay], Ry), (Ny = function() {
            return Y.BAR
        })()
    }, By = function(t) {
        var e, r = this.internal,
            n = r.axis,
            a = r.brush,
            i = r.config,
            o = r.scale,
            s = o.x,
            l = o.subX,
            c = r.state,
            u;
        if (i.subchart_show)
            if (u = t, Array.isArray(u)) {
                n.isTimeSeries() && (u = u.map(function(d) {
                    return te.bind(r)(d)
                }));
                var f = r.withinRange(u, r.getZoomDomain("subX", !0), r.getZoomDomain("subX"));
                f && (c.domain = u, a.move(a.getSelection(), u.map(l)))
            } else u = (e = c.domain) !== null && e !== void 0 ? e : s.orgDomain();
        return u
    };
    Wt(By, {
        show: function() {
            var t, e, r = this.internal,
                n = r.$el.subchart,
                a = r.config,
                i = a.subchart_show;
            if (!i) {
                r.unbindZoomEvent(), a.subchart_show = !i, !n.main && r.initSubchart();
                var o = n.main.selectAll(".".concat(Z.target));
                r.data.targets.length !== o.size() && (r.updateSizes(), r.updateTargetsForSubchart(r.data.targets), o = (t = n.main) === null || t === void 0 ? void 0 : t.selectAll(".".concat(Z.target))), o ? .style("opacity", null), (e = n.main) === null || e === void 0 || e.style("display", null), this.resize()
            }
        },
        hide: function() {
            var t = this.internal,
                e = t.$el.subchart.main,
                r = t.config;
            r.subchart_show && e ? .style("display") !== "none" && (r.subchart_show = !1, e.style("display", "none"), this.resize())
        },
        toggle: function() {
            var t = this.internal,
                e = t.config;
            this.subchart[e.subchart_show ? "hide" : "show"]()
        },
        reset: function() {
            var t = this.internal,
                e = t.brush;
            e.clear(e.getSelection())
        }
    });
    Xy = function(t) {
        var e, r, n = this.internal,
            a = n.$el,
            i = n.axis,
            o = n.config,
            s = n.org,
            l = n.scale,
            c = n.state,
            u = o.axis_rotated,
            f = i.isCategorized(),
            d;
        if (o.zoom_enabled)
            if (d = t, Array.isArray(d)) {
                i.isTimeSeries() && (d = d.map(function(v) {
                    return te.bind(n)(v)
                }));
                var h = n.withinRange(d, n.getZoomDomain("zoom", !0), n.getZoomDomain("zoom"));
                if (h) {
                    if (c.domain = d, f && (d = d.map(function(v, x) {
                            return Number(v) + (x === 0 ? 0 : 1)
                        })), n.api.tooltip.hide(), o.subchart_show) {
                        var p = l.zoom || l.x;
                        n.brush.getSelection().call(n.brush.move, d.map(p))
                    } else {
                        var p = f ? l.x.orgScale() : s.xScale || l.x,
                            g = [-p(d[0]), 0],
                            m = (e = Fn.scale(p.range()[1] / (p(d[1]) - p(d[0])))).translate.apply(e, u ? g.reverse() : g);
                        a.eventRect.call(n.zoom.transform, m)
                    }
                    n.setZoomResetButton()
                }
            } else d = n.zoom.getDomain();
        return (r = c.domain) !== null && r !== void 0 ? r : d
    };
    Wt(Xy, {
        enable: function(t) {
            var e = this.internal,
                r = e.config;
            /^(drag|wheel)$/.test(t) && (r.zoom_type = t), r.zoom_enabled = !!t, e.zoom ? t === !1 && e.bindZoomEvent(!1) : (e.initZoom(), e.bindZoomEvent()), e.updateAndRedraw()
        },
        max: function(t) {
            var e = this.internal,
                r = e.config,
                n = e.org.xDomain;
            return (t === 0 || t) && (r.zoom_x_max = Me("max", [n[1], t])), r.zoom_x_max
        },
        min: function(t) {
            var e = this.internal,
                r = e.config,
                n = e.org.xDomain;
            return (t === 0 || t) && (r.zoom_x_min = Me("min", [n[0], t])), r.zoom_x_min
        },
        range: function(t) {
            var e = this.zoom;
            if (at(t)) {
                var r = t.min,
                    n = t.max;
                nt(r) && e.min(r), nt(n) && e.max(n)
            }
            return {
                min: e.min(),
                max: e.max()
            }
        }
    });
    Yy = {
        drag: function(t) {
            var e = this,
                r = e.config,
                n = e.state,
                a = e.$el.main,
                i = r.data_selection_grouped,
                o = r.interaction_enabled && r.data_selection_isselectable;
            if (!(e.hasArcType() || !r.data_selection_enabled || r.zoom_enabled && !e.zoom.altDomain || !r.data_selection_multiple)) {
                var s = n.dragStart || [0, 0],
                    l = s[0],
                    c = s[1],
                    u = t[0],
                    f = t[1],
                    d = Math.min(l, u),
                    h = Math.max(l, u),
                    p = i ? n.margin.top : Math.min(c, f),
                    g = i ? n.height : Math.max(c, f);
                a.select(".".concat(ir.dragarea)).attr("x", d).attr("y", p).attr("width", h - d).attr("height", g - p), a.selectAll(".".concat(Mt.shapes)).selectAll(".".concat(Mt.shape)).filter(function(m) {
                    return o ? .bind(e.api)(m)
                }).each(function(m, v) {
                    var x = P(this),
                        y = x.classed(mt.SELECTED),
                        _ = x.classed(ir.INCLUDED),
                        w = !1,
                        T;
                    if (x.classed(St.circle)) {
                        var $ = +x.attr("cx") * 1,
                            C = +x.attr("cy") * 1;
                        T = e.togglePoint, w = d < $ && $ < h && p < C && C < g
                    } else if (x.classed(Qt.bar)) {
                        var M = R_(this),
                            $ = M.x,
                            C = M.y,
                            R = M.width,
                            A = M.height;
                        T = e.togglePath, w = !(h < $ || $ + R < d) && !(g < C || C + A < p)
                    } else return;
                    w ^ _ && (x.classed(ir.INCLUDED, !_), x.classed(mt.SELECTED, !y), T.call(e, !y, x, m, v))
                })
            }
        },
        dragstart: function(t) {
            var e = this,
                r = e.config,
                n = e.state,
                a = e.$el.main;
            e.hasArcType() || !r.data_selection_enabled || (n.dragStart = t, a.select(".".concat(Z.chart)).append("rect").attr("class", ir.dragarea).style("opacity", "0.1"), e.setDragStatus(!0))
        },
        dragend: function() {
            var t = this,
                e = t.config,
                r = t.$el.main,
                n = t.$T;
            t.hasArcType() || !e.data_selection_enabled || (n(r.select(".".concat(ir.dragarea))).style("opacity", "0").remove(), r.selectAll(".".concat(Mt.shape)).classed(ir.INCLUDED, !1), t.setDragStatus(!1))
        }
    }, SM = U(U({}, Yy), {
        selectPoint: function(t, e, r) {
            var n = this,
                a = n.config,
                i = n.$el.main,
                o = n.$T,
                s = a.axis_rotated,
                l = (s ? n.circleY : n.circleX).bind(n),
                c = (s ? n.circleX : n.circleY).bind(n),
                u = n.pointSelectR.bind(n);
            ft(a.data_onselected, n.api, e, t.node()), o(i.select(".".concat(mt.selectedCircles).concat(n.getTargetSelectorSuffix(e.id))).selectAll(".".concat(mt.selectedCircle, "-").concat(r)).data([e]).enter().append("circle").attr("class", function() {
                return n.generateClass(mt.selectedCircle, r)
            }).attr("cx", l).attr("cy", c).attr("stroke", n.color).attr("r", function(f) {
                return n.pointSelectR(f) * 1.4
            })).attr("r", u)
        },
        unselectPoint: function(t, e, r) {
            var n = this,
                a = n.config,
                i = n.$el.main,
                o = n.$T;
            ft(a.data_onunselected, n.api, e, t ? .node()), o(i.select(".".concat(mt.selectedCircles).concat(n.getTargetSelectorSuffix(e.id))).selectAll(".".concat(mt.selectedCircle, "-").concat(r))).attr("r", 0).remove()
        },
        togglePoint: function(t, e, r, n) {
            var a = "".concat(t ? "" : "un", "selectPoint");
            this[a](e, r, n)
        },
        selectPath: function(t, e) {
            var r = this,
                n = r.config;
            ft(n.data_onselected, r.api, e, t.node()), n.interaction_brighten && t.style("filter", "brightness(1.25)")
        },
        unselectPath: function(t, e) {
            var r = this,
                n = r.config;
            ft(n.data_onunselected, r.api, e, t.node()), n.interaction_brighten && t.style("filter", null)
        },
        togglePath: function(t, e, r, n) {
            this["".concat(t ? "" : "un", "selectPath")](e, r, n)
        },
        getToggle: function(t, e) {
            var r = this;
            return t.nodeName === "path" ? r.togglePath : r.isStepType(e) ? function() {} : r.togglePoint
        },
        toggleShape: function(t, e, r) {
            var n, a = this,
                i = a.config,
                o = a.$el.main;
            if (i.data_selection_enabled && i.data_selection_isselectable.bind(a.api)(e)) {
                var s = P(t),
                    l = s.classed(mt.SELECTED),
                    c = a.getToggle(t, e).bind(a),
                    u;
                if (!i.data_selection_multiple) {
                    var f = (n = a.isPointFocusOnly) === null || n === void 0 ? void 0 : n.call(a),
                        d = ".".concat(f ? mt.selectedCircles : Mt.shapes);
                    i.data_selection_grouped && (d += a.getTargetSelectorSuffix(e.id)), o.selectAll(d).selectAll(f ? ".".concat(mt.selectedCircle) : ".".concat(Mt.shape, ".").concat(mt.SELECTED)).classed(mt.SELECTED, !1).each(function(h) {
                        var p = P(this);
                        u = p, c(!1, p, h, h.index)
                    })
                }(!u || u.node() !== s.node()) && (s.classed(mt.SELECTED, !l), c(!l, s, e, r))
            }
        }
    }), Ss = {}, kM = {
        version: "3.10.3",
        generate: function(t) {
            var e = Fr({}, Ss, t),
                r = new Ds(e);
            return r.internal.charts = this.instance, this.instance.push(r), r
        },
        defaults: function(t) {
            return at(t) && (Ss = t), Ss
        },
        instance: [],
        plugin: {}
    }
});
var _p = ce((RM, xp) => {
    var Gy = Np(),
        Uy = Ns(),
        Hy = Yp(),
        mp = Bs(),
        Wy = Gy.isFinite,
        qy = Math.min;

    function Zy(t) {
        var e = Math[t];
        return function(r, n) {
            if (r = Hy(r), n = n == null ? 0 : qy(Uy(n), 292), n && Wy(r)) {
                var a = (mp(r) + "e").split("e"),
                    i = e(a[0] + "e" + (+a[1] + n));
                return a = (mp(i) + "e").split("e"), +(a[0] + "e" + (+a[1] - n))
            }
            return e(r)
        }
    }
    xp.exports = Zy
});
var bp = ce((MM, yp) => {
    var jy = _p(),
        Ky = jy("round");
    yp.exports = Ky
});
var wp = ce((EM, Tp) => {
    function Qy(t, e, r, n) {
        var a = -1,
            i = t == null ? 0 : t.length;
        for (n && i && (r = t[++a]); ++a < i;) r = e(r, t[a], a, t);
        return r
    }
    Tp.exports = Qy
});
var Ap = ce((LM, $p) => {
    function Jy(t, e, r, n, a) {
        return a(t, function(i, o, s) {
            r = n ? (n = !1, i) : e(r, i, o, s)
        }), r
    }
    $p.exports = Jy
});
var kp = ce((IM, Sp) => {
    var tb = wp(),
        eb = Up(),
        rb = di(),
        nb = Ap(),
        ab = Xp();

    function ib(t, e, r) {
        var n = ab(t) ? tb : nb,
            a = arguments.length < 3;
        return n(t, rb(e, 4), r, a, eb)
    }
    Sp.exports = ib
});
var Rp = ce((DM, Cp) => {
    var ob = di(),
        sb = Bp(),
        lb = Vp();

    function cb(t) {
        return function(e, r, n) {
            var a = Object(e);
            if (!sb(e)) {
                var i = ob(r, 3);
                e = lb(e), r = function(s) {
                    return i(a[s], s, a)
                }
            }
            var o = t(e, r, n);
            return o > -1 ? a[i ? e[o] : o] : void 0
        }
    }
    Cp.exports = cb
});
var Ep = ce((OM, Mp) => {
    var ub = zp(),
        fb = di(),
        db = Ns(),
        hb = Math.max;

    function pb(t, e, r) {
        var n = t == null ? 0 : t.length;
        if (!n) return -1;
        var a = r == null ? 0 : db(r);
        return a < 0 && (a = hb(n + a, 0)), ub(t, fb(e, 3), a)
    }
    Mp.exports = pb
});
var Ip = ce((PM, Lp) => {
    var gb = Rp(),
        vb = Ep(),
        mb = gb(vb);
    Lp.exports = mb
});
var Ps, Fs, fi, Dp, Op, Pp, Fp, zM, NM, BM, XM, YM, VM, GM, UM, HM, xb, WM, _b = b(() => {
    "use strict";
    Ps = Nr(Ip()), Fs = Nr(Vs()), fi = Nr(bp()), Dp = Nr(Hp()), Op = Nr(kp());
    Gp();
    Pp = /\.0+$|(\.[0-9]*[1-9])0+$/, Fp = [{
        value: 1,
        symbol: ""
    }, {
        value: 1e3,
        symbol: "k"
    }, {
        value: 1e6,
        symbol: "M"
    }, {
        value: 1e9,
        symbol: "B"
    }], zM = (t, e = 1) => {
        let r = (0, Ps.default)(Fp.slice().reverse(), ({
            value: n
        }) => Math.abs(t) >= n);
        return r ? (0, Fs.default)((t / r.value).toFixed(e), Pp, "$1") + r.symbol : "0"
    }, NM = (t, e = 1) => {
        let r = (0, Ps.default)(Fp.slice().reverse(), ({
            value: n
        }) => t >= n);
        return r ? [Number((0, Fs.default)((t / r.value).toFixed(e), Pp, "$1")), r.symbol || null] : [0, null]
    }, BM = () => {
        let t = new Date,
            e = new Date;
        return e.setMonth(e.getMonth() + 1), e.setDate(1), e.setHours(0, 0, 0, 0), 0 | (e - t) / 1e3
    }, XM = t => {
        let e = t < 0,
            r = Math.abs(t),
            n = 0 | r / 3600,
            a = 0 | r % 3600 / 60,
            i = 0 | r % 60,
            o = 0 | r % 1 * 1e3;
        return {
            h: n,
            m: a,
            s: i,
            ms: o,
            negative: e
        }
    }, YM = (t, e) => {
        let {
            h: r,
            m: n,
            s: a,
            ms: i,
            negative: o
        } = t;
        return r === 0 && n === 0 && a === 0 && (!e || i === 0) ? "0s" : `${o?"-":""}${r?`${r}h `:""}${n?`${n}m `:""}${a||e&&i>0?`${e?(0,fi.default)(a+i/1e3,2):a}s`:""}`
    }, VM = (...t) => (0, Dp.default)(t[0], (e, r) => (0, Op.default)(t, (n, a) => n + a[r], 0)), GM = (t, e, r) => window.open(t, "", `width=${e},height=${r},top=${(window.innerHeight-r)/2},left=${(window.innerWidth-e)/2}`), UM = t => {
        if (!Xs) return;
        let e = document.createElement("script");
        e.src = t, e.async = !0, document.body.appendChild(e)
    }, HM = (t, e, r = 2) => t === e ? 0 : t === 0 ? 100 : e === 0 ? -100 : e > t ? (0, fi.default)(e / t * 100, r) : (0, fi.default)((1 - e / t) * -100, r), xb = { of: t => t
    }, WM = (t, e) => {
        let r = Intl.DisplayNames ? new Intl.DisplayNames([e], {
            type: "language"
        }) : xb;
        try {
            return r.of(t) || t
        } catch {
            return t
        }
    }
});
export {
    Ve as a, Gn as b, _r as c, Wn as d, Xt as e, Vi as f, fu as g, wr as h, ua as i, Vm as j, sn as k, $r as l, so as m, uo as n, ka as o, ed as p, sd as q, Po as r, Hd as s, Rh as t, T_ as u, Dh as v, Dy as w, Oy as x, Py as y, Fy as z, zy as A, Ny as B, kM as C, Vy as D, Vs as E, _p as F, bp as G, kp as H, Ep as I, Ip as J, zM as K, NM as L, BM as M, XM as N, YM as O, VM as P, GM as Q, UM as R, HM as S, WM as T, _b as U
};
/*! Bundled license information:

billboard.js/dist-esm/billboard.js:
  (*!
  * Copyright (c) 2017 ~ present NAVER Corp.
   * billboard.js project is licensed under the MIT license
   * 
   * billboard.js, JavaScript chart library
   * https://naver.github.io/billboard.js/
   * 
   * @version 3.10.3
  *)
*/