import {
    s as h
} from "/build/_shared/chunk-26OF5URC.js";
import {
    g
} from "/build/_shared/chunk-GP7FUFVM.js";
import {
    a as e
} from "/build/_shared/chunk-BWHACG72.js";
import {
    c as l
} from "/build/_shared/chunk-7XDELMZB.js";
import {
    E as o,
    rb as u
} from "/build/_shared/chunk-MGB3JPCV.js";
import {
    e as a
} from "/build/_shared/chunk-ADMCF34Z.js";
var m = a(l()),
    p = a(g()),
    f = a(h());
u();
var P = (s, i, n) => {
    let r = {
        title: s("titles.main")
    };
    if (!i && !n) return {
        title: r.title,
        prefixLessTitle: r.title
    };
    let c = n || new URL(i).pathname,
        t = r;
    switch (c) {
        case e.signin:
            t = {
                title: s("titles.signin")
            };
            break;
        case e.signup:
            t = {
                title: s("titles.signup")
            };
            break;
        case e.reset_password:
        case e.new_password_form:
            t = {
                title: s("titles.recovery")
            };
            break;
        case e.confirm_share:
        case e.confirm_subcription:
        case e.transfer_confirm:
        case e.transfer_reject:
            t = {
                title: s("titles.invitation")
            };
            break;
        case e.dashboard:
            t = {
                title: s("titles.dashboard")
            };
            break;
        case e.user_settings:
            t = {
                title: s("titles.profileSettings")
            };
            break;
        case e.verify:
        case e.change_email:
            t = {
                title: s("titles.verification")
            };
            break;
        case e.new_project:
        case e.new_captcha:
            t = {
                title: s("project.settings.create")
            };
            break;
        case e.billing:
            t = {
                title: s("titles.billing")
            };
            break;
        case e.privacy:
            t = {
                title: "Privacy Policy"
            };
            break;
        case e.cookiePolicy:
            t = {
                title: "Cookie Policy"
            };
            break;
        case e.terms:
            t = {
                title: "Terms and Conditions"
            };
            break;
        case e.contact:
            t = {
                title: s("titles.contact")
            };
            break;
        case e.changelog:
            t = {
                title: s("titles.changelog")
            };
            break;
        case e.about:
            t = {
                title: "About us"
            };
            break;
        case e.press:
            t = {
                title: s("titles.press")
            };
            break;
        case e.socialised:
            t = {
                title: s("titles.socialisation")
            };
            break;
        case e.open:
            t = {
                title: s("titles.open")
            };
            break;
        default:
            break
    }
    return t.prefixLessTitle = t.title, t.title += ` ${o}`, t
};
export {
    P as a
};