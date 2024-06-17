import {
    a as R
} from "/build/_shared/chunk-KO3OK2JV.js";
import {
    b as xe,
    c as ye,
    e as C
} from "/build/_shared/chunk-ADMCF34Z.js";

function B() {
    return B = Object.assign ? Object.assign.bind() : function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
        }
        return t
    }, B.apply(this, arguments)
}
var oe = xe(() => {});
var ae = ye((_e, ie) => {
    ie.exports = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    }
});
var be = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
    ve = {
        "&amp;": "&",
        "&#38;": "&",
        "&lt;": "<",
        "&#60;": "<",
        "&gt;": ">",
        "&#62;": ">",
        "&apos;": "'",
        "&#39;": "'",
        "&quot;": '"',
        "&#34;": '"',
        "&nbsp;": " ",
        "&#160;": " ",
        "&copy;": "\xA9",
        "&#169;": "\xA9",
        "&reg;": "\xAE",
        "&#174;": "\xAE",
        "&hellip;": "\u2026",
        "&#8230;": "\u2026",
        "&#x2F;": "/",
        "&#47;": "/"
    },
    Ne = t => ve[t],
    te = t => t.replace(be, Ne);
var q = {
    bindI18n: "languageChanged",
    bindI18nStore: "",
    transEmptyNodeValue: "",
    transSupportBasicHtmlNodes: !0,
    transWrapTextNodes: "",
    transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
    useSuspense: !0,
    unescape: te
};

function W() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    q = { ...q,
        ...t
    }
}

function D() {
    return q
}
var ne;

function U(t) {
    ne = t
}

function P() {
    return ne
}
var re = {
    type: "3rdParty",
    init(t) {
        W(t.options.react), U(t)
    }
};
var V = C(R(), 1);
var se = C(R(), 1);
var k = (0, se.createContext)(),
    M = class {
        constructor() {
            this.usedNamespaces = {}
        }
        addUsedNamespaces(e) {
            e.forEach(n => {
                this.usedNamespaces[n] || (this.usedNamespaces[n] = !0)
            })
        }
        getUsedNamespaces() {
            return Object.keys(this.usedNamespaces)
        }
    };

function Ie(t) {
    let {
        i18n: e,
        defaultNS: n,
        children: o
    } = t, p = (0, V.useMemo)(() => ({
        i18n: e,
        defaultNS: n
    }), [e, n]);
    return (0, V.createElement)(k.Provider, {
        value: p
    }, o)
}
var de = C(R(), 1);
oe();
var I = C(R(), 1);
var pe = C(ae()),
    we = /\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;

function ue(t) {
    var e = {
            type: "tag",
            name: "",
            voidElement: !1,
            attrs: {},
            children: []
        },
        n = t.match(/<\/?([^\s]+?)[/\s>]/);
    if (n && (e.name = n[1], (pe.default[n[1]] || t.charAt(t.length - 2) === "/") && (e.voidElement = !0), e.name.startsWith("!--"))) {
        var o = t.indexOf("-->");
        return {
            type: "comment",
            comment: o !== -1 ? t.slice(4, o) : ""
        }
    }
    for (var p = new RegExp(we), r = null;
        (r = p.exec(t)) !== null;)
        if (r[0].trim())
            if (r[1]) {
                var a = r[1].trim(),
                    l = [a, ""];
                a.indexOf("=") > -1 && (l = a.split("=")), e.attrs[l[0]] = l[1], p.lastIndex--
            } else r[2] && (e.attrs[r[2]] = r[3].trim().substring(1, r[3].length - 1));
    return e
}
var Se = /<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,
    Te = /^\s*$/,
    Ee = Object.create(null);

