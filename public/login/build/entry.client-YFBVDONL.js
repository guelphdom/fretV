import {
    a as ce
} from "/build/_shared/chunk-LDHYVMOY.js";
import {
    a as $
} from "/build/_shared/chunk-W2XRJTGN.js";
import {
    a as ue,
    b as ze
} from "/build/_shared/chunk-GEJCALAD.js";
import "/build/_shared/chunk-7XDELMZB.js";
import "/build/_shared/chunk-MSGER76V.js";
import "/build/_shared/chunk-Z3FUFQEO.js";
import {
    a as Ne
} from "/build/_shared/chunk-NGIKGSHE.js";
import {
    m as ae
} from "/build/_shared/chunk-TF7C7MH2.js";
import {
    c as se,
    f as fe
} from "/build/_shared/chunk-DPI6PCVH.js";
import "/build/_shared/chunk-MGB3JPCV.js";
import "/build/_shared/chunk-PIJMKZDS.js";
import "/build/_shared/chunk-5YEMDBLX.js";
import "/build/_shared/chunk-KKTF54FB.js";
import "/build/_shared/chunk-2SDAKG4K.js";
import {
    a as Xe,
    b as le
} from "/build/_shared/chunk-KO3OK2JV.js";
import {
    a as ie,
    c as W,
    e as x
} from "/build/_shared/chunk-ADMCF34Z.js";
var he = W(Q => {
    "use strict";
    var de = Ne();
    Q.createRoot = de.createRoot, Q.hydrateRoot = de.hydrateRoot;
    var yt
});
var Oe = W((E, _e) => {
    var I = typeof globalThis < "u" && globalThis || typeof self < "u" && self || typeof globalThis < "u" && globalThis,
        C = function() {
            function i() {
                this.fetch = !1, this.DOMException = I.DOMException
            }
            return i.prototype = I, new i
        }();
    (function(i) {
        var t = function(e) {
            var r = typeof i < "u" && i || typeof self < "u" && self || typeof r < "u" && r,
                o = {
                    searchParams: "URLSearchParams" in r,
                    iterable: "Symbol" in r && "iterator" in Symbol,
                    blob: "FileReader" in r && "Blob" in r && function() {
                        try {
                            return new Blob, !0
                        } catch {
                            return !1
                        }
                    }(),
                    formData: "FormData" in r,
                    arrayBuffer: "ArrayBuffer" in r
                };

            function s(n) {
                return n && DataView.prototype.isPrototypeOf(n)
            }
            if (o.arrayBuffer) var f = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                c = ArrayBuffer.isView || function(n) {
                    return n && f.indexOf(Object.prototype.toString.call(n)) > -1
                };

            function h(n) {
                if (typeof n != "string" && (n = String(n)), /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(n) || n === "") throw new TypeError('Invalid character in header field name: "' + n + '"');
                return n.toLowerCase()
            }

            function m(n) {
                return typeof n != "string" && (n = String(n)), n
            }

            function y(n) {
                var a = {
                    next: function() {
                        var l = n.shift();
                        return {
                            done: l === void 0,
                            value: l
                        }
                    }
                };
                return o.iterable && (a[Symbol.iterator] = function() {
                    return a
                }), a
            }

            function u(n) {
                this.map = {}, n instanceof u ? n.forEach(function(a, l) {
                    this.append(l, a)
                }, this) : Array.isArray(n) ? n.forEach(function(a) {
                    this.append(a[0], a[1])
                }, this) : n && Object.getOwnPropertyNames(n).forEach(function(a) {
                    this.append(a, n[a])
                }, this)
            }
            u.prototype.append = function(n, a) {
                n = h(n), a = m(a);
                var l = this.map[n];
                this.map[n] = l ? l + ", " + a : a
            }, u.prototype.delete = function(n) {
                delete this.map[h(n)]
            }, u.prototype.get = function(n) {
                return n = h(n), this.has(n) ? this.map[n] : null
            }, u.prototype.has = function(n) {
                return this.map.hasOwnProperty(h(n))
            }, u.prototype.set = function(n, a) {
                this.map[h(n)] = m(a)
            }, u.prototype.forEach = function(n, a) {
                for (var l in this.map) this.map.hasOwnProperty(l) && n.call(a, this.map[l], l, this)
            }, u.prototype.keys = function() {
                var n = [];
                return this.forEach(function(a, l) {
                    n.push(l)
                }), y(n)
            }, u.prototype.values = function() {
                var n = [];
                return this.forEach(function(a) {
                    n.push(a)
                }), y(n)
            }, u.prototype.entries = function() {
                var n = [];
                return this.forEach(function(a, l) {
                    n.push([l, a])
                }), y(n)
            }, o.iterable && (u.prototype[Symbol.iterator] = u.prototype.entries);

            function v(n) {
                if (n.bodyUsed) return Promise.reject(new TypeError("Already read"));
                n.bodyUsed = !0
            }

            function b(n) {
                return new Promise(function(a, l) {
                    n.onload = function() {
                        a(n.result)
                    }, n.onerror = function() {
                        l(n.error)
                    }
                })
            }

            function q(n) {
                var a = new FileReader,
                    l = b(a);
                return a.readAsArrayBuffer(n), l
            }

            function z(n) {
                var a = new FileReader,
                    l = b(a);
                return a.readAsText(n), l
            }

            function G(n) {
                for (var a = new Uint8Array(n), l = new Array(a.length), p = 0; p < a.length; p++) l[p] = String.fromCharCode(a[p]);
                return l.join("")
            }

            function ne(n) {
                if (n.slice) return n.slice(0);
                var a = new Uint8Array(n.byteLength);
                return a.set(new Uint8Array(n)), a.buffer
            }

            function oe() {
                return this.bodyUsed = !1, this._initBody = function(n) {
                    this.bodyUsed = this.bodyUsed, this._bodyInit = n, n ? typeof n == "string" ? this._bodyText = n : o.blob && Blob.prototype.isPrototypeOf(n) ? this._bodyBlob = n : o.formData && FormData.prototype.isPrototypeOf(n) ? this._bodyFormData = n : o.searchParams && URLSearchParams.prototype.isPrototypeOf(n) ? this._bodyText = n.toString() : o.arrayBuffer && o.blob && s(n) ? (this._bodyArrayBuffer = ne(n.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : o.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(n) || c(n)) ? this._bodyArrayBuffer = ne(n) : this._bodyText = n = Object.prototype.toString.call(n) : this._bodyText = "", this.headers.get("content-type") || (typeof n == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : o.searchParams && URLSearchParams.prototype.isPrototypeOf(n) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                }, o.blob && (this.blob = function() {
                    var n = v(this);
                    if (n) return n;
                    if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                    if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                    if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                    return Promise.resolve(new Blob([this._bodyText]))
                }, this.arrayBuffer = function() {
                    if (this._bodyArrayBuffer) {
                        var n = v(this);
                        return n || (ArrayBuffer.isView(this._bodyArrayBuffer) ? Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset, this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength)) : Promise.resolve(this._bodyArrayBuffer))
                    } else return this.blob().then(q)
                }), this.text = function() {
                    var n = v(this);
                    if (n) return n;
                    if (this._bodyBlob) return z(this._bodyBlob);
                    if (this._bodyArrayBuffer) return Promise.resolve(G(this._bodyArrayBuffer));
                    if (this._bodyFormData) throw new Error("could not read FormData body as text");
                    return Promise.resolve(this._bodyText)
                }, o.formData && (this.formData = function() {
                    return this.text().then(Me)
                }), this.json = function() {
                    return this.text().then(JSON.parse)
                }, this
            }
            var Ie = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

            function Ce(n) {
                var a = n.toUpperCase();
                return Ie.indexOf(a) > -1 ? a : n
            }

            function O(n, a) {
                if (!(this instanceof O)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
                a = a || {};
                var l = a.body;
                if (n instanceof O) {
                    if (n.bodyUsed) throw new TypeError("Already read");
                    this.url = n.url, this.credentials = n.credentials, a.headers || (this.headers = new u(n.headers)), this.method = n.method, this.mode = n.mode, this.signal = n.signal, !l && n._bodyInit != null && (l = n._bodyInit, n.bodyUsed = !0)
                } else this.url = String(n);
                if (this.credentials = a.credentials || this.credentials || "same-origin", (a.headers || !this.headers) && (this.headers = new u(a.headers)), this.method = Ce(a.method || this.method || "GET"), this.mode = a.mode || this.mode || null, this.signal = a.signal || this.signal, this.referrer = null, (this.method === "GET" || this.method === "HEAD") && l) throw new TypeError("Body not allowed for GET or HEAD requests");
                if (this._initBody(l), (this.method === "GET" || this.method === "HEAD") && (a.cache === "no-store" || a.cache === "no-cache")) {
                    var p = /([?&])_=[^&]*/;
                    if (p.test(this.url)) this.url = this.url.replace(p, "$1_=" + new Date().getTime());
                    else {
                        var g = /\?/;
                        this.url += (g.test(this.url) ? "&" : "?") + "_=" + new Date().getTime()
                    }
                }
            }
            O.prototype.clone = function() {
                return new O(this, {
                    body: this._bodyInit
                })
            };

            function Me(n) {
                var a = new FormData;
                return n.trim().split("&").forEach(function(l) {
                    if (l) {
                        var p = l.split("="),
                            g = p.shift().replace(/\+/g, " "),
                            d = p.join("=").replace(/\+/g, " ");
                        a.append(decodeURIComponent(g), decodeURIComponent(d))
                    }
                }), a
            }

            function He(n) {
                var a = new u,
                    l = n.replace(/\r?\n[\t ]+/g, " ");
                return l.split("\r").map(function(p) {
                    return p.indexOf(`
`) === 0 ? p.substr(1, p.length) : p
                }).forEach(function(p) {
                    var g = p.split(":"),
                        d = g.shift().trim();
                    if (d) {
                        var B = g.join(":").trim();
                        a.append(d, B)
                    }
                }), a
            }
            oe.call(O.prototype);

            function S(n, a) {
                if (!(this instanceof S)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
                a || (a = {}), this.type = "default", this.status = a.status === void 0 ? 200 : a.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = a.statusText === void 0 ? "" : "" + a.statusText, this.headers = new u(a.headers), this.url = a.url || "", this._initBody(n)
            }
            oe.call(S.prototype), S.prototype.clone = function() {
                return new S(this._bodyInit, {
                    status: this.status,
                    statusText: this.statusText,
                    headers: new u(this.headers),
                    url: this.url
                })
            }, S.error = function() {
                var n = new S(null, {
                    status: 0,
                    statusText: ""
                });
                return n.type = "error", n
            };
            var je = [301, 302, 303, 307, 308];
            S.redirect = function(n, a) {
                if (je.indexOf(a) === -1) throw new RangeError("Invalid status code");
                return new S(null, {
                    status: a,
                    headers: {
                        location: n
                    }
                })
            }, e.DOMException = r.DOMException;
            try {
                new e.DOMException
            } catch {
                e.DOMException = function(a, l) {
                    this.message = a, this.name = l;
                    var p = Error(a);
                    this.stack = p.stack
                }, e.DOMException.prototype = Object.create(Error.prototype), e.DOMException.prototype.constructor = e.DOMException
            }

            function V(n, a) {
                return new Promise(function(l, p) {
                    var g = new O(n, a);
                    if (g.signal && g.signal.aborted) return p(new e.DOMException("Aborted", "AbortError"));
                    var d = new XMLHttpRequest;

                    function B() {
                        d.abort()
                    }
                    d.onload = function() {
                        var w = {
                            status: d.status,
                            statusText: d.statusText,
                            headers: He(d.getAllResponseHeaders() || "")
                        };
                        w.url = "responseURL" in d ? d.responseURL : w.headers.get("X-Request-URL");
                        var U = "response" in d ? d.response : d.responseText;
                        setTimeout(function() {
                            l(new S(U, w))
                        }, 0)
                    }, d.onerror = function() {
                        setTimeout(function() {
                            p(new TypeError("Network request failed"))
                        }, 0)
                    }, d.ontimeout = function() {
                        setTimeout(function() {
                            p(new TypeError("Network request failed"))
                        }, 0)
                    }, d.onabort = function() {
                        setTimeout(function() {
                            p(new e.DOMException("Aborted", "AbortError"))
                        }, 0)
                    };

                    function Fe(w) {
                        try {
                            return w === "" && r.location.href ? r.location.href : w
                        } catch {
                            return w
                        }
                    }
                    d.open(g.method, Fe(g.url), !0), g.credentials === "include" ? d.withCredentials = !0 : g.credentials === "omit" && (d.withCredentials = !1), "responseType" in d && (o.blob ? d.responseType = "blob" : o.arrayBuffer && g.headers.get("Content-Type") && g.headers.get("Content-Type").indexOf("application/octet-stream") !== -1 && (d.responseType = "arraybuffer")), a && typeof a.headers == "object" && !(a.headers instanceof u) ? Object.getOwnPropertyNames(a.headers).forEach(function(w) {
                        d.setRequestHeader(w, m(a.headers[w]))
                    }) : g.headers.forEach(function(w, U) {
                        d.setRequestHeader(U, w)
                    }), g.signal && (g.signal.addEventListener("abort", B), d.onreadystatechange = function() {
                        d.readyState === 4 && g.signal.removeEventListener("abort", B)
                    }), d.send(typeof g._bodyInit > "u" ? null : g._bodyInit)
                })
            }
            return V.polyfill = !0, r.fetch || (r.fetch = V, r.Headers = u, r.Request = O, r.Response = S), e.Headers = u, e.Request = O, e.Response = S, e.fetch = V, e
        }({})
    })(C);
    C.fetch.ponyfill = !0;
    delete C.fetch.polyfill;
    var T = I.fetch ? I : C;
    E = T.fetch;
    E.default = T.fetch;
    E.fetch = T.fetch;
    E.Headers = T.Headers;
    E.Request = T.Request;
    E.Response = T.Response;
    _e.exports = E
});
var Te = W((te, Ee) => {
    var M;
    typeof fetch == "function" && (typeof globalThis < "u" && globalThis.fetch ? M = globalThis.fetch : typeof window < "u" && window.fetch ? M = window.fetch : M = fetch);
    typeof ie < "u" && (typeof window > "u" || typeof window.document > "u") && (R = M || Oe(), R.default && (R = R.default), te.default = R, Ee.exports = te.default);
    var R
});
var N = x(Xe()),
    Ue = x(he());

function J(i, t) {
    if (!(i instanceof t)) throw new TypeError("Cannot call a class as a function")
}
ze();

function pe(i, t) {
    for (var e = 0; e < t.length; e++) {
        var r = t[e];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(i, ue(r.key), r)
    }
}

function Y(i, t, e) {
    return t && pe(i.prototype, t), e && pe(i, e), Object.defineProperty(i, "prototype", {
        writable: !1
    }), i
}
var be = [],
    Ge = be.forEach,
    Ve = be.slice;

function We(i) {
    return Ge.call(Ve.call(arguments, 1), function(t) {
        if (t)
            for (var e in t) i[e] === void 0 && (i[e] = t[e])
    }), i
}
var ye = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,
    $e = function(t, e, r) {
        var o = r || {};
        o.path = o.path || "/";
        var s = encodeURIComponent(e),
            f = "".concat(t, "=").concat(s);
        if (o.maxAge > 0) {
            var c = o.maxAge - 0;
            if (Number.isNaN(c)) throw new Error("maxAge should be a Number");
            f += "; Max-Age=".concat(Math.floor(c))
        }
        if (o.domain) {
            if (!ye.test(o.domain)) throw new TypeError("option domain is invalid");
            f += "; Domain=".concat(o.domain)
        }
        if (o.path) {
            if (!ye.test(o.path)) throw new TypeError("option path is invalid");
            f += "; Path=".concat(o.path)
        }
        if (o.expires) {
            if (typeof o.expires.toUTCString != "function") throw new TypeError("option expires is invalid");
            f += "; Expires=".concat(o.expires.toUTCString())
        }
        if (o.httpOnly && (f += "; HttpOnly"), o.secure && (f += "; Secure"), o.sameSite) {
            var h = typeof o.sameSite == "string" ? o.sameSite.toLowerCase() : o.sameSite;
            switch (h) {
                case !0:
                    f += "; SameSite=Strict";
                    break;
                case "lax":
                    f += "; SameSite=Lax";
                    break;
                case "strict":
                    f += "; SameSite=Strict";
                    break;
                case "none":
                    f += "; SameSite=None";
                    break;
                default:
                    throw new TypeError("option sameSite is invalid")
            }
        }
        return f
    },
    ge = {
        create: function(t, e, r, o) {
            var s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
                path: "/",
                sameSite: "strict"
            };
            r && (s.expires = new Date, s.expires.setTime(s.expires.getTime() + r * 60 * 1e3)), o && (s.domain = o), document.cookie = $e(t, encodeURIComponent(e), s)
        },
        read: function(t) {
            for (var e = "".concat(t, "="), r = document.cookie.split(";"), o = 0; o < r.length; o++) {
                for (var s = r[o]; s.charAt(0) === " ";) s = s.substring(1, s.length);
                if (s.indexOf(e) === 0) return s.substring(e.length, s.length)
            }
            return null
        },
        remove: function(t) {
            this.create(t, "", -1)
        }
    },
    Qe = {
        name: "cookie",
        lookup: function(t) {
            var e;
            if (t.lookupCookie && typeof document < "u") {
                var r = ge.read(t.lookupCookie);
                r && (e = r)
            }
            return e
        },
        cacheUserLanguage: function(t, e) {
            e.lookupCookie && typeof document < "u" && ge.create(e.lookupCookie, t, e.cookieMinutes, e.cookieDomain, e.cookieOptions)
        }
    },
    Je = {
        name: "querystring",
        lookup: function(t) {
            var e;
            if (typeof window < "u") {
                var r = window.location.search;
                !window.location.search && window.location.hash && window.location.hash.indexOf("?") > -1 && (r = window.location.hash.substring(window.location.hash.indexOf("?")));
                for (var o = r.substring(1), s = o.split("&"), f = 0; f < s.length; f++) {
                    var c = s[f].indexOf("=");
                    if (c > 0) {
                        var h = s[f].substring(0, c);
                        h === t.lookupQuerystring && (e = s[f].substring(c + 1))
                    }
                }
            }
            return e
        }
    },
    A = null,
    me = function() {
        if (A !== null) return A;
        try {
            A = window !== "undefined" && window.localStorage !== null;
            var t = "i18next.translate.boo";
            window.localStorage.setItem(t, "foo"), window.localStorage.removeItem(t)
        } catch {
            A = !1
        }
        return A
    },
    Ye = {
        name: "localStorage",
        lookup: function(t) {
            var e;
            if (t.lookupLocalStorage && me()) {
                var r = window.localStorage.getItem(t.lookupLocalStorage);
                r && (e = r)
            }
            return e
        },
        cacheUserLanguage: function(t, e) {
            e.lookupLocalStorage && me() && window.localStorage.setItem(e.lookupLocalStorage, t)
        }
    },
    P = null,
    ve = function() {
        if (P !== null) return P;
        try {
            P = window !== "undefined" && window.sessionStorage !== null;
            var t = "i18next.translate.boo";
            window.sessionStorage.setItem(t, "foo"), window.sessionStorage.removeItem(t)
        } catch {
            P = !1
        }
        return P
    },
    Ze = {
        name: "sessionStorage",
        lookup: function(t) {
            var e;
            if (t.lookupSessionStorage && ve()) {
                var r = window.sessionStorage.getItem(t.lookupSessionStorage);
                r && (e = r)
            }
            return e
        },
        cacheUserLanguage: function(t, e) {
            e.lookupSessionStorage && ve() && window.sessionStorage.setItem(e.lookupSessionStorage, t)
        }
    },
    Ke = {
        name: "navigator",
        lookup: function(t) {
            var e = [];
            if (typeof navigator < "u") {
                if (navigator.languages)
                    for (var r = 0; r < navigator.languages.length; r++) e.push(navigator.languages[r]);
                navigator.userLanguage && e.push(navigator.userLanguage), navigator.language && e.push(navigator.language)
            }
            return e.length > 0 ? e : void 0
        }
    },
    et = {
        name: "htmlTag",
        lookup: function(t) {
            var e, r = t.htmlTag || (typeof document < "u" ? document.documentElement : null);
            return r && typeof r.getAttribute == "function" && (e = r.getAttribute("lang")), e
        }
    },
    tt = {
        name: "path",
        lookup: function(t) {
            var e;
            if (typeof window < "u") {
                var r = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
                if (r instanceof Array)
                    if (typeof t.lookupFromPathIndex == "number") {
                        if (typeof r[t.lookupFromPathIndex] != "string") return;
                        e = r[t.lookupFromPathIndex].replace("/", "")
                    } else e = r[0].replace("/", "")
            }
            return e
        }
    },
    rt = {
        name: "subdomain",
        lookup: function(t) {
            var e = typeof t.lookupFromSubdomainIndex == "number" ? t.lookupFromSubdomainIndex + 1 : 1,
                r = typeof window < "u" && window.location && window.location.hostname && window.location.hostname.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i);
            if (r) return r[e]
        }
    };

