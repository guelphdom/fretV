google.maps.__gjsload__('stats', function(_) {
    var SNa = function(a, b) {
            return new _.kxa(a, b)
        },
        TNa = function(a, b, c, d) {
            const e = {};
            e.host = document.location && document.location.host || window.location.host;
            e.v = a.split(".")[1] || a;
            e.fv = a;
            e.r = Math.round(1 / b);
            c && (e.client = c);
            d && (e.key = d);
            return e
        },
        VNa = function(a) {
            var b = document;
            this.token = UNa;
            this.Jg = a + "/maps/gen_204";
            this.Ig = b
        },
        YNa = function(a, b, c) {
            c = c || {};
            const d = Date.now().toString(36);
            c.src = "apiv3";
            c.token = a.token;
            c.ts = d.substr(d.length - 6);
            b.cad = WNa(c);
            b = XNa(b, "=", "&");
            b = a.Jg + "?target=api&" + b;
            (new _.Mf(a.Ig)).createElement("IMG").src =
                b;
            (a = _.na.__gm_captureCSI) && a(b)
        },
        XNa = function(a, b, c) {
            const d = [];
            _.ke(a, function(e, f) {
                d.push(f + b + e)
            });
            return d.join(c)
        },
        WNa = function(a) {
            const b = {};
            _.ke(a, function(c, d) {
                b[encodeURIComponent(d)] = encodeURIComponent(c).replace(/%7C/g, "|")
            });
            return XNa(b, ":", ",")
        },
        $Na = function(a) {
            if (a instanceof pT || a instanceof ZNa || a instanceof qT) return a;
            if ("function" == typeof a.next) return new pT(() => a);
            if ("function" == typeof a[Symbol.iterator]) return new pT(() => a[Symbol.iterator]());
            if ("function" == typeof a.yr) return new pT(() =>
                a.yr());
            throw Error("Not an iterator or iterable.");
        },
        rT = function(a, b) {
            this.Jg = {};
            this.Ig = [];
            this.Kg = this.size = 0;
            var c = arguments.length;
            if (1 < c) {
                if (c % 2) throw Error("Uneven number of arguments");
                for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
            } else if (a)
                if (a instanceof rT)
                    for (c = a.zo(), d = 0; d < c.length; d++) this.set(c[d], a.get(c[d]));
                else
                    for (d in a) this.set(d, a[d])
        },
        aOa = function(a, b) {
            return a === b
        },
        tT = function(a) {
            if (a.size != a.Ig.length) {
                for (var b = 0, c = 0; b < a.Ig.length;) {
                    var d = a.Ig[b];
                    sT(a.Jg, d) &&
                        (a.Ig[c++] = d);
                    b++
                }
                a.Ig.length = c
            }
            if (a.size != a.Ig.length) {
                var e = {};
                for (c = b = 0; b < a.Ig.length;) d = a.Ig[b], sT(e, d) || (a.Ig[c++] = d, e[d] = 1), b++;
                a.Ig.length = c
            }
        },
        sT = function(a, b) {
            return Object.prototype.hasOwnProperty.call(a, b)
        },
        bOa = function(a, b, c, d, e) {
            this.Og = a;
            this.Pg = b;
            this.Ng = c;
            this.Kg = d;
            this.Mg = e;
            this.Ig = new rT;
            this.Qg = Date.now()
        },
        uT = function() {
            this.Jg = _.Ri.Kg();
            this.Kg = _.Ri.Jg();
            if (_.ln[35]) {
                var a = _.Ri.Ig();
                a = _.Pi(a.Lg, 12)
            } else a = _.RB;
            this.Og = new VNa(a);
            this.Mg = _.Pi(_.Ui(_.Ri).Lg, 2);
            this.Ng = {};
            this.Ig = {};
            this.Pg = _.Ti(_.Ri.Lg, 1, 1)
        };
    var UNa = Math.round(1E15 * Math.random()).toString(36);
    var pT = class {
            constructor(a) {
                this.Ig = a
            }
            yr() {
                return new ZNa(this.Ig())
            }[Symbol.iterator]() {
                return new qT(this.Ig())
            }
            Jg() {
                return new qT(this.Ig())
            }
        },
        ZNa = class extends _.Sn {
            constructor(a) {
                super();
                this.Ig = a
            }
            next() {
                return this.Ig.next()
            }[Symbol.iterator]() {
                return new qT(this.Ig)
            }
            Jg() {
                return new qT(this.Ig)
            }
        },
        qT = class extends pT {
            constructor(a) {
                super(() => a);
                this.Kg = a
            }
            next() {
                return this.Kg.next()
            }
        };
    _.G = rT.prototype;
    _.G.dl = function() {
        tT(this);
        for (var a = [], b = 0; b < this.Ig.length; b++) a.push(this.Jg[this.Ig[b]]);
        return a
    };
    _.G.zo = function() {
        tT(this);
        return this.Ig.concat()
    };
    _.G.has = function(a) {
        return sT(this.Jg, a)
    };
    _.G.equals = function(a, b) {
        if (this === a) return !0;
        if (this.size != a.size) return !1;
        b = b || aOa;
        tT(this);
        for (var c, d = 0; c = this.Ig[d]; d++)
            if (!b(this.get(c), a.get(c))) return !1;
        return !0
    };
    _.G.isEmpty = function() {
        return 0 == this.size
    };
    _.G.clear = function() {
        this.Jg = {};
        this.Kg = this.size = this.Ig.length = 0
    };
    _.G.remove = function(a) {
        return this.delete(a)
    };
    _.G.delete = function(a) {
        return sT(this.Jg, a) ? (delete this.Jg[a], --this.size, this.Kg++, this.Ig.length > 2 * this.size && tT(this), !0) : !1
    };
    _.G.get = function(a, b) {
        return sT(this.Jg, a) ? this.Jg[a] : b
    };
    _.G.set = function(a, b) {
        sT(this.Jg, a) || (this.size += 1, this.Ig.push(a), this.Kg++);
        this.Jg[a] = b
    };
    _.G.forEach = function(a, b) {
        for (var c = this.zo(), d = 0; d < c.length; d++) {
            var e = c[d],
                f = this.get(e);
            a.call(b, f, e, this)
        }
    };
    _.G.clone = function() {
        return new rT(this)
    };
    _.G.keys = function() {
        return $Na(this.yr(!0)).Jg()
    };
    _.G.values = function() {
        return $Na(this.yr(!1)).Jg()
    };
    _.G.entries = function() {
        const a = this;
        return SNa(this.keys(), function(b) {
            return [b, a.get(b)]
        })
    };
    _.G.yr = function(a) {
        tT(this);
        var b = 0,
            c = this.Kg,
            d = this,
            e = new _.Sn;
        e.next = function() {
            if (c != d.Kg) throw Error("The map has changed since the iterator was created");
            if (b >= d.Ig.length) return _.xr;
            var f = d.Ig[b++];
            return {
                value: a ? f : d.Jg[f],
                done: !1
            }
        };
        return e
    };
    bOa.prototype.Jg = function(a) {
        0 === this.Ig.size && window.setTimeout(() => {
            const c = TNa(this.Pg, this.Ng, this.Kg, this.Mg);
            c.t = Date.now() - this.Qg;
            var d = this.Ig;
            const e = {};
            for (const f of d.keys()) e[f] = d.get(f);
            _.ne(c, e);
            this.Ig.clear();
            YNa(this.Og, {
                ev: "api_maprft"
            }, c)
        }, 500);
        const b = this.Ig.get(a, 0) + 1;
        this.Ig.set(a, b)
    };
    var cOa = class {
        constructor(a, b, c, d, e) {
            this.Qg = a;
            this.Rg = b;
            this.Pg = c;
            this.Ng = d;
            this.Og = e;
            this.Kg = {};
            this.Ig = []
        }
        Jg(a) {
            this.Kg[a] || (this.Kg[a] = !0, this.Ig.push(a), 2 > this.Ig.length && _.VG(this, this.Mg, 500))
        }
        Mg() {
            const a = TNa(this.Rg, this.Pg, this.Ng, this.Og);
            for (let b = 0, c; c = this.Ig[b]; ++b) a[c] = "1";
            a.hybrid = +_.vu();
            this.Ig.length = 0;
            YNa(this.Qg, {
                ev: "api_mapft"
            }, a)
        }
    };
    uT.prototype.QA = function(a) {
        a = _.Ek(a);
        let b = this.Ng[a];
        b || (b = new cOa(this.Og, this.Mg, this.Pg, this.Jg, this.Kg), this.Ng[a] = b);
        return b
    };
    uT.prototype.Qg = function(a) {
        a = _.Ek(a);
        this.Ig[a] || (this.Ig[a] = new bOa(this.Og, this.Mg, _.Ti(_.Ri.Lg, 1, 1), this.Jg, this.Kg));
        return this.Ig[a]
    };
    _.gk("stats", new uT);
});