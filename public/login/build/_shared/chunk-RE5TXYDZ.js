import {
    c as ve
} from "/build/_shared/chunk-U7NFLLIJ.js";
import {
    a as se
} from "/build/_shared/chunk-JIIFQLPC.js";
import {
    a as oe,
    b as S,
    c as ie,
    d as ce,
    e as pe
} from "/build/_shared/chunk-YXZ43UYH.js";
import {
    B as ue,
    E as k,
    F as le,
    G as me,
    H as f,
    I as de,
    U as fe,
    a as G,
    d as B,
    e as W,
    f as R,
    h as O,
    i as H,
    k as _,
    n as ee,
    o as te,
    p as Q,
    r as re,
    s as ae,
    u as ne,
    w as N,
    x as Z,
    y as P,
    z as D
} from "/build/_shared/chunk-PNYNM7FJ.js";
import {
    b as C,
    c as Me,
    l as q
} from "/build/_shared/chunk-57DP7WQB.js";
import {
    a as be
} from "/build/_shared/chunk-I4QJWQOX.js";
import {
    n as Ie
} from "/build/_shared/chunk-PBT6S77D.js";
import {
    a as V,
    b as z
} from "/build/_shared/chunk-KO3OK2JV.js";
import {
    e as h
} from "/build/_shared/chunk-ADMCF34Z.js";
var J = h(V());

function Re(e, n) {
    if (e == null) return {};
    var o = {},
        a = Object.keys(e),
        r, i;
    for (i = 0; i < a.length; i++) r = a[i], !(n.indexOf(r) >= 0) && (o[r] = e[r]);
    return o
}
var Se = ["AD", "AE", "AF", "AG", "AI", "AL", "AM", "AO", "AR", "AS", "AT", "AU", "AW", "AX", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BL", "BM", "BN", "BO", "BR", "BS", "BT", "BV", "BW", "BY", "BZ", "CA", "CC", "CD", "CF", "CG", "CH", "CI", "CK", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CW", "CX", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ER", "ES", "ET", "FI", "FJ", "FK", "FM", "FO", "FR", "GA", "GB", "GD", "GE", "GF", "GG", "GH", "GI", "GL", "GM", "GN", "GP", "GQ", "GR", "GS", "GT", "GU", "GW", "GY", "HK", "HM", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IM", "IN", "IO", "IQ", "IR", "IS", "IT", "JE", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KP", "KR", "KW", "KY", "KZ", "LA", "LB", "LC", "LGBT", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MG", "MH", "MK", "ML", "MM", "MN", "MO", "MP", "MQ", "MR", "MS", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NC", "NE", "NF", "NG", "NI", "NL", "NO", "NP", "NR", "NU", "NZ", "OM", "PA", "PE", "PF", "PG", "PH", "PK", "PL", "PM", "PN", "PR", "PS", "PT", "PW", "PY", "QA", "RE", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SD", "SE", "SG", "SI", "SJ", "SK", "SL", "SM", "SN", "SO", "SR", "SS", "ST", "SV", "SX", "SY", "SZ", "TC", "TD", "TF", "TG", "TH", "TJ", "TK", "TL", "TM", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "UM", "US", "UY", "UZ", "VA", "VC", "VE", "VG", "VI", "VN", "VU", "WF", "WS", "XK", "YE", "YT", "ZA", "ZM", "ZW", "EU", "GB-ENG", "GB-NIR", "GB-SCT", "GB-WLS", "GB-ZET", "US-CA"],
    xe = function(n) {
        var o = n.country,
            a = o === void 0 ? "US" : o,
            r = n.role,
            i = r === void 0 ? "img" : r,
            u = n.size,
            t = u === void 0 ? 24 : u,
            l = n.alt,
            p = Re(n, ["country", "role", "size", "alt"]);
        if (a) {
            var v = a.toUpperCase();
            if (Se.find(function(I) {
                    return I === a
                }) !== void 0) {
                var M = "https://cdn.jsdelivr.net/gh/madebybowtie/FlagKit@2.2/Assets/SVG",
                    g = M + "/" + v + ".svg";
                return J.default.createElement("img", Object.assign({
                    src: g,
                    role: i,
                    alt: l ? ? v + " Flag",
                    height: t,
                    width: t
                }, p))
            }
            return J.default.createElement("span", null, v)
        }
        return null
    },
    We = xe;
