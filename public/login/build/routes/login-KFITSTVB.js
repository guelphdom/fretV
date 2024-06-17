import {
    a as X,
    b as Y
} from "/build/_shared/chunk-GVNIDDGT.js";
import "/build/_shared/chunk-52QUA465.js";
import {
    a as K,
    b as W
} from "/build/_shared/chunk-LPGT4KHH.js";
import "/build/_shared/chunk-FYOJSZQH.js";
import {
    a as Se
} from "/build/_shared/chunk-VZQVWFLO.js";
import {
    a as B
} from "/build/_shared/chunk-KFCK4DC4.js";
import {
    a as V,
    b as G
} from "/build/_shared/chunk-NUYH5JXW.js";
import {
    a as x
} from "/build/_shared/chunk-ULZO7HQ7.js";
import {
    a as A
} from "/build/_shared/chunk-JTW264IZ.js";
import "/build/_shared/chunk-QDPUWXIN.js";
import "/build/_shared/chunk-EKAWD43G.js";
import {
    Lc as Ce,
    a as O,
    b as Ae,
    c as P,
    d as Ne,
    fc as U,
    sb as M,
    tb as j,
    ub as Ie
} from "/build/_shared/chunk-LBZJ6WIX.js";
import "/build/_shared/chunk-26OF5URC.js";
import "/build/_shared/chunk-G5JY52TA.js";
import "/build/_shared/chunk-GN5FI7FR.js";
import "/build/_shared/chunk-5C6XY6QG.js";
import "/build/_shared/chunk-GP7FUFVM.js";
import {
    c as Le
} from "/build/_shared/chunk-57DP7WQB.js";
import {
    a as Fe,
    k as _,
    l as H,
    m as Te,
    p as u,
    q as Ee
} from "/build/_shared/chunk-I4QJWQOX.js";
import {
    d as q,
    g as Re
} from "/build/_shared/chunk-AG5EO474.js";
import {
    a as b
} from "/build/_shared/chunk-BWHACG72.js";
import "/build/_shared/chunk-PBT6S77D.js";
import "/build/_shared/chunk-IZJOZXHS.js";
import "/build/_shared/chunk-C4K24J7E.js";
import "/build/_shared/chunk-BM2U2S6E.js";
import "/build/_shared/chunk-GEJCALAD.js";
import "/build/_shared/chunk-7XDELMZB.js";
import "/build/_shared/chunk-MSGER76V.js";
import {
    a as ye
} from "/build/_shared/chunk-Z3FUFQEO.js";
import "/build/_shared/chunk-NGIKGSHE.js";
import {
    g as f,
    k as C
} from "/build/_shared/chunk-TF7C7MH2.js";
import {
    d as S,
    e as L
} from "/build/_shared/chunk-DPI6PCVH.js";
import {
    lb as D,
    rb as we,
    sa as R
} from "/build/_shared/chunk-MGB3JPCV.js";
import {
    b as ke
} from "/build/_shared/chunk-PIJMKZDS.js";
import "/build/_shared/chunk-5YEMDBLX.js";
import "/build/_shared/chunk-KKTF54FB.js";
import "/build/_shared/chunk-2SDAKG4K.js";
import {
    a as ve,
    b as h
} from "/build/_shared/chunk-KO3OK2JV.js";
import {
    e as s
} from "/build/_shared/chunk-ADMCF34Z.js";
Re();
Ee();
Ae();
Ne();
var a = s(ve());
var d = s(Le());
var $ = s(ke()),
    z = s(Fe()),
    Q = s(ye());