function ce(t, e) {
    switch (e.type) {
        case "text":
            return t + e.content;
        case "tag":
            return t += "<" + e.name + (e.attrs ? function(n) {
                var o = [];
                for (var p in n) o.push(p + '="' + n[p] + '"');
                return o.length ? " " + o.join(" ") : ""
            }(e.attrs) : "") + (e.voidElement ? "/>" : ">"), e.voidElement ? t : t + e.children.reduce(ce, "") + "</" + e.name + ">";
        case "comment":
            return t + "<!--" + e.comment + "-->"
    }
}
var Oe = {
        parse: function(t, e) {
            e || (e = {}), e.components || (e.components = Ee);
            var n, o = [],
                p = [],
                r = -1,
                a = !1;
            if (t.indexOf("<") !== 0) {
                var l = t.indexOf("<");
                o.push({
                    type: "text",
                    content: l === -1 ? t : t.substring(0, l)
                })
            }
            return t.replace(Se, function(d, i) {
                if (a) {
                    if (d !== "</" + n.name + ">") return;
                    a = !1
                }
                var h, w = d.charAt(1) !== "/",
                    E = d.startsWith("<!--"),
                    b = i + d.length,
                    v = t.charAt(b);
                if (E) {
                    var x = ue(d);
                    return r < 0 ? (o.push(x), o) : ((h = p[r]).children.push(x), o)
                }
                if (w && (r++, (n = ue(d)).type === "tag" && e.components[n.name] && (n.type = "component", a = !0), n.voidElement || a || !v || v === "<" || n.children.push({
                        type: "text",
                        content: t.slice(b, t.indexOf("<", b))
                    }), r === 0 && o.push(n), (h = p[r - 1]) && h.children.push(n), p[r] = n), (!w || n.voidElement) && (r > -1 && (n.voidElement || n.name === d.slice(2, -1)) && (r--, n = r === -1 ? o : p[r]), !a && v !== "<" && v)) {
                    h = r === -1 ? o : p[r].children;
                    var c = t.indexOf("<", b),
                        f = t.slice(b, c === -1 ? void 0 : c);
                    Te.test(f) && (f = " "), (c > -1 && r + h.length >= 0 || f !== " ") && h.push({
                        type: "text",
                        content: f
                    })
                }
            }), o
        },
        stringify: function(t) {
            return t.reduce(function(e, n) {
                return e + ce("", n)
            }, "")
        }
    },
    le = Oe;

function K() {
    if (console && console.warn) {
        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
        typeof e[0] == "string" && (e[0] = `react-i18next:: ${e[0]}`), console.warn(...e)
    }
}
var fe = {};

function z() {
    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
    typeof e[0] == "string" && fe[e[0]] || (typeof e[0] == "string" && (fe[e[0]] = new Date), K(...e))
}
var me = (t, e) => () => {
    if (t.isInitialized) e();
    else {
        let n = () => {
            setTimeout(() => {
                t.off("initialized", n)
            }, 0), e()
        };
        t.on("initialized", n)
    }
};

function Y(t, e, n) {
    t.loadNamespaces(e, me(t, n))
}

function X(t, e, n, o) {
    typeof n == "string" && (n = [n]), n.forEach(p => {
        t.options.ns.indexOf(p) < 0 && t.options.ns.push(p)
    }), t.loadLanguages(e, me(t, o))
}

function $e(t, e) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
        o = e.languages[0],
        p = e.options ? e.options.fallbackLng : !1,
        r = e.languages[e.languages.length - 1];
    if (o.toLowerCase() === "cimode") return !0;
    let a = (l, d) => {
        let i = e.services.backendConnector.state[`${l}|${d}`];
        return i === -1 || i === 2
    };
    return n.bindI18n && n.bindI18n.indexOf("languageChanging") > -1 && e.services.backendConnector.backend && e.isLanguageChangingTo && !a(e.isLanguageChangingTo, t) ? !1 : !!(e.hasResourceBundle(o, t) || !e.services.backendConnector.backend || e.options.resources && !e.options.partialBundledLanguages || a(o, t) && (!p || a(r, t)))
}

