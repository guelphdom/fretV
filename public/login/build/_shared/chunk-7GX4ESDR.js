import {
    a as be
} from "/build/_shared/chunk-YXZ43UYH.js";
import {
    B as le,
    C as Z,
    D as ee,
    E as W,
    F as ae,
    G as ye,
    H as G,
    I as te,
    J as x,
    K as ue,
    M as Ee,
    P as ge,
    R as Ie,
    S as he,
    a as de,
    b as oe,
    f as y,
    h as H,
    i as _,
    j as fe,
    k as D,
    l as Q,
    m as X,
    n as ve,
    o as me,
    t as $,
    u as Pe,
    v as Se,
    w as K,
    x as j,
    y as A,
    z as q
} from "/build/_shared/chunk-PNYNM7FJ.js";
import {
    a as we
} from "/build/_shared/chunk-KO3OK2JV.js";
import {
    e as Oe
} from "/build/_shared/chunk-ADMCF34Z.js";
var t = Oe(we(), 1);
var ke = (e => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(ke || {}),
    Ce = (e => (e[e.TogglePopover = 0] = "TogglePopover", e[e.ClosePopover = 1] = "ClosePopover", e[e.SetButton = 2] = "SetButton", e[e.SetButtonId = 3] = "SetButtonId", e[e.SetPanel = 4] = "SetPanel", e[e.SetPanelId = 5] = "SetPanelId", e))(Ce || {}),
    Be = {
        [0]: e => {
            let l = { ...e,
                popoverState: _(e.popoverState, {
                    [0]: 1,
                    [1]: 0
                })
            };
            return l.popoverState === 0 && (l.__demoMode = !1), l
        },
        [1](e) {
            return e.popoverState === 1 ? e : { ...e,
                popoverState: 1
            }
        },
        [2](e, l) {
            return e.button === l.button ? e : { ...e,
                button: l.button
            }
        },
        [3](e, l) {
            return e.buttonId === l.buttonId ? e : { ...e,
                buttonId: l.buttonId
            }
        },
        [4](e, l) {
            return e.panel === l.panel ? e : { ...e,
                panel: l.panel
            }
        },
        [5](e, l) {
            return e.panelId === l.panelId ? e : { ...e,
                panelId: l.panelId
            }
        }
    },
    se = (0, t.createContext)(null);
se.displayName = "PopoverContext";

function ne(e) {
    let l = (0, t.useContext)(se);
    if (l === null) {
        let v = new Error(`<${e} /> is missing a parent <Popover /> component.`);
        throw Error.captureStackTrace && Error.captureStackTrace(v, ne), v
    }
    return l
}
var ie = (0, t.createContext)(null);
ie.displayName = "PopoverAPIContext";

function pe(e) {
    let l = (0, t.useContext)(ie);
    if (l === null) {
        let v = new Error(`<${e} /> is missing a parent <Popover /> component.`);
        throw Error.captureStackTrace && Error.captureStackTrace(v, pe), v
    }
    return l
}
var ce = (0, t.createContext)(null);
ce.displayName = "PopoverGroupContext";

function Te() {
    return (0, t.useContext)(ce)
}
var re = (0, t.createContext)(null);
re.displayName = "PopoverPanelContext";

function Re() {
    return (0, t.useContext)(re)
}

function De(e, l) {
    return _(l.type, Be, e, l)
}
var xe = "div";

function Me(e, l) {
    var v;
    let {
        __demoMode: g = !1,
        ...T
    } = e, a = (0, t.useRef)(null), n = K(l, Se(s => {
        a.current = s
    })), m = (0, t.useRef)([]), P = (0, t.useReducer)(De, {
        __demoMode: g,
        popoverState: g ? 0 : 1,
        buttons: m,
        button: null,
        buttonId: null,
        panel: null,
        panelId: null,
        beforePanelSentinel: (0, t.createRef)(),
        afterPanelSentinel: (0, t.createRef)()
    }), [{
        popoverState: E,
        button: p,
        buttonId: I,
        panel: o,
        panelId: M,
        beforePanelSentinel: O,
        afterPanelSentinel: S
    }, u] = P, b = te((v = a.current) != null ? v : p), F = (0, t.useMemo)(() => {
        if (!p || !o) return !1;
        for (let J of document.querySelectorAll("body > *"))
            if (Number(J ? .contains(p)) ^ Number(J ? .contains(o))) return !0;
        let s = X(),
            w = s.indexOf(p),
            U = (w + s.length - 1) % s.length,
            V = (w + 1) % s.length,
            Y = s[U],
            Fe = s[V];
        return !o.contains(Y) && !o.contains(Fe)
    }, [p, o]), k = oe(I), C = oe(M), N = (0, t.useMemo)(() => ({
        buttonId: k,
        panelId: C,
        close: () => u({
            type: 1
        })
    }), [k, C, u]), B = Te(), i = B ? .registerPopover, h = y(() => {
        var s;
        return (s = B ? .isFocusWithinPopoverGroup()) != null ? s : b ? .activeElement && (p ? .contains(b.activeElement) || o ? .contains(b.activeElement))
    });
    (0, t.useEffect)(() => i ? .(N), [i, N]);
    let [c, R] = ge(), r = Ie({
        mainTreeNodeRef: B ? .mainTreeNodeRef,
        portals: c,
        defaultContainers: [p, o]
    });
    Ee(b ? .defaultView, "focus", s => {
        var w, U, V, Y;
        s.target !== window && s.target instanceof HTMLElement && E === 0 && (h() || p && o && (r.contains(s.target) || (U = (w = O.current) == null ? void 0 : w.contains) != null && U.call(w, s.target) || (Y = (V = S.current) == null ? void 0 : V.contains) != null && Y.call(V, s.target) || u({
            type: 1
        })))
    }, !0), Pe(r.resolveContainers, (s, w) => {
        u({
            type: 1
        }), me(w, ve.Loose) || (s.preventDefault(), p ? .focus())
    }, E === 0);
    let d = y(s => {
            u({
                type: 1
            });
            let w = (() => s ? s instanceof HTMLElement ? s : "current" in s && s.current instanceof HTMLElement ? s.current : p : p)();
            w ? .focus()
        }),
        f = (0, t.useMemo)(() => ({
            close: d,
            isPortalled: F
        }), [d, F]),
        L = (0, t.useMemo)(() => ({
            open: E === 0,
            close: d
        }), [E, d]),
        z = {
            ref: n
        };
    return t.default.createElement(re.Provider, {
        value: null
    }, t.default.createElement(se.Provider, {
        value: P
    }, t.default.createElement(ie.Provider, {
        value: f
    }, t.default.createElement(ye, {
        value: _(E, {
            [0]: W.Open,
            [1]: W.Closed
        })
    }, t.default.createElement(R, null, A({
        ourProps: z,
        theirProps: T,
        slot: L,
        defaultTag: xe,
        name: "Popover"
    }), t.default.createElement(r.MainTreeNode, null))))))
}
var Ne = "button";

function Le(e, l) {
    let v = H(),
        {
            id: g = `headlessui-popover-button-${v}`,
            ...T
        } = e,
        [a, n] = ne("Popover.Button"),
        {
            isPortalled: m
        } = pe("Popover.Button"),
        P = (0, t.useRef)(null),
        E = `headlessui-focus-sentinel-${H()}`,
        p = Te(),
        I = p ? .closeOthers,
        o = Re() !== null;
    (0, t.useEffect)(() => {
        if (!o) return n({
            type: 3,
            buttonId: g
        }), () => {
            n({
                type: 3,
                buttonId: null
            })
        }
    }, [o, g, n]);
    let [M] = (0, t.useState)(() => Symbol()), O = K(P, l, o ? null : r => {
        if (r) a.buttons.current.push(M);
        else {
            let d = a.buttons.current.indexOf(M);
            d !== -1 && a.buttons.current.splice(d, 1)
        }
        a.buttons.current.length > 1 && console.warn("You are already using a <Popover.Button /> but only 1 <Popover.Button /> is supported."), r && n({
            type: 2,
            button: r
        })
    }), S = K(P, l), u = te(P), b = y(r => {
        var d, f, L;
        if (o) {
            if (a.popoverState === 1) return;
            switch (r.key) {
                case G.Space:
                case G.Enter:
                    r.preventDefault(), (f = (d = r.target).click) == null || f.call(d), n({
                        type: 1
                    }), (L = a.button) == null || L.focus();
                    break
            }
        } else switch (r.key) {
            case G.Space:
            case G.Enter:
                r.preventDefault(), r.stopPropagation(), a.popoverState === 1 && I ? .(a.buttonId), n({
                    type: 0
                });
                break;
            case G.Escape:
                if (a.popoverState !== 0) return I ? .(a.buttonId);
                if (!P.current || u != null && u.activeElement && !P.current.contains(u.activeElement)) return;
                r.preventDefault(), r.stopPropagation(), n({
                    type: 1
                });
                break
        }
    }), F = y(r => {
        o || r.key === G.Space && r.preventDefault()
    }), k = y(r => {
        var d, f;
        le(r.currentTarget) || e.disabled || (o ? (n({
            type: 1
        }), (d = a.button) == null || d.focus()) : (r.preventDefault(), r.stopPropagation(), a.popoverState === 1 && I ? .(a.buttonId), n({
            type: 0
        }), (f = a.button) == null || f.focus()))
    }), C = y(r => {
        r.preventDefault(), r.stopPropagation()
    }), N = a.popoverState === 0, B = (0, t.useMemo)(() => ({
        open: N
    }), [N]), i = be(e, P), h = o ? {
        ref: S,
        type: i,
        onKeyDown: b,
        onClick: k
    } : {
        ref: O,
        id: a.buttonId,
        type: i,
        "aria-expanded": a.popoverState === 0,
        "aria-controls": a.panel ? a.panelId : void 0,
        onKeyDown: b,
        onKeyUp: F,
        onClick: k,
        onMouseDown: C
    }, c = ue(), R = y(() => {
        let r = a.panel;
        if (!r) return;

        function d() {
            _(c.current, {
                [x.Forwards]: () => $(r, D.First),
                [x.Backwards]: () => $(r, D.Last)
            }) === Q.Error && $(X().filter(f => f.dataset.headlessuiFocusGuard !== "true"), _(c.current, {
                [x.Forwards]: D.Next,
                [x.Backwards]: D.Previous
            }), {
                relativeTo: a.button
            })
        }
        d()
    });
    return t.default.createElement(t.default.Fragment, null, A({
        ourProps: h,
        theirProps: T,
        slot: B,
        defaultTag: Ne,
        name: "Popover.Button"
    }), N && !o && m && t.default.createElement(ee, {
        id: E,
        features: Z.Focusable,
        "data-headlessui-focus-guard": !0,
        as: "button",
        type: "button",
        onFocus: R
    }))
}
var _e = "div",
    $e = j.RenderStrategy | j.Static;

function Ge(e, l) {
    let v = H(),
        {
            id: g = `headlessui-popover-overlay-${v}`,
            ...T
        } = e,
        [{
            popoverState: a
        }, n] = ne("Popover.Overlay"),
        m = K(l),
        P = ae(),
        E = (() => P !== null ? (P & W.Open) === W.Open : a === 0)(),
        p = y(o => {
            if (le(o.currentTarget)) return o.preventDefault();
            n({
                type: 1
            })
        }),
        I = (0, t.useMemo)(() => ({
            open: a === 0
        }), [a]);
    return A({
        ourProps: {
            ref: m,
            id: g,
            "aria-hidden": !0,
            onClick: p
        },
        theirProps: T,
        slot: I,
        defaultTag: _e,
        features: $e,
        visible: E,
        name: "Popover.Overlay"
    })
}
var He = "div",
    Ke = j.RenderStrategy | j.Static;

function We(e, l) {
    let v = H(),
        {
            id: g = `headlessui-popover-panel-${v}`,
            focus: T = !1,
            ...a
        } = e,
        [n, m] = ne("Popover.Panel"),
        {
            close: P,
            isPortalled: E
        } = pe("Popover.Panel"),
        p = `headlessui-focus-sentinel-before-${H()}`,
        I = `headlessui-focus-sentinel-after-${H()}`,
        o = (0, t.useRef)(null),
        M = K(o, l, i => {
            m({
                type: 4,
                panel: i
            })
        }),
        O = te(o);
    de(() => (m({
        type: 5,
        panelId: g
    }), () => {
        m({
            type: 5,
            panelId: null
        })
    }), [g, m]);
    let S = ae(),
        u = (() => S !== null ? (S & W.Open) === W.Open : n.popoverState === 0)(),
        b = y(i => {
            var h;
            switch (i.key) {
                case G.Escape:
                    if (n.popoverState !== 0 || !o.current || O != null && O.activeElement && !o.current.contains(O.activeElement)) return;
                    i.preventDefault(), i.stopPropagation(), m({
                        type: 1
                    }), (h = n.button) == null || h.focus();
                    break
            }
        });
    (0, t.useEffect)(() => {
        var i;
        e.static || n.popoverState === 1 && ((i = e.unmount) == null || i) && m({
            type: 4,
            panel: null
        })
    }, [n.popoverState, e.unmount, e.static, m]), (0, t.useEffect)(() => {
        if (n.__demoMode || !T || n.popoverState !== 0 || !o.current) return;
        let i = O ? .activeElement;
        o.current.contains(i) || $(o.current, D.First)
    }, [n.__demoMode, T, o, n.popoverState]);
    let F = (0, t.useMemo)(() => ({
            open: n.popoverState === 0,
            close: P
        }), [n, P]),
        k = {
            ref: M,
            id: g,
            onKeyDown: b,
            onBlur: T && n.popoverState === 0 ? i => {
                var h, c, R, r, d;
                let f = i.relatedTarget;
                f && o.current && ((h = o.current) != null && h.contains(f) || (m({
                    type: 1
                }), ((R = (c = n.beforePanelSentinel.current) == null ? void 0 : c.contains) != null && R.call(c, f) || (d = (r = n.afterPanelSentinel.current) == null ? void 0 : r.contains) != null && d.call(r, f)) && f.focus({
                    preventScroll: !0
                })))
            } : void 0,
            tabIndex: -1
        },
        C = ue(),
        N = y(() => {
            let i = o.current;
            if (!i) return;

            function h() {
                _(C.current, {
                    [x.Forwards]: () => {
                        var c;
                        $(i, D.First) === Q.Error && ((c = n.afterPanelSentinel.current) == null || c.focus())
                    },
                    [x.Backwards]: () => {
                        var c;
                        (c = n.button) == null || c.focus({
                            preventScroll: !0
                        })
                    }
                })
            }
            h()
        }),
        B = y(() => {
            let i = o.current;
            if (!i) return;

            function h() {
                _(C.current, {
                    [x.Forwards]: () => {
                        var c;
                        if (!n.button) return;
                        let R = X(),
                            r = R.indexOf(n.button),
                            d = R.slice(0, r + 1),
                            f = [...R.slice(r + 1), ...d];
                        for (let L of f.slice())
                            if (L.dataset.headlessuiFocusGuard === "true" || (c = n.panel) != null && c.contains(L)) {
                                let z = f.indexOf(L);
                                z !== -1 && f.splice(z, 1)
                            }
                        $(f, D.First, {
                            sorted: !1
                        })
                    },
                    [x.Backwards]: () => {
                        var c;
                        $(i, D.Previous) === Q.Error && ((c = n.button) == null || c.focus())
                    }
                })
            }
            h()
        });
    return t.default.createElement(re.Provider, {
        value: g
    }, u && E && t.default.createElement(ee, {
        id: p,
        ref: n.beforePanelSentinel,
        features: Z.Focusable,
        "data-headlessui-focus-guard": !0,
        as: "button",
        type: "button",
        onFocus: N
    }), A({
        ourProps: k,
        theirProps: a,
        slot: F,
        defaultTag: He,
        features: Ke,
        visible: u,
        name: "Popover.Panel"
    }), u && E && t.default.createElement(ee, {
        id: I,
        ref: n.afterPanelSentinel,
        features: Z.Focusable,
        "data-headlessui-focus-guard": !0,
        as: "button",
        type: "button",
        onFocus: B
    }))
}
var Ae = "div";

function qe(e, l) {
    let v = (0, t.useRef)(null),
        g = K(v, l),
        [T, a] = (0, t.useState)([]),
        n = he(),
        m = y(S => {
            a(u => {
                let b = u.indexOf(S);
                if (b !== -1) {
                    let F = u.slice();
                    return F.splice(b, 1), F
                }
                return u
            })
        }),
        P = y(S => (a(u => [...u, S]), () => m(S))),
        E = y(() => {
            var S;
            let u = fe(v);
            if (!u) return !1;
            let b = u.activeElement;
            return (S = v.current) != null && S.contains(b) ? !0 : T.some(F => {
                var k, C;
                return ((k = u.getElementById(F.buttonId.current)) == null ? void 0 : k.contains(b)) || ((C = u.getElementById(F.panelId.current)) == null ? void 0 : C.contains(b))
            })
        }),
        p = y(S => {
            for (let u of T) u.buttonId.current !== S && u.close()
        }),
        I = (0, t.useMemo)(() => ({
            registerPopover: P,
            unregisterPopover: m,
            isFocusWithinPopoverGroup: E,
            closeOthers: p,
            mainTreeNodeRef: n.mainTreeNodeRef
        }), [P, m, E, p, n.mainTreeNodeRef]),
        o = (0, t.useMemo)(() => ({}), []),
        M = e,
        O = {
            ref: g
        };
    return t.default.createElement(ce.Provider, {
        value: I
    }, A({
        ourProps: O,
        theirProps: M,
        slot: o,
        defaultTag: Ae,
        name: "Popover.Group"
    }), t.default.createElement(n.MainTreeNode, null))
}
var Ve = q(Me),
    je = q(Le),
    ze = q(Ge),
    Ue = q(We),
    Ye = q(qe),
    Pt = Object.assign(Ve, {
        Button: je,
        Overlay: ze,
        Panel: Ue,
        Group: Ye
    });
export {
    Pt as a
};