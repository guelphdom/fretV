import {
    b as r,
    c
} from "/build/_shared/chunk-57DP7WQB.js";
import {
    b as o
} from "/build/_shared/chunk-KO3OK2JV.js";
import {
    e
} from "/build/_shared/chunk-ADMCF34Z.js";
var a = e(c()),
    t = e(o()),
    s = ({
        className: i,
        alwaysLight: l
    }) => (0, t.jsxs)("svg", {
        className: r("animate-spin -ml-1 mr-2 h-4 w-4 text-slate-900 dark:text-white", {
            "text-slate-900 dark:text-white": !l,
            "text-white": l
        }, i),
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        children: [(0, t.jsx)("circle", {
            className: "opacity-25",
            cx: "12",
            cy: "12",
            r: "10",
            stroke: "currentColor",
            strokeWidth: "4"
        }), (0, t.jsx)("path", {
            className: "opacity-75",
            fill: "currentColor",
            d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        })]
    });
s.propTypes = {
    className: a.default.string,
    alwaysLight: a.default.bool
};
s.defaultProps = {
    className: "",
    alwaysLight: !1
};
var m = s;
export {
    m as a
};