function ge(t, e) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return !e.languages || !e.languages.length ? (z("i18n.languages were undefined or empty", e.languages), !0) : e.options.ignoreJSONStructure !== void 0 ? e.hasLoadedNamespace(t, {
        lng: n.lng,
        precheck: (p, r) => {
            if (n.bindI18n && n.bindI18n.indexOf("languageChanging") > -1 && p.services.backendConnector.backend && p.isLanguageChangingTo && !r(p.isLanguageChangingTo, t)) return !1
        }
    }) : $e(t, e, n)
}

function Z(t, e) {
    if (!t) return !1;
    let n = t.props ? t.props.children : t.children;
    return e ? n.length > 0 : !!n
}

function G(t) {
    if (!t) return [];
    let e = t.props ? t.props.children : t.children;
    return t.props && t.props.i18nIsDynamicList ? H(e) : e
}

function Ce(t) {
    return Object.prototype.toString.call(t) !== "[object Array]" ? !1 : t.every(e => (0, I.isValidElement)(e))
}

function H(t) {
    return Array.isArray(t) ? t : [t]
}

function Pe(t, e) {
    let n = { ...e
    };
    return n.props = Object.assign(t.props, e.props), n
}

function Q(t, e) {
    if (!t) return "";
    let n = "",
        o = H(t),
        p = e.transSupportBasicHtmlNodes && e.transKeepBasicHtmlNodesFor ? e.transKeepBasicHtmlNodesFor : [];
    return o.forEach((r, a) => {
        if (typeof r == "string") n += `${r}`;
        else if ((0, I.isValidElement)(r)) {
            let l = Object.keys(r.props).length,
                d = p.indexOf(r.type) > -1,
                i = r.props.children;
            if (!i && d && l === 0) n += `<${r.type}/>`;
            else if (!i && (!d || l !== 0)) n += `<${a}></${a}>`;
            else if (r.props.i18nIsDynamicList) n += `<${a}></${a}>`;
            else if (d && l === 1 && typeof i == "string") n += `<${r.type}>${i}</${r.type}>`;
            else {
                let h = Q(i, e);
                n += `<${a}>${h}</${a}>`
            }
        } else if (r === null) K("Trans: the passed in value is invalid - seems you passed in a null child.");
        else if (typeof r == "object") {
            let {
                format: l,
                ...d
            } = r, i = Object.keys(d);
            if (i.length === 1) {
                let h = l ? `${i[0]}, ${l}` : i[0];
                n += `{{${h}}}`
            } else K("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.", r)
        } else K("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.", r)
    }), n
}

