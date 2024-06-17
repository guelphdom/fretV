import {
    a as vr
} from "/build/_shared/chunk-NGIKGSHE.js";
import {
    a as q,
    b as ht
} from "/build/_shared/chunk-DPI6PCVH.js";
import {
    a as V
} from "/build/_shared/chunk-KO3OK2JV.js";
import {
    b as d,
    c as k,
    e as N
} from "/build/_shared/chunk-ADMCF34Z.js";

function Cr() {
    var e;
    if (!X.createContext) return {};
    let t = (e = bt[xt]) != null ? e : bt[xt] = new Map,
        r = t.get(X.createContext);
    return r || (r = X.createContext(null), t.set(X.createContext, r)), r
}
var X, xt, bt, C, A = d(() => {
    X = N(V()), xt = Symbol.for("react-redux-context"), bt = typeof globalThis < "u" ? globalThis : {};
    C = Cr()
});

function Pr(e) {
    e()
}
var wt, vt, Ct, Ie = d(() => {
    wt = Pr, vt = e => wt = e, Ct = () => wt
});

function gr() {
    let e = Ct(),
        t = null,
        r = null;
    return {
        clear() {
            t = null, r = null
        },
        notify() {
            e(() => {
                let c = t;
                for (; c;) c.callback(), c = c.next
            })
        },
        get() {
            let c = [],
                n = t;
            for (; n;) c.push(n), n = n.next;
            return c
        },
        subscribe(c) {
            let n = !0,
                o = r = {
                    callback: c,
                    next: null,
                    prev: r
                };
            return o.prev ? o.prev.next = o : t = o,
                function() {
                    !n || t === null || (n = !1, o.next ? o.next.prev = o.prev : r = o.prev, o.prev ? o.prev.next = o.next : t = o.next)
                }
        }
    }
}

function ne(e, t) {
    let r, c = Pt,
        n = 0,
        o = !1;

    function u(R) {
        m();
        let x = c.subscribe(R),
            E = !1;
        return () => {
            E || (E = !0, x(), y())
        }
    }

    function a() {
        c.notify()
    }

    function i() {
        h.onStateChange && h.onStateChange()
    }

    function s() {
        return o
    }

    function m() {
        n++, r || (r = t ? t.addNestedSub(i) : e.subscribe(i), c = gr())
    }

    function y() {
        n--, r && n === 0 && (r(), r = void 0, c.clear(), c = Pt)
    }

    function S() {
        o || (o = !0, m())
    }

    function b() {
        o && (o = !1, y())
    }
    let h = {
        addNestedSub: u,
        notifyNestedSubs: a,
        handleChangeWrapper: i,
        isSubscribed: s,
        trySubscribe: S,
        tryUnsubscribe: b,
        getListeners: () => c
    };
    return h
}
var Pt, Le = d(() => {
    Ie();
    Pt = {
        notify() {},
        get: () => []
    }
});
var ce, Rr, I, ze = d(() => {
    ce = N(V()), Rr = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", I = Rr ? ce.useLayoutEffect : ce.useEffect
});

function Er({
    store: e,
    context: t,
    children: r,
    serverState: c,
    stabilityCheck: n = "once",
    noopCheck: o = "once"
}) {
    let u = Z.useMemo(() => {
            let s = ne(e);
            return {
                store: e,
                subscription: s,
                getServerState: c ? () => c : void 0,
                stabilityCheck: n,
                noopCheck: o
            }
        }, [e, c, n, o]),
        a = Z.useMemo(() => e.getState(), [e]);
    return I(() => {
        let {
            subscription: s
        } = u;
        return s.onStateChange = s.notifyNestedSubs, s.trySubscribe(), a !== e.getState() && s.notifyNestedSubs(), () => {
            s.tryUnsubscribe(), s.onStateChange = void 0
        }
    }, [u, a]), Z.createElement((t || C).Provider, {
        value: u
    }, r)
}
var Z, Or, gt = d(() => {
    Z = N(V());
    A();
    Le();
    ze();
    Or = Er
});