function nt() {
    return {
        order: ["querystring", "cookie", "localStorage", "sessionStorage", "navigator", "htmlTag"],
        lookupQuerystring: "lng",
        lookupCookie: "i18next",
        lookupLocalStorage: "i18nextLng",
        lookupSessionStorage: "i18nextLng",
        caches: ["localStorage"],
        excludeCacheFor: ["cimode"],
        convertDetectedLanguage: function(t) {
            return t
        }
    }
}
var Z = function() {
    function i(t) {
        var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        J(this, i), this.type = "languageDetector", this.detectors = {}, this.init(t, e)
    }
    return Y(i, [{
        key: "init",
        value: function(e) {
            var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
            this.services = e || {
                languageUtils: {}
            }, this.options = We(r, this.options || {}, nt()), typeof this.options.convertDetectedLanguage == "string" && this.options.convertDetectedLanguage.indexOf("15897") > -1 && (this.options.convertDetectedLanguage = function(s) {
                return s.replace("-", "_")
            }), this.options.lookupFromUrlIndex && (this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex), this.i18nOptions = o, this.addDetector(Qe), this.addDetector(Je), this.addDetector(Ye), this.addDetector(Ze), this.addDetector(Ke), this.addDetector(et), this.addDetector(tt), this.addDetector(rt)
        }
    }, {
        key: "addDetector",
        value: function(e) {
            this.detectors[e.name] = e
        }
    }, {
        key: "detect",
        value: function(e) {
            var r = this;
            e || (e = this.options.order);
            var o = [];
            return e.forEach(function(s) {
                if (r.detectors[s]) {
                    var f = r.detectors[s].lookup(r.options);
                    f && typeof f == "string" && (f = [f]), f && (o = o.concat(f))
                }
            }), o = o.map(function(s) {
                return r.options.convertDetectedLanguage(s)
            }), this.services.languageUtils.getBestMatchFromCodes ? o : o.length > 0 ? o[0] : null
        }
    }, {
        key: "cacheUserLanguage",
        value: function(e, r) {
            var o = this;
            r || (r = this.options.caches), r && (this.options.excludeCacheFor && this.options.excludeCacheFor.indexOf(e) > -1 || r.forEach(function(s) {
                o.detectors[s] && o.detectors[s].cacheUserLanguage(e, o.options)
            }))
        }
    }]), i
}();
Z.type = "languageDetector";

