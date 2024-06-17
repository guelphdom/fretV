import {
    e as B,
    h as k,
    j as H,
    k as $
} from "/build/_shared/chunk-2SDAKG4K.js";
import {
    b as G,
    c as n,
    e as v
} from "/build/_shared/chunk-ADMCF34Z.js";
var l = n((De, p) => {
    function V(e, t, s) {
        return e === e && (s !== void 0 && (e = e <= s ? e : s), t !== void 0 && (e = e >= t ? e : t)), e
    }
    p.exports = V
});
var _ = n((Pe, g) => {
    var X = /\s/;

    function W(e) {
        for (var t = e.length; t-- && X.test(e.charAt(t)););
        return t
    }
    g.exports = W
});
var y = n((Ne, m) => {
    var K = _(),
        Y = /^\s+/;

    function q(e) {
        return e && e.slice(0, K(e) + 1).replace(Y, "")
    }
    m.exports = q
});
var u = n((we, h) => {
    var z = y(),
        d = B(),
        J = k(),
        E = 0 / 0,
        Q = /^[-+]0x[0-9a-f]+$/i,
        Z = /^0b[01]+$/i,
        ee = /^0o[0-7]+$/i,
        te = parseInt;

    function se(e) {
        if (typeof e == "number") return e;
        if (J(e)) return E;
        if (d(e)) {
            var t = typeof e.valueOf == "function" ? e.valueOf() : e;
            e = d(t) ? t + "" : t
        }
        if (typeof e != "string") return e === 0 ? e : +e;
        e = z(e);
        var s = Z.test(e);
        return s || ee.test(e) ? te(e.slice(2), s ? 2 : 8) : Q.test(e) ? E : +e
    }
    h.exports = se
});
var S = n((Ce, b) => {
    var re = u(),
        x = 1 / 0,
        oe = 17976931348623157e292;

    function ne(e) {
        if (!e) return e === 0 ? e : 0;
        if (e = re(e), e === x || e === -x) {
            var t = e < 0 ? -1 : 1;
            return t * oe
        }
        return e === e ? e : 0
    }
    b.exports = ne
});
var I = n((Me, R) => {
    var ae = S();

    function ie(e) {
        var t = ae(e),
            s = t % 1;
        return t === t ? s ? t - s : t : 0
    }
    R.exports = ie
});
var O = n((Fe, T) => {
    var ce = l(),
        pe = H(),
        le = I(),
        ge = $();

    function _e(e, t, s) {
        e = ge(e), t = pe(t);
        var r = e.length;
        s = s === void 0 ? r : ce(le(s), 0, r);
        var o = s;
        return s -= t.length, s >= 0 && e.slice(s, o) == t
    }
    T.exports = _e
});
var M, A, c, je, F, Ge, ve, Be, ke, He, $e, Ve, Xe, We, Ke, Ye, qe, ze, Je, Qe, Ze, et, tt, st, me, rt, ot, nt, at, it, ct, pt, lt, gt, _t, mt, yt, dt, Et, ht, ut, xt, bt, St, ye, Rt, It, Tt, Ot, j, At, ft, Lt, Ut, Dt, Pt, Nt, wt, Ct, Mt, de, Ft, a, jt, Gt, vt, Bt, L, Ee, U, he, D, ue, i, P, kt, N, Ht, w, f, $t, C, xe, Vt, Xt, Wt, Kt, Yt, qt, zt, Jt, Qt, Zt, es, ts, ss, rs, os, ns, as, is, cs, ps, ls, gs, _s, ms, ys, ds, Es, be, Se, Re, hs, Ie, Te, us, xs, bs, Ss, Rs, Is, Ts, Os, As, Oe, Ae, fe, fs, Ls, Le, Us, Ds, Ps, Ns, ws, Cs, Ms, Fs, js, Gs, vs, Ue = G(() => {
    "use strict";
    M = v(O()), A = {
        year: "numeric",
        month: "short",
        day: "numeric"
    }, c = (e, t, s) => {
        if (e) {
            let r, o;
            return s ? (r = e[0].toLocaleDateString(s, A), o = e[1].toLocaleDateString(s, A)) : (r = e[0].toLocaleDateString(), o = e[1].toLocaleDateString()), r === o ? r : `${r} - ${o}`
        }
        return t("project.custom")
    }, je = {
        hour: 72,
        day: 21,
        month: 12
    }, F = "all", Ge = ["minute", "hour", "day", "month", "year"], ve = (e, t, s, r) => [{
        label: e("project.thisHour"),
        period: "1h",
        tbs: ["minute"]
    }, {
        label: e("project.today"),
        period: "today",
        tbs: ["hour"]
    }, {
        label: e("project.yesterday"),
        period: "yesterday",
        tbs: ["hour"]
    }, {
        label: e("project.last24h"),
        period: "1d",
        countDays: 1,
        tbs: ["hour"]
    }, {
        label: e("project.lastXDays", {
            amount: 7
        }),
        period: "7d",
        tbs: ["hour", "day"],
        countDays: 7
    }, {
        label: e("project.lastXWeeks", {
            amount: 4
        }),
        period: "4w",
        tbs: ["day"],
        countDays: 28
    }, {
        label: e("project.lastXMonths", {
            amount: 3
        }),
        period: "3M",
        tbs: ["month"],
        countDays: 90
    }, {
        label: e("project.lastXMonths", {
            amount: 12
        }),
        period: "12M",
        tbs: ["month"],
        countDays: 365
    }, {
        label: e("project.lastXMonths", {
            amount: 24
        }),
        period: "24M",
        tbs: ["month"]
    }, {
        label: e("project.all"),
        period: F,
        tbs: ["month", "year"]
    }, {
        label: s ? c(s, e, r) : e("project.custom"),
        dropdownLabel: e("project.custom"),
        isCustomDate: !0,
        period: "custom",
        tbs: t || ["custom"]
    }, {
        label: e("project.compare"),
        period: "compare",
        tbs: t || ["custom"]
    }], Be = (e, t, s, r) => [{
        label: e("project.thisHour"),
        period: "1h",
        tbs: ["minute"]
    }, {
        label: e("project.today"),
        period: "today",
        tbs: ["hour"]
    }, {
        label: e("project.yesterday"),
        period: "yesterday",
        tbs: ["hour"]
    }, {
        label: e("project.last24h"),
        period: "1d",
        countDays: 1,
        tbs: ["hour"]
    }, {
        label: e("project.lastXDays", {
            amount: 7
        }),
        period: "7d",
        tbs: ["hour", "day"],
        countDays: 7
    }, {
        label: e("project.lastXWeeks", {
            amount: 4
        }),
        period: "4w",
        tbs: ["day"],
        countDays: 28
    }, {
        label: e("project.lastXMonths", {
            amount: 3
        }),
        period: "3M",
        tbs: ["month"],
        countDays: 90
    }, {
        label: e("project.lastXMonths", {
            amount: 12
        }),
        period: "12M",
        tbs: ["month"],
        countDays: 365
    }, {
        label: e("project.lastXMonths", {
            amount: 24
        }),
        period: "24M",
        tbs: ["month"]
    }, {
        label: e("project.all"),
        period: F,
        tbs: ["month", "year"]
    }, {
        label: s ? c(s, e, r) : e("project.custom"),
        dropdownLabel: e("project.custom"),
        isCustomDate: !0,
        period: "custom",
        tbs: t || ["custom"]
    }], ke = ["1h", "1d", "7d", "4w", "3M", "12M", "custom", "compare"], He = (e, t, s) => [{
        label: e("project.previousPeriod"),
        period: "previous"
    }, {
        label: t ? c(t, e, s) : e("project.custom"),
        period: "custom"
    }, {
        label: e("project.disableCompare"),
        period: "disable"
    }], $e = {
        COMPARE: "compare",
        PREVIOS: "previous",
        CUSTOM: "custom",
        DISABLE: "disable"
    }, Ve = ["cc", "pg", "br", "os", "ref", "lc", "dv", "so"], Xe = ["cc", "pg", "br", "os", "ref", "lc", "dv"], We = ["cc", "pg", "br", "dv"], Ke = 24, Ye = [{
        lt: 1,
        tb: ["hour"]
    }, {
        lt: 7,
        tb: ["hour", "day"]
    }, {
        lt: 28,
        tb: ["day"]
    }, {
        lt: 366,
        tb: ["month"]
    }, {
        lt: 732,
        tb: ["month"]
    }], qe = {
        minute: "%I:%M %p",
        hour: "%I %p",
        day: "%d %b",
        month: "%b %Y",
        year: "%Y"
    }, ze = {
        minute: "%I:%M %p",
        hour: "%d %b %I %p",
        day: "%d %b",
        month: "%b %Y",
        year: "%Y"
    }, Je = {
        minute: "%H:%M",
        hour: "%d %b %H:%M",
        day: "%d %b",
        month: "%b %Y",
        year: "%Y"
    }, Qe = {
        minute: "%H:%M",
        hour: "%H:%M",
        day: "%d %b",
        month: "%b %Y",
        year: "%Y"
    }, Ze = {
        "12-hour": "12-hour",
        "24-hour": "24-hour"
    }, et = "free", tt = "https://cdn.paddle.com/paddle/paddle.js", st = 139393, me = "weekly", rt = [me, "monthly", "quarterly", "never"], ot = [{
        value: "quarterly",
        label: "Quarterly"
    }, {
        value: "monthly",
        label: "Monthly"
    }, {
        value: "weekly",
        label: "Weekly"
    }, {
        value: "never",
        label: "Never"
    }], nt = 14, at = 85, it = "| Swetrix", ct = "colour-theme", pt = "proj-view-preferences", lt = "captcha-view-preferences", gt = "Etc/GMT", _t = "https://ko-fi.com/andriir", mt = "https://addons.mozilla.org/en-US/firefox/addon/swetrix/", yt = "https://chrome.google.com/webstore/detail/swetrix/glbeclfdldjldjonfnpnembfkhphmeld", dt = "https://haveibeenpwned.com/passwords", Et = "https://www.linkedin.com/company/swetrix/", ht = "https://github.com/Swetrix", ut = "https://twitter.com/intent/user?screen_name=swetrix", xt = "@swetrix", bt = "https://discord.gg/ZVK8Tw2E8j", St = "https://stats.uptimerobot.com/33rvmiXXEz", ye = "https://swetrix.com", Rt = `${ye}/ref/`, It = "https://url.swetrix.com", Tt = "/projects/STEzHcB1rALV", Ot = "https://marketplace.swetrix.com", j = "https://docs.swetrix.com", At = "https://captcha.swetrix.com", ft = `${j}/captcha/introduction`, Lt = `${j}/affiliate/about`, Ut = "https://swetrix.com/blog/vs-google-analytics/", Dt = "https://swetrix.com/blog/vs-cloudflare-analytics/", Pt = "https://swetrix.com/blog/vs-simple-analytics/", Nt = "affiliate", wt = 30, Ct = 20, Mt = 30, de = .2, Ft = "REFERRAL_DISCOUNT", a = typeof window != "undefined" && typeof document != "undefined", jt = ["light", "dark"], Gt = "contact@swetrix.com", vt = "security@swetrix.com", Bt = 4e4, Ee = a ? (L = window.REMIX_ENV) == null ? void 0 : L.STAGING : process.env.STAGING, he = a ? (U = window.REMIX_ENV) == null ? void 0 : U.API_STAGING_URL : process.env.API_STAGING_URL, ue = a ? (D = window.REMIX_ENV) == null ? void 0 : D.API_URL : process.env.API_URL, i = Ee ? he : ue, kt = a ? (P = window.REMIX_ENV) == null ? void 0 : P.AIAPI_URL : process.env.AIAPI_URL, Ht = a ? (N = window.REMIX_ENV) == null ? void 0 : N.CDN_URL : process.env.CDN_URL, f = a ? (w = window.REMIX_ENV) == null ? void 0 : w.NODE_ENV : "production", $t = !f || f === "development", xe = Boolean(a ? (C = window.REMIX_ENV) == null ? void 0 : C.SELFHOSTED : process.env.SELFHOSTED), Vt = e => `${(0,M.default)(i,"/")?i.slice(0,-1):i}/v1/og-image?title=${e}`, Xt = (e, t, s, r) => `${e}${t}${s}${r?JSON.stringify(r):""}}`, Wt = (e, t, s) => `${e}${t}captcha${s?JSON.stringify(s):""}}`, Kt = (e, t, s, r) => `${e}${t}${s}forecast${r?JSON.stringify(r):""}`, Yt = (e, t, s, r, o) => `cst${e}${t}${s}-${r}${o?JSON.stringify(o):""}}`, qt = (e, t, s, r) => `${e}-${t}-${s}perf${r?JSON.stringify(r):""}`, zt = (e, t, s) => `${e}${t}userflow${s?JSON.stringify(s):""}`, Jt = (e, t, s) => `${e}${t}${s}funnels`, Qt = (e, t, s, r) => `${e}${t}${s}${r}funnels`, Zt = "gdpr_request", es = "confirmation_timeout", ts = "low_events_warning", ss = "access_token", rs = "refresh_token", os = "projects_protected", ns = "is-active-compare", as = 2, is = 10, cs = ["en", "uk", "pl", "de", "sv", "el", "ru", "hi", "zh"], ps = {
        en: "en-GB",
        uk: "uk-UA",
        pl: "pl-PL",
        de: "de-DE",
        sv: "sv-SE",
        el: "el-GR",
        ru: "ru-RU",
        hi: "hi-IN",
        zh: "zh-Hans"
    }, ls = "en", gs = {
        en: "English",
        uk: "\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430",
        pl: "Polski",
        de: "Deutsch",
        sv: "Svenska",
        el: "\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC",
        ru: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439",
        hi: "\u0939\u093F\u0928\u094D\u0926\u0940",
        zh: "\u4E2D\u6587\u7B80\u4F53"
    }, _s = {
        en: "GB",
        uk: "UA",
        pl: "PL",
        de: "DE",
        sv: "SE",
        el: "GR",
        ru: "RU",
        hi: "IN",
        zh: "CN"
    }, ms = {
        zh: "zh-Hans",
        uk: "ru",
        el: "en"
    }, ys = ["admin", "viewer"], ds = {
        name: "Viewer",
        role: "viewer",
        description: "Can view the project"
    }, Es = {
        name: "Admin",
        role: "admin",
        description: "Can manage the project"
    }, be = "owned", Se = "shared", Re = "captcha", hs = [{
        name: be,
        label: "profileSettings.owned"
    }, {
        name: Se,
        label: "profileSettings.shared"
    }, {
        name: Re,
        label: "profileSettings.captcha"
    }], Ie = {
        traffic: "traffic",
        performance: "performance",
        funnels: "funnels",
        sessions: "sessions"
    }, Te = {
        traffic: "traffic",
        performance: "performance",
        funnels: "funnels",
        sessions: "sessions",
        alerts: "alerts"
    }, us = xe ? Ie : Te, xs = {
        owned: "owned",
        shared: "shared",
        captcha: "captcha"
    }, bs = {
        PAGE_VIEWS: "page_views",
        UNIQUE_PAGE_VIEWS: "unique_page_views",
        ONLINE_USERS: "online_users",
        CUSTOM_EVENTS: "custom_events"
    }, Ss = {
        GREATER_THAN: "greater_than",
        GREATER_EQUAL_THAN: "greater_equal_than",
        LESS_THAN: "less_than",
        LESS_EQUAL_THAN: "less_equal_than"
    }, Rs = {
        LAST_15_MINUTES: "last_15_minutes",
        LAST_30_MINUTES: "last_30_minutes",
        LAST_1_HOUR: "last_1_hour",
        LAST_4_HOURS: "last_4_hours",
        LAST_24_HOURS: "last_24_hours",
        LAST_48_HOURS: "last_48_hours"
    }, Is = 48, Ts = 11, Os = {
        classic: "classic",
        christmas: "christmas"
    }, As = 100, Oe = {
        symbol: "\u20AC",
        code: "EUR"
    }, Ae = {
        symbol: "$",
        code: "USD"
    }, fe = {
        symbol: "\xA3",
        code: "GBP"
    }, fs = {
        EUR: Oe,
        USD: Ae,
        GBP: fe
    }, Ls = "5% + 50\xA2", Le = e => {
        let t = .05 * e + .5;
        return e - t
    }, Us = e => {
        let t = Le(e);
        return de * t
    }, Ds = {
        monthly: "monthly",
        yearly: "yearly"
    }, Ps = {
        none: {
            index: 0,
            planCode: "none",
            monthlyUsageLimit: 0,
            legacy: !1,
            price: {
                USD: {
                    monthly: 0,
                    yearly: 0
                },
                EUR: {
                    monthly: 0,
                    yearly: 0
                },
                GBP: {
                    monthly: 0,
                    yearly: 0
                }
            }
        },
        free: {
            index: 0,
            planCode: "free",
            monthlyUsageLimit: 5e3,
            legacy: !0,
            price: {
                USD: {
                    monthly: 0,
                    yearly: 0
                },
                EUR: {
                    monthly: 0,
                    yearly: 0
                },
                GBP: {
                    monthly: 0,
                    yearly: 0
                }
            }
        },
        trial: {
            index: 0,
            planCode: "trial",
            monthlyUsageLimit: 1e5,
            legacy: !1,
            price: {
                USD: {
                    monthly: 0,
                    yearly: 0
                },
                EUR: {
                    monthly: 0,
                    yearly: 0
                },
                GBP: {
                    monthly: 0,
                    yearly: 0
                }
            }
        },
        hobby: {
            index: 1,
            planCode: "hobby",
            monthlyUsageLimit: 1e4,
            legacy: !1,
            price: {
                USD: {
                    monthly: 5,
                    yearly: 50
                },
                EUR: {
                    monthly: 5,
                    yearly: 50
                },
                GBP: {
                    monthly: 4,
                    yearly: 40
                }
            },
            pid: 813694,
            ypid: 813695
        },
        freelancer: {
            index: 2,
            planCode: "freelancer",
            monthlyUsageLimit: 1e5,
            legacy: !1,
            price: {
                USD: {
                    monthly: 15,
                    yearly: 150
                },
                EUR: {
                    monthly: 15,
                    yearly: 150
                },
                GBP: {
                    monthly: 14,
                    yearly: 140
                }
            },
            pid: 752316,
            ypid: 776469
        },
        "200k": {
            index: 3,
            planCode: "200k",
            monthlyUsageLimit: 2e5,
            legacy: !1,
            price: {
                USD: {
                    monthly: 25,
                    yearly: 250
                },
                EUR: {
                    monthly: 25,
                    yearly: 250
                },
                GBP: {
                    monthly: 23,
                    yearly: 230
                }
            },
            pid: 854654,
            ypid: 854655
        },
        "500k": {
            index: 4,
            planCode: "500k",
            monthlyUsageLimit: 5e5,
            legacy: !1,
            price: {
                USD: {
                    monthly: 45,
                    yearly: 450
                },
                EUR: {
                    monthly: 45,
                    yearly: 450
                },
                GBP: {
                    monthly: 40,
                    yearly: 400
                }
            },
            pid: 854656,
            ypid: 854657
        },
        startup: {
            index: 5,
            planCode: "startup",
            monthlyUsageLimit: 1e6,
            legacy: !1,
            price: {
                USD: {
                    monthly: 59,
                    yearly: 590
                },
                EUR: {
                    monthly: 57,
                    yearly: 570
                },
                GBP: {
                    monthly: 49,
                    yearly: 490
                }
            },
            pid: 752317,
            ypid: 776470
        },
        "2m": {
            index: 6,
            planCode: "2m",
            monthlyUsageLimit: 2e6,
            legacy: !1,
            price: {
                USD: {
                    monthly: 84,
                    yearly: 840
                },
                EUR: {
                    monthly: 84,
                    yearly: 840
                },
                GBP: {
                    monthly: 74,
                    yearly: 740
                }
            },
            pid: 854663,
            ypid: 854664
        },
        enterprise: {
            index: 7,
            planCode: "enterprise",
            monthlyUsageLimit: 5e6,
            legacy: !1,
            price: {
                USD: {
                    monthly: 110,
                    yearly: 1100
                },
                EUR: {
                    monthly: 110,
                    yearly: 1100
                },
                GBP: {
                    monthly: 95,
                    yearly: 950
                }
            },
            pid: 752318,
            ypid: 776471
        },
        "10m": {
            index: 8,
            planCode: "10m",
            monthlyUsageLimit: 1e7,
            legacy: !1,
            price: {
                USD: {
                    monthly: 150,
                    yearly: 1500
                },
                EUR: {
                    monthly: 150,
                    yearly: 1500
                },
                GBP: {
                    monthly: 130,
                    yearly: 1300
                }
            },
            pid: 854665,
            ypid: 854666
        }
    }, Ns = ["hobby", "freelancer", "200k", "500k", "startup", "2m", "enterprise", "10m"], ws = 14, Cs = Object.freeze({
        line: "line",
        bar: "bar"
    }), Ms = Object.freeze({
        LINK: "link",
        AUTH: "auth"
    }), Fs = Object.freeze({
        GOOGLE: "google",
        GITHUB: "github"
    }), js = {
        Chrome: "/assets/browsers/chrome_48x48.png",
        Firefox: "/assets/browsers/firefox_48x48.png",
        Safari: "/assets/browsers/safari_48x48.png",
        "Mobile Safari": "/assets/browsers/safari-ios_48x48.png",
        Edge: "/assets/browsers/edge_48x48.png",
        "Samsung Browser": "/assets/browsers/samsung-internet_48x48.png",
        "Chrome WebView": "/assets/browsers/android-webview_48x48.png",
        Opera: "/assets/browsers/opera_48x48.png",
        GSA: "/assets/browsers/chrome_48x48.png",
        WebKit: "/assets/browsers/safari_48x48.png",
        Yandex: "/assets/browsers/yandex_48x48.png",
        "Android Browser": "/assets/browsers/android-webview_48x48.png",
        Silk: "/assets/browsers/silk_48x48.png",
        "Opera Touch": "/assets/browsers/opera-touch_48x48.png",
        Electron: "/assets/browsers/electron_48x48.png",
        "Coc Coc": "/assets/browsers/coc-coc_48x48.png",
        SeaMonkey: "/assets/browsers/seamonkey_48x48.png",
        PaleMoon: "/assets/browsers/pale-moon_48x48.png",
        Falkon: "/assets/browsers/falkon_48x48.png",
        Chromium: "/assets/browsers/chromium_48x48.png",
        Vivaldi: "/assets/browsers/vivaldi_48x48.png",
        Puffin: "/assets/browsers/puffin_48x48.png",
        "Opera Mini": "/assets/browsers/opera-mini_48x48.png",
        Mozilla: "/assets/browsers/firefox_48x48.png",
        Midori: "/assets/browsers/midori_48x48.png",
        Maxthon: "/assets/browsers/maxthon_48x48.png",
        Konqueror: "/assets/browsers/konqueror_48x48.png",
        Epiphany: "/assets/browsers/web_48x48.png",
        Fennec: "/assets/browsers/firefox_48x48.png",
        Basilisk: "/assets/browsers/basilisk_48x48.png",
        DuckDuckGo: "/assets/duckduckgo.png",
        Facebook: "/assets/facebook.svg",
        MetaSr: "/assets/facebook.svg",
        Instagram: "/assets/instagram.svg",
        LinkedIn: "/assets/linkedin.svg"
    }, Gs = {
        Windows: "assets/os/WIN.png",
        Android: "assets/os/AND.png",
        iOS: "assets/os/apple.svg",
        "Mac OS": "assets/os/apple.svg",
        Mac: "assets/os/apple.svg",
        Linux: "assets/os/LIN.png",
        Ubuntu: "assets/os/UBT.png",
        "Chromium OS": "assets/os/COS.png",
        Fedora: "assets/os/FED.png",
        HarmonyOS: "assets/os/HAR.png",
        PlayStation: "assets/os/PS3.png",
        FreeBSD: "assets/os/BSD.png",
        Tizen: "assets/os/TIZ.png",
        OpenBSD: "assets/os/OBS.png",
        Chromecast: "assets/os/COS.png",
        Kubuntu: "assets/os/KBT.png",
        Xbox: "assets/os/XBX.png",
        NetBSD: "assets/os/NBS.png",
        Nintendo: "assets/os/WII.png",
        KAIOS: "assets/os/KOS.png",
        BSD: "assets/os/BSD.png",
        "Windows Phone": "assets/os/WIN.png"
    }, vs = {
        iOS: "assets/os/apple-dark.svg",
        "Mac OS": "assets/os/apple-dark.svg",
        Mac: "assets/os/apple-dark.svg"
    }
});
export {
    u as a, I as b, l as c, O as d, je as e, F as f, Ge as g, ve as h, Be as i, ke as j, He as k, $e as l, Ve as m, Xe as n, We as o, Ke as p, Ye as q, qe as r, ze as s, Je as t, Qe as u, Ze as v, et as w, tt as x, st as y, me as z, rt as A, ot as B, nt as C, at as D, it as E, ct as F, pt as G, lt as H, gt as I, _t as J, mt as K, yt as L, dt as M, Et as N, ht as O, ut as P, xt as Q, bt as R, St as S, ye as T, Rt as U, It as V, Tt as W, Ot as X, j as Y, At as Z, ft as _, Lt as $, Ut as aa, Dt as ba, Pt as ca, Nt as da, wt as ea, Ct as fa, Mt as ga, de as ha, Ft as ia, a as ja, jt as ka, Gt as la, vt as ma, Bt as na, i as oa, kt as pa, Ht as qa, $t as ra, xe as sa, Vt as ta, Xt as ua, Wt as va, Kt as wa, Yt as xa, qt as ya, zt as za, Jt as Aa, Qt as Ba, Zt as Ca, es as Da, ts as Ea, ss as Fa, rs as Ga, os as Ha, ns as Ia, as as Ja, is as Ka, cs as La, ps as Ma, ls as Na, gs as Oa, _s as Pa, ms as Qa, ys as Ra, ds as Sa, Es as Ta, be as Ua, Se as Va, Re as Wa, hs as Xa, us as Ya, xs as Za, bs as _a, Ss as $a, Rs as ab, Is as bb, Ts as cb, Os as db, As as eb, fs as fb, Ls as gb, Us as hb, Ds as ib, Ps as jb, Ns as kb, ws as lb, Cs as mb, Fs as nb, js as ob, Gs as pb, vs as qb, Ue as rb
};