function ee(e, t) {
    if (e == null) return {};
    var r = {},
        c = Object.keys(e),
        n, o;
    for (o = 0; o < c.length; o++) n = c[o], !(t.indexOf(n) >= 0) && (r[n] = e[n]);
    return r
}
var Ue = d(() => {});
var Et = k(f => {
    "use strict";
    var w = typeof Symbol == "function" && Symbol.for,
        We = w ? Symbol.for("react.element") : 60103,
        He = w ? Symbol.for("react.portal") : 60106,
        se = w ? Symbol.for("react.fragment") : 60107,
        ie = w ? Symbol.for("react.strict_mode") : 60108,
        ue = w ? Symbol.for("react.profiler") : 60114,
        ae = w ? Symbol.for("react.provider") : 60109,
        fe = w ? Symbol.for("react.context") : 60110,
        Be = w ? Symbol.for("react.async_mode") : 60111,
        le = w ? Symbol.for("react.concurrent_mode") : 60111,
        pe = w ? Symbol.for("react.forward_ref") : 60112,
        de = w ? Symbol.for("react.suspense") : 60113,
        Nr = w ? Symbol.for("react.suspense_list") : 60120,
        me = w ? Symbol.for("react.memo") : 60115,
        ye = w ? Symbol.for("react.lazy") : 60116,
        $r = w ? Symbol.for("react.block") : 60121,
        Mr = w ? Symbol.for("react.fundamental") : 60117,
        Fr = w ? Symbol.for("react.responder") : 60118,
        Tr = w ? Symbol.for("react.scope") : 60119;

    function g(e) {
        if (typeof e == "object" && e !== null) {
            var t = e.$$typeof;
            switch (t) {
                case We:
                    switch (e = e.type, e) {
                        case Be:
                        case le:
                        case se:
                        case ue:
                        case ie:
                        case de:
                            return e;
                        default:
                            switch (e = e && e.$$typeof, e) {
                                case fe:
                                case pe:
                                case ye:
                                case me:
                                case ae:
                                    return e;
                                default:
                                    return t
                            }
                    }
                case He:
                    return t
            }
        }
    }

    function Rt(e) {
        return g(e) === le
    }
    f.AsyncMode = Be;
    f.ConcurrentMode = le;
    f.ContextConsumer = fe;
    f.ContextProvider = ae;
    f.Element = We;
    f.ForwardRef = pe;
    f.Fragment = se;
    f.Lazy = ye;
    f.Memo = me;
    f.Portal = He;
    f.Profiler = ue;
    f.StrictMode = ie;
    f.Suspense = de;
    f.isAsyncMode = function(e) {
        return Rt(e) || g(e) === Be
    };
    f.isConcurrentMode = Rt;
    f.isContextConsumer = function(e) {
        return g(e) === fe
    };
    f.isContextProvider = function(e) {
        return g(e) === ae
    };
    f.isElement = function(e) {
        return typeof e == "object" && e !== null && e.$$typeof === We
    };
    f.isForwardRef = function(e) {
        return g(e) === pe
    };
    f.isFragment = function(e) {
        return g(e) === se
    };
    f.isLazy = function(e) {
        return g(e) === ye
    };
    f.isMemo = function(e) {
        return g(e) === me
    };
    f.isPortal = function(e) {
        return g(e) === He
    };
    f.isProfiler = function(e) {
        return g(e) === ue
    };
    f.isStrictMode = function(e) {
        return g(e) === ie
    };
    f.isSuspense = function(e) {
        return g(e) === de
    };
    f.isValidElementType = function(e) {
        return typeof e == "string" || typeof e == "function" || e === se || e === le || e === ue || e === ie || e === de || e === Nr || typeof e == "object" && e !== null && (e.$$typeof === ye || e.$$typeof === me || e.$$typeof === ae || e.$$typeof === fe || e.$$typeof === pe || e.$$typeof === Mr || e.$$typeof === Fr || e.$$typeof === Tr || e.$$typeof === $r)
    };
    f.typeOf = g
});
var Nt = k((Do, Ot) => {
    "use strict";
    Ot.exports = Et()
});
var jt = k((Vo, kt) => {
    "use strict";
    var Ye = Nt(),
        _r = {
            childContextTypes: !0,
            contextType: !0,
            contextTypes: !0,
            defaultProps: !0,
            displayName: !0,
            getDefaultProps: !0,
            getDerivedStateFromError: !0,
            getDerivedStateFromProps: !0,
            mixins: !0,
            propTypes: !0,
            type: !0
        },
        kr = {
            name: !0,
            length: !0,
            prototype: !0,
            caller: !0,
            callee: !0,
            arguments: !0,
            arity: !0
        },
        jr = {
            $$typeof: !0,
            render: !0,
            defaultProps: !0,
            displayName: !0,
            propTypes: !0
        },
        Tt = {
            $$typeof: !0,
            compare: !0,
            defaultProps: !0,
            displayName: !0,
            propTypes: !0,
            type: !0
        },
        Ke = {};
    Ke[Ye.ForwardRef] = jr;
    Ke[Ye.Memo] = Tt;

    function $t(e) {
        return Ye.isMemo(e) ? Tt : Ke[e.$$typeof] || _r
    }
    var Dr = Object.defineProperty,
        Vr = Object.getOwnPropertyNames,
        Mt = Object.getOwnPropertySymbols,
        Ar = Object.getOwnPropertyDescriptor,
        qr = Object.getPrototypeOf,
        Ft = Object.prototype;

    function _t(e, t, r) {
        if (typeof t != "string") {
            if (Ft) {
                var c = qr(t);
                c && c !== Ft && _t(e, c, r)
            }
            var n = Vr(t);
            Mt && (n = n.concat(Mt(t)));
            for (var o = $t(e), u = $t(t), a = 0; a < n.length; ++a) {
                var i = n[a];
                if (!kr[i] && !(r && r[i]) && !(u && u[i]) && !(o && o[i])) {
                    var s = Ar(t, i);
                    try {
                        Dr(e, i, s)
                    } catch {}
                }
            }
        }
        return e
    }
    kt.exports = _t
});
var Vt = k(l => {
    "use strict";
    var Je = Symbol.for("react.element"),
        Ge = Symbol.for("react.portal"),
        Se = Symbol.for("react.fragment"),
        he = Symbol.for("react.strict_mode"),
        xe = Symbol.for("react.profiler"),
        be = Symbol.for("react.provider"),
        we = Symbol.for("react.context"),
        Ir = Symbol.for("react.server_context"),
        ve = Symbol.for("react.forward_ref"),
        Ce = Symbol.for("react.suspense"),
        Pe = Symbol.for("react.suspense_list"),
        ge = Symbol.for("react.memo"),
        Re = Symbol.for("react.lazy"),
        Lr = Symbol.for("react.offscreen"),
        Dt;
    Dt = Symbol.for("react.module.reference");

    function O(e) {
        if (typeof e == "object" && e !== null) {
            var t = e.$$typeof;
            switch (t) {
                case Je:
                    switch (e = e.type, e) {
                        case Se:
                        case xe:
                        case he:
                        case Ce:
                        case Pe:
                            return e;
                        default:
                            switch (e = e && e.$$typeof, e) {
                                case Ir:
                                case we:
                                case ve:
                                case Re:
                                case ge:
                                case be:
                                    return e;
                                default:
                                    return t
                            }
                    }
                case Ge:
                    return t
            }
        }
    }
    l.ContextConsumer = we;
    l.ContextProvider = be;
    l.Element = Je;
    l.ForwardRef = ve;
    l.Fragment = Se;
    l.Lazy = Re;
    l.Memo = ge;
    l.Portal = Ge;
    l.Profiler = xe;
    l.StrictMode = he;
    l.Suspense = Ce;
    l.SuspenseList = Pe;
    l.isAsyncMode = function() {
        return !1
    };
    l.isConcurrentMode = function() {
        return !1
    };
    l.isContextConsumer = function(e) {
        return O(e) === we
    };
    l.isContextProvider = function(e) {
        return O(e) === be
    };
    l.isElement = function(e) {
        return typeof e == "object" && e !== null && e.$$typeof === Je
    };
    l.isForwardRef = function(e) {
        return O(e) === ve
    };
    l.isFragment = function(e) {
        return O(e) === Se
    };
    l.isLazy = function(e) {
        return O(e) === Re
    };
    l.isMemo = function(e) {
        return O(e) === ge
    };
    l.isPortal = function(e) {
        return O(e) === Ge
    };
    l.isProfiler = function(e) {
        return O(e) === xe
    };
    l.isStrictMode = function(e) {
        return O(e) === he
    };
    l.isSuspense = function(e) {
        return O(e) === Ce
    };
    l.isSuspenseList = function(e) {
        return O(e) === Pe
    };
    l.isValidElementType = function(e) {
        return typeof e == "string" || typeof e == "function" || e === Se || e === xe || e === he || e === Ce || e === Pe || e === Lr || typeof e == "object" && e !== null && (e.$$typeof === Re || e.$$typeof === ge || e.$$typeof === be || e.$$typeof === we || e.$$typeof === ve || e.$$typeof === Dt || e.getModuleId !== void 0)
    };
    l.typeOf = O
});
var qt = k((qo, At) => {
    "use strict";
    At.exports = Vt()
});
var Ee = d(() => {});
var It = d(() => {
    Ee()
});

