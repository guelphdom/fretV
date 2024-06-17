import {
    a as ht
} from "/build/_shared/chunk-NGIKGSHE.js";
import {
    a as b
} from "/build/_shared/chunk-KO3OK2JV.js";
import {
    e as g
} from "/build/_shared/chunk-ADMCF34Z.js";
var f = g(b(), 1);
var P = g(b(), 1);

function q(...e) {
    return Array.from(new Set(e.flatMap(t => typeof t == "string" ? t.split(" ") : []))).filter(Boolean).join(" ")
}

function x(e, t, ...r) {
    if (e in t) {
        let o = t[e];
        return typeof o == "function" ? o(...r) : o
    }
    let n = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(o=>`"${o}"`).join(", ")}.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, x), n
}
var ye = (e => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(ye || {}),
    C = (e => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(C || {});

function D({
    ourProps: e,
    theirProps: t,
    slot: r,
    defaultTag: n,
    features: o,
    visible: a = !0,
    name: s
}) {
    let i = ke(t, e);
    if (a) return oe(i, r, n, s);
    let u = o ? ? 0;
    if (u & 2) {
        let {
            static: l = !1,
            ...c
        } = i;
        if (l) return oe(c, r, n, s)
    }
    if (u & 1) {
        let {
            unmount: l = !0,
            ...c
        } = i;
        return x(l ? 0 : 1, {
            [0]() {
                return null
            },
            [1]() {
                return oe({ ...c,
                    hidden: !0,
                    style: {
                        display: "none"
                    }
                }, r, n, s)
            }
        })
    }
    return oe(i, r, n, s)
}

function oe(e, t = {}, r, n) {
    let {
        as: o = r,
        children: a,
        refName: s = "ref",
        ...i
    } = be(e, ["unmount", "static"]), u = e.ref !== void 0 ? {
        [s]: e.ref
    } : {}, l = typeof a == "function" ? a(t) : a;
    "className" in i && i.className && typeof i.className == "function" && (i.className = i.className(t));
    let c = {};
    if (t) {
        let d = !1,
            E = [];
        for (let [v, m] of Object.entries(t)) typeof m == "boolean" && (d = !0), m === !0 && E.push(v);
        d && (c["data-headlessui-state"] = E.join(" "))
    }
    if (o === P.Fragment && Object.keys(je(i)).length > 0) {
        if (!(0, P.isValidElement)(l) || Array.isArray(l) && l.length > 1) throw new Error(['Passing props on "Fragment"!', "", `The current component <${n} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(i).map(m => `  - ${m}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map(m => `  - ${m}`).join(`
`)].join(`
`));
        let d = l.props,
            E = typeof d ? .className == "function" ? (...m) => q(d ? .className(...m), i.className) : q(d ? .className, i.className),
            v = E ? {
                className: E
            } : {};
        return (0, P.cloneElement)(l, Object.assign({}, ke(l.props, je(be(i, ["ref"]))), c, u, Et(l.ref, u.ref), v))
    }
    return (0, P.createElement)(o, Object.assign({}, be(i, ["ref"]), o !== P.Fragment && u, o !== P.Fragment && c), l)
}

function Et(...e) {
    return {
        ref: e.every(t => t == null) ? void 0 : t => {
            for (let r of e) r != null && (typeof r == "function" ? r(t) : r.current = t)
        }
    }
}

function ke(...e) {
    var t;
    if (e.length === 0) return {};
    if (e.length === 1) return e[0];
    let r = {},
        n = {};
    for (let o of e)
        for (let a in o) a.startsWith("on") && typeof o[a] == "function" ? ((t = n[a]) != null || (n[a] = []), n[a].push(o[a])) : r[a] = o[a];
    if (r.disabled || r["aria-disabled"]) return Object.assign(r, Object.fromEntries(Object.keys(n).map(o => [o, void 0])));
    for (let o in n) Object.assign(r, {
        [o](a, ...s) {
            let i = n[o];
            for (let u of i) {
                if ((a instanceof Event || a ? .nativeEvent instanceof Event) && a.defaultPrevented) return;
                u(a, ...s)
            }
        }
    });
    return r
}

function M(e) {
    var t;
    return Object.assign((0, P.forwardRef)(e), {
        displayName: (t = e.displayName) != null ? t : e.name
    })
}

function je(e) {
    let t = Object.assign({}, e);
    for (let r in t) t[r] === void 0 && delete t[r];
    return t
}

function be(e, t = []) {
    let r = Object.assign({}, e);
    for (let n of t) n in r && delete r[n];
    return r
}
var G = g(b(), 1),
    we = (0, G.createContext)(null);
we.displayName = "OpenClosedContext";
var O = (e => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(O || {});

function xe() {
    return (0, G.useContext)(we)
}

function Ue({
    value: e,
    children: t
}) {
    return G.default.createElement(we.Provider, {
        value: e
    }, t)
}
var Ve = g(b(), 1);
var se = g(b(), 1);
var gt = Object.defineProperty,
    bt = (e, t, r) => t in e ? gt(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : e[t] = r,
    Fe = (e, t, r) => (bt(e, typeof t != "symbol" ? t + "" : t, r), r),
    Te = class {
        constructor() {
            Fe(this, "current", this.detect()), Fe(this, "handoffState", "pending"), Fe(this, "currentId", 0)
        }
        set(t) {
            this.current !== t && (this.handoffState = "pending", this.currentId = 0, this.current = t)
        }
        reset() {
            this.set(this.detect())
        }
        nextId() {
            return ++this.currentId
        }
        get isServer() {
            return this.current === "server"
        }
        get isClient() {
            return this.current === "client"
        }
        detect() {
            return typeof window > "u" || typeof document > "u" ? "server" : "client"
        }
        handoff() {
            this.handoffState === "pending" && (this.handoffState = "complete")
        }
        get isHandoffComplete() {
            return this.handoffState === "complete"
        }
    },
    S = new Te;
var N = (e, t) => {
    S.isServer ? (0, se.useEffect)(e, t) : (0, se.useLayoutEffect)(e, t)
};

function K() {
    let e = (0, Ve.useRef)(!1);
    return N(() => (e.current = !0, () => {
        e.current = !1
    }), []), e
}
var We = g(b(), 1);

function F(e) {
    let t = (0, We.useRef)(e);
    return N(() => {
        t.current = e
    }, [e]), t
}
var k = g(b(), 1);

function yt() {
    let e = typeof document > "u";
    return "useSyncExternalStore" in k ? (t => t.useSyncExternalStore)(k)(() => () => {}, () => !1, () => !e) : !1
}

function U() {
    let e = yt(),
        [t, r] = k.useState(S.isHandoffComplete);
    return t && S.isHandoffComplete === !1 && r(!1), k.useEffect(() => {
        t !== !0 && r(!0)
    }, [t]), k.useEffect(() => S.handoff(), []), e ? !1 : t
}
var ae = g(b(), 1);
var Be = g(b(), 1);
var y = function(e) {
    let t = F(e);
    return Be.default.useCallback((...r) => t.current(...r), [t])
};
var _e = Symbol();

function qe(e, t = !0) {
    return Object.assign(e, {
        [_e]: t
    })
}

function $(...e) {
    let t = (0, ae.useRef)(e);
    (0, ae.useEffect)(() => {
        t.current = e
    }, [e]);
    let r = y(n => {
        for (let o of t.current) o != null && (typeof o == "function" ? o(n) : o.current = n)
    });
    return e.every(n => n == null || n ? .[_e]) ? void 0 : r
}

function Ge(e) {
    let t = {
        called: !1
    };
    return (...r) => {
        if (!t.called) return t.called = !0, e(...r)
    }
}

function ie(e) {
    typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch(t => setTimeout(() => {
        throw t
    }))
}

function L() {
    let e = [],
        t = {
            addEventListener(r, n, o, a) {
                return r.addEventListener(n, o, a), t.add(() => r.removeEventListener(n, o, a))
            },
            requestAnimationFrame(...r) {
                let n = requestAnimationFrame(...r);
                return t.add(() => cancelAnimationFrame(n))
            },
            nextFrame(...r) {
                return t.requestAnimationFrame(() => t.requestAnimationFrame(...r))
            },
            setTimeout(...r) {
                let n = setTimeout(...r);
                return t.add(() => clearTimeout(n))
            },
            microTask(...r) {
                let n = {
                    current: !0
                };
                return ie(() => {
                    n.current && r[0]()
                }), t.add(() => {
                    n.current = !1
                })
            },
            style(r, n, o) {
                let a = r.style.getPropertyValue(n);
                return Object.assign(r.style, {
                    [n]: o
                }), this.add(() => {
                    Object.assign(r.style, {
                        [n]: a
                    })
                })
            },
            group(r) {
                let n = L();
                return r(n), this.add(() => n.dispose())
            },
            add(r) {
                return e.push(r), () => {
                    let n = e.indexOf(r);
                    if (n >= 0)
                        for (let o of e.splice(n, 1)) o()
                }
            },
            dispose() {
                for (let r of e.splice(0)) r()
            }
        };
    return t
}

function Se(e, ...t) {
    e && t.length > 0 && e.classList.add(...t)
}

function Ne(e, ...t) {
    e && t.length > 0 && e.classList.remove(...t)
}

function wt(e, t) {
    let r = L();
    if (!e) return r.dispose;
    let {
        transitionDuration: n,
        transitionDelay: o
    } = getComputedStyle(e), [a, s] = [n, o].map(u => {
        let [l = 0] = u.split(",").filter(Boolean).map(c => c.includes("ms") ? parseFloat(c) : parseFloat(c) * 1e3).sort((c, d) => d - c);
        return l
    }), i = a + s;
    if (i !== 0) {
        r.group(l => {
            l.setTimeout(() => {
                t(), l.dispose()
            }, i), l.addEventListener(e, "transitionrun", c => {
                c.target === c.currentTarget && l.dispose()
            })
        });
        let u = r.addEventListener(e, "transitionend", l => {
            l.target === l.currentTarget && (t(), u())
        })
    } else t();
    return r.add(() => t()), r.dispose
}

function Ke(e, t, r, n) {
    let o = r ? "enter" : "leave",
        a = L(),
        s = n !== void 0 ? Ge(n) : () => {};
    o === "enter" && (e.removeAttribute("hidden"), e.style.display = "");
    let i = x(o, {
            enter: () => t.enter,
            leave: () => t.leave
        }),
        u = x(o, {
            enter: () => t.enterTo,
            leave: () => t.leaveTo
        }),
        l = x(o, {
            enter: () => t.enterFrom,
            leave: () => t.leaveFrom
        });
    return Ne(e, ...t.base, ...t.enter, ...t.enterTo, ...t.enterFrom, ...t.leave, ...t.leaveFrom, ...t.leaveTo, ...t.entered), Se(e, ...t.base, ...i, ...l), a.nextFrame(() => {
        Ne(e, ...t.base, ...i, ...l), Se(e, ...t.base, ...i, ...u), wt(e, () => (Ne(e, ...t.base, ...i), Se(e, ...t.base, ...t.entered), s()))
    }), a.dispose
}
var le = g(b(), 1);

function ue() {
    let [e] = (0, le.useState)(L);
    return (0, le.useEffect)(() => () => e.dispose(), [e]), e
}

function $e({
    immediate: e,
    container: t,
    direction: r,
    classes: n,
    onStart: o,
    onStop: a
}) {
    let s = K(),
        i = ue(),
        u = F(r);
    N(() => {
        e && (u.current = "enter")
    }, [e]), N(() => {
        let l = L();
        i.add(l.dispose);
        let c = t.current;
        if (c && u.current !== "idle" && s.current) return l.dispose(), o.current(u.current), l.add(Ke(c, n.current, u.current === "enter", () => {
            l.dispose(), a.current(u.current)
        })), l.dispose
    }, [r])
}
var V = g(b(), 1);

function Xe(e = 0) {
    let [t, r] = (0, V.useState)(e), n = K(), o = (0, V.useCallback)(u => {
        n.current && r(l => l | u)
    }, [t, n]), a = (0, V.useCallback)(u => Boolean(t & u), [t]), s = (0, V.useCallback)(u => {
        n.current && r(l => l & ~u)
    }, [r, n]), i = (0, V.useCallback)(u => {
        n.current && r(l => l ^ u)
    }, [r]);
    return {
        flags: t,
        addFlag: o,
        hasFlag: a,
        removeFlag: s,
        toggleFlag: i
    }
}

function I(e = "") {
    return e.split(" ").filter(t => t.trim().length > 1)
}
var ce = (0, f.createContext)(null);
ce.displayName = "TransitionContext";
var xt = (e => (e.Visible = "visible", e.Hidden = "hidden", e))(xt || {});

function Ft() {
    let e = (0, f.useContext)(ce);
    if (e === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
    return e
}

function Tt() {
    let e = (0, f.useContext)(fe);
    if (e === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
    return e
}
var fe = (0, f.createContext)(null);
fe.displayName = "NestingContext";

function de(e) {
    return "children" in e ? de(e.children) : e.current.filter(({
        el: t
    }) => t.current !== null).filter(({
        state: t
    }) => t === "visible").length > 0
}

function ze(e, t) {
    let r = F(e),
        n = (0, f.useRef)([]),
        o = K(),
        a = ue(),
        s = y((v, m = C.Hidden) => {
            let w = n.current.findIndex(({
                el: p
            }) => p === v);
            w !== -1 && (x(m, {
                [C.Unmount]() {
                    n.current.splice(w, 1)
                },
                [C.Hidden]() {
                    n.current[w].state = "hidden"
                }
            }), a.microTask(() => {
                var p;
                !de(n) && o.current && ((p = r.current) == null || p.call(r))
            }))
        }),
        i = y(v => {
            let m = n.current.find(({
                el: w
            }) => w === v);
            return m ? m.state !== "visible" && (m.state = "visible") : n.current.push({
                el: v,
                state: "visible"
            }), () => s(v, C.Unmount)
        }),
        u = (0, f.useRef)([]),
        l = (0, f.useRef)(Promise.resolve()),
        c = (0, f.useRef)({
            enter: [],
            leave: [],
            idle: []
        }),
        d = y((v, m, w) => {
            u.current.splice(0), t && (t.chains.current[m] = t.chains.current[m].filter(([p]) => p !== v)), t ? .chains.current[m].push([v, new Promise(p => {
                u.current.push(p)
            })]), t ? .chains.current[m].push([v, new Promise(p => {
                Promise.all(c.current[m].map(([W, B]) => B)).then(() => p())
            })]), m === "enter" ? l.current = l.current.then(() => t ? .wait.current).then(() => w(m)) : w(m)
        }),
        E = y((v, m, w) => {
            Promise.all(c.current[m].splice(0).map(([p, W]) => W)).then(() => {
                var p;
                (p = u.current.shift()) == null || p()
            }).then(() => w(m))
        });
    return (0, f.useMemo)(() => ({
        children: n,
        register: i,
        unregister: s,
        onStart: d,
        onStop: E,
        wait: l,
        chains: c
    }), [i, s, n, d, E, c, l])
}

function St() {}
var Nt = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];

function Ye(e) {
    var t;
    let r = {};
    for (let n of Nt) r[n] = (t = e[n]) != null ? t : St;
    return r
}

function Pt(e) {
    let t = (0, f.useRef)(Ye(e));
    return (0, f.useEffect)(() => {
        t.current = Ye(e)
    }, [e]), t
}
var Ot = "div",
    Je = ye.RenderStrategy;

function Lt(e, t) {
    var r, n;
    let {
        beforeEnter: o,
        afterEnter: a,
        beforeLeave: s,
        afterLeave: i,
        enter: u,
        enterFrom: l,
        enterTo: c,
        entered: d,
        leave: E,
        leaveFrom: v,
        leaveTo: m,
        ...w
    } = e, p = (0, f.useRef)(null), W = $(p, t), B = (r = w.unmount) == null || r ? C.Unmount : C.Hidden, {
        show: T,
        appear: H,
        initial: De
    } = Ft(), [j, he] = (0, f.useState)(T ? "visible" : "hidden"), Ie = Tt(), {
        register: ee,
        unregister: te
    } = Ie;
    (0, f.useEffect)(() => ee(p), [ee, p]), (0, f.useEffect)(() => {
        if (B === C.Hidden && p.current) {
            if (T && j !== "visible") {
                he("visible");
                return
            }
            return x(j, {
                hidden: () => te(p),
                visible: () => ee(p)
            })
        }
    }, [j, p, ee, te, T, B]);
    let Ee = F({
            base: I(w.className),
            enter: I(u),
            enterFrom: I(l),
            enterTo: I(c),
            entered: I(d),
            leave: I(E),
            leaveFrom: I(v),
            leaveTo: I(m)
        }),
        re = Pt({
            beforeEnter: o,
            afterEnter: a,
            beforeLeave: s,
            afterLeave: i
        }),
        ge = U();
    (0, f.useEffect)(() => {
        if (ge && j === "visible" && p.current === null) throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")
    }, [p, j, ge]);
    let ft = De && !H,
        He = H && T && De,
        dt = (() => !ge || ft ? "idle" : T ? "enter" : "leave")(),
        Y = Xe(0),
        mt = y(A => x(A, {
            enter: () => {
                Y.addFlag(O.Opening), re.current.beforeEnter()
            },
            leave: () => {
                Y.addFlag(O.Closing), re.current.beforeLeave()
            },
            idle: () => {}
        })),
        pt = y(A => x(A, {
            enter: () => {
                Y.removeFlag(O.Opening), re.current.afterEnter()
            },
            leave: () => {
                Y.removeFlag(O.Closing), re.current.afterLeave()
            },
            idle: () => {}
        })),
        ne = ze(() => {
            he("hidden"), te(p)
        }, Ie);
    $e({
        immediate: He,
        container: p,
        classes: Ee,
        direction: dt,
        onStart: F(A => {
            ne.onStart(p, A, mt)
        }),
        onStop: F(A => {
            ne.onStop(p, A, pt), A === "leave" && !de(ne) && (he("hidden"), te(p))
        })
    });
    let _ = w,
        vt = {
            ref: W
        };
    return He ? _ = { ..._,
        className: q(w.className, ...Ee.current.enter, ...Ee.current.enterFrom)
    } : (_.className = q(w.className, (n = p.current) == null ? void 0 : n.className), _.className === "" && delete _.className), f.default.createElement(fe.Provider, {
        value: ne
    }, f.default.createElement(Ue, {
        value: x(j, {
            visible: O.Open,
            hidden: O.Closed
        }) | Y.flags
    }, D({
        ourProps: vt,
        theirProps: _,
        defaultTag: Ot,
        features: Je,
        visible: j === "visible",
        name: "Transition.Child"
    })))
}

function Ct(e, t) {
    let {
        show: r,
        appear: n = !1,
        unmount: o = !0,
        ...a
    } = e, s = (0, f.useRef)(null), i = $(s, t);
    U();
    let u = xe();
    if (r === void 0 && u !== null && (r = (u & O.Open) === O.Open), ![!0, !1].includes(r)) throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
    let [l, c] = (0, f.useState)(r ? "visible" : "hidden"), d = ze(() => {
        c("hidden")
    }), [E, v] = (0, f.useState)(!0), m = (0, f.useRef)([r]);
    N(() => {
        E !== !1 && m.current[m.current.length - 1] !== r && (m.current.push(r), v(!1))
    }, [m, r]);
    let w = (0, f.useMemo)(() => ({
        show: r,
        appear: n,
        initial: E
    }), [r, n, E]);
    (0, f.useEffect)(() => {
        if (r) c("visible");
        else if (!de(d)) c("hidden");
        else {
            let T = s.current;
            if (!T) return;
            let H = T.getBoundingClientRect();
            H.x === 0 && H.y === 0 && H.width === 0 && H.height === 0 && c("hidden")
        }
    }, [r, d]);
    let p = {
            unmount: o
        },
        W = y(() => {
            var T;
            E && v(!1), (T = e.beforeEnter) == null || T.call(e)
        }),
        B = y(() => {
            var T;
            E && v(!1), (T = e.beforeLeave) == null || T.call(e)
        });
    return f.default.createElement(fe.Provider, {
        value: d
    }, f.default.createElement(ce.Provider, {
        value: w
    }, D({
        ourProps: { ...p,
            as: f.Fragment,
            children: f.default.createElement(Qe, {
                ref: i,
                ...p,
                ...a,
                beforeEnter: W,
                beforeLeave: B
            })
        },
        theirProps: {},
        defaultTag: f.Fragment,
        features: Je,
        visible: l === "visible",
        name: "Transition"
    })))
}

function Mt(e, t) {
    let r = (0, f.useContext)(ce) !== null,
        n = xe() !== null;
    return f.default.createElement(f.default.Fragment, null, !r && n ? f.default.createElement(Pe, {
        ref: t,
        ...e
    }) : f.default.createElement(Qe, {
        ref: t,
        ...e
    }))
}
var Pe = M(Ct),
    Qe = M(Lt),
    Rt = M(Mt),
    Jr = Object.assign(Pe, {
        Child: Rt,
        Root: Pe
    });
var Oe = g(b(), 1);
var Ze, rn = (Ze = Oe.default.useId) != null ? Ze : function() {
    let e = U(),
        [t, r] = Oe.default.useState(e ? () => S.nextId() : null);
    return N(() => {
        t === null && r(S.nextId())
    }, [t]), t != null ? "" + t : void 0
};

function z(e) {
    return S.isServer ? null : e instanceof Node ? e.ownerDocument : e != null && e.hasOwnProperty("current") && e.current instanceof Node ? e.current.ownerDocument : document
}
var Le = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map(e => `${e}:not([tabindex='-1'])`).join(","),
    At = (e => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(At || {}),
    Dt = (e => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Dt || {}),
    It = (e => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(It || {});

function et(e = document.body) {
    return e == null ? [] : Array.from(e.querySelectorAll(Le)).sort((t, r) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (r.tabIndex || Number.MAX_SAFE_INTEGER)))
}
var Ce = (e => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(Ce || {});

function Me(e, t = 0) {
    var r;
    return e === ((r = z(e)) == null ? void 0 : r.body) ? !1 : x(t, {
        [0]() {
            return e.matches(Le)
        },
        [1]() {
            let n = e;
            for (; n !== null;) {
                if (n.matches(Le)) return !0;
                n = n.parentElement
            }
            return !1
        }
    })
}

function cn(e) {
    let t = z(e);
    L().nextFrame(() => {
        t && !Me(t.activeElement, 0) && jt(e)
    })
}
var Ht = (e => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(Ht || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", e => {
    e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "")
}, !0), document.addEventListener("click", e => {
    e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "")
}, !0));

function jt(e) {
    e ? .focus({
        preventScroll: !0
    })
}
var kt = ["textarea", "input"].join(",");

function Ut(e) {
    var t, r;
    return (r = (t = e ? .matches) == null ? void 0 : t.call(e, kt)) != null ? r : !1
}

function Vt(e, t = r => r) {
    return e.slice().sort((r, n) => {
        let o = t(r),
            a = t(n);
        if (o === null || a === null) return 0;
        let s = o.compareDocumentPosition(a);
        return s & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : s & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0
    })
}

function fn(e, t) {
    return Wt(et(), t, {
        relativeTo: e
    })
}

function Wt(e, t, {
    sorted: r = !0,
    relativeTo: n = null,
    skipElements: o = []
} = {}) {
    let a = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e.ownerDocument,
        s = Array.isArray(e) ? r ? Vt(e) : e : et(e);
    o.length > 0 && s.length > 1 && (s = s.filter(v => !o.includes(v))), n = n ? ? a.activeElement;
    let i = (() => {
            if (t & 5) return 1;
            if (t & 10) return -1;
            throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
        })(),
        u = (() => {
            if (t & 1) return 0;
            if (t & 2) return Math.max(0, s.indexOf(n)) - 1;
            if (t & 4) return Math.max(0, s.indexOf(n)) + 1;
            if (t & 8) return s.length - 1;
            throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
        })(),
        l = t & 32 ? {
            preventScroll: !0
        } : {},
        c = 0,
        d = s.length,
        E;
    do {
        if (c >= d || c + d <= 0) return 0;
        let v = u + c;
        if (t & 16) v = (v + d) % d;
        else {
            if (v < 0) return 3;
            if (v >= d) return 1
        }
        E = s[v], E ? .focus(l), c += i
    } while (E !== a.activeElement);
    return t & 6 && Ut(E) && E.select(), 2
}
var Q = g(b(), 1);
var tt = g(b(), 1);

function J(e, t, r) {
    let n = F(t);
    (0, tt.useEffect)(() => {
        function o(a) {
            n.current(a)
        }
        return document.addEventListener(e, o, r), () => document.removeEventListener(e, o, r)
    }, [e, r])
}
var rt = g(b(), 1);

function me(e, t, r) {
    let n = F(t);
    (0, rt.useEffect)(() => {
        function o(a) {
            n.current(a)
        }
        return window.addEventListener(e, o, r), () => window.removeEventListener(e, o, r)
    }, [e, r])
}

function yn(e, t, r = !0) {
    let n = (0, Q.useRef)(!1);
    (0, Q.useEffect)(() => {
        requestAnimationFrame(() => {
            n.current = r
        })
    }, [r]);

    function o(s, i) {
        if (!n.current || s.defaultPrevented) return;
        let u = i(s);
        if (u === null || !u.getRootNode().contains(u) || !u.isConnected) return;
        let l = function c(d) {
            return typeof d == "function" ? c(d()) : Array.isArray(d) || d instanceof Set ? d : [d]
        }(e);
        for (let c of l) {
            if (c === null) continue;
            let d = c instanceof HTMLElement ? c : c.current;
            if (d != null && d.contains(u) || s.composed && s.composedPath().includes(d)) return
        }
        return !Me(u, Ce.Loose) && u.tabIndex !== -1 && s.preventDefault(), t(s, u)
    }
    let a = (0, Q.useRef)(null);
    J("pointerdown", s => {
        var i, u;
        n.current && (a.current = ((u = (i = s.composedPath) == null ? void 0 : i.call(s)) == null ? void 0 : u[0]) || s.target)
    }, !0), J("mousedown", s => {
        var i, u;
        n.current && (a.current = ((u = (i = s.composedPath) == null ? void 0 : i.call(s)) == null ? void 0 : u[0]) || s.target)
    }, !0), J("click", s => {
        a.current && (o(s, () => a.current), a.current = null)
    }, !0), J("touchend", s => o(s, () => s.target instanceof HTMLElement ? s.target : null), !0), me("blur", s => o(s, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0)
}

function xn(e) {
    let t = e.parentElement,
        r = null;
    for (; t && !(t instanceof HTMLFieldSetElement);) t instanceof HTMLLegendElement && (r = t), t = t.parentElement;
    let n = t ? .getAttribute("disabled") === "";
    return n && Bt(r) ? !1 : n
}

function Bt(e) {
    if (!e) return !1;
    let t = e.previousElementSibling;
    for (; t !== null;) {
        if (t instanceof HTMLLegendElement) return !1;
        t = t.previousElementSibling
    }
    return !0
}
var _t = "div",
    pe = (e => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(pe || {});

function qt(e, t) {
    let {
        features: r = 1,
        ...n
    } = e, o = {
        ref: t,
        "aria-hidden": (r & 2) === 2 ? !0 : void 0,
        style: {
            position: "fixed",
            top: 1,
            left: 1,
            width: 1,
            height: 0,
            padding: 0,
            margin: -1,
            overflow: "hidden",
            clip: "rect(0, 0, 0, 0)",
            whiteSpace: "nowrap",
            borderWidth: "0",
            ...(r & 4) === 4 && (r & 2) !== 2 && {
                display: "none"
            }
        }
    };
    return D({
        ourProps: o,
        theirProps: n,
        slot: {},
        defaultTag: _t,
        name: "Hidden"
    })
}
var Re = M(qt);
var Gt = (e => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(Gt || {});
var nt = g(b(), 1);

function Z(...e) {
    return (0, nt.useMemo)(() => z(...e), [...e])
}
var ot = g(b(), 1);
var Kt = (e => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(Kt || {});

function Cn() {
    let e = (0, ot.useRef)(0);
    return me("keydown", t => {
        t.key === "Tab" && (e.current = t.shiftKey ? 1 : 0)
    }, !0), e
}
var st = g(b(), 1);

function An(e, t, r, n) {
    let o = F(r);
    (0, st.useEffect)(() => {
        e = e ? ? window;

        function a(s) {
            o.current(s)
        }
        return e.addEventListener(t, a, n), () => e.removeEventListener(t, a, n)
    }, [e, t, n])
}
var X = g(b(), 1),
    at = (0, X.createContext)(!1);

function it() {
    return (0, X.useContext)(at)
}

function In(e) {
    return X.default.createElement(at.Provider, {
        value: e.force
    }, e.children)
}
var h = g(b(), 1),
    ut = g(ht(), 1);
var ve = g(b(), 1);

function lt(e) {
    let t = y(e),
        r = (0, ve.useRef)(!1);
    (0, ve.useEffect)(() => (r.current = !1, () => {
        r.current = !0, ie(() => {
            r.current && t()
        })
    }), [t])
}

function $t(e) {
    let t = it(),
        r = (0, h.useContext)(ct),
        n = Z(e),
        [o, a] = (0, h.useState)(() => {
            if (!t && r !== null || S.isServer) return null;
            let s = n ? .getElementById("headlessui-portal-root");
            if (s) return s;
            if (n === null) return null;
            let i = n.createElement("div");
            return i.setAttribute("id", "headlessui-portal-root"), n.body.appendChild(i)
        });
    return (0, h.useEffect)(() => {
        o !== null && (n != null && n.body.contains(o) || n == null || n.body.appendChild(o))
    }, [o, n]), (0, h.useEffect)(() => {
        t || r !== null && a(r.current)
    }, [r, a, t]), o
}
var Xt = h.Fragment;

function Yt(e, t) {
    let r = e,
        n = (0, h.useRef)(null),
        o = $(qe(c => {
            n.current = c
        }), t),
        a = Z(n),
        s = $t(n),
        [i] = (0, h.useState)(() => {
            var c;
            return S.isServer ? null : (c = a ? .createElement("div")) != null ? c : null
        }),
        u = (0, h.useContext)(Ae),
        l = U();
    return N(() => {
        !s || !i || s.contains(i) || (i.setAttribute("data-headlessui-portal", ""), s.appendChild(i))
    }, [s, i]), N(() => {
        if (i && u) return u.register(i)
    }, [u, i]), lt(() => {
        var c;
        !s || !i || (i instanceof Node && s.contains(i) && s.removeChild(i), s.childNodes.length <= 0 && ((c = s.parentElement) == null || c.removeChild(s)))
    }), l ? !s || !i ? null : (0, ut.createPortal)(D({
        ourProps: {
            ref: o
        },
        theirProps: r,
        defaultTag: Xt,
        name: "Portal"
    }), i) : null
}
var zt = h.Fragment,
    ct = (0, h.createContext)(null);

function Jt(e, t) {
    let {
        target: r,
        ...n
    } = e, o = {
        ref: $(t)
    };
    return h.default.createElement(ct.Provider, {
        value: r
    }, D({
        ourProps: o,
        theirProps: n,
        defaultTag: zt,
        name: "Popover.Group"
    }))
}
var Ae = (0, h.createContext)(null);

function Yn() {
    let e = (0, h.useContext)(Ae),
        t = (0, h.useRef)([]),
        r = y(a => (t.current.push(a), e && e.register(a), () => n(a))),
        n = y(a => {
            let s = t.current.indexOf(a);
            s !== -1 && t.current.splice(s, 1), e && e.unregister(a)
        }),
        o = (0, h.useMemo)(() => ({
            register: r,
            unregister: n,
            portals: t
        }), [r, n, t]);
    return [t, (0, h.useMemo)(() => function({
        children: a
    }) {
        return h.default.createElement(Ae.Provider, {
            value: o
        }, a)
    }, [o])]
}
var Qt = M(Yt),
    Zt = M(Jt),
    zn = Object.assign(Qt, {
        Group: Zt
    });
var R = g(b(), 1);

function to({
    defaultContainers: e = [],
    portals: t,
    mainTreeNodeRef: r
} = {}) {
    var n;
    let o = (0, R.useRef)((n = r ? .current) != null ? n : null),
        a = Z(o),
        s = y(() => {
            var i;
            let u = [];
            for (let l of e) l !== null && (l instanceof HTMLElement ? u.push(l) : "current" in l && l.current instanceof HTMLElement && u.push(l.current));
            if (t != null && t.current)
                for (let l of t.current) u.push(l);
            for (let l of (i = a ? .querySelectorAll("html > *, body > *")) != null ? i : []) l !== document.body && l !== document.head && l instanceof HTMLElement && l.id !== "headlessui-portal-root" && (l.contains(o.current) || u.some(c => l.contains(c)) || u.push(l));
            return u
        });
    return {
        resolveContainers: s,
        contains: y(i => s().some(u => u.contains(i))),
        mainTreeNodeRef: o,
        MainTreeNode: (0, R.useMemo)(() => function() {
            return r != null ? null : R.default.createElement(Re, {
                features: pe.Hidden,
                ref: o
            })
        }, [o, r])
    }
}

function ro() {
    let e = (0, R.useRef)(null);
    return {
        mainTreeNodeRef: e,
        MainTreeNode: (0, R.useMemo)(() => function() {
            return R.default.createElement(Re, {
                features: pe.Hidden,
                ref: e
            })
        }, [e])
    }
}
export {
    N as a, F as b, ie as c, L as d, ue as e, y as f, U as g, rn as h, x as i, z as j, At as k, Dt as l, et as m, Ce as n, Me as o, cn as p, jt as q, Vt as r, fn as s, Wt as t, yn as u, qe as v, $ as w, ye as x, D as y, M as z, je as A, xn as B, pe as C, Re as D, O as E, xe as F, Ue as G, Gt as H, Z as I, Kt as J, Cn as K, K as L, An as M, lt as N, In as O, Yn as P, zn as Q, to as R, ro as S, Xe as T, Jr as U
};