function K(i) {
    return K = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, K(i)
}
var we = [],
    ot = we.forEach,
    it = we.slice;

function k(i) {
    return ot.call(it.call(arguments, 1), function(t) {
        if (t)
            for (var e in t) i[e] === void 0 && (i[e] = t[e])
    }), i
}

function ee() {
    return typeof XMLHttpRequest == "function" || (typeof XMLHttpRequest > "u" ? "undefined" : K(XMLHttpRequest)) === "object"
}

function at(i) {
    return !!i && typeof i.then == "function"
}

function Se(i) {
    return at(i) ? i : Promise.resolve(i)
}
var j = x(Te(), 1);

function H(i) {
    return H = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, H(i)
}
var _;
typeof fetch == "function" && (typeof globalThis < "u" && globalThis.fetch ? _ = globalThis.fetch : typeof window < "u" && window.fetch ? _ = window.fetch : _ = fetch);
var D;
ee() && (typeof globalThis < "u" && globalThis.XMLHttpRequest ? D = globalThis.XMLHttpRequest : typeof window < "u" && window.XMLHttpRequest && (D = window.XMLHttpRequest));
var F;
typeof ActiveXObject == "function" && (typeof globalThis < "u" && globalThis.ActiveXObject ? F = globalThis.ActiveXObject : typeof window < "u" && window.ActiveXObject && (F = window.ActiveXObject));
!_ && j && !D && !F && (_ = j.default || j);
typeof _ != "function" && (_ = void 0);
var re = function(t, e) {
        if (e && H(e) === "object") {
            var r = "";
            for (var o in e) r += "&" + encodeURIComponent(o) + "=" + encodeURIComponent(e[o]);
            if (!r) return t;
            t = t + (t.indexOf("?") !== -1 ? "&" : "?") + r.slice(1)
        }
        return t
    },
    xe = function(t, e, r) {
        var o = function(f) {
            if (!f.ok) return r(f.statusText || "Error", {
                status: f.status
            });
            f.text().then(function(c) {
                r(null, {
                    status: f.status,
                    data: c
                })
            }).catch(r)
        };
        typeof fetch == "function" ? fetch(t, e).then(o).catch(r) : _(t, e).then(o).catch(r)
    },
    Ae = !1,
    st = function(t, e, r, o) {
        t.queryStringParams && (e = re(e, t.queryStringParams));
        var s = k({}, typeof t.customHeaders == "function" ? t.customHeaders() : t.customHeaders);
        typeof window > "u" && typeof globalThis < "u" && typeof globalThis.process < "u" && globalThis.process.versions && globalThis.process.versions.node && (s["User-Agent"] = "i18next-http-backend (node/".concat(globalThis.process.version, "; ").concat(globalThis.process.platform, " ").concat(globalThis.process.arch, ")")), r && (s["Content-Type"] = "application/json");
        var f = typeof t.requestOptions == "function" ? t.requestOptions(r) : t.requestOptions,
            c = k({
                method: r ? "POST" : "GET",
                body: r ? t.stringify(r) : void 0,
                headers: s
            }, Ae ? {} : f);
        try {
            xe(e, c, o)
        } catch (h) {
            if (!f || Object.keys(f).length === 0 || !h.message || h.message.indexOf("not implemented") < 0) return o(h);
            try {
                Object.keys(f).forEach(function(m) {
                    delete c[m]
                }), xe(e, c, o), Ae = !0
            } catch (m) {
                o(m)
            }
        }
    },
    ft = function(t, e, r, o) {
        r && H(r) === "object" && (r = re("", r).slice(1)), t.queryStringParams && (e = re(e, t.queryStringParams));
        try {
            var s;
            D ? s = new D : s = new F("MSXML2.XMLHTTP.3.0"), s.open(r ? "POST" : "GET", e, 1), t.crossDomain || s.setRequestHeader("X-Requested-With", "XMLHttpRequest"), s.withCredentials = !!t.withCredentials, r && s.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), s.overrideMimeType && s.overrideMimeType("application/json");
            var f = t.customHeaders;
            if (f = typeof f == "function" ? f() : f, f)
                for (var c in f) s.setRequestHeader(c, f[c]);
            s.onreadystatechange = function() {
                s.readyState > 3 && o(s.status >= 400 ? s.statusText : null, {
                    status: s.status,
                    data: s.responseText
                })
            }, s.send(r)
        } catch (h) {
            console && console.log(h)
        }
    },
    ut = function(t, e, r, o) {
        if (typeof r == "function" && (o = r, r = void 0), o = o || function() {}, _ && e.indexOf("file:") !== 0) return st(t, e, r, o);
        if (ee() || typeof ActiveXObject == "function") return ft(t, e, r, o);
        o(new Error("No fetch and no xhr implementation found!"))
    },
    Pe = ut;