function Wr(e, t, r, c, {
    areStatesEqual: n,
    areOwnPropsEqual: o,
    areStatePropsEqual: u
}) {
    let a = !1,
        i, s, m, y, S;

    function b(v, P) {
        return i = v, s = P, m = e(i, s), y = t(c, s), S = r(m, y, s), a = !0, S
    }

    function h() {
        return m = e(i, s), t.dependsOnOwnProps && (y = t(c, s)), S = r(m, y, s), S
    }

    function R() {
        return e.dependsOnOwnProps && (m = e(i, s)), t.dependsOnOwnProps && (y = t(c, s)), S = r(m, y, s), S
    }

    function x() {
        let v = e(i, s),
            P = !u(v, m);
        return m = v, P && (S = r(m, y, s)), S
    }

    function E(v, P) {
        let $ = !o(P, s),
            H = !n(v, i, P, s);
        return i = v, s = P, $ && H ? h() : $ ? R() : H ? x() : S
    }
    return function(P, $) {
        return a ? E(P, $) : b(P, $)
    }
}

function Qe(e, t) {
    let {
        initMapStateToProps: r,
        initMapDispatchToProps: c,
        initMergeProps: n
    } = t, o = ee(t, Ur), u = r(e, o), a = c(e, o), i = n(e, o);
    return Wr(u, a, i, e, o)
}
var Ur, Lt = d(() => {
    Ue();
    It();
    Ur = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"]
});

