import {
    a as f,
    b as k,
    c as p
} from "/build/_shared/chunk-52QUA465.js";
import {
    a
} from "/build/_shared/chunk-JTW264IZ.js";
import {
    b as r
} from "/build/_shared/chunk-57DP7WQB.js";
import {
    c as R,
    g as O
} from "/build/_shared/chunk-AG5EO474.js";
import {
    e as l
} from "/build/_shared/chunk-DPI6PCVH.js";
import {
    ja as S,
    nb as c,
    rb as v
} from "/build/_shared/chunk-MGB3JPCV.js";
import {
    b as m
} from "/build/_shared/chunk-KO3OK2JV.js";
import {
    e as i
} from "/build/_shared/chunk-ADMCF34Z.js";
v();
var o = i(m()),
    B = ({
        setIsLoading: g,
        authSSO: u,
        dontRemember: d,
        callback: b,
        isMiniButton: h,
        className: n
    }) => {
        let {
            t: s
        } = l(), t = async () => {
            g(!0), u(c.GOOGLE, d, s, b)
        };
        return h ? (0, o.jsx)(a, {
            title: s("auth.common.continueWithGoogle"),
            className: r(n, "ring-1 ring-slate-300 bg-transparent hover:bg-slate-100 dark:ring-slate-700 dark:hover:bg-slate-800/60"),
            onClick: t,
            secondary: !0,
            regular: !0,
            children: (0, o.jsx)(f, {
                className: "w-5 h-5"
            })
        }) : (0, o.jsx)(a, {
            className: r(n, "flex items-center justify-center border-indigo-100 dark:text-gray-50 dark:border-slate-700/50 dark:bg-slate-800 dark:hover:bg-slate-700"),
            onClick: t,
            secondary: !0,
            regular: !0,
            children: (0, o.jsxs)(o.Fragment, {
                children: [(0, o.jsx)(f, {
                    className: "w-5 h-5 mr-2"
                }), s("auth.common.google")]
            })
        })
    };
B.defaultProps = {
    dontRemember: !1,
    isMiniButton: !1,
    callback: () => {},
    className: ""
};
var V = B;
O();
v();
var e = i(m()),
    N = ({
        setIsLoading: g,
        authSSO: u,
        dontRemember: d,
        callback: b,
        isMiniButton: h,
        className: n,
        ssrTheme: s
    }) => {
        let {
            t
        } = l(), I = R(L => L.ui.theme.theme), y = S ? I : s, G = async () => {
            g(!0), u(c.GITHUB, d, t, b)
        };
        return h ? (0, e.jsx)(a, {
            title: t("auth.common.continueWithGithub"),
            className: r(n, "ring-1 ring-slate-300 bg-transparent hover:bg-slate-100 dark:ring-slate-700 dark:hover:bg-slate-800/60"),
            onClick: G,
            secondary: !0,
            regular: !0,
            children: y === "dark" ? (0, e.jsx)(p, {
                className: "w-5 h-5"
            }) : (0, e.jsx)(k, {
                className: "w-5 h-5"
            })
        }) : (0, e.jsx)(a, {
            className: r(n, "flex items-center justify-center border-indigo-100 dark:text-gray-50 dark:border-slate-700/50 dark:bg-slate-800 dark:hover:bg-slate-700"),
            onClick: G,
            secondary: !0,
            regular: !0,
            children: (0, e.jsxs)(e.Fragment, {
                children: [y === "dark" ? (0, e.jsx)(p, {
                    className: "w-5 h-5 mr-2"
                }) : (0, e.jsx)(k, {
                    className: "w-5 h-5 mr-2"
                }), t("auth.common.github")]
            })
        })
    };
N.defaultProps = {
    dontRemember: !1,
    isMiniButton: !1,
    callback: () => {},
    className: ""
};
var U = N;
export {
    V as a, U as b
};