function L(i) {
    return L = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, L(i)
}

function lt(i, t) {
    if (!(i instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function ke(i, t) {
    for (var e = 0; e < t.length; e++) {
        var r = t[e];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(i, Re(r.key), r)
    }
}

function ct(i, t, e) {
    return t && ke(i.prototype, t), e && ke(i, e), Object.defineProperty(i, "prototype", {
        writable: !1
    }), i
}

function dt(i, t, e) {
    return t = Re(t), t in i ? Object.defineProperty(i, t, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : i[t] = e, i
}

function Re(i) {
    var t = ht(i, "string");
    return L(t) === "symbol" ? t : String(t)
}

function ht(i, t) {
    if (L(i) !== "object" || i === null) return i;
    var e = i[Symbol.toPrimitive];
    if (e !== void 0) {
        var r = e.call(i, t || "default");
        if (L(r) !== "object") return r;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(i)
}
var pt = function() {
        return {
            loadPath: "/locales/{{lng}}/{{ns}}.json",
            addPath: "/locales/add/{{lng}}/{{ns}}",
            parse: function(e) {
                return JSON.parse(e)
            },
            stringify: JSON.stringify,
            parsePayload: function(e, r, o) {
                return dt({}, r, o || "")
            },
            parseLoadPayload: function(e, r) {},
            request: Pe,
            reloadInterval: typeof window < "u" ? !1 : 60 * 60 * 1e3,
            customHeaders: {},
            queryStringParams: {},
            crossDomain: !1,
            withCredentials: !1,
            overrideMimeType: !1,
            requestOptions: {
                mode: "cors",
                credentials: "same-origin",
                cache: "default"
            }
        }
    },
    De = function() {
        function i(t) {
            var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
            lt(this, i), this.services = t, this.options = e, this.allOptions = r, this.type = "backend", this.init(t, e, r)
        }
        return ct(i, [{
            key: "init",
            value: function(e) {
                var r = this,
                    o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                    s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
                this.services = e, this.options = k(o, this.options || {}, pt()), this.allOptions = s, this.services && this.options.reloadInterval && setInterval(function() {
                    return r.reload()
                }, this.options.reloadInterval)
            }
        }, {
            key: "readMulti",
            value: function(e, r, o) {
                this._readAny(e, e, r, r, o)
            }
        }, {
            key: "read",
            value: function(e, r, o) {
                this._readAny([e], e, [r], r, o)
            }
        }, {
            key: "_readAny",
            value: function(e, r, o, s, f) {
                var c = this,
                    h = this.options.loadPath;
                typeof this.options.loadPath == "function" && (h = this.options.loadPath(e, o)), h = Se(h), h.then(function(m) {
                    if (!m) return f(null, {});
                    var y = c.services.interpolator.interpolate(m, {
                        lng: e.join("+"),
                        ns: o.join("+")
                    });
                    c.loadUrl(y, f, r, s)
                })
            }
        }, {
            key: "loadUrl",
            value: function(e, r, o, s) {
                var f = this,
                    c = typeof o == "string" ? [o] : o,
                    h = typeof s == "string" ? [s] : s,
                    m = this.options.parseLoadPayload(c, h);
                this.options.request(this.options, e, m, function(y, u) {
                    if (u && (u.status >= 500 && u.status < 600 || !u.status)) return r("failed loading " + e + "; status code: " + u.status, !0);
                    if (u && u.status >= 400 && u.status < 500) return r("failed loading " + e + "; status code: " + u.status, !1);
                    if (!u && y && y.message && y.message.indexOf("Failed to fetch") > -1) return r("failed loading " + e + ": " + y.message, !0);
                    if (y) return r(y, !1);
                    var v, b;
                    try {
                        typeof u.data == "string" ? v = f.options.parse(u.data, o, s) : v = u.data
                    } catch {
                        b = "failed parsing " + e + " to json"
                    }
                    if (b) return r(b, !1);
                    r(null, v)
                })
            }
        }, {
            key: "create",
            value: function(e, r, o, s, f) {
                var c = this;
                if (this.options.addPath) {
                    typeof e == "string" && (e = [e]);
                    var h = this.options.parsePayload(r, o, s),
                        m = 0,
                        y = [],
                        u = [];
                    e.forEach(function(v) {
                        var b = c.options.addPath;
                        typeof c.options.addPath == "function" && (b = c.options.addPath(v, r));
                        var q = c.services.interpolator.interpolate(b, {
                            lng: v,
                            ns: r
                        });
                        c.options.request(c.options, q, h, function(z, G) {
                            m += 1, y.push(z), u.push(G), m === e.length && typeof f == "function" && f(y, u)
                        })
                    })
                }
            }
        }, {
            key: "reload",
            value: function() {
                var e = this,
                    r = this.services,
                    o = r.backendConnector,
                    s = r.languageUtils,
                    f = r.logger,
                    c = o.language;
                if (!(c && c.toLowerCase() === "cimode")) {
                    var h = [],
                        m = function(u) {
                            var v = s.toResolveHierarchy(u);
                            v.forEach(function(b) {
                                h.indexOf(b) < 0 && h.push(b)
                            })
                        };
                    m(c), this.allOptions.preload && this.allOptions.preload.forEach(function(y) {
                        return m(y)
                    }), h.forEach(function(y) {
                        e.allOptions.ns.forEach(function(u) {
                            o.read(y, u, "read", null, null, function(v, b) {
                                v && f.warn("loading namespace ".concat(u, " for language ").concat(y, " failed"), v), !v && b && f.log("loaded namespace ".concat(u, " for language ").concat(y), b), o.loaded("".concat(y, "|").concat(u), v, b)
                            })
                        })
                    })
                }
            }
        }]), i
    }();
De.type = "backend";
var Le = De;

function qe() {
    return [...new Set(Object.values(window.__remixRouteModules).filter(t => {
        var e;
        return ((e = t.handle) === null || e === void 0 ? void 0 : e.i18n) !== void 0
    }).flatMap(t => t.handle.i18n))]
}
var X = x(le());
async function Be() {
    await $.use(se).use(Z).use(Le).init({ ...ce,
        ns: qe(),
        backend: {
            loadPath: "/locales/{{lng}}.json"
        },
        detection: {
            order: ["htmlTag"],
            caches: ["cookie"]
        }
    }), (0, N.startTransition)(() => {
        (0, Ue.hydrateRoot)(document, (0, X.jsx)(fe, {
            i18n: $,
            children: (0, X.jsx)(N.StrictMode, {
                children: (0, X.jsx)(ae, {})
            })
        }))
    })
}
window.requestIdleCallback ? window.requestIdleCallback(Be) : window.setTimeout(Be, 1);