function Xe(e, t) {
    let r = {};
    for (let c in e) {
        let n = e[c];
        typeof n == "function" && (r[c] = (...o) => t(n(...o)))
    }
    return r
}
var zt = d(() => {});
var Ut = d(() => {});
var Ze = d(() => {
    Ut();
    Ee()
});

function te(e) {
    return function(r) {
        let c = e(r);

        function n() {
            return c
        }
        return n.dependsOnOwnProps = !1, n
    }
}

function Wt(e) {
    return e.dependsOnOwnProps ? Boolean(e.dependsOnOwnProps) : e.length !== 1
}

function Oe(e, t) {
    return function(c, {
        displayName: n
    }) {
        let o = function(a, i) {
            return o.dependsOnOwnProps ? o.mapToProps(a, i) : o.mapToProps(a, void 0)
        };
        return o.dependsOnOwnProps = !0, o.mapToProps = function(a, i) {
            o.mapToProps = e, o.dependsOnOwnProps = Wt(e);
            let s = o(a, i);
            return typeof s == "function" && (o.mapToProps = s, o.dependsOnOwnProps = Wt(s), s = o(a, i)), s
        }, o
    }
}
var et = d(() => {
    Ze()
});

function L(e, t) {
    return (r, c) => {
        throw new Error(`Invalid value of type ${typeof e} for ${t} argument when connecting component ${c.wrappedComponentName}.`)
    }
}
var Ne = d(() => {});