we();
Ce();
Te();
Ie();
var e = s(h()),
    Z = ({
        login: i,
        loginSuccess: n,
        loginFailed: c,
        authSSO: p,
        ssrTheme: v
    }) => {
        let {
            t: o
        } = L("common"), [m, ie] = (0, a.useState)({
            email: "",
            password: "",
            dontRemember: !1
        }), [se, ne] = (0, a.useState)(!1), [N, me] = (0, a.useState)({}), [F, le] = (0, a.useState)(!1), [g, l] = (0, a.useState)(!1), [de, ce] = (0, a.useState)(!1), [T, I] = (0, a.useState)(""), [ge, E] = (0, a.useState)(null), ue = () => {
            let t = {};
            K(m.email) || (t.email = o("auth.common.badEmailError")), W(m.password) || (t.password = o("auth.common.xCharsError", {
                amount: 8
            }));
            let r = (0, z.default)((0, $.default)(t));
            me(t), ne(r)
        };
        (0, a.useEffect)(() => {
            ue()
        }, [m]);
        let pe = t => {
                let {
                    target: {
                        value: r
                    }
                } = t;
                I(r), E(null)
            },
            y = (t, r) => {
                t || (l(!1), ce(r))
            },
            fe = t => {
                g || (l(!0), i(t, y))
            },
            he = async t => {
                if (t.preventDefault(), t.stopPropagation(), !g) {
                    l(!0);
                    try {
                        let {
                            accessToken: r,
                            refreshToken: w,
                            user: xe
                        } = await U(T);
                        H(), j(), _(r), M(w), n(xe)
                    } catch (r) {
                        (0, Q.default)(r) && c(r), console.error(`[ERROR] Failed to authenticate with 2FA: ${r}`), E(o("profileSettings.invalid2fa"))
                    }
                    I(""), l(!1)
                }
            },
            k = ({
                target: t
            }) => {
                let r = t.type === "checkbox" ? t.checked : t.value;
                ie(w => ({ ...w,
                    [t.name]: r
                }))
            },
            be = t => {
                t.preventDefault(), t.stopPropagation(), le(!0), se && fe(m)
            };
        return de ? (0, e.jsx)("div", {
            className: "min-h-page bg-gray-50 dark:bg-slate-900 flex flex-col py-6 px-4 sm:px-6 lg:px-8",
            children: (0, e.jsxs)("form", {
                className: "max-w-prose mx-auto",
                onSubmit: he,
                children: [(0, e.jsx)("h2", {
                    className: "mt-2 text-3xl font-bold text-gray-900 dark:text-gray-50",
                    children: o("auth.signin.2fa")
                }), (0, e.jsx)("p", {
                    className: "mt-4 text-base whitespace-pre-line text-gray-900 dark:text-gray-50",
                    children: o("auth.signin.2faDesc")
                }), (0, e.jsx)(x, {
                    type: "text",
                    label: o("profileSettings.enter2faToDisable"),
                    value: T,
                    placeholder: o("auth.signin.6digitCode"),
                    className: "mt-4",
                    onChange: pe,
                    disabled: g,
                    error: ge
                }), (0, e.jsxs)("div", {
                    className: "flex justify-between mt-3",
                    children: [(0, e.jsx)("div", {
                        className: "whitespace-pre-line text-sm text-gray-600 dark:text-gray-400",
                        children: !R && (0, e.jsx)(S, {
                            t: o,
                            i18nKey: "auth.signin.2faUnavailable",
                            components: {
                                ctl: (0, e.jsx)(f, {
                                    to: b.contact,
                                    className: "underline hover:text-gray-900 dark:hover:text-gray-200"
                                })
                            }
                        })
                    }), (0, e.jsx)(A, {
                        type: "submit",
                        loading: g,
                        primary: !0,
                        large: !0,
                        children: o("common.continue")
                    })]
                })]
            })
        }) : (0, e.jsxs)("div", {
            className: "bg-gray-50 dark:bg-slate-900 flex flex-col py-6 px-4 sm:px-6 lg:px-8",
            children: [(0, e.jsx)("div", {
                className: "sm:mx-auto sm:w-full sm:max-w-md",
                children: (0, e.jsx)("h2", {
                    className: "text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-50",
                    children: o("auth.signin.title")
                })
            }), (0, e.jsxs)("div", {
                className: "mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]",
                children: [(0, e.jsxs)("div", {
                    className: "bg-white dark:bg-slate-800/20 dark:ring-1 dark:ring-slate-800 px-6 py-12 shadow sm:rounded-lg sm:px-12",
                    children: [(0, e.jsxs)("form", {
                        className: "space-y-6",
                        onSubmit: be,
                        children: [(0, e.jsx)(x, {
                            name: "email",
                            id: "email",
                            type: "email",
                            label: o("auth.common.email"),
                            value: m.email,
                            className: "mt-4",
                            onChange: k,
                            error: F ? N.email : ""
                        }), (0, e.jsx)(x, {
                            name: "password",
                            id: "password",
                            type: "password",
                            label: o("auth.common.password"),
                            hint: o("auth.common.hint", {
                                amount: 8
                            }),
                            value: m.password,
                            className: "mt-4",
                            onChange: k,
                            error: F ? N.password : ""
                        }), (0, e.jsxs)("div", {
                            className: "flex items-center justify-between",
                            children: [(0, e.jsx)(B, {
                                checked: m.dontRemember,
                                onChange: k,
                                name: "dontRemember",
                                id: "dontRemember",
                                label: o("auth.common.noRemember")
                            }), (0, e.jsx)("div", {
                                className: "text-sm leading-6",
                                children: (0, e.jsx)(f, {
                                    to: b.reset_password,
                                    className: "font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-500",
                                    children: o("auth.signin.forgot")
                                })
                            })]
                        }), (0, e.jsx)(A, {
                            className: "w-full justify-center",
                            type: "submit",
                            loading: g,
                            primary: !0,
                            giant: !0,
                            children: o("auth.signin.button")
                        })]
                    }), !R && (0, e.jsxs)("div", {
                        children: [(0, e.jsxs)("div", {
                            className: "relative mt-10",
                            children: [(0, e.jsx)("div", {
                                className: "absolute inset-0 flex items-center",
                                "aria-hidden": "true",
                                children: (0, e.jsx)("div", {
                                    className: "w-full border-t border-gray-200 dark:border-gray-600"
                                })
                            }), (0, e.jsx)("div", {
                                className: "relative flex justify-center text-sm font-medium leading-6",
                                children: (0, e.jsx)("span", {
                                    className: "bg-white dark:bg-slate-800/20 px-6 text-gray-900 dark:text-gray-50",
                                    children: o("auth.common.orContinueWith")
                                })
                            })]
                        }), (0, e.jsxs)("div", {
                            className: "mt-6 grid grid-cols-2 gap-4",
                            children: [(0, e.jsx)(X, {
                                setIsLoading: l,
                                authSSO: p,
                                callback: y,
                                dontRemember: !1
                            }), (0, e.jsx)(Y, {
                                setIsLoading: l,
                                authSSO: p,
                                callback: y,
                                dontRemember: !1,
                                ssrTheme: v
                            })]
                        })]
                    })]
                }), (0, e.jsx)("p", {
                    className: "mt-10 mb-4 text-center text-sm text-gray-500 dark:text-gray-200",
                    children: (0, e.jsx)(S, {
                        t: o,
                        i18nKey: "auth.signin.notAMember",
                        components: {
                            url: (0, e.jsx)(f, {
                                to: b.signup,
                                className: "font-semibold leading-6 text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-500",
                                "aria-label": o("titles.signup")
                            })
                        },
                        values: {
                            amount: D
                        }
                    })
                })]
            })]
        })
    };
Z.propTypes = {
    login: d.default.func.isRequired,
    loginSuccess: d.default.func.isRequired,
    loginFailed: d.default.func.isRequired,
    authSSO: d.default.func.isRequired,
    ssrTheme: d.default.string.isRequired
};
var ee = (0, a.memo)(G(Z, V.notAuthenticated));
var De = i => ({
        login: (n, c) => {
            i(u.loginAsync(n, c))
        },
        loginSuccess: n => {
            i(O.loginSuccessful(n)), i(u.loadProjects()), i(u.loadSharedProjects())
        },
        loginFailed: n => {
            i(P.loginFailed({
                message: n
            }))
        },
        authSSO: (n, c, p, v) => {
            i(u.authSSO(n, c, p, v))
        }
    }),
    te = q(null, De)(ee);
var oe = te;
var qe = s(Se());
var ae = s(h());

function re() {
    let {
        theme: i
    } = C();
    return (0, ae.jsx)(oe, {
        ssrTheme: i
    })
}
export {
    re as
    default
};