google.maps.__gjsload__('overlay', function(_) {
    var zE = function(a) {
            this.Ig = a
        },
        xla = function() {},
        AE = function(a) {
            a.Wx = a.Wx || new xla;
            return a.Wx
        },
        yla = function(a) {
            this.Gh = new _.Wm(() => {
                const b = a.Wx;
                if (a.getPanes()) {
                    if (a.getProjection()) {
                        if (!b.ow && a.onAdd) a.onAdd();
                        b.ow = !0;
                        a.draw()
                    }
                } else {
                    if (b.ow)
                        if (a.onRemove) a.onRemove();
                        else a.remove();
                    b.ow = !1
                }
            }, 0)
        },
        zla = function(a, b) {
            const c = AE(a);
            let d = c.yv;
            d || (d = c.yv = new yla(a));
            _.Tb(c.Th || [], _.qk);
            var e = c.li = c.li || new _.nha;
            const f = b.__gm;
            e.bindTo("zoom", f);
            e.bindTo("offset", f);
            e.bindTo("center", f, "projectionCenterQ");
            e.bindTo("projection", b);
            e.bindTo("projectionTopLeft", f);
            e = c.PB = c.PB || new zE(e);
            e.bindTo("zoom", f);
            e.bindTo("offset", f);
            e.bindTo("projection", b);
            e.bindTo("projectionTopLeft", f);
            a.bindTo("projection", e, "outProjection");
            a.bindTo("panes", f);
            e = () => _.Xm(d.Gh);
            c.Th = [_.ok(a, "panes_changed", e), _.ok(f, "zoom_changed", e), _.ok(f, "offset_changed", e), _.ok(b, "projection_changed", e), _.ok(f, "projectioncenterq_changed", e)];
            _.Xm(d.Gh);
            b instanceof _.Mk ? (_.wl(b, "Ox"), _.ul(b, 148440)) : b instanceof _.Sl && (_.wl(b, "Oxs"),
                _.ul(b, 181451))
        },
        Ela = function(a) {
            if (a) {
                var b = a.getMap();
                if (Ala(a) !== b && b && b instanceof _.Mk) {
                    const c = b.__gm;
                    c.overlayLayer ? a.__gmop = new Bla(b, a, c.overlayLayer) : c.Jg.then(({
                        oh: d
                    }) => {
                        const e = new Cla(b, d);
                        d.Ei(e);
                        c.overlayLayer = e;
                        Dla(a);
                        Ela(a)
                    })
                }
            }
        },
        Dla = function(a) {
            if (a) {
                var b = a.__gmop;
                b && (a.__gmop = null, b.Ig.unbindAll(), b.Ig.set("panes", null), b.Ig.set("projection", null), b.Kg.ul(b), b.Jg && (b.Jg = !1, b.Ig.onRemove ? b.Ig.onRemove() : b.Ig.remove()))
            }
        },
        Ala = function(a) {
            return (a = a.__gmop) ? a.map : null
        },
        Fla = function(a,
            b) {
            a.Ig.get("projection") != b && (a.Ig.bindTo("panes", a.map.__gm), a.Ig.set("projection", b))
        };
    _.Ja(zE, _.Fk);
    zE.prototype.changed = function(a) {
        "outProjection" != a && (a = !!(this.get("offset") && this.get("projectionTopLeft") && this.get("projection") && _.dj(this.get("zoom"))), a == !this.get("outProjection") && this.set("outProjection", a ? this.Ig : null))
    };
    var BE = {};
    _.Ja(yla, _.Fk);
    BE.Yk = function(a) {
        if (a) {
            var b = a.getMap();
            (AE(a).AB || null) !== b && (b && zla(a, b), AE(a).AB = b)
        }
    };
    BE.ul = function(a) {
        const b = AE(a);
        var c = b.li;
        c && c.unbindAll();
        (c = b.PB) && c.unbindAll();
        a.unbindAll();
        a.set("panes", null);
        a.set("projection", null);
        b.Th && _.Tb(b.Th, _.qk);
        b.Th = null;
        b.yv && (b.yv.Gh.Ej(), b.yv = null);
        delete AE(a).AB
    };
    var CE = {},
        Bla = class {
            constructor(a, b, c) {
                this.map = a;
                this.Ig = b;
                this.Kg = c;
                this.Jg = !1;
                _.wl(this.map, "Ox");
                _.ul(this.map, 148440);
                c.Yk(this)
            }
            draw() {
                this.Jg || (this.Jg = !0, this.Ig.onAdd && this.Ig.onAdd());
                this.Ig.draw && this.Ig.draw()
            }
        },
        Cla = class {
            constructor(a, b) {
                this.Mg = a;
                this.Kg = b;
                this.Ig = null;
                this.Jg = []
            }
            dispose() {}
            Si(a, b, c, d, e, f, g, h) {
                const l = this.Ig = this.Ig || new _.$B(this.Mg, this.Kg, () => {});
                l.Si(a, b, c, d, e, f, g, h);
                for (const n of this.Jg) Fla(n, l), n.draw()
            }
            Yk(a) {
                this.Jg.push(a);
                this.Ig && Fla(a, this.Ig);
                this.Kg.refresh()
            }
            ul(a) {
                _.Xb(this.Jg,
                    a)
            }
        };
    CE.Yk = Ela;
    CE.ul = Dla;
    _.gk("overlay", {
        Rz: function(a) {
            if (a) {
                (0, BE.ul)(a);
                (0, CE.ul)(a);
                var b = a.getMap();
                b && (b instanceof _.Mk ? (0, CE.Yk)(a) : (0, BE.Yk)(a))
            }
        },
        preventMapHitsFrom: a => {
            _.$v(a, {
                nl: ({
                    event: b
                }) => {
                    _.Ht(b.Lh)
                },
                ek: b => _.Jv(b),
                Bp: b => _.Kv(b),
                Rk: b => _.Kv(b),
                wk: b => _.Lv(b)
            }).Yq(!0)
        },
        preventMapHitsAndGesturesFrom: a => {
            a.addEventListener("click", _.mk);
            a.addEventListener("contextmenu", _.mk);
            a.addEventListener("dblclick", _.mk);
            a.addEventListener("mousedown", _.mk);
            a.addEventListener("mousemove", _.mk);
            a.addEventListener("MSPointerDown",
                _.mk);
            a.addEventListener("pointerdown", _.mk);
            a.addEventListener("touchstart", _.mk);
            a.addEventListener("wheel", _.mk)
        }
    });
});