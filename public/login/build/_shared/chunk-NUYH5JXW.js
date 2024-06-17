import {
    j as c,
    m as B
} from "/build/_shared/chunk-I4QJWQOX.js";
import {
    c as r,
    g
} from "/build/_shared/chunk-AG5EO474.js";
import {
    a as e
} from "/build/_shared/chunk-BWHACG72.js";
import {
    c as n
} from "/build/_shared/chunk-TF7C7MH2.js";
import {
    a as T,
    b as i
} from "/build/_shared/chunk-KO3OK2JV.js";
import {
    e as t
} from "/build/_shared/chunk-ADMCF34Z.js";
var h = t(T());
g();
B();
var s = t(i()),
    w = {
        authenticated: {
            shouldBeAuthenticated: !0,
            redirectPath: e.signin
        },
        notAuthenticated: {
            shouldBeAuthenticated: !1,
            redirectPath: e.dashboard
        }
    },
    E = (u, d) => {
        let p = c();
        return m => {
            let {
                shouldBeAuthenticated: o,
                redirectPath: A
            } = d, {
                authenticated: y,
                loading: f
            } = r(l => l.auth), P = n(), a = f ? !!p : y;
            return (0, h.useEffect)(() => {
                o !== a && P(A)
            }, [a, o]), (0, s.jsx)(u, { ...m
            })
        }
    };
export {
    w as a, E as b
};