import {
    a as Ne
} from "/build/_shared/chunk-OCXPQHWM.js";
import {
    a as N
} from "/build/_shared/chunk-7GX4ESDR.js";
import {
    a as k,
    b as d,
    c as F
} from "/build/_shared/chunk-RE5TXYDZ.js";
import {
    a as ye
} from "/build/_shared/chunk-63OPQ3LC.js";
import {
    a as X
} from "/build/_shared/chunk-W2XRJTGN.js";
import {
    U as M
} from "/build/_shared/chunk-PNYNM7FJ.js";
import {
    Qc as te,
    Rc as ke,
    a as K,
    b as pe,
    fa as V,
    ga as be,
    l as Q,
    o as P,
    qb as Z,
    rb as ve,
    x as H
} from "/build/_shared/chunk-LBZJ6WIX.js";
import {
    a as he
} from "/build/_shared/chunk-5C6XY6QG.js";
import {
    b as x,
    r as _,
    t as L
} from "/build/_shared/chunk-57DP7WQB.js";
import {
    p as ee,
    q as fe
} from "/build/_shared/chunk-I4QJWQOX.js";
import {
    c as R,
    f as q,
    g as xe
} from "/build/_shared/chunk-AG5EO474.js";
import {
    a as s
} from "/build/_shared/chunk-BWHACG72.js";
import {
    n as ue
} from "/build/_shared/chunk-PBT6S77D.js";
import {
    c as ge
} from "/build/_shared/chunk-7XDELMZB.js";
import {
    g as r
} from "/build/_shared/chunk-TF7C7MH2.js";
import {
    e as W
} from "/build/_shared/chunk-DPI6PCVH.js";
import {
    La as E,
    Oa as f,
    Pa as b,
    Y as S,
    ja as $,
    ka as G,
    rb as ce,
    sa as C
} from "/build/_shared/chunk-MGB3JPCV.js";
import {
    a as me,
    b as J
} from "/build/_shared/chunk-KO3OK2JV.js";
import {
    e as h
} from "/build/_shared/chunk-ADMCF34Z.js";
var p = h(me());
xe();
be();
var y = h(he()),
    ae = h(ye()),
    re = h(Ne()),
    se = h(ue()),
    oe = h(ge());
