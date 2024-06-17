import {
    b as n,
    c,
    s as x
} from "/build/_shared/chunk-57DP7WQB.js";
import {
    e as p
} from "/build/_shared/chunk-DPI6PCVH.js";
import {
    a as m,
    b as i
} from "/build/_shared/chunk-KO3OK2JV.js";
import {
    e
} from "/build/_shared/chunk-ADMCF34Z.js";
var f = e(m()),
    r = e(c());
var o = e(i()),
    s = ({
        text: l,
        className: a,
        tooltipNode: t
    }) => (0, o.jsxs)("div", {
        className: n("relative flex flex-col group items-center", a),
        "data-testid": "tooltip-wrapper",
        children: [t || (0, o.jsx)(x, {
            className: "w-5 h-5 text-gray-700 dark:text-gray-300",
            "data-testid": "tooltip-icon"
        }), (0, o.jsxs)("div", {
            className: "absolute bottom-0 flex-col mb-6 hidden group-hover:flex items-center",
            children: [(0, o.jsx)("span", {
                className: "opacity-95 relative w-60 z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-gray-700 shadow-lg rounded-md",
                children: l
            }), (0, o.jsx)("div", {
                className: "w-3 h-3 -mt-2 rotate-45 bg-gray-700 opacity-95"
            })]
        })]
    });
s.propTypes = {
    text: r.default.oneOfType([r.default.string, r.default.number, r.default.node]).isRequired,
    className: r.default.string,
    tooltipNode: r.default.node
};
s.defaultProps = {
    className: "",
    tooltipNode: null
};
var b = (0, f.memo)(s);
var w = e(m()),
    k = e(c());
var N = e(i()),
    y = ({
        label: l,
        className: a,
        colour: t
    }) => (0, N.jsx)("span", {
        className: n("inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset", a, {
            "ring-slate-500/10 text-slate-600 bg-slate-50 dark:bg-slate-400/10 dark:text-slate-400 dark:ring-slate-400/20": t === "slate",
            "bg-indigo-50 text-indigo-700 ring-indigo-700/10 dark:bg-indigo-400/10 dark:text-indigo-400 dark:ring-indigo-400/30": t === "indigo",
            "bg-yellow-50 text-yellow-800 ring-yellow-600/20 dark:bg-yellow-400/10 dark:text-yellow-500 dark:ring-yellow-400/20": t === "yellow",
            "bg-green-50 text-green-700 ring-green-600/20 dark:bg-green-500/10 dark:text-green-400 dark:ring-green-500/20": t === "green",
            "bg-red-50 text-red-700 ring-red-600/10 dark:bg-red-400/10 dark:text-red-400 dark:ring-red-400/20": t === "red"
        }),
        children: l
    });
var d = e(i()),
    g = ({
        className: l
    }) => {
        let {
            t: a
        } = p("common");
        return (0, d.jsx)(b, {
            className: "max-w-content !w-full",
            tooltipNode: (0, d.jsx)(y, {
                className: l,
                label: a("beta.title"),
                colour: "yellow"
            }),
            text: a("beta.description")
        })
    };
g.propTypes = {
    className: k.default.string
};
g.defaultProps = {
    className: ""
};
var S = (0, w.memo)(g);
export {
    b as a, y as b, S as c
};