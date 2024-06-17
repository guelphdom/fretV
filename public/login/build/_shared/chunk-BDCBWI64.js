import {
    rb as O,
    sa as p
} from "/build/_shared/chunk-MGB3JPCV.js";
import {
    c as E,
    e as L
} from "/build/_shared/chunk-ADMCF34Z.js";
var I = E((l, k) => {
    (function(a, s) {
        typeof l == "object" && typeof k < "u" ? s(l) : typeof define == "function" && define.amd ? define(["exports"], s) : s((a = typeof globalThis < "u" ? globalThis : a || self).swetrix = {})
    })(l, function(a) {
        "use strict";

        function s(t) {
            return (t = location.search.match(t)) && t[2] || void 0
        }

        function d() {
            return navigator.languages !== void 0 ? navigator.languages[0] : navigator.language
        }

        function g() {
            try {
                return Intl.DateTimeFormat().resolvedOptions().timeZone
            } catch {}
        }

        function h() {
            return document.referrer || void 0
        }

        function f() {
            return s(T)
        }

        function v() {
            return s(N)
        }

        function m() {
            return s(P)
        }

        function w(t) {
            var e, n = location.pathname || "";
            return t.hash && (n += -1 < (e = location.hash.indexOf("?")) ? location.hash.substring(0, e) : location.hash), t.search && (e = location.hash.indexOf("?"), n += location.search || (-1 < e ? location.hash.substring(e) : "")), n
        }
        var b = function() {
                return (b = Object.assign || function(t) {
                    for (var e, n = 1, i = arguments.length; n < i; n++)
                        for (var r in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return t
                }).apply(this, arguments)
            },
            T = /[?&](ref|source|utm_source)=([^?&]+)/,
            P = /[?&](utm_campaign)=([^?&]+)/,
            N = /[?&](utm_medium)=([^?&]+)/,
            y = {
                stop: function() {}
            },
            C = (o.prototype.track = function(t) {
                this.canTrack() && (t = b({
                    pid: this.projectID,
                    pg: this.activePage,
                    lc: d(),
                    tz: g(),
                    ref: h(),
                    so: f(),
                    me: v(),
                    ca: m()
                }, t), this.sendRequest("custom", t))
            }, o.prototype.trackPageViews = function(t) {
                var e, n, i;
                return this.canTrack() ? (this.pageData || ((this.pageViewsOptions = t) != null && t.unique || (n = setInterval(this.trackPathChange, 2e3)), t != null && t.noHeartbeat || (setTimeout(this.heartbeat, 3e3), e = setInterval(this.heartbeat, 28e3)), i = w({
                    hash: t ? .hash,
                    search: t ? .search
                }), this.pageData = {
                    path: i,
                    actions: {
                        stop: function() {
                            clearInterval(n), clearInterval(e)
                        }
                    }
                }, this.trackPage(i, t ? .unique)), this.pageData.actions) : y
            }, o.prototype.getPerformanceStats = function() {
                var t;
                return this.canTrack() && !this.perfStatsCollected && (t = window.performance) != null && t.getEntriesByType && (t = window.performance.getEntriesByType("navigation")[0]) ? (this.perfStatsCollected = !0, {
                    dns: t.domainLookupEnd - t.domainLookupStart,
                    tls: t.secureConnectionStart ? t.requestStart - t.secureConnectionStart : 0,
                    conn: t.secureConnectionStart ? t.secureConnectionStart - t.connectStart : t.connectEnd - t.connectStart,
                    response: t.responseEnd - t.responseStart,
                    render: t.domComplete - t.domContentLoadedEventEnd,
                    dom_load: t.domContentLoadedEventEnd - t.responseEnd,
                    page_load: t.loadEventStart,
                    ttfb: t.responseStart - t.requestStart
                }) : {}
            }, o.prototype.heartbeat = function() {
                var t;
                ((t = this.pageViewsOptions) != null && t.heartbeatOnBackground || document.visibilityState !== "hidden") && (t = {
                    pid: this.projectID
                }, this.sendRequest("hb", t))
            }, o.prototype.checkIgnore = function(t) {
                var e, n = (e = this.pageViewsOptions) == null ? void 0 : e.ignore;
                if (Array.isArray(n)) {
                    for (var i = 0; i < n.length; ++i)
                        if (n[i] === t || n[i] instanceof RegExp && n[i].test(t)) return !0
                }
                return !1
            }, o.prototype.trackPathChange = function() {
                var t;
                this.pageData && (t = w({
                    hash: (t = this.pageViewsOptions) == null ? void 0 : t.hash,
                    search: (t = this.pageViewsOptions) == null ? void 0 : t.search
                }), this.pageData.path !== t) && this.trackPage(t, !1)
            }, o.prototype.getPreviousPage = function() {
                var t;
                if (this.activePage) return (i = this.checkIgnore(this.activePage)) && (e = this.pageViewsOptions) != null && e.doNotAnonymise || i ? null : this.activePage;
                if (typeof URL == "function") {
                    var e = h();
                    if (!e) return null;
                    var n = location.host;
                    try {
                        var i, r = new URL(e),
                            u = r.host,
                            S = r.pathname;
                        return n !== u || (i = this.checkIgnore(S)) && (t = this.pageViewsOptions) != null && t.doNotAnonymise || i ? null : S
                    } catch {}
                }
                return null
            }, o.prototype.trackPage = function(t, e) {
                var n, i, r, u;
                e === void 0 && (e = !1), this.pageData && (this.pageData.path = t, (i = this.checkIgnore(t)) && (r = this.pageViewsOptions) != null && r.doNotAnonymise || (r = this.getPerformanceStats(), (n = this.pageViewsOptions) != null && n.noUserFlow || (u = this.getPreviousPage()), this.activePage = t, this.submitPageView(i ? null : t, u, e, r)))
            }, o.prototype.submitPageView = function(t, e, n, i) {
                n = {
                    pid: this.projectID,
                    lc: d(),
                    tz: g(),
                    ref: h(),
                    so: f(),
                    me: v(),
                    ca: m(),
                    unique: n,
                    pg: t,
                    perf: i,
                    prev: e
                }, this.sendRequest("", n)
            }, o.prototype.debug = function(t) {
                var e;
                (e = this.options) != null && e.debug && console.log("[Swetrix]", t)
            }, o.prototype.canTrack = function() {
                var t;
                return (t = this.options) != null && t.disabled ? (this.debug("Tracking disabled: the 'disabled' setting is set to true."), !1) : typeof window > "u" ? (this.debug("Tracking disabled: script does not run in browser environment."), !1) : (t = this.options) != null && t.respectDNT && ((t = window.navigator) == null ? void 0 : t.doNotTrack) === "1" ? (this.debug("Tracking disabled: respecting user's 'Do Not Track' preference."), !1) : !(!((t = this.options) != null && t.debug || location ? .hostname !== "localhost" && location ? .hostname !== "127.0.0.1" && location ? .hostname !== "") || navigator != null && navigator.webdriver && (this.debug("Tracking disabled: navigation is automated by WebDriver."), 1))
            }, o.prototype.sendRequest = function(t, e) {
                var n = ((n = this.options) == null ? void 0 : n.apiURL) || "https://api.swetrix.com/log",
                    i = new XMLHttpRequest;
                i.open("POST", "".concat(n, "/").concat(t), !0), i.setRequestHeader("Content-Type", "application/json"), i.send(JSON.stringify(e))
            }, o);

        function o(t, e) {
            this.projectID = t, this.options = e, this.pageData = null, this.pageViewsOptions = null, this.perfStatsCollected = !1, this.activePage = null, this.trackPathChange = this.trackPathChange.bind(this), this.heartbeat = this.heartbeat.bind(this)
        }
        a.LIB_INSTANCE = null, a.init = function(t, e) {
            return a.LIB_INSTANCE || (a.LIB_INSTANCE = new C(t, e)), a.LIB_INSTANCE
        }, a.track = function(t) {
            a.LIB_INSTANCE && a.LIB_INSTANCE.track(t)
        }, a.trackPageview = function(t, e, n) {
            a.LIB_INSTANCE && a.LIB_INSTANCE.submitPageView(t, e || null, Boolean(n), {})
        }, a.trackViews = function(t) {
            return new Promise(function(e) {
                a.LIB_INSTANCE ? typeof document > "u" || document.readyState === "complete" ? e(a.LIB_INSTANCE.trackPageViews(t)) : window.addEventListener("load", function() {
                    e(a.LIB_INSTANCE.trackPageViews(t))
                }) : e(y)
            })
        }, Object.defineProperty(a, "__esModule", {
            value: !0
        })
    })
});
var c = L(I());
O();
var V = "STEzHcB1rALV";
c.init(V);
var B = () => {
        p || c.trackViews({
            ignore: [/^\/projects\/(?!new$)[^/]+$/i, /^\/projects\/settings/i, /^\/verify/i, /^\/password-reset/i, /^\/change-email/i, /^\/share/i, /^\/captchas\/(?!new$)[^/]+$/i, /^\/captchas\/settings/i],
            heartbeatOnBackground: !0
        })
    },
    D = (a, s = !1) => {
        p || c.track({
            ev: a,
            unique: s
        })
    };
export {
    B as a, D as b
};