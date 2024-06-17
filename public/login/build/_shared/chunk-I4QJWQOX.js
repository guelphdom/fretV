import {
    d as h
} from "/build/_shared/chunk-BM2U2S6E.js";
import {
    Fa as i,
    G as _,
    H as A,
    ja as n,
    ra as O,
    rb as S,
    sa as E
} from "/build/_shared/chunk-MGB3JPCV.js";
import {
    c as D,
    d as b,
    e as Y,
    h as k,
    i as F,
    k as x
} from "/build/_shared/chunk-KKTF54FB.js";
import {
    f as U
} from "/build/_shared/chunk-2SDAKG4K.js";
import {
    b as a,
    c as R,
    e as P
} from "/build/_shared/chunk-ADMCF34Z.js";
var V, g, m, G, y, l, I = a(() => {
    "use strict";
    S();
    V = "swetrix.com", g = O || E ? "" : `; domain=${V}; secure`, m = e => {
        if (!n) return null;
        let t = document.cookie.match(new RegExp(`(^| )${e}=([^;]+)`));
        return t ? t[2] : null
    }, G = (e, t, r = 3600, s = "strict") => `${e}=${t}; max-age=${r}; path=/; SameSite=${s}${g}`, y = (e, t, r = 3600, s = "strict") => {
        if (!n) return null;
        document.cookie = G(e, t, r, s)
    }, l = e => {
        if (!n) return null;
        document.cookie = `${e}=; max-age=0; path=/; SameSite=strict`, document.cookie = `${e}=; max-age=0; path=/; SameSite=strict${g}`
    }
});
var u = R((Ne, T) => {
    var H = x(),
        v = h(),
        J = b(),
        K = U(),
        w = D(),
        $ = Y(),
        j = F(),
        M = k(),
        q = "[object Map]",
        W = "[object Set]",
        B = Object.prototype,
        X = B.hasOwnProperty;

    function z(e) {
        if (e == null) return !0;
        if (w(e) && (K(e) || typeof e == "string" || typeof e.splice == "function" || $(e) || M(e) || J(e))) return !e.length;
        var t = v(e);
        if (t == q || t == W) return !e.size;
        if (j(e)) return !H(e).length;
        for (var r in e)
            if (X.call(e, r)) return !1;
        return !0
    }
    T.exports = z
});
var N, Q, Ce, fe, L, d = a(() => {
    "use strict";
    N = P(u());
    S();
    I();
    Q = 8467200, Ce = () => {
        if (!n) return null;
        let e = m(i);
        return (0, N.default)(e) && (e = sessionStorage.getItem(i)), e
    }, fe = (e, t = !1) => {
        if (!n) return null;
        if (t) return sessionStorage.setItem(i, e), null;
        y(i, e, Q)
    }, L = () => {
        if (!n) return null;
        l(i), sessionStorage.removeItem(i)
    }
});
var Z, o, C = a(() => {
    "use strict";
    Z = Object.freeze({
        LOAD_EXTENSIONS: "LOAD_EXTENSIONS",
        LOAD_PROJECTS: "LOAD_PROJECTS",
        LOAD_METAINFO: "LOAD_METAINFO",
        LOAD_USAGEINFO: "LOAD_USAGEINFO",
        LOAD_SHARED_PROJECTS: "LOAD_SHARED_PROJECTS",
        LOAD_PROJECT_ALERTS: "LOAD_PROJECT_ALERTS",
        LOGIN_ASYNC: "LOGIN_ASYNC",
        SIGNUP_ASYNC: "SIGNUP_ASYNC",
        EMAIL_VERIFY_ASYNC: "EMAIL_VERIFY_ASYNC",
        UPDATE_USER_PROFILE_ASYNC: "UPDATE_USER_PROFILE_ASYNC",
        UPDATE_SHOW_LIVE_VISITORS_IN_TITLE: "UPDATE_SHOW_LIVE_VISITORS_IN_TITLE",
        DELETE_ACCOUNT_ASYNC: "DELETE_ACCOUNT_ASYNC",
        SHARE_VERIFY_ASYNC: "SHARE_VERIFY_ASYNC",
        LOGOUT: "LOGOUT",
        AUTH_SSO: "AUTH_SSO",
        LINK_SSO: "LINK_SSO",
        UNLINK_SSO: "UNLINK_SSO"
    }), o = Z
});
var c, Ue, be, p, f = a(() => {
    "use strict";
    S();
    c = {}, Ue = (e, t) => {
        c[e] = t, n && localStorage.setItem(e, t)
    }, be = e => {
        if (c[e]) return c[e];
        if (!n) return;
        let t = localStorage.getItem(e);
        try {
            return JSON.parse(t)
        } catch {
            return t
        }
    }, p = e => {
        delete c[e], n && localStorage.removeItem(e)
    }
});
var ee, te, re, oe, ne, se, ie, ae, Se, ce, pe, _e, Ae, Oe, Ee, ge, me, ye, le, Ve, Ie = a(() => {
    "use strict";
    C();
    d();
    f();
    S();
    ee = (e, t, r) => ({
        type: o.LOAD_PROJECTS,
        payload: {
            take: e,
            skip: t,
            search: r
        }
    }), te = () => ({
        type: o.LOAD_METAINFO
    }), re = () => ({
        type: o.LOAD_USAGEINFO
    }), oe = (e, t, r) => ({
        type: o.LOAD_SHARED_PROJECTS,
        payload: {
            take: e,
            skip: t,
            search: r
        }
    }), ne = (e, t, r) => ({
        type: o.LOAD_PROJECTS,
        payload: {
            take: e,
            skip: t,
            isCaptcha: !0,
            search: r
        }
    }), se = () => ({
        type: o.LOAD_EXTENSIONS
    }), ie = (e, t) => ({
        type: o.LOAD_PROJECT_ALERTS,
        payload: {
            take: e,
            skip: t
        }
    }), ae = (e, t = () => {}) => ({
        type: o.LOGIN_ASYNC,
        payload: {
            credentials: e,
            callback: t
        }
    }), Se = (e, t, r = () => "", s = () => {}) => ({
        type: o.AUTH_SSO,
        payload: {
            dontRemember: t,
            callback: s,
            t: r,
            provider: e
        }
    }), ce = (e = () => "", t = () => {}, r = "google") => ({
        type: o.LINK_SSO,
        payload: {
            callback: t,
            t: e,
            provider: r
        }
    }), pe = (e = () => "", t = () => {}, r = "google") => ({
        type: o.UNLINK_SSO,
        payload: {
            callback: t,
            t: e,
            provider: r
        }
    }), _e = (e, t, r = s => {}) => ({
        type: o.SIGNUP_ASYNC,
        payload: {
            data: e,
            callback: r,
            t
        }
    }), Ae = (e, t, r) => ({
        type: o.EMAIL_VERIFY_ASYNC,
        payload: {
            data: e,
            successfulCallback: t,
            errorCallback: r
        }
    }), Oe = (e, t = r => {}) => ({
        type: o.UPDATE_USER_PROFILE_ASYNC,
        payload: {
            data: e,
            callback: t
        }
    }), Ee = (e, t, r, s) => ({
        type: o.DELETE_ACCOUNT_ASYNC,
        payload: {
            errorCallback: e,
            successCallback: t,
            t: s,
            deletionFeedback: r
        }
    }), ge = (e, t, r) => ({
        type: o.SHARE_VERIFY_ASYNC,
        payload: {
            data: e,
            successfulCallback: t,
            errorCallback: r
        }
    }), me = (e, t) => (L(), p(_), p(A), {
        type: o.LOGOUT,
        payload: {
            basedOn401Error: e,
            isLogoutAll: t
        }
    }), ye = (e, t) => ({
        type: o.UPDATE_SHOW_LIVE_VISITORS_IN_TITLE,
        payload: {
            show: e,
            callback: t
        }
    }), le = {
        loadProjects: ee,
        loadSharedProjects: oe,
        loadProjectsCaptcha: ne,
        loadExtensions: se,
        loadProjectAlerts: ie,
        loginAsync: ae,
        authSSO: Se,
        signupAsync: _e,
        emailVerifyAsync: Ae,
        updateUserProfileAsync: Oe,
        deleteAccountAsync: Ee,
        logout: me,
        shareVerifyAsync: ge,
        linkSSO: ce,
        unlinkSSO: pe,
        loadMetainfo: te,
        loadUsageinfo: re,
        updateShowLiveVisitorsInTitle: ye
    }, Ve = le
});
export {
    u as a, Ue as b, be as c, p as d, f as e, m as f, y as g, l as h, I as i, Ce as j, fe as k, L as l, d as m, o as n, C as o, Ve as p, Ie as q
};