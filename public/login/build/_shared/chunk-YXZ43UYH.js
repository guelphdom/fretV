import {
    a as c,
    f as d
} from "/build/_shared/chunk-PNYNM7FJ.js";
import {
    a
} from "/build/_shared/chunk-KO3OK2JV.js";
import {
    e as s
} from "/build/_shared/chunk-ADMCF34Z.js";
var m = s(a(), 1);

function p(e) {
    var t;
    if (e.type) return e.type;
    let r = (t = e.as) != null ? t : "button";
    if (typeof r == "string" && r.toLowerCase() === "button") return "button"
}

function E(e, t) {
    let [r, u] = (0, m.useState)(() => p(e));
    return c(() => {
        u(p(e))
    }, [e.type, e.as]), c(() => {
        r || t.current && t.current instanceof HTMLButtonElement && !t.current.hasAttribute("type") && u("button")
    }, [r, t]), r
}

function y(e) {
    throw new Error("Unexpected object: " + e)
}
var I = (e => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(I || {});

function w(e, t) {
    let r = t.resolveItems();
    if (r.length <= 0) return null;
    let u = t.resolveActiveIndex(),
        i = u ? ? -1,
        l = (() => {
            switch (e.focus) {
                case 0:
                    return r.findIndex(n => !t.resolveDisabled(n));
                case 1:
                    {
                        let n = r.slice().reverse().findIndex((o, D, h) => i !== -1 && h.length - D - 1 >= i ? !1 : !t.resolveDisabled(o));
                        return n === -1 ? n : r.length - 1 - n
                    }
                case 2:
                    return r.findIndex((n, o) => o <= i ? !1 : !t.resolveDisabled(n));
                case 3:
                    {
                        let n = r.slice().reverse().findIndex(o => !t.resolveDisabled(o));
                        return n === -1 ? n : r.length - 1 - n
                    }
                case 4:
                    return r.findIndex(n => t.resolveId(n) === e.id);
                case 5:
                    return null;
                default:
                    y(e)
            }
        })();
    return l === -1 ? u : l
}
var v = s(a(), 1);

function x(e) {
    return [e.screenX, e.screenY]
}

function B() {
    let e = (0, v.useRef)([-1, -1]);
    return {
        wasMoved(t) {
            let r = x(t);
            return e.current[0] === r[0] && e.current[1] === r[1] ? !1 : (e.current = r, !0)
        },
        update(t) {
            e.current = x(t)
        }
    }
}
var f = s(a(), 1);
var g = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;

function b(e) {
    var t, r;
    let u = (t = e.innerText) != null ? t : "",
        i = e.cloneNode(!0);
    if (!(i instanceof HTMLElement)) return u;
    let l = !1;
    for (let o of i.querySelectorAll('[hidden],[aria-hidden],[role="img"]')) o.remove(), l = !0;
    let n = l ? (r = i.innerText) != null ? r : "" : u;
    return g.test(n) && (n = n.replace(g, "")), n
}

function F(e) {
    let t = e.getAttribute("aria-label");
    if (typeof t == "string") return t.trim();
    let r = e.getAttribute("aria-labelledby");
    if (r) {
        let u = r.split(" ").map(i => {
            let l = document.getElementById(i);
            if (l) {
                let n = l.getAttribute("aria-label");
                return typeof n == "string" ? n.trim() : b(l).trim()
            }
            return null
        }).filter(Boolean);
        if (u.length > 0) return u.join(", ")
    }
    return b(e).trim()
}

function P(e) {
    let t = (0, f.useRef)(""),
        r = (0, f.useRef)("");
    return d(() => {
        let u = e.current;
        if (!u) return "";
        let i = u.innerText;
        if (t.current === i) return r.current;
        let l = F(u).trim().toLowerCase();
        return t.current = i, r.current = l, l
    })
}
export {
    E as a, I as b, w as c, B as d, P as e
};