function je(t, e, n, o, p, r) {
    if (e === "") return [];
    let a = o.transKeepBasicHtmlNodesFor || [],
        l = e && new RegExp(a.map(c => `<${c}`).join("|")).test(e);
    if (!t && !l && !r) return [e];
    let d = {};

    function i(c) {
        H(c).forEach(u => {
            typeof u != "string" && (Z(u) ? i(G(u)) : typeof u == "object" && !(0, I.isValidElement)(u) && Object.assign(d, u))
        })
    }
    i(t);
    let h = le.parse(`<0>${e}</0>`),
        w = { ...d,
            ...p
        };

    function E(c, f, u) {
        let g = G(c),
            y = v(g, f.children, u);
        return Ce(g) && y.length === 0 || c.props && c.props.i18nIsDynamicList ? g : y
    }

    function b(c, f, u, g, y) {
        c.dummy ? (c.children = f, u.push((0, I.cloneElement)(c, {
            key: g
        }, y ? void 0 : f))) : u.push(...I.Children.map([c], m => {
            let s = { ...m.props
            };
            return delete s.i18nIsDynamicList, I.default.createElement(m.type, B({}, s, {
                key: g,
                ref: m.ref
            }, y ? {} : {
                children: f
            }))
        }))
    }

    function v(c, f, u) {
        let g = H(c);
        return H(f).reduce((m, s, $) => {
            let L = s.children && s.children[0] && s.children[0].content && n.services.interpolator.interpolate(s.children[0].content, w, n.language);
            if (s.type === "tag") {
                let T = g[parseInt(s.name, 10)];
                u.length === 1 && !T && (T = u[0][s.name]), T || (T = {});
                let N = Object.keys(s.attrs).length !== 0 ? Pe({
                        props: s.attrs
                    }, T) : T,
                    A = (0, I.isValidElement)(N),
                    j = A && Z(s, !0) && !s.voidElement,
                    F = l && typeof N == "object" && N.dummy && !A,
                    J = typeof t == "object" && t !== null && Object.hasOwnProperty.call(t, s.name);
                if (typeof N == "string") {
                    let S = n.services.interpolator.interpolate(N, w, n.language);
                    m.push(S)
                } else if (Z(N) || j) {
                    let S = E(N, s, u);
                    b(N, S, m, $)
                } else if (F) {
                    let S = v(g, s.children, u);
                    b(N, S, m, $)
                } else if (Number.isNaN(parseFloat(s.name)))
                    if (J) {
                        let S = E(N, s, u);
                        b(N, S, m, $, s.voidElement)
                    } else if (o.transSupportBasicHtmlNodes && a.indexOf(s.name) > -1)
                    if (s.voidElement) m.push((0, I.createElement)(s.name, {
                        key: `${s.name}-${$}`
                    }));
                    else {
                        let S = v(g, s.children, u);
                        m.push((0, I.createElement)(s.name, {
                            key: `${s.name}-${$}`
                        }, S))
                    }
                else if (s.voidElement) m.push(`<${s.name} />`);
                else {
                    let S = v(g, s.children, u);
                    m.push(`<${s.name}>${S}</${s.name}>`)
                } else if (typeof N == "object" && !A) {
                    let S = s.children[0] ? L : null;
                    S && m.push(S)
                } else b(N, L, m, $, s.children.length !== 1 || !L)
            } else if (s.type === "text") {
                let T = o.transWrapTextNodes,
                    N = r ? o.unescape(n.services.interpolator.interpolate(s.content, w, n.language)) : n.services.interpolator.interpolate(s.content, w, n.language);
                T ? m.push((0, I.createElement)(T, {
                    key: `${s.name}-${$}`
                }, N)) : m.push(N)
            }
            return m
        }, [])
    }
    let x = v([{
        dummy: !0,
        children: t || []
    }], h, H(t || []));
    return G(x[0])
}

function _(t) {
    let {
        children: e,
        count: n,
        parent: o,
        i18nKey: p,
        context: r,
        tOptions: a = {},
        values: l,
        defaults: d,
        components: i,
        ns: h,
        i18n: w,
        t: E,
        shouldUnescape: b,
        ...v
    } = t, x = w || P();
    if (!x) return z("You will need to pass in an i18next instance by using i18nextReactModule"), e;
    let c = E || x.t.bind(x) || (j => j);
    r && (a.context = r);
    let f = { ...D(),
            ...x.options && x.options.react
        },
        u = h || c.ns || x.options && x.options.defaultNS;
    u = typeof u == "string" ? [u] : u || ["translation"];
    let g = Q(e, f),
        y = d || g || f.transEmptyNodeValue || p,
        {
            hashTransKey: m
        } = f,
        s = p || (m ? m(g || y) : g || y);
    x.options && x.options.interpolation && x.options.interpolation.defaultVariables && (l = l && Object.keys(l).length > 0 ? { ...l,
        ...x.options.interpolation.defaultVariables
    } : { ...x.options.interpolation.defaultVariables
    });
    let $ = l ? a.interpolation : {
            interpolation: { ...a.interpolation,
                prefix: "#$?",
                suffix: "?$#"
            }
        },
        L = { ...a,
            count: n,
            ...l,
            ...$,
            defaultValue: y,
            ns: u
        },
        T = s ? c(s, L) : y;
    i && Object.keys(i).forEach(j => {
        let F = i[j];
        if (typeof F.type == "function" || !F.props || !F.props.children || T.indexOf(`${j}/>`) < 0 && T.indexOf(`${j} />`) < 0) return;

        function J() {
            return I.default.createElement(I.default.Fragment, null, F)
        }
        i[j] = I.default.createElement(J, null)
    });
    let N = je(i || e, T, x, f, L, b),
        A = o !== void 0 ? o : f.defaultTransParent;
    return A ? (0, I.createElement)(A, v, N) : N
}