pe();
fe();
ve();
ce();
ke();
var e = h(J());
y.default.extend(ae.default);
y.default.extend(re.default);
var u = {
        ENDED: 1,
        ENDS_TODAY: 2,
        ENDS_TOMORROW: 3,
        ENDS_IN_X_DAYS: 4
    },
    ne = ({
        theme: l,
        t: g,
        switchTheme: m
    }) => (0, e.jsxs)(d, {
        as: "div",
        className: "relative ml-3",
        children: [(0, e.jsx)("div", {
            children: (0, e.jsxs)(d.Button, {
                className: "flex justify-center items-center font-semibold leading-6 text-base text-slate-800 hover:text-slate-700 dark:text-slate-200 dark:hover:text-white",
                children: [(0, e.jsx)("span", {
                    className: "sr-only",
                    children: g("header.switchTheme")
                }), l === "dark" ? (0, e.jsx)(L, {
                    className: "h-6 w-6 text-gray-200 hover:text-gray-300 cursor-pointer",
                    "aria-hidden": "true"
                }) : (0, e.jsx)(_, {
                    className: "h-6 w-6 text-slate-700 hover:text-slate-600 cursor-pointer",
                    "aria-hidden": "true"
                })]
            })
        }), (0, e.jsx)(M, {
            as: p.Fragment,
            enter: "transition ease-out duration-100",
            enterFrom: "transform opacity-0 scale-95",
            enterTo: "transform opacity-100 scale-100",
            leave: "transition ease-in duration-75",
            leaveFrom: "transform opacity-100 scale-100",
            leaveTo: "transform opacity-0 scale-95",
            children: (0, e.jsxs)(d.Items, {
                className: "absolute right-0 z-30 mt-2 w-36 min-w-max origin-top-right rounded-md bg-white dark:bg-slate-900 py-1 shadow-lg ring-1 ring-slate-200 dark:ring-slate-800 focus:outline-none",
                children: [(0, e.jsx)(d.Item, {
                    children: ({
                        active: n
                    }) => (0, e.jsxs)("div", {
                        className: x("flex w-full font-semibold cursor-pointer px-4 py-2 text-sm text-indigo-600 dark:text-gray-50 hover:bg-gray-100 hover:dark:bg-slate-800", {
                            "bg-gray-100 dark:bg-slate-800": n
                        }),
                        onClick: () => m("light"),
                        children: [(0, e.jsx)(L, {
                            className: "h-5 w-5 mr-2 text-indigo-600 dark:text-gray-200",
                            "aria-hidden": "true"
                        }), g("header.light")]
                    })
                }), (0, e.jsx)(d.Item, {
                    children: ({
                        active: n
                    }) => (0, e.jsxs)("div", {
                        className: x("flex w-full font-semibold cursor-pointer px-4 py-2 text-sm text-gray-700 dark:text-indigo-400 hover:bg-gray-100 hover:dark:bg-slate-800", {
                            "bg-gray-100 dark:bg-slate-800": n
                        }),
                        onClick: () => m("dark"),
                        children: [(0, e.jsx)(_, {
                            className: "h-5 w-5 mr-2 text-gray-200 dark:text-indigo-400",
                            "aria-hidden": "true"
                        }), g("header.dark")]
                    })
                })]
            })
        })]
    }),
    we = ({
        user: l,
        logoutHandler: g,
        t: m,
        onLanguageChange: n,
        language: a
    }) => (0, e.jsxs)(d, {
        as: "div",
        className: "relative ml-3",
        children: [(0, e.jsx)("div", {
            children: (0, e.jsxs)(d.Button, {
                className: "flex justify-center items-center font-semibold leading-6 text-base text-slate-800 hover:text-slate-700 dark:text-slate-200 dark:hover:text-white",
                children: [(0, e.jsx)("span", {
                    children: m("common.account")
                }), (0, e.jsx)(H, {
                    className: "h-4 w-4 ml-1 stroke-2",
                    "aria-hidden": "true"
                })]
            })
        }), (0, e.jsx)(M, {
            as: p.Fragment,
            enter: "transition ease-out duration-100",
            enterFrom: "transform opacity-0 scale-95",
            enterTo: "transform opacity-100 scale-100",
            leave: "transition ease-in duration-75",
            leaveFrom: "transform opacity-100 scale-100",
            leaveTo: "transform opacity-0 scale-95",
            children: (0, e.jsxs)(d.Items, {
                className: "absolute right-0 z-30 mt-2 w-60 min-w-max origin-top-right rounded-md bg-white dark:bg-slate-900 py-1 shadow-lg ring-1 ring-slate-200 dark:ring-slate-800 focus:outline-none",
                children: [(0, e.jsx)("div", {
                    className: "border-gray-200 dark:border-slate-700/50 border-b-[1px]",
                    children: (0, e.jsx)(d.Item, {
                        children: (0, e.jsxs)("p", {
                            className: "truncate py-2 px-4",
                            role: "none",
                            children: [(0, e.jsx)("span", {
                                className: "block text-xs text-gray-500 dark:text-gray-300",
                                role: "none",
                                children: m("header.signedInAs")
                            }), (0, e.jsx)("span", {
                                className: "mt-0.5 text-sm font-semibold text-gray-700 dark:text-gray-50",
                                role: "none",
                                children: l == null ? void 0 : l.email
                            })]
                        })
                    })
                }), (0, e.jsxs)("div", {
                    className: "border-gray-200 dark:border-slate-700/50 border-b-[1px]",
                    children: [(0, e.jsx)(d, {
                        as: "div",
                        children: ({
                            open: i
                        }) => (0, e.jsxs)(e.Fragment, {
                            children: [(0, e.jsx)("div", {
                                children: (0, e.jsxs)(d.Button, {
                                    className: "flex justify-between w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-50 hover:bg-gray-100 hover:dark:bg-slate-800",
                                    children: [(0, e.jsxs)("div", {
                                        className: "flex",
                                        children: [(0, e.jsx)(k, {
                                            className: "rounded-sm mr-1.5",
                                            country: b[a],
                                            size: 20,
                                            alt: "",
                                            "aria-hidden": "true"
                                        }), f[a]]
                                    }), (0, e.jsx)(H, {
                                        className: "-mr-1 ml-2 h-5 w-5 stroke-2",
                                        "aria-hidden": "true"
                                    })]
                                })
                            }), (0, e.jsx)(M, {
                                show: i,
                                as: p.Fragment,
                                enter: "transition ease-out duration-100",
                                enterFrom: "transform opacity-0 scale-95",
                                enterTo: "transform opacity-100 scale-100",
                                leave: "transition ease-in duration-75",
                                leaveFrom: "transform opacity-100 scale-100",
                                leaveTo: "transform opacity-0 scale-95",
                                children: (0, e.jsx)(d.Items, {
                                    className: "z-50 py-1 origin-top-right absolute right-0 mt-1 w-full min-w-max rounded-md shadow-lg bg-white dark:bg-slate-800 ring-1 ring-slate-200 dark:ring-slate-800 focus:outline-none",
                                    static: !0,
                                    children: (0, se.default)(E, o => (0, e.jsx)(d.Item, {
                                        children: (0, e.jsx)("span", {
                                            className: "text-gray-700 dark:text-gray-50 dark:bg-slate-800 block px-4 py-2 text-sm cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600",
                                            role: "menuitem",
                                            tabIndex: 0,
                                            onClick: () => n(o),
                                            children: (0, e.jsxs)("div", {
                                                className: "flex",
                                                children: [(0, e.jsx)("div", {
                                                    className: "pt-1",
                                                    children: (0, e.jsx)(k, {
                                                        className: "rounded-sm mr-1.5",
                                                        country: b[o],
                                                        size: 20,
                                                        alt: b[o]
                                                    })
                                                }), f[o]]
                                            })
                                        })
                                    }, o))
                                })
                            })]
                        })
                    }), (0, e.jsx)(d.Item, {
                        children: ({
                            active: i
                        }) => (0, e.jsx)(r, {
                            to: s.changelog,
                            className: x("block px-4 py-2 text-sm text-gray-700 dark:text-gray-50", {
                                "bg-gray-100 dark:bg-slate-800": i
                            }),
                            children: m("footer.changelog")
                        })
                    }), (0, e.jsx)(d.Item, {
                        children: ({
                            active: i
                        }) => (0, e.jsx)(r, {
                            to: s.contact,
                            className: x("block px-4 py-2 text-sm text-gray-700 dark:text-gray-50", {
                                "bg-gray-100 dark:bg-slate-800": i
                            }),
                            children: m("footer.support")
                        })
                    }), !C && (0, e.jsx)(d.Item, {
                        children: ({
                            active: i
                        }) => (0, e.jsx)(r, {
                            to: s.billing,
                            className: x("block px-4 py-2 text-sm text-gray-700 dark:text-gray-50", {
                                "bg-gray-100 dark:bg-slate-800": i
                            }),
                            children: m("common.billing")
                        })
                    })]
                }), (0, e.jsx)(d.Item, {
                    children: ({
                        active: i
                    }) => (0, e.jsx)(r, {
                        to: s.user_settings,
                        className: x("block px-4 py-2 text-sm text-gray-700 dark:text-gray-50", {
                            "bg-gray-100 dark:bg-slate-800": i
                        }),
                        children: m("common.accountSettings")
                    })
                }), (0, e.jsx)(d.Item, {
                    children: ({
                        active: i
                    }) => (0, e.jsx)("p", {
                        className: x("cursor-pointer px-4 py-2 text-sm text-gray-700 dark:text-gray-50", {
                            "bg-gray-100 dark:bg-slate-800": i
                        }),
                        onClick: g,
                        children: m("common.logout")
                    })
                })]
            })
        })]
    }),
    Te = ({
        user: l,
        switchTheme: g,
        theme: m,
        onLanguageChange: n,
        rawStatus: a,
        status: i,
        t: o,
        language: v,
        logoutHandler: c,
        colourBackground: j
    }) => (0, e.jsx)("header", {
        className: x("relative overflow-x-clip", {
            "bg-gray-50 dark:bg-slate-900 border-b border-gray-200 dark:border-slate-600/40": j
        }),
        children: (0, e.jsxs)("nav", {
            className: "mx-auto px-4 sm:px-6 lg:px-8",
            "aria-label": "Top",
            children: [(0, e.jsxs)("div", {
                className: "w-full py-4 flex items-center justify-between border-b border-indigo-500 dark:border-slate-600 lg:border-none",
                children: [(0, e.jsxs)("div", {
                    className: "flex items-center",
                    children: [(0, e.jsxs)(r, {
                        to: s.main,
                        children: [(0, e.jsx)("span", {
                            className: "sr-only",
                            children: "Swetrix"
                        }), (0, e.jsx)("img", {
                            className: "-translate-y-[3px]",
                            height: "28px",
                            width: "126.35px",
                            src: m === "dark" ? "/assets/logo_white.png" : "/assets/logo_blue.png",
                            alt: ""
                        })]
                    }), (0, e.jsxs)("div", {
                        className: "hidden ml-10 space-x-1 lg:flex gap-4",
                        children: [(l == null ? void 0 : l.planCode) === "trial" && (0, e.jsx)(r, {
                            to: s.billing,
                            className: x("font-semibold leading-6 text-base", {
                                "text-amber-600 hover:text-amber-500": a === u.ENDS_IN_X_DAYS,
                                "text-rose-600 hover:text-rose-500": a === u.ENDS_TODAY || a === u.ENDS_TOMORROW || a === u.ENDED
                            }),
                            children: i
                        }, "TrialNotification"), (l == null ? void 0 : l.planCode) === "none" && (0, e.jsx)(r, {
                            to: s.billing,
                            className: "font-semibold leading-6 text-base text-rose-600 hover:text-rose-500",
                            children: o("billing.inactive")
                        }, "NoSubscription"), (0, e.jsx)(r, {
                            to: s.blog,
                            className: "font-semibold leading-6 text-base text-slate-800 hover:text-slate-700 dark:text-slate-200 dark:hover:text-white",
                            children: o("footer.blog")
                        }), (0, e.jsx)("a", {
                            href: S,
                            className: "font-semibold leading-6 text-base text-slate-800 hover:text-slate-700 dark:text-slate-200 dark:hover:text-white",
                            target: "_blank",
                            rel: "noreferrer noopener",
                            children: o("common.docs")
                        }), (0, e.jsx)(r, {
                            to: s.dashboard,
                            className: "font-semibold leading-6 text-base text-slate-800 hover:text-slate-700 dark:text-slate-200 dark:hover:text-white",
                            children: o("common.dashboard")
                        })]
                    })]
                }), (0, e.jsxs)("div", {
                    className: "hidden md:flex justify-center items-center flex-wrap ml-1 md:ml-10 space-y-1 sm:space-y-0 space-x-2 md:space-x-4",
                    children: [(0, e.jsx)(ne, {
                        theme: m,
                        switchTheme: g,
                        t: o
                    }), (0, e.jsx)(we, {
                        user: l,
                        logoutHandler: c,
                        onLanguageChange: n,
                        language: v,
                        t: o
                    })]
                }), (0, e.jsxs)("div", {
                    className: "md:hidden flex justify-center items-center",
                    children: [m === "dark" ? (0, e.jsx)("div", {
                        className: "transition-all duration-1000 ease-in-out rotate-180",
                        children: (0, e.jsx)(L, {
                            onClick: () => g(),
                            className: "h-10 w-10 text-gray-200 hover:text-gray-300 cursor-pointer"
                        })
                    }) : (0, e.jsx)("div", {
                        className: "transition-all duration-1000 ease-in-out",
                        children: (0, e.jsx)(_, {
                            onClick: () => g(),
                            className: "h-10 w-10 text-slate-700 hover:text-slate-600 cursor-pointer"
                        })
                    }), (0, e.jsxs)(N.Button, {
                        className: "bg-white dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-gray-200 rounded-md p-2 ml-3 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500",
                        children: [(0, e.jsx)("span", {
                            className: "sr-only",
                            children: o("common.openMenu")
                        }), (0, e.jsx)(P, {
                            className: "h-6 w-6",
                            "aria-hidden": "true"
                        })]
                    })]
                })]
            }), (0, e.jsxs)("div", {
                className: "py-4 flex gap-4 flex-wrap justify-center space-x-2 lg:hidden",
                children: [(0, e.jsx)(r, {
                    to: s.blog,
                    className: "font-semibold leading-6 text-base text-slate-800 hover:text-slate-700 dark:text-slate-200 dark:hover:text-white",
                    children: o("footer.blog")
                }), (0, e.jsx)("a", {
                    href: S,
                    className: "font-semibold leading-6 text-base text-slate-800 hover:text-slate-700 dark:text-slate-200 dark:hover:text-white",
                    target: "_blank",
                    rel: "noreferrer noopener",
                    children: o("common.docs")
                }), (0, e.jsx)(r, {
                    to: s.dashboard,
                    className: "font-semibold leading-6 text-base text-slate-800 hover:text-slate-700 dark:text-slate-200 dark:hover:text-white",
                    children: o("common.dashboard")
                })]
            })]
        })
    }),
    Ie = ({
        switchTheme: l,
        theme: g,
        onLanguageChange: m,
        t: n,
        language: a,
        colourBackground: i,
        refPage: o
    }) => (0, e.jsx)("header", {
        className: x("relative overflow-x-clip", {
            "bg-gray-50 dark:bg-slate-900 border-b border-gray-200 dark:border-slate-600/40": i
        }),
        children: (0, e.jsxs)("nav", {
            className: "mx-auto px-4 sm:px-6 lg:px-8",
            "aria-label": "Top",
            children: [(0, e.jsxs)("div", {
                className: "w-full py-4 flex items-center justify-between border-b border-indigo-500 dark:border-slate-600 lg:border-none",
                children: [(0, e.jsxs)("div", {
                    className: "flex items-center",
                    children: [o ? (0, e.jsxs)("span", {
                        children: [(0, e.jsx)("span", {
                            className: "sr-only",
                            children: "Swetrix"
                        }), (0, e.jsx)("img", {
                            className: "-translate-y-[3px]",
                            height: "28px",
                            width: "126.35px",
                            src: g === "dark" ? "/assets/logo_white.png" : "/assets/logo_blue.png",
                            alt: ""
                        })]
                    }) : (0, e.jsxs)(r, {
                        to: s.main,
                        children: [(0, e.jsx)("span", {
                            className: "sr-only",
                            children: "Swetrix"
                        }), (0, e.jsx)("img", {
                            className: "-translate-y-[3px]",
                            height: "28px",
                            width: "126.35px",
                            src: g === "dark" ? "/assets/logo_white.png" : "/assets/logo_blue.png",
                            alt: ""
                        })]
                    }), !o && (0, e.jsxs)("div", {
                        className: "hidden ml-10 space-x-1 lg:flex gap-4 items-center",
                        children: [(0, e.jsx)(r, {
                            to: s.blog,
                            className: "font-semibold leading-6 text-base text-slate-800 hover:text-slate-700 dark:text-slate-200 dark:hover:text-white",
                            children: n("footer.blog")
                        }), !C && (0, e.jsx)(r, {
                            to: `${s.main}#pricing`,
                            className: "font-semibold leading-6 text-base text-slate-800 hover:text-slate-700 dark:text-slate-200 dark:hover:text-white",
                            children: n("common.pricing")
                        }, "Pricing"), (0, e.jsx)("a", {
                            href: S,
                            className: "font-semibold leading-6 text-base text-slate-800 hover:text-slate-700 dark:text-slate-200 dark:hover:text-white",
                            target: "_blank",
                            rel: "noreferrer noopener",
                            children: n("common.docs")
                        })]
                    })]
                }), (0, e.jsxs)("div", {
                    className: "hidden md:flex justify-center items-center flex-wrap ml-1 md:ml-10 space-y-1 sm:space-y-0 space-x-2 md:space-x-4",
                    children: [(0, e.jsx)(F, {
                        items: E,
                        buttonClassName: "!py-0 inline-flex items-center [&>svg]:w-4 [&>svg]:h-4 [&>svg]:mr-0 [&>svg]:ml-1 text-sm font-semibold leading-6 text-base text-slate-800 hover:text-slate-700 dark:text-slate-200 dark:hover:text-white",
                        selectItemClassName: "text-gray-700 block px-4 py-2 text-base cursor-pointer hover:bg-gray-200 dark:text-gray-50 dark:bg-slate-800 dark:hover:bg-slate-700",
                        title: (0, e.jsxs)(e.Fragment, {
                            children: [(0, e.jsx)(k, {
                                className: "rounded-sm mr-1.5",
                                country: b[a],
                                size: 18,
                                alt: "",
                                "aria-hidden": "true"
                            }), f[a]]
                        }),
                        labelExtractor: v => (0, e.jsxs)("div", {
                            className: "flex",
                            children: [(0, e.jsx)("div", {
                                className: "pt-1",
                                children: (0, e.jsx)(k, {
                                    className: "rounded-sm mr-1.5",
                                    country: b[v],
                                    size: 21,
                                    alt: b[v]
                                })
                            }), f[v]]
                        }),
                        onSelect: m,
                        headless: !0
                    }), (0, e.jsx)(ne, {
                        theme: g,
                        switchTheme: l,
                        t: n
                    }), !o && (0, e.jsxs)(e.Fragment, {
                        children: [(0, e.jsx)("span", {
                            className: "text-slate-700",
                            children: "|"
                        }), (0, e.jsxs)(r, {
                            to: s.signin,
                            className: "flex items-center font-semibold leading-6 text-base text-slate-800 hover:text-slate-700 dark:text-slate-200 dark:hover:text-white",
                            children: [n("auth.common.signin"), (0, e.jsx)(Q, {
                                className: "ml-1 stroke-2 h-4 w-4 mt-[1px]"
                            })]
                        })]
                    })]
                }), (0, e.jsxs)("div", {
                    className: "md:hidden flex justify-center items-center",
                    children: [g === "dark" ? (0, e.jsx)("div", {
                        className: "transition-all duration-1000 ease-in-out rotate-180",
                        children: (0, e.jsx)(L, {
                            onClick: () => l(),
                            className: "h-10 w-10 text-gray-200 hover:text-gray-300 cursor-pointer"
                        })
                    }) : (0, e.jsx)("div", {
                        className: "transition-all duration-1000 ease-in-out",
                        children: (0, e.jsx)(_, {
                            onClick: () => l(),
                            className: "h-10 w-10 text-slate-700 hover:text-slate-600 cursor-pointer"
                        })
                    }), (0, e.jsxs)(N.Button, {
                        className: "bg-white dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-gray-200 rounded-md p-2 ml-3 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500",
                        children: [(0, e.jsx)("span", {
                            className: "sr-only",
                            children: n("common.openMenu")
                        }), (0, e.jsx)(P, {
                            className: "h-6 w-6",
                            "aria-hidden": "true"
                        })]
                    })]
                })]
            }), !o && (0, e.jsxs)("div", {
                className: "py-4 flex gap-4 flex-wrap justify-center space-x-2 lg:hidden",
                children: [(0, e.jsx)(r, {
                    to: s.blog,
                    className: "flex items-center font-semibold leading-6 text-base text-slate-800 hover:text-slate-700 dark:text-slate-200 dark:hover:text-white",
                    children: n("footer.blog")
                }), (0, e.jsx)(r, {
                    to: `${s.main}#pricing`,
                    className: "flex items-center font-semibold leading-6 text-base text-slate-800 hover:text-slate-700 dark:text-slate-200 dark:hover:text-white",
                    children: n("common.pricing")
                }, "Pricing"), (0, e.jsx)("a", {
                    href: S,
                    className: "flex items-center font-semibold leading-6 text-base text-slate-800 hover:text-slate-700 dark:text-slate-200 dark:hover:text-white",
                    target: "_blank",
                    rel: "noreferrer noopener",
                    children: n("common.docs")
                })]
            })]
        })
    }),
    Se = ({
        ssrTheme: l,
        authenticated: g,
        refPage: m,
        transparent: n
    }) => {
        let {
            t: a,
            i18n: {
                language: i
            }
        } = W("common"), o = te(), v = q(), {
            user: c
        } = R(t => t.auth), j = R(t => t.ui.theme.theme), w = (0, p.useRef)(), D = $ ? j : l, [T, z] = (0, p.useMemo)(() => {
            let {
                trialEndDate: t
            } = c || {};
            if (!t) return [null, null];
            let I = y.default.utc(),
                O = y.default.utc(t),
                A = O.diff(I);
            if (A < 0) return [u.ENDED, a("pricing.trialEnded")];
            if (A < y.default.duration(1, "day").asMilliseconds()) {
                let le = O.isSame(I, "day"),
                    de = O.isSame(I.add(1, "day"), "day");
                if (le) return [u.ENDS_TODAY, a("pricing.trialEndsToday")];
                if (de) return [u.ENDS_TOMORROW, a("pricing.trialEndsTomorrow")]
            }
            let ie = Math.round(y.default.duration(A).asDays());
            return [u.ENDS_IN_X_DAYS, a("pricing.xTrialDaysLeft", {
                amount: ie
            })]
        }, [c, a]), Y = () => {
            o(K.logout()), v(ee.logout(!1, !1))
        }, U = t => {
            let I = (0, oe.default)(G, t) && t || (D === "dark" ? "light" : "dark");
            o(Z.setTheme(I))
        }, B = t => {
            X.changeLanguage(t)
        };
        return (0, e.jsxs)(N, {
            className: "relative",
            children: [g ? (0, e.jsx)(Te, {
                user: c,
                rawStatus: T || "",
                status: z || "",
                logoutHandler: Y,
                switchTheme: U,
                theme: D,
                onLanguageChange: B,
                language: i,
                colourBackground: !n,
                t: a
            }) : (0, e.jsx)(Ie, {
                switchTheme: U,
                theme: D,
                onLanguageChange: B,
                language: i,
                colourBackground: !n,
                refPage: m,
                t: a
            }), (0, e.jsx)(M, {
                as: p.Fragment,
                enter: "duration-200 ease-out",
                enterFrom: "opacity-0 scale-95",
                enterTo: "opacity-100 scale-100",
                leave: "duration-100 ease-in",
                leaveFrom: "opacity-100 scale-100",
                leaveTo: "opacity-0 scale-95",
                children: (0, e.jsx)(N.Panel, {
                    focus: !0,
                    className: "absolute top-0 z-50 inset-x-0 p-2 transition transform origin-top-right md:hidden",
                    children: (0, e.jsxs)("div", {
                        className: "rounded-lg shadow-lg ring-1 ring-slate-200 dark:ring-slate-800 bg-white dark:bg-gray-750 divide-y-2 divide-gray-50 dark:divide-gray-800",
                        children: [(0, e.jsx)("div", {
                            className: "pt-5 pb-6 px-5",
                            children: (0, e.jsxs)("div", {
                                className: "flex items-center justify-between",
                                children: [(0, e.jsxs)(r, {
                                    to: s.main,
                                    children: [(0, e.jsx)("span", {
                                        className: "sr-only",
                                        children: "Swetrix"
                                    }), (0, e.jsx)("img", {
                                        height: "28px",
                                        width: "126.35px",
                                        src: D === "dark" ? "/assets/logo_white.png" : "/assets/logo_blue.png",
                                        alt: ""
                                    })]
                                }), (0, e.jsxs)(N.Button, {
                                    ref: w,
                                    className: "bg-white dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-gray-200 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500",
                                    children: [(0, e.jsx)("span", {
                                        className: "sr-only",
                                        children: a("common.closeMenu")
                                    }), (0, e.jsx)(V, {
                                        className: "h-6 w-6",
                                        "aria-hidden": "true"
                                    })]
                                })]
                            })
                        }), (0, e.jsx)("div", {
                            className: "py-6 px-5 space-y-6",
                            children: (0, e.jsxs)("div", {
                                className: "grid grid-cols-1 gap-y-4",
                                children: [(0, e.jsx)(F, {
                                    items: E,
                                    buttonClassName: "flex items-center w-full rounded-md border border-gray-300 shadow-sm px-3 md:px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500 dark:text-gray-50 dark:border-gray-800 dark:bg-slate-800 dark:hover:bg-slate-700",
                                    selectItemClassName: "text-gray-700 block px-4 py-2 text-base cursor-pointer hover:bg-gray-200 dark:text-gray-50 dark:bg-slate-800 dark:hover:bg-slate-700",
                                    title: (0, e.jsxs)(e.Fragment, {
                                        children: [(0, e.jsx)(k, {
                                            className: "rounded-sm mr-1.5",
                                            country: b[i],
                                            size: 21,
                                            alt: "",
                                            "aria-hidden": "true"
                                        }), f[i]]
                                    }),
                                    labelExtractor: t => (0, e.jsxs)("div", {
                                        className: "flex",
                                        children: [(0, e.jsx)("div", {
                                            className: "pt-1",
                                            children: (0, e.jsx)(k, {
                                                className: "rounded-sm mr-1.5",
                                                country: b[t],
                                                size: 21,
                                                alt: b[t]
                                            })
                                        }), f[t]]
                                    }),
                                    onSelect: B
                                }), g ? (0, e.jsxs)(e.Fragment, {
                                    children: [(c == null ? void 0 : c.planCode) === "trial" && (0, e.jsx)(r, {
                                        to: s.billing,
                                        className: x("font-semibold leading-6 text-base text-center", {
                                            "text-amber-600 hover:text-amber-500": T === u.ENDS_IN_X_DAYS,
                                            "text-rose-600 hover:text-rose-500": T === u.ENDS_TODAY || T === u.ENDS_TOMORROW || T === u.ENDED
                                        }),
                                        children: z
                                    }, "TrialNotification"), (c == null ? void 0 : c.planCode) === "none" && (0, e.jsx)(r, {
                                        to: s.billing,
                                        className: "font-semibold leading-6 text-base text-rose-600 hover:text-rose-500",
                                        children: a("billing.inactive")
                                    }, "NoSubscription"), !C && (c == null ? void 0 : c.planCode) !== "none" && (c == null ? void 0 : c.planCode) !== "trial" && (0, e.jsx)(r, {
                                        to: s.billing,
                                        className: "w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 dark:text-gray-50 dark:bg-slate-800 dark:hover:bg-slate-700",
                                        children: a("common.billing")
                                    }, "Billing"), (0, e.jsx)("div", {
                                        onClick: () => {
                                            var t;
                                            return (t = w.current) == null ? void 0 : t.click()
                                        },
                                        children: (0, e.jsx)(r, {
                                            to: s.user_settings,
                                            className: "w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 dark:text-gray-50 dark:bg-slate-800 dark:hover:bg-slate-700",
                                            children: a("common.accountSettings")
                                        })
                                    }), (0, e.jsx)("div", {
                                        onClick: () => {
                                            var t;
                                            return (t = w.current) == null ? void 0 : t.click()
                                        },
                                        children: (0, e.jsx)(r, {
                                            to: "#",
                                            className: "w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-indigo-600 bg-gray-50 hover:bg-indigo-50 dark:text-gray-50 dark:bg-slate-800 dark:hover:bg-slate-700",
                                            onClick: Y,
                                            children: a("common.logout")
                                        })
                                    })]
                                }) : (0, e.jsxs)(e.Fragment, {
                                    children: [(0, e.jsx)("div", {
                                        onClick: () => {
                                            var t;
                                            return (t = w.current) == null ? void 0 : t.click()
                                        },
                                        children: (0, e.jsx)(r, {
                                            to: s.signin,
                                            className: "w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-indigo-600 bg-gray-50 hover:bg-indigo-50",
                                            children: a("auth.common.signin")
                                        })
                                    }), (0, e.jsx)("div", {
                                        onClick: () => {
                                            var t;
                                            return (t = w.current) == null ? void 0 : t.click()
                                        },
                                        children: (0, e.jsx)(r, {
                                            to: s.signup,
                                            className: "w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700",
                                            "aria-label": a("titles.signup"),
                                            children: a("common.getStarted")
                                        })
                                    })]
                                })]
                            })
                        })]
                    })
                })
            })]
        })
    },
    Je = (0, p.memo)(Se);
export {
    Je as a
};