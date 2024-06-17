import {
    a as s
} from "/build/_shared/chunk-EKAWD43G.js";
import {
    b as n,
    c as C
} from "/build/_shared/chunk-57DP7WQB.js";
import {
    a as M,
    b as l
} from "/build/_shared/chunk-KO3OK2JV.js";
import {
    e as o
} from "/build/_shared/chunk-ADMCF34Z.js";
var d = o(M());
var e = o(C());
var r = o(l()),
    a = ({
        text: i,
        children: b,
        primary: g,
        secondary: m,
        danger: f,
        onClick: u,
        white: p,
        small: c,
        regular: x,
        large: y,
        giant: h,
        type: k,
        className: v,
        loading: t,
        semiSmall: B,
        semiDanger: w,
        noBorder: T,
        focus: L,
        disabled: S,
        ...H
    }) => (0, r.jsxs)("button", { ...H,
        disabled: S || t,
        type: k,
        onClick: u,
        className: n("relative inline-flex select-none items-center border leading-4 font-medium rounded-md", {
            "shadow-sm text-gray-50 bg-slate-900 hover:bg-slate-700 dark:bg-indigo-700 dark:hover:bg-indigo-800 border-transparent": g,
            "text-slate-900 bg-slate-300 hover:bg-slate-200 border-transparent": m,
            "text-gray-700 bg-white hover:bg-gray-50 border-transparent": p,
            "text-gray-50 bg-red-500 hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700 border-transparent": f,
            "text-red-500 hover:text-red-600 border-red-600 dark:text-red-300 dark:hover:text-red-400 dark:border-red-500 border-1": w,
            "focus:border-none border-none text-gray-700 dark:text-white focus:ring-0 focus:ring-offset-0": T,
            "px-2.5 py-1.5 text-xs": c,
            "px-2.5 py-1.5 text-sm": B,
            "px-4 py-2 text-sm": y,
            "px-6 py-3 text-base": h,
            "px-3 py-2 text-sm": x,
            "cursor-not-allowed": t,
            "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500": L
        }, v),
        children: [t && (0, r.jsx)(s, {
            alwaysLight: !0
        }), i || b]
    });
a.propTypes = {
    text: e.default.string,
    children: e.default.node,
    onClick: e.default.func,
    primary: e.default.bool,
    secondary: e.default.bool,
    white: e.default.bool,
    danger: e.default.bool,
    semiDanger: e.default.bool,
    small: e.default.bool,
    semiSmall: e.default.bool,
    regular: e.default.bool,
    large: e.default.bool,
    giant: e.default.bool,
    type: e.default.string,
    className: e.default.string,
    loading: e.default.bool,
    focus: e.default.bool,
    noBorder: e.default.bool,
    disabled: e.default.bool
};
a.defaultProps = {
    text: null,
    onClick: () => {},
    primary: !1,
    secondary: !1,
    white: !1,
    small: !1,
    semiSmall: !1,
    regular: !1,
    large: !1,
    danger: !1,
    semiDanger: !1,
    giant: !1,
    loading: !1,
    type: "button",
    className: "",
    children: null,
    focus: !0,
    noBorder: !1,
    disabled: !1
};
var A = (0, d.memo)(a);
export {
    A as a
};