function Re(t) {
    let {
        children: e,
        count: n,
        parent: o,
        i18nKey: p,
        context: r,
        tOptions: a = {},
        values: l,
        defaults: d,
        components: i,
        ns: h,
        i18n: w,
        t: E,
        shouldUnescape: b,
        ...v
    } = t, {
        i18n: x,
        defaultNS: c
    } = (0, de.useContext)(k) || {}, f = w || x || P(), u = E || f && f.t.bind(f);
    return _({
        children: e,
        count: n,
        parent: o,
        i18nKey: p,
        context: r,
        tOptions: a,
        values: l,
        defaults: d,
        components: i,
        ns: h || u && u.ns || c || f && f.options && f.options.defaultNS,
        i18n: f,
        t: E,
        shouldUnescape: b,
        ...v
    })
}
var O = C(R(), 1);
var ke = (t, e) => {
    let n = (0, O.useRef)();
    return (0, O.useEffect)(() => {
        n.current = e ? n.current : t
    }, [t, e]), n.current
};

function ee(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
        {
            i18n: n
        } = e,
        {
            i18n: o,
            defaultNS: p
        } = (0, O.useContext)(k) || {},
        r = n || o || P();
    if (r && !r.reportNamespaces && (r.reportNamespaces = new M), !r) {
        z("You will need to pass in an i18next instance by using initReactI18next");
        let g = (m, s) => typeof s == "string" ? s : s && typeof s == "object" && typeof s.defaultValue == "string" ? s.defaultValue : Array.isArray(m) ? m[m.length - 1] : m,
            y = [g, {}, !1];
        return y.t = g, y.i18n = {}, y.ready = !1, y
    }
    r.options.react && r.options.react.wait !== void 0 && z("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
    let a = { ...D(),
            ...r.options.react,
            ...e
        },
        {
            useSuspense: l,
            keyPrefix: d
        } = a,
        i = t || p || r.options && r.options.defaultNS;
    i = typeof i == "string" ? [i] : i || ["translation"], r.reportNamespaces.addUsedNamespaces && r.reportNamespaces.addUsedNamespaces(i);
    let h = (r.isInitialized || r.initializedStoreOnce) && i.every(g => ge(g, r, a));

    function w() {
        return r.getFixedT(e.lng || null, a.nsMode === "fallback" ? i : i[0], d)
    }
    let [E, b] = (0, O.useState)(w), v = i.join();
    e.lng && (v = `${e.lng}${v}`);
    let x = ke(v),
        c = (0, O.useRef)(!0);
    (0, O.useEffect)(() => {
        let {
            bindI18n: g,
            bindI18nStore: y
        } = a;
        c.current = !0, !h && !l && (e.lng ? X(r, e.lng, i, () => {
            c.current && b(w)
        }) : Y(r, i, () => {
            c.current && b(w)
        })), h && x && x !== v && c.current && b(w);

        function m() {
            c.current && b(w)
        }
        return g && r && r.on(g, m), y && r && r.store.on(y, m), () => {
            c.current = !1, g && r && g.split(" ").forEach(s => r.off(s, m)), y && r && y.split(" ").forEach(s => r.store.off(s, m))
        }
    }, [r, v]);
    let f = (0, O.useRef)(!0);
    (0, O.useEffect)(() => {
        c.current && !f.current && b(w), f.current = !1
    }, [r, d]);
    let u = [E, r, h];
    if (u.t = E, u.i18n = r, u.ready = h, h || !h && !l) return u;
    throw new Promise(g => {
        e.lng ? X(r, e.lng, i, () => g()) : Y(r, i, () => g())
    })
}
var he = C(R(), 1);
var ze = C(R(), 1);
var Ae = C(R(), 1);
export {
    B as a, oe as b, re as c, Re as d, ee as e, Ie as f
};