import {
    b as r,
    c as k
} from "/build/_shared/chunk-57DP7WQB.js";
import {
    a as u,
    b as d
} from "/build/_shared/chunk-KO3OK2JV.js";
import {
    e as i
} from "/build/_shared/chunk-ADMCF34Z.js";
var c = i(u());
var e = i(k()),
    t = i(d()),
    s = ({
        label: m,
        hint: o,
        id: g,
        name: l,
        className: h,
        onChange: p,
        checked: b,
        hintClassName: f,
        disabled: a
    }) => {
        let n = g || l;
        return (0, t.jsxs)("div", {
            className: r("relative flex items-start whitespace-pre-line", {
                "cursor-not-allowed": a
            }, h),
            children: [(0, t.jsx)("div", {
                className: "flex items-center h-5",
                children: (0, t.jsx)("input", {
                    id: n,
                    "aria-describedby": n,
                    name: l,
                    disabled: a,
                    type: "checkbox",
                    checked: b,
                    onChange: p,
                    className: r("focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 dark:border-slate-800 dark:bg-slate-700 dark:checked:bg-indigo-600 rounded cursor-pointer", {
                        "!cursor-not-allowed": a,
                        "opacity-50": a
                    })
                })
            }), (0, t.jsxs)("div", {
                className: "ml-3 text-sm",
                children: [(0, t.jsx)("label", {
                    htmlFor: n,
                    className: r("font-medium text-gray-700 dark:text-gray-200 cursor-pointer", {
                        "!cursor-not-allowed": a
                    }),
                    children: m
                }), o && (0, t.jsx)("p", {
                    id: `${n}-description`,
                    className: r("text-gray-500 dark:text-gray-300", f),
                    children: o
                })]
            })]
        })
    };
s.propTypes = {
    label: e.default.oneOfType([e.default.string, e.default.node]),
    checked: e.default.bool.isRequired,
    hint: e.default.string,
    onChange: e.default.func,
    id: e.default.string,
    className: e.default.string,
    name: e.default.string,
    hintClassName: e.default.string,
    disabled: e.default.bool
};
s.defaultProps = {
    label: "",
    hint: "",
    onChange: () => {},
    id: "",
    className: "",
    name: "",
    hintClassName: "",
    disabled: !1
};
var y = (0, c.memo)(s);
export {
    y as a
};