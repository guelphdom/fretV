! function(t) {
    "function" == typeof define && define.amd ? define(["jquery", "modernizr"], t) : t(window.jQuery, window.Modernizr)
}(function(t, e, i) {
    "use strict";

    function s(t) {
        return t ? t.replace(/([A-Z])/g, function(t, e) {
            return "-" + e.toLowerCase()
        }).replace(/^ms-/, "-ms-") : ""
    }

    function n(e, i, s) {
        var n, r, o, a = null,
            l = 0;
        s = s || {};
        var u = function() {
            l = s.leading === !1 ? 0 : t.now(), a = null, o = e.apply(n, r), n = r = null
        };
        return function() {
            var h = t.now();
            l || s.leading !== !1 || (l = h);
            var f = i - (h - l);
            return n = this, r = arguments, 0 >= f || f > i ? (clearTimeout(a), a = null, l = h, o = e.apply(n, r), n = r = null) : a || s.trailing === !1 || (a = setTimeout(u, f)), o
        }
    }
    if ("object" != typeof e) throw new Error("Shuffle.js requires Modernizr.\nhttp://vestride.github.io/Shuffle/#dependencies");
    var r = e.prefixed("transition"),
        o = e.prefixed("transitionDelay"),
        a = e.prefixed("transitionDuration"),
        l = {
            WebkitTransition: "webkitTransitionEnd",
            transition: "transitionend"
        }[r],
        u = e.prefixed("transform"),
        h = s(u),
        f = e.csstransforms && e.csstransitions,
        d = e.csstransforms3d,
        c = "shuffle",
        p = "all",
        m = "groups",
        _ = 1,
        y = .001,
        g = 0,
        v = function(e, i) {
            i = i || {}, t.extend(this, v.options, i, v.settings), this.$el = t(e), this.$window = t(window), this.unique = "shuffle_" + g++, this._fire(v.EventType.LOADING), this._init(), setTimeout(t.proxy(function() {
                this.initialized = !0, this._fire(v.EventType.DONE)
            }, this), 16)
        };
    return v.EventType = {
        LOADING: "loading",
        DONE: "done",
        SHRINK: "shrink",
        SHRUNK: "shrunk",
        FILTER: "filter",
        FILTERED: "filtered",
        SORTED: "sorted",
        LAYOUT: "layout",
        REMOVED: "removed"
    }, v.prototype = {
        _init: function() {
            var e, i, s = this,
                n = t.proxy(s._onResize, s),
                o = s.throttle ? s.throttle(n, s.throttleTime) : n,
                a = s.initialSort ? s.initialSort : null;
            s._layoutList = [], s._shrinkList = [], s._setVars(), s._resetCols(), s._addClasses(), s._initItems(), s.$window.on("resize." + c + "." + s.unique, o), e = s.$el.css(["paddingLeft", "paddingRight", "position"]), i = s._getOuterWidth(s.$el[0]), "static" === e.position && (s.$el[0].style.position = "relative"), s.offset = {
                left: parseInt(e.paddingLeft, 10) || 0,
                top: parseInt(e.paddingTop, 10) || 0
            }, s._setColumns(parseInt(i, 10)), s.shuffle(s.group, a), s.supported && setTimeout(function() {
                s._setTransitions(), s.$el[0].style[r] = "height " + s.speed + "ms " + s.easing
            }, 0)
        },
        _addClasses: function() {
            this.$el.addClass(c), this.$items.addClass("shuffle-item filtered")
        },
        _setVars: function() {
            var e = this,
                i = e.columnWidth;
            e.$items = e._getItems(), 0 === i && null !== e.sizer && (i = e.sizer), "string" == typeof i ? e.$sizer = e.$el.find(i) : i && i.nodeType && 1 === i.nodeType ? e.$sizer = t(i) : i && i.jquery && (e.$sizer = i), e.$sizer && e.$sizer.length && (e.useSizer = !0, e.sizer = e.$sizer[0])
        },
        _filter: function(e, s) {
            var n = this,
                r = s !== i,
                o = r ? s : n.$items,
                a = t();
            return e = e || n.lastFilter, n._fire(v.EventType.FILTER), t.isFunction(e) ? o.each(function() {
                var i = t(this);
                e.call(i[0], i, n) && (a = a.add(i))
            }) : (n.group = e, e === p ? a = o : o.each(function() {
                var i = t(this),
                    s = i.data(m),
                    r = n.delimeter && !t.isArray(s) ? s.split(n.delimeter) : s;
                t.inArray(e, r) > -1 && (a = a.add(i))
            })), n._toggleFilterClasses(o, a), o = null, s = null, a
        },
        _toggleFilterClasses: function(e, i) {
            var s = "concealed",
                n = "filtered";
            e.filter(i).each(function() {
                var e = t(this);
                e.hasClass(s) && e.removeClass(s), e.hasClass(n) || e.addClass(n)
            }), e.not(i).each(function() {
                var e = t(this);
                e.hasClass(s) || e.addClass(s), e.hasClass(n) && e.removeClass(n)
            })
        },
        _initItems: function(t) {
            t = t || this.$items, t.css(this.itemCss).data("position", {
                x: 0,
                y: 0
            })
        },
        _updateItemCount: function() {
            this.visibleItems = this.$items.filter(".filtered").length
        },
        _setTransition: function(t) {
            t.style[r] = h + " " + this.speed + "ms " + this.easing + ", opacity " + this.speed + "ms " + this.easing
        },
        _setTransitions: function(t) {
            var e = this;
            t = t || e.$items, t.each(function() {
                e._setTransition(this)
            })
        },
        _setSequentialDelay: function(e) {
            var i = this;
            i.supported && t.each(e, function(e, s) {
                s.style[o] = "0ms," + (e + 1) * i.sequentialFadeDelay + "ms", t(s).on(l + "." + i.unique, function(e) {
                    var s = e.currentTarget;
                    s === e.target && (s.style[o] = "0ms", t(s).off(l + "." + i.unique))
                })
            })
        },
        _getItems: function() {
            return this.$el.children(this.itemSelector)
        },
        _getPreciseDimension: function(e, i) {
            var s;
            return s = window.getComputedStyle ? window.getComputedStyle(e, null)[i] : t(e).css(i), parseFloat(s)
        },
        _getOuterWidth: function(e, i) {
            var s = e.offsetWidth;
            if (i) {
                var n = t(e).css(["marginLeft", "marginRight"]),
                    r = parseFloat(n.marginLeft) || 0,
                    o = parseFloat(n.marginRight) || 0;
                s += r + o
            }
            return s
        },
        _getOuterHeight: function(e, i) {
            var s = e.offsetHeight;
            if (i) {
                var n = t(e).css(["marginTop", "marginBottom"]),
                    r = parseFloat(n.marginTop) || 0,
                    o = parseFloat(n.marginBottom) || 0;
                s += r + o
            }
            return s
        },
        _getColumnSize: function(e, i) {
            var s;
            return s = t.isFunction(this.columnWidth) ? this.columnWidth(i) : this.useSizer ? this._getPreciseDimension(this.sizer, "width") : this.columnWidth ? this.columnWidth : this.$items.length > 0 ? this._getOuterWidth(this.$items[0], !0) : i, 0 === s && (s = i), s + e
        },
        _getGutterSize: function(e) {
            var i;
            return i = t.isFunction(this.gutterWidth) ? this.gutterWidth(e) : this.useSizer ? this._getPreciseDimension(this.sizer, "marginLeft") : this.gutterWidth
        },
        _setColumns: function(t) {
            var e = t || this._getOuterWidth(this.$el[0]),
                i = this._getGutterSize(e),
                s = this._getColumnSize(i, e),
                n = (e + i) / s;
            Math.abs(Math.round(n) - n) < .03 && (n = Math.round(n)), this.cols = Math.max(Math.floor(n), 1), this.containerWidth = e, this.colWidth = s
        },
        _setContainerSize: function() {
            this.$el.css("height", Math.max.apply(Math, this.colYs))
        },
        _fire: function(t, e) {
            this.$el.trigger(t + "." + c, e && e.length ? e : [this])
        },
        _layout: function(e, i, s) {
            var n = this;
            i = i || n._filterEnd, t.each(e, function(e, r) {
                var o = t(r),
                    a = o.data(),
                    l = a.position,
                    u = n._getItemPosition(o);
                if (o.data("position", u), u.x !== l.x || u.y !== l.y || a.scale !== _) {
                    var h = {
                        $item: o,
                        x: u.x,
                        y: u.y,
                        scale: _
                    };
                    s ? (h.skipTransition = !0, h.opacity = 0) : (h.opacity = 1, h.callback = i), n.styleQueue.push(h), n._layoutList.push(o[0])
                }
            }), n._processStyleQueue(), n._setContainerSize()
        },
        _resetCols: function() {
            var t = this.cols;
            for (this.colYs = []; t--;) this.colYs.push(0)
        },
        _reLayout: function() {
            this._resetCols(), this.lastSort ? this.sort(this.lastSort, !0) : this._layout(this.$items.filter(".filtered").get(), this._filterEnd)
        },
        _getItemPosition: function(t) {
            var e = this,
                i = e._getOuterWidth(t[0], !0),
                s = i / e.colWidth;
            Math.abs(Math.round(s) - s) < .03 && (s = Math.round(s));
            var n = Math.min(Math.ceil(s), e.cols);
            if (1 === n) return e._placeItem(t, e.colYs);
            var r, o, a = e.cols + 1 - n,
                l = [];
            for (o = 0; a > o; o++) r = e.colYs.slice(o, o + n), l[o] = Math.max.apply(Math, r);
            return e._placeItem(t, l)
        },
        _placeItem: function(t, e) {
            for (var i = this, s = Math.min.apply(Math, e), n = 0, r = 0, o = e.length; o > r; r++)
                if (e[r] >= s - i.buffer && e[r] <= s + i.buffer) {
                    n = r;
                    break
                }
            var a = {
                    x: Math.round(i.colWidth * n + i.offset.left),
                    y: Math.round(s + i.offset.top)
                },
                l = s + i._getOuterHeight(t[0], !0),
                u = i.cols + 1 - o;
            for (r = 0; u > r; r++) i.colYs[n + r] = l;
            return a
        },
        _shrink: function(e, i) {
            var s = this,
                n = e || s.$items.filter(".concealed");
            i = i || s._shrinkEnd, n.length && (s._fire(v.EventType.SHRINK), n.each(function() {
                var e = t(this),
                    n = e.data(),
                    r = n.scale === y;
                if (!r) {
                    var o = {
                        $item: e,
                        x: n.position.x,
                        y: n.position.y,
                        scale: y,
                        opacity: 0,
                        callback: i
                    };
                    s.styleQueue.push(o), s._shrinkList.push(e[0])
                }
            }))
        },
        _onResize: function() {
            if (this.enabled && !this.destroyed) {
                var t = this._getOuterWidth(this.$el[0]);
                t !== this.containerWidth && this.resized()
            }
        },
        _getItemTransformString: function(t, e, i) {
            return d ? "translate3d(" + t + "px, " + e + "px, 0) scale3d(" + i + ", " + i + ", 1)" : "translate(" + t + "px, " + e + "px) scale(" + i + ", " + i + ")"
        },
        _getStylesForTransition: function(t) {
            var e = {
                opacity: t.opacity
            };
            return this.supported ? t.x !== i && (e[u] = this._getItemTransformString(t.x, t.y, t.scale)) : (e.left = t.x, e.top = t.y), 1 === t.opacity && (e.visibility = "visible"), e
        },
        _transition: function(t) {
            t.$item.data("scale", t.scale);
            var e = this._getStylesForTransition(t);
            this._startItemAnimation(t.$item, e, t.callback)
        },
        _startItemAnimation: function(e, i, s) {
            var n = 1 === i.opacity,
                r = t.proxy(this._handleItemAnimationEnd, this, s || t.noop, e[0], n);
            this.supported ? (e.css(i), this.initialized ? e.on(l + ".shuffleitem", r) : r()) : ("visibility" in i && (e.css("visibility", i.visibility), delete i.visibility), e.stop(!0).animate(i, this.speed, "swing", r))
        },
        _handleItemAnimationEnd: function(e, i, s, n) {
            if (n) {
                if (n.target !== i) return;
                t(i).off(".shuffleitem")
            }
            this._layoutList.length > 0 && t.inArray(i, this._layoutList) > -1 ? (this._fire(v.EventType.LAYOUT), e.call(this), this._layoutList.length = 0) : this._shrinkList.length > 0 && t.inArray(i, this._shrinkList) > -1 && (e.call(this), this._shrinkList.length = 0), s || (i.style.visibility = "hidden")
        },
        _processStyleQueue: function() {
            var e = this;
            t.each(this.styleQueue, function(t, i) {
                i.skipTransition ? e._skipTransition(i.$item[0], function() {
                    i.$item.css(e._getStylesForTransition(i))
                }) : e._transition(i)
            }), e.styleQueue.length = 0
        },
        _shrinkEnd: function() {
            this._fire(v.EventType.SHRUNK)
        },
        _filterEnd: function() {
            this._fire(v.EventType.FILTERED)
        },
        _sortEnd: function() {
            this._fire(v.EventType.SORTED)
        },
        _skipTransition: function(e, i, s) {
            var n = e.style[a];
            e.style[a] = "0ms", t.isFunction(i) ? i() : e.style[i] = s;
            var r = e.offsetWidth;
            r = null, e.style[a] = n
        },
        _addItems: function(t, e, s) {
            var n = this;
            n.supported || (e = !1), t.addClass("shuffle-item"), n._initItems(t), n._setTransitions(t), n.$items = n._getItems(), t.css("opacity", 0);
            var r = n._filter(i, t),
                o = r.get();
            n._updateItemCount(), e ? (n._layout(o, null, !0), s && n._setSequentialDelay(r), n._revealAppended(r)) : n._layout(o)
        },
        _revealAppended: function(e) {
            var i = this;
            setTimeout(function() {
                e.each(function(e, s) {
                    i._transition({
                        $item: t(s),
                        opacity: 1,
                        scale: _
                    })
                })
            }, i.revealAppendedDelay)
        },
        shuffle: function(t, e) {
            var i = this;
            i.enabled && (t || (t = p), i._filter(t), i.lastFilter = t, i._updateItemCount(), i._shrink(), e && (i.lastSort = e), i._reLayout())
        },
        sort: function(t, e) {
            var i = this,
                s = i.$items.filter(".filtered").sorted(t);
            e || i._resetCols(), i._layout(s, function() {
                e && i._filterEnd(), i._sortEnd()
            }), i.lastSort = t
        },
        resized: function(t) {
            this.enabled && (t || this._setColumns(), this._reLayout())
        },
        layout: function() {
            this.update(!0)
        },
        update: function(t) {
            this.resized(t)
        },
        appended: function(t, e, i) {
            e = e === !1 ? !1 : !0, i = i === !1 ? !1 : !0, this._addItems(t, e, i)
        },
        disable: function() {
            this.enabled = !1
        },
        enable: function(t) {
            this.enabled = !0, t !== !1 && this.update()
        },
        remove: function(t) {
            if (t.length && t.jquery) {
                var e = this;
                return e._shrink(t, function() {
                    var e = this;
                    t.remove(), setTimeout(function() {
                        e.$items = e._getItems(), e.layout(), e._updateItemCount(), e._fire(v.EventType.REMOVED, [t, e]), t = null
                    }, 0)
                }), e._processStyleQueue(), e
            }
        },
        destroy: function() {
            var t = this;
            t.$window.off("." + t.unique), t.$el.removeClass(c).removeAttr("style").removeData(c), t.$items.removeAttr("style").removeClass("concealed filtered shuffle-item"), t.$window = null, t.$items = null, t.$el = null, t.$sizer = null, t.sizer = null, t.destroyed = !0
        }
    }, v.options = {
        group: p,
        speed: 250,
        easing: "ease-out",
        itemSelector: "",
        sizer: null,
        gutterWidth: 0,
        columnWidth: 0,
        delimeter: null,
        buffer: 0,
        initialSort: null,
        throttle: n,
        throttleTime: 300,
        sequentialFadeDelay: 150,
        supported: f
    }, v.settings = {
        $sizer: null,
        useSizer: !1,
        itemCss: {
            position: "absolute",
            top: 0,
            left: 0
        },
        offset: {
            top: 0,
            left: 0
        },
        revealAppendedDelay: 300,
        enabled: !0,
        destroyed: !1,
        initialized: !1,
        styleQueue: []
    }, t.fn.shuffle = function(e) {
        var i = Array.prototype.slice.call(arguments, 1);
        return this.each(function() {
            var s = t(this),
                n = s.data(c);
            n || (n = new v(s, e), s.data(c, n)), "string" == typeof e && n[e] && n[e].apply(n, i)
        })
    }, t.fn.sorted = function(e) {
        var s = t.extend({}, t.fn.sorted.defaults, e),
            n = this.get(),
            r = !1;
        return n.length ? s.randomize ? t.fn.sorted.randomize(n) : (s.by !== t.noop && null !== s.by && s.by !== i && n.sort(function(e, n) {
            if (r) return 0;
            var o = s.by(t(e)),
                a = s.by(t(n));
            return o === i && a === i ? (r = !0, 0) : "sortFirst" === o || "sortLast" === a ? -1 : "sortLast" === o || "sortFirst" === a ? 1 : a > o ? -1 : o > a ? 1 : 0
        }), r ? this.get() : (s.reverse && n.reverse(), n)) : []
    }, t.fn.sorted.defaults = {
        reverse: !1,
        by: null,
        randomize: !1
    }, t.fn.sorted.randomize = function(t) {
        var e, i, s = t.length;
        if (!s) return t;
        for (; --s;) i = Math.floor(Math.random() * (s + 1)), e = t[i], t[i] = t[s], t[s] = e;
        return t
    }, v
});