function Ht(e) {
    return e && typeof e == "object" ? te(t => Xe(e, t)) : e ? typeof e == "function" ? Oe(e, "mapDispatchToProps") : L(e, "mapDispatchToProps") : te(t => ({
        dispatch: t
    }))
}
var Bt = d(() => {
    zt();
    et();
    Ne()
});

function Yt(e) {
    return e ? typeof e == "function" ? Oe(e, "mapStateToProps") : L(e, "mapStateToProps") : te(() => ({}))
}
var Kt = d(() => {
    et();
    Ne()
});

function Hr(e, t, r) {
    return q({}, r, e, t)
}

function Br(e) {
    return function(r, {
        displayName: c,
        areMergedPropsEqual: n
    }) {
        let o = !1,
            u;
        return function(i, s, m) {
            let y = e(i, s, m);
            return o ? n(y, u) || (u = y) : (o = !0, u = y), u
        }
    }
}

function Jt(e) {
    return e ? typeof e == "function" ? Br(e) : L(e, "mergeProps") : () => Hr
}
var Gt = d(() => {
    ht();
    Ze();
    Ne()
});

function Qt(e, t) {
    return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t
}

function z(e, t) {
    if (Qt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    let r = Object.keys(e),
        c = Object.keys(t);
    if (r.length !== c.length) return !1;
    for (let n = 0; n < r.length; n++)
        if (!Object.prototype.hasOwnProperty.call(t, r[n]) || !Qt(e[r[n]], t[r[n]])) return !1;
    return !0
}
var tt = d(() => {});
var $e, rt = d(() => {
    $e = () => {
        throw new Error("uSES not initialized!")
    }
});

function Jr(e, t, r) {
    I(() => e(...t), r)
}

function Gr(e, t, r, c, n, o) {
    e.current = c, r.current = !1, n.current && (n.current = null, o())
}

function Qr(e, t, r, c, n, o, u, a, i, s, m) {
    if (!e) return () => {};
    let y = !1,
        S = null,
        b = () => {
            if (y || !a.current) return;
            let R = t.getState(),
                x, E;
            try {
                x = c(R, n.current)
            } catch (v) {
                E = v, S = v
            }
            E || (S = null), x === o.current ? u.current || s() : (o.current = x, i.current = x, u.current = !0, m())
        };
    return r.onStateChange = b, r.trySubscribe(), b(), () => {
        if (y = !0, r.tryUnsubscribe(), r.onStateChange = null, S) throw S
    }
}

function Xr(e, t) {
    return e === t
}

function Zr(e, t, r, {
    pure: c,
    areStatesEqual: n = Xr,
    areOwnPropsEqual: o = z,
    areStatePropsEqual: u = z,
    areMergedPropsEqual: a = z,
    forwardRef: i = !1,
    context: s = C
} = {}) {
    let m = s,
        y = Yt(e),
        S = Ht(t),
        b = Jt(r),
        h = Boolean(e);
    return x => {
        let E = x.displayName || x.name || "Component",
            v = `Connect(${E})`,
            P = {
                shouldHandleStateChanges: h,
                displayName: v,
                wrappedComponentName: E,
                WrappedComponent: x,
                initMapStateToProps: y,
                initMapDispatchToProps: S,
                initMergeProps: b,
                areStatesEqual: n,
                areStatePropsEqual: u,
                areOwnPropsEqual: o,
                areMergedPropsEqual: a
            };

        function $(F) {
            let [T, _e, j] = p.useMemo(() => {
                let {
                    reactReduxForwardedRef: M
                } = F, Q = ee(F, Yr);
                return [F.context, M, Q]
            }, [F]), Y = p.useMemo(() => T && T.Consumer && (0, Xt.isContextConsumer)(p.createElement(T.Consumer, null)) ? T : m, [T, m]), _ = p.useContext(Y), K = Boolean(F.store) && Boolean(F.store.getState) && Boolean(F.store.dispatch), br = Boolean(_) && Boolean(_.store), D = K ? F.store : _.store, pt = br ? _.getServerState : D.getState, ke = p.useMemo(() => Qe(D.dispatch, P), [D]), [J, dt] = p.useMemo(() => {
                if (!h) return Kr;
                let M = ne(D, K ? void 0 : _.subscription),
                    Q = M.notifyNestedSubs.bind(M);
                return [M, Q]
            }, [D, K, _]), mt = p.useMemo(() => K ? _ : q({}, _, {
                subscription: J
            }), [K, _, J]), je = p.useRef(), De = p.useRef(j), G = p.useRef(), yt = p.useRef(!1), Po = p.useRef(!1), Ve = p.useRef(!1), Ae = p.useRef();
            I(() => (Ve.current = !0, () => {
                Ve.current = !1
            }), []);
            let St = p.useMemo(() => () => G.current && j === De.current ? G.current : ke(D.getState(), j), [D, j]),
                wr = p.useMemo(() => Q => J ? Qr(h, D, J, ke, De, je, yt, Ve, G, dt, Q) : () => {}, [J]);
            Jr(Gr, [De, je, yt, j, G, dt]);
            let oe;
            try {
                oe = Zt(wr, St, pt ? () => ke(pt(), j) : St)
            } catch (M) {
                throw Ae.current && (M.message += `
The error may be correlated with this previous error:
${Ae.current.stack}

`), M
            }
            I(() => {
                Ae.current = void 0, G.current = void 0, je.current = oe
            });
            let qe = p.useMemo(() => p.createElement(x, q({}, oe, {
                ref: _e
            })), [_e, x, oe]);
            return p.useMemo(() => h ? p.createElement(Y.Provider, {
                value: mt
            }, qe) : qe, [Y, qe, mt])
        }
        let B = p.memo($);
        if (B.WrappedComponent = x, B.displayName = $.displayName = v, i) {
            let T = p.forwardRef(function(j, Y) {
                return p.createElement(B, q({}, j, {
                    reactReduxForwardedRef: Y
                }))
            });
            return T.displayName = v, T.WrappedComponent = x, (0, ot.default)(T, x)
        }
        return (0, ot.default)(B, x)
    }
}
var ot, p, Xt, Yr, Zt, er, Kr, eo, nt = d(() => {
    ht();
    Ue();
    ot = N(jt()), p = N(V()), Xt = N(qt());
    Lt();
    Bt();
    Kt();
    Gt();
    Le();
    ze();
    tt();
    Ee();
    A();
    rt();
    Yr = ["reactReduxForwardedRef"], Zt = $e, er = e => {
        Zt = e
    }, Kr = [null, null];
    eo = Zr
});

function re(e = C) {
    return function() {
        return (0, tr.useContext)(e)
    }
}
var tr, Me, ct = d(() => {
    tr = N(V());
    A();
    Me = re()
});

function Fe(e = C) {
    let t = e === C ? Me : re(e);
    return function() {
        let {
            store: c
        } = t();
        return c
    }
}
var st, it = d(() => {
    A();
    ct();
    st = Fe()
});

function rr(e = C) {
    let t = e === C ? st : Fe(e);
    return function() {
        return t().dispatch
    }
}
var to, or = d(() => {
    A();
    it();
    to = rr()
});

function sr(e = C) {
    let t = e === C ? Me : re(e);
    return function(c, n = {}) {
        let {
            equalityFn: o = ro,
            stabilityCheck: u = void 0,
            noopCheck: a = void 0
        } = typeof n == "function" ? {
            equalityFn: n
        } : n, {
            store: i,
            subscription: s,
            getServerState: m,
            stabilityCheck: y,
            noopCheck: S
        } = t(), b = (0, U.useRef)(!0), h = (0, U.useCallback)({
            [c.name](x) {
                let E = c(x);
                if (!1) {
                    if ((v === "always" || v === "once" && b.current) && !o(E, $)) try {} catch (B) {}
                    if ((P === "always" || P === "once" && b.current) && E === x) try {} catch (H) {}
                }
                return E
            }
        }[c.name], [c, y, u]), R = nr(s.addNestedSub, i.getState, m || i.getState, h, o);
        return (0, U.useDebugValue)(R), R
    }
}
var U, nr, cr, ro, oo, ut = d(() => {
    U = N(V());
    ct();
    A();
    rt();
    nr = $e, cr = e => {
        nr = e
    }, ro = (e, t) => e === t;
    oo = sr()
});
var ir = d(() => {});
var ur = d(() => {
    gt();
    nt();
    A();
    or();
    ut();
    it();
    tt();
    ir()
});
var fr = k(ar => {
    "use strict";
    var W = V();

    function no(e, t) {
        return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
    }
    var co = typeof Object.is == "function" ? Object.is : no,
        so = W.useState,
        io = W.useEffect,
        uo = W.useLayoutEffect,
        ao = W.useDebugValue;

    function fo(e, t) {
        var r = t(),
            c = so({
                inst: {
                    value: r,
                    getSnapshot: t
                }
            }),
            n = c[0].inst,
            o = c[1];
        return uo(function() {
            n.value = r, n.getSnapshot = t, at(n) && o({
                inst: n
            })
        }, [e, r, t]), io(function() {
            return at(n) && o({
                inst: n
            }), e(function() {
                at(n) && o({
                    inst: n
                })
            })
        }, [e]), ao(r), r
    }

    function at(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var r = t();
            return !co(e, r)
        } catch {
            return !0
        }
    }

    function lo(e, t) {
        return t()
    }
    var po = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? lo : fo;
    ar.useSyncExternalStore = W.useSyncExternalStore !== void 0 ? W.useSyncExternalStore : po
});
var ft = k((tc, lr) => {
    "use strict";
    lr.exports = fr()
});
var dr = k(pr => {
    "use strict";
    var Te = V(),
        mo = ft();

    function yo(e, t) {
        return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
    }
    var So = typeof Object.is == "function" ? Object.is : yo,
        ho = mo.useSyncExternalStore,
        xo = Te.useRef,
        bo = Te.useEffect,
        wo = Te.useMemo,
        vo = Te.useDebugValue;
    pr.useSyncExternalStoreWithSelector = function(e, t, r, c, n) {
        var o = xo(null);
        if (o.current === null) {
            var u = {
                hasValue: !1,
                value: null
            };
            o.current = u
        } else u = o.current;
        o = wo(function() {
            function i(b) {
                if (!s) {
                    if (s = !0, m = b, b = c(b), n !== void 0 && u.hasValue) {
                        var h = u.value;
                        if (n(h, b)) return y = h
                    }
                    return y = b
                }
                if (h = y, So(m, b)) return h;
                var R = c(b);
                return n !== void 0 && n(h, R) ? h : (m = b, y = R)
            }
            var s = !1,
                m, y, S = r === void 0 ? null : r;
            return [function() {
                return i(t())
            }, S === null ? void 0 : function() {
                return i(S())
            }]
        }, [t, r, c, n]);
        var a = ho(e, o[0], o[1]);
        return bo(function() {
            u.hasValue = !0, u.value = a
        }, [a]), vo(a), a
    }
});
var yr = k((oc, mr) => {
    "use strict";
    mr.exports = dr()
});
var lt, Sr = d(() => {
    lt = N(vr())
});
var hr, xr, Co = d(() => {
    hr = N(ft()), xr = N(yr());
    Sr();
    Ie();
    ut();
    nt();
    ur();
    cr(xr.useSyncExternalStoreWithSelector);
    er(hr.useSyncExternalStore);
    vt(lt.unstable_batchedUpdates)
});
export {
    ee as a, Ue as b, oo as c, eo as d, Or as e, to as f, Co as g
};
/*! Bundled license information:

react-is/cjs/react-is.production.min.js:
  (** @license React v16.13.1
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-is/cjs/react-is.production.min.js:
  (**
   * @license React
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

use-sync-external-store/cjs/use-sync-external-store-shim.production.min.js:
  (**
   * @license React
   * use-sync-external-store-shim.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.production.min.js:
  (**
   * @license React
   * use-sync-external-store-shim/with-selector.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/