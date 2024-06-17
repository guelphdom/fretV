import {
    c as b
} from "/build/_shared/chunk-QDPUWXIN.js";
import {
    b as n,
    c as T,
    p as u
} from "/build/_shared/chunk-57DP7WQB.js";
import {
    a as C
} from "/build/_shared/chunk-I4QJWQOX.js";
import {
    a as I,
    b as g
} from "/build/_shared/chunk-KO3OK2JV.js";
import {
    e as r
} from "/build/_shared/chunk-ADMCF34Z.js";
var f = r(I());
var y = r(C()),
    e = r(T());
var t = r(g()),
    l = ({
        label: o,
        hint: i,
        placeholder: v,
        type: d,
        id: x,
        name: m,
        className: h,
        onChange: N,
        error: p,
        value: E,
        disabled: c,
        onKeyDown: w,
        isBeta: k
    }) => {
        let a = x || m || d,
            s = !(0, y.default)(p);
        return (0, t.jsxs)("div", {
            className: h,
            children: [(0, t.jsx)("div", {
                className: n({
                    "flex justify-between": o && i
                }),
                children: (0, t.jsxs)("label", {
                    htmlFor: a,
                    className: "flex text-sm font-medium text-gray-700 dark:text-gray-200",
                    children: [o, k && (0, t.jsx)("div", {
                        className: "ml-5",
                        children: (0, t.jsx)(b, {})
                    })]
                })
            }), (0, t.jsxs)("div", {
                className: n("relative", {
                    "mt-1": o
                }),
                children: [(0, t.jsx)("input", {
                    type: d,
                    value: E,
                    name: m,
                    id: a,
                    onChange: N,
                    onKeyDown: w,
                    className: n("shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 dark:text-gray-50 dark:placeholder-gray-400 dark:border-slate-800/25 dark:bg-slate-800 rounded-md", {
                        "border-red-300 text-red-900 placeholder-red-300": s,
                        "cursor-text": c
                    }),
                    placeholder: v,
                    "aria-describedby": `${a}-optional`,
                    disabled: c
                }), s && (0, t.jsx)("div", {
                    className: "absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none",
                    children: (0, t.jsx)(u, {
                        className: "h-5 w-5 text-red-500",
                        "aria-hidden": !0
                    })
                })]
            }), i && (0, t.jsx)("p", {
                className: "mt-2 text-sm text-gray-500 dark:text-gray-300 whitespace-pre-line",
                id: `${a}-optional`,
                children: i
            }), s && (0, t.jsx)("p", {
                className: "mt-2 text-sm text-red-600 dark:text-red-500",
                id: "email-error",
                children: p
            })]
        })
    };
l.propTypes = {
    value: e.default.oneOfType([e.default.string, e.default.number]),
    label: e.default.string,
    hint: e.default.string,
    placeholder: e.default.string,
    onChange: e.default.func,
    onKeyDown: e.default.func,
    id: e.default.string,
    type: e.default.string,
    className: e.default.string,
    error: e.default.oneOfType([e.default.string, e.default.bool]),
    name: e.default.string,
    disabled: e.default.bool,
    isBeta: e.default.bool
};
l.defaultProps = {
    value: null,
    label: "",
    hint: "",
    placeholder: "",
    onChange: () => {},
    onKeyDown: () => {},
    id: "",
    type: "",
    className: "",
    error: null,
    name: "",
    disabled: !1,
    isBeta: !1
};
var R = (0, f.memo)(l);
export {
    R as a
};