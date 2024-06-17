import {
    a as i,
    j as l
} from "/build/_shared/chunk-PNYNM7FJ.js";
import {
    a as N
} from "/build/_shared/chunk-KO3OK2JV.js";
import {
    e as E
} from "/build/_shared/chunk-ADMCF34Z.js";
var e = E(N(), 1);

function O({
    container: r,
    accept: t,
    walk: o,
    enabled: a = !0
}) {
    let n = (0, e.useRef)(t),
        c = (0, e.useRef)(o);
    (0, e.useEffect)(() => {
        n.current = t, c.current = o
    }, [t, o]), i(() => {
        if (!r || !a) return;
        let u = l(r);
        if (!u) return;
        let f = n.current,
            m = c.current,
            p = Object.assign(d => f(d), {
                acceptNode: f
            }),
            s = u.createTreeWalker(r, NodeFilter.SHOW_ELEMENT, p, !1);
        for (; s.nextNode();) m(s.currentNode)
    }, [r, a, n, c])
}
export {
    O as a
};