var c = h(V(), 1);
var Te = (e => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Te || {}),
    he = (e => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(he || {}),
    Ce = (e => (e[e.OpenMenu = 0] = "OpenMenu", e[e.CloseMenu = 1] = "CloseMenu", e[e.GoToItem = 2] = "GoToItem", e[e.Search = 3] = "Search", e[e.ClearSearch = 4] = "ClearSearch", e[e.RegisterItem = 5] = "RegisterItem", e[e.UnregisterItem = 6] = "UnregisterItem", e))(Ce || {});

function Y(e, n = o => o) {
    let o = e.activeItemIndex !== null ? e.items[e.activeItemIndex] : null,
        a = re(n(e.items.slice()), i => i.dataRef.current.domRef.current),
        r = o ? a.indexOf(o) : null;
    return r === -1 && (r = null), {
        items: a,
        activeItemIndex: r
    }
}
var Ee = {
        [1](e) {
            return e.menuState === 1 ? e : { ...e,
                activeItemIndex: null,
                menuState: 1
            }
        },
        [0](e) {
            return e.menuState === 0 ? e : { ...e,
                __demoMode: !1,
                menuState: 0
            }
        },
        [2]: (e, n) => {
            var o;
            let a = Y(e),
                r = ie(n, {
                    resolveItems: () => a.items,
                    resolveActiveIndex: () => a.activeItemIndex,
                    resolveId: i => i.id,
                    resolveDisabled: i => i.dataRef.current.disabled
                });
            return { ...e,
                ...a,
                searchQuery: "",
                activeItemIndex: r,
                activationTrigger: (o = n.trigger) != null ? o : 1
            }
        },
        [3]: (e, n) => {
            let o = e.searchQuery !== "" ? 0 : 1,
                a = e.searchQuery + n.value.toLowerCase(),
                r = (e.activeItemIndex !== null ? e.items.slice(e.activeItemIndex + o).concat(e.items.slice(0, e.activeItemIndex + o)) : e.items).find(u => {
                    var t;
                    return ((t = u.dataRef.current.textValue) == null ? void 0 : t.startsWith(a)) && !u.dataRef.current.disabled
                }),
                i = r ? e.items.indexOf(r) : -1;
            return i === -1 || i === e.activeItemIndex ? { ...e,
                searchQuery: a
            } : { ...e,
                searchQuery: a,
                activeItemIndex: i,
                activationTrigger: 1
            }
        },
        [4](e) {
            return e.searchQuery === "" ? e : { ...e,
                searchQuery: "",
                searchActiveItemIndex: null
            }
        },
        [5]: (e, n) => {
            let o = Y(e, a => [...a, {
                id: n.id,
                dataRef: n.dataRef
            }]);
            return { ...e,
                ...o
            }
        },
        [6]: (e, n) => {
            let o = Y(e, a => {
                let r = a.findIndex(i => i.id === n.id);
                return r !== -1 && a.splice(r, 1), a
            });
            return { ...e,
                ...o,
                activationTrigger: 1
            }
        }
    },
    j = (0, c.createContext)(null);
j.displayName = "MenuContext";

function L(e) {
    let n = (0, c.useContext)(j);
    if (n === null) {
        let o = new Error(`<${e} /> is missing a parent <Menu /> component.`);
        throw Error.captureStackTrace && Error.captureStackTrace(o, L), o
    }
    return n
}

function Ne(e, n) {
    return H(n.type, Ee, e, n)
}
var Pe = c.Fragment;

function De(e, n) {
    let {
        __demoMode: o = !1,
        ...a
    } = e, r = (0, c.useReducer)(Ne, {
        __demoMode: o,
        menuState: o ? 0 : 1,
        buttonRef: (0, c.createRef)(),
        itemsRef: (0, c.createRef)(),
        items: [],
        searchQuery: "",
        activeItemIndex: null,
        activationTrigger: 1
    }), [{
        menuState: i,
        itemsRef: u,
        buttonRef: t
    }, l] = r, p = N(n);
    ne([t, u], (I, T) => {
        var m;
        l({
            type: 1
        }), te(T, ee.Loose) || (I.preventDefault(), (m = t.current) == null || m.focus())
    }, i === 0);
    let v = R(() => {
            l({
                type: 1
            })
        }),
        M = (0, c.useMemo)(() => ({
            open: i === 0,
            close: v
        }), [i, v]),
        g = {
            ref: p
        };
    return c.default.createElement(j.Provider, {
        value: r
    }, c.default.createElement(me, {
        value: H(i, {
            [0]: k.Open,
            [1]: k.Closed
        })
    }, P({
        ourProps: g,
        theirProps: a,
        slot: M,
        defaultTag: Pe,
        name: "Menu"
    })))
}
var ke = "button";

function Ae(e, n) {
    var o;
    let a = O(),
        {
            id: r = `headlessui-menu-button-${a}`,
            ...i
        } = e,
        [u, t] = L("Menu.Button"),
        l = N(u.buttonRef, n),
        p = W(),
        v = R(m => {
            switch (m.key) {
                case f.Space:
                case f.Enter:
                case f.ArrowDown:
                    m.preventDefault(), m.stopPropagation(), t({
                        type: 0
                    }), p.nextFrame(() => t({
                        type: 2,
                        focus: S.First
                    }));
                    break;
                case f.ArrowUp:
                    m.preventDefault(), m.stopPropagation(), t({
                        type: 0
                    }), p.nextFrame(() => t({
                        type: 2,
                        focus: S.Last
                    }));
                    break
            }
        }),
        M = R(m => {
            switch (m.key) {
                case f.Space:
                    m.preventDefault();
                    break
            }
        }),
        g = R(m => {
            if (ue(m.currentTarget)) return m.preventDefault();
            e.disabled || (u.menuState === 0 ? (t({
                type: 1
            }), p.nextFrame(() => {
                var x;
                return (x = u.buttonRef.current) == null ? void 0 : x.focus({
                    preventScroll: !0
                })
            })) : (m.preventDefault(), t({
                type: 0
            })))
        }),
        I = (0, c.useMemo)(() => ({
            open: u.menuState === 0
        }), [u]),
        T = {
            ref: l,
            id: r,
            type: oe(e, u.buttonRef),
            "aria-haspopup": "menu",
            "aria-controls": (o = u.itemsRef.current) == null ? void 0 : o.id,
            "aria-expanded": u.menuState === 0,
            onKeyDown: v,
            onKeyUp: M,
            onClick: g
        };
    return P({
        ourProps: T,
        theirProps: i,
        slot: I,
        defaultTag: ke,
        name: "Menu.Button"
    })
}
var Fe = "div",
    we = Z.RenderStrategy | Z.Static;

function Ge(e, n) {
    var o, a;
    let r = O(),
        {
            id: i = `headlessui-menu-items-${r}`,
            ...u
        } = e,
        [t, l] = L("Menu.Items"),
        p = N(t.itemsRef, n),
        v = de(t.itemsRef),
        M = W(),
        g = le(),
        I = (() => g !== null ? (g & k.Open) === k.Open : t.menuState === 0)();
    (0, c.useEffect)(() => {
        let s = t.itemsRef.current;
        s && t.menuState === 0 && s !== v ? .activeElement && s.focus({
            preventScroll: !0
        })
    }, [t.menuState, t.itemsRef, v]), se({
        container: t.itemsRef.current,
        enabled: t.menuState === 0,
        accept(s) {
            return s.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : s.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT
        },
        walk(s) {
            s.setAttribute("role", "none")
        }
    });
    let T = R(s => {
            var E, w;
            switch (M.dispose(), s.key) {
                case f.Space:
                    if (t.searchQuery !== "") return s.preventDefault(), s.stopPropagation(), l({
                        type: 3,
                        value: s.key
                    });
                case f.Enter:
                    if (s.preventDefault(), s.stopPropagation(), l({
                            type: 1
                        }), t.activeItemIndex !== null) {
                        let {
                            dataRef: b
                        } = t.items[t.activeItemIndex];
                        (w = (E = b.current) == null ? void 0 : E.domRef.current) == null || w.click()
                    }
                    Q(t.buttonRef.current);
                    break;
                case f.ArrowDown:
                    return s.preventDefault(), s.stopPropagation(), l({
                        type: 2,
                        focus: S.Next
                    });
                case f.ArrowUp:
                    return s.preventDefault(), s.stopPropagation(), l({
                        type: 2,
                        focus: S.Previous
                    });
                case f.Home:
                case f.PageUp:
                    return s.preventDefault(), s.stopPropagation(), l({
                        type: 2,
                        focus: S.First
                    });
                case f.End:
                case f.PageDown:
                    return s.preventDefault(), s.stopPropagation(), l({
                        type: 2,
                        focus: S.Last
                    });
                case f.Escape:
                    s.preventDefault(), s.stopPropagation(), l({
                        type: 1
                    }), B().nextFrame(() => {
                        var b;
                        return (b = t.buttonRef.current) == null ? void 0 : b.focus({
                            preventScroll: !0
                        })
                    });
                    break;
                case f.Tab:
                    s.preventDefault(), s.stopPropagation(), l({
                        type: 1
                    }), B().nextFrame(() => {
                        ae(t.buttonRef.current, s.shiftKey ? _.Previous : _.Next)
                    });
                    break;
                default:
                    s.key.length === 1 && (l({
                        type: 3,
                        value: s.key
                    }), M.setTimeout(() => l({
                        type: 4
                    }), 350));
                    break
            }
        }),
        m = R(s => {
            switch (s.key) {
                case f.Space:
                    s.preventDefault();
                    break
            }
        }),
        x = (0, c.useMemo)(() => ({
            open: t.menuState === 0
        }), [t]),
        F = {
            "aria-activedescendant": t.activeItemIndex === null || (o = t.items[t.activeItemIndex]) == null ? void 0 : o.id,
            "aria-labelledby": (a = t.buttonRef.current) == null ? void 0 : a.id,
            id: i,
            onKeyDown: T,
            onKeyUp: m,
            role: "menu",
            tabIndex: 0,
            ref: p
        };
    return P({
        ourProps: F,
        theirProps: u,
        slot: x,
        defaultTag: Fe,
        features: we,
        visible: I,
        name: "Menu.Items"
    })
}
var Be = c.Fragment;

function Oe(e, n) {
    let o = O(),
        {
            id: a = `headlessui-menu-item-${o}`,
            disabled: r = !1,
            ...i
        } = e,
        [u, t] = L("Menu.Item"),
        l = u.activeItemIndex !== null ? u.items[u.activeItemIndex].id === a : !1,
        p = (0, c.useRef)(null),
        v = N(n, p);
    G(() => {
        if (u.__demoMode || u.menuState !== 0 || !l || u.activationTrigger === 0) return;
        let b = B();
        return b.requestAnimationFrame(() => {
            var U, $;
            ($ = (U = p.current) == null ? void 0 : U.scrollIntoView) == null || $.call(U, {
                block: "nearest"
            })
        }), b.dispose
    }, [u.__demoMode, p, l, u.menuState, u.activationTrigger, u.activeItemIndex]);
    let M = pe(p),
        g = (0, c.useRef)({
            disabled: r,
            domRef: p,
            get textValue() {
                return M()
            }
        });
    G(() => {
        g.current.disabled = r
    }, [g, r]), G(() => (t({
        type: 5,
        id: a,
        dataRef: g
    }), () => t({
        type: 6,
        id: a
    })), [g, a]);
    let I = R(() => {
            t({
                type: 1
            })
        }),
        T = R(b => {
            if (r) return b.preventDefault();
            t({
                type: 1
            }), Q(u.buttonRef.current)
        }),
        m = R(() => {
            if (r) return t({
                type: 2,
                focus: S.Nothing
            });
            t({
                type: 2,
                focus: S.Specific,
                id: a
            })
        }),
        x = ce(),
        F = R(b => x.update(b)),
        s = R(b => {
            x.wasMoved(b) && (r || l || t({
                type: 2,
                focus: S.Specific,
                id: a,
                trigger: 0
            }))
        }),
        E = R(b => {
            x.wasMoved(b) && (r || l && t({
                type: 2,
                focus: S.Nothing
            }))
        }),
        w = (0, c.useMemo)(() => ({
            active: l,
            disabled: r,
            close: I
        }), [l, r, I]);
    return P({
        ourProps: {
            id: a,
            ref: v,
            role: "menuitem",
            tabIndex: r === !0 ? void 0 : -1,
            "aria-disabled": r === !0 ? !0 : void 0,
            disabled: void 0,
            onClick: T,
            onFocus: m,
            onPointerEnter: F,
            onMouseEnter: F,
            onPointerMove: s,
            onMouseMove: s,
            onPointerLeave: E,
            onMouseLeave: E
        },
        theirProps: i,
        slot: w,
        defaultTag: Be,
        name: "Menu.Item"
    })
}
var Le = D(De),
    Ke = D(Ae),
    Ue = D(Ge),
    Ve = D(Oe),
    A = Object.assign(Le, {
        Button: Ke,
        Items: Ue,
        Item: Ve
    });
var K = h(V());
var ge = h(Ie()),
    ye = h(be()),
    d = h(Me()),
    y = h(z()),
    X = ({
        title: e,
        desc: n,
        className: o,
        items: a,
        labelExtractor: r,
        keyExtractor: i,
        onSelect: u,
        aside: t,
        buttonClassName: l,
        selectItemClassName: p,
        menuItemsClassName: v,
        header: M,
        chevron: g,
        headless: I
    }) => (0, y.jsx)(A, {
        as: "div",
        className: C("relative inline-block text-left", o),
        children: ({
            open: T
        }) => (0, y.jsxs)(y.Fragment, {
            children: [!(0, ye.default)(n) && (0, y.jsx)("p", {
                className: "mb-2 text-sm text-gray-900",
                children: n
            }), (0, y.jsx)("div", {
                children: (0, y.jsxs)(A.Button, {
                    className: C(l, {
                        "justify-between": t,
                        "justify-center": !t,
                        "inline-flex w-full rounded-md border border-gray-300 shadow-sm px-3 md:px-4 py-2 bg-white text-sm font-medium text-gray-700 dark:text-gray-50 dark:border-gray-800 dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500": !I,
                        "inline-flex w-full px-3 md:px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-50 outline-none group": I
                    }),
                    children: [e, g === "regular" && (0, y.jsx)(q, {
                        className: C("-mr-1 ml-2 h-5 w-5", {
                            "group-hover:text-gray-500": I
                        }),
                        "aria-hidden": "true"
                    }), g === "mini" && (0, y.jsx)(ve, {
                        className: C("-mr-1 ml-1 h-5 w-5", {
                            "group-hover:text-gray-500": I
                        }),
                        "aria-hidden": "true"
                    })]
                })
            }), (0, y.jsx)(fe, {
                show: T,
                as: K.Fragment,
                enter: "transition ease-out duration-100",
                enterFrom: "transform opacity-0 scale-95",
                enterTo: "transform opacity-100 scale-100",
                leave: "transition ease-in duration-75",
                leaveFrom: "transform opacity-100 scale-100",
                leaveTo: "transform opacity-0 scale-95",
                children: (0, y.jsxs)(A.Items, {
                    static: !0,
                    className: C("z-50 py-1 origin-top-right absolute right-0 mt-2 w-40 min-w-max rounded-md shadow-lg bg-white dark:bg-slate-800 ring-1 ring-black ring-opacity-5 focus:outline-none", v, {
                        "divide-y divide-gray-100": M
                    }),
                    children: [M && (0, y.jsx)("p", {
                        className: "text-gray-700 dark:text-gray-50 px-4 py-2 text-sm font-medium",
                        children: M
                    }), (0, ge.default)(a, m => (0, y.jsx)(A.Item, {
                        children: (0, y.jsx)("span", {
                            className: p || "text-gray-700 dark:text-gray-50 dark:border-gray-800 dark:bg-slate-800 block px-4 py-2 text-sm cursor-pointer hover:bg-gray-200 dark:hover:bg-slate-700",
                            role: "menuitem",
                            tabIndex: 0,
                            onClick: x => u(m, x),
                            children: r ? r(m) : m
                        })
                    }, i ? i(m) : m))]
                })
            })]
        })
    });
X.propTypes = {
    title: d.default.oneOfType([d.default.string, d.default.node]).isRequired,
    onSelect: d.default.func.isRequired,
    items: d.default.arrayOf(d.default.oneOfType([d.default.string, d.default.object])),
    className: d.default.string,
    buttonClassName: d.default.string,
    selectItemClassName: d.default.string,
    labelExtractor: d.default.func,
    keyExtractor: d.default.func,
    aside: d.default.bool,
    desc: d.default.string,
    menuItemsClassName: d.default.string,
    chevron: d.default.oneOf(["regular", "mini"]),
    headless: d.default.bool
};
X.defaultProps = {
    className: "",
    buttonClassName: "",
    selectItemClassName: "",
    labelExtractor: null,
    keyExtractor: null,
    aside: !1,
    desc: "",
    items: [],
    menuItemsClassName: "",
    chevron: "regular",
    headless: !1
};
var vt = (0, K.memo)(X);
export {
    We as a, A as b, vt as c
};