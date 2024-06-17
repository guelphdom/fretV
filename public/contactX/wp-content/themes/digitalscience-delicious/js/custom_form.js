var $ = jQuery.noConflict();

var recaptchaCallback = function() {
    console.log('recaptcha is ready'); // not showing
    grecaptcha.render("recaptcha", {
        sitekey: '6LfSRg8TAAAAACyeBc1tKcxZ1tE1SsaYvMFflaZ3',
        callback: function() {
            console.log('recaptcha callback');
            $('#captcha_error').remove();
        }
    });
}

jQuery(function(document) {

    jQuery("#phone").mask("(999)999 9999");
    jQuery("#school_contact_phone").mask("(999)999 9999");

});

$(document).on("ready", function() {

    $.extend({
        getUrlVars: function() {
            var vars = [],
                hash;
            var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
            for (var i = 0; i < hashes.length; i++) {
                hash = hashes[i].split('=');
                vars.push(hash[0]);
                vars[hash[0]] = hash[1];
            }
            return vars;
        },
        getUrlVar: function(name) {
            return $.getUrlVars()[name];
        }
    });



    contact();
    refer_school_form();

});

function contact() {
    var $form = $("#contact_us_form");

    $form.validate({
        rules: {
            name: {
                required: true
            },
            email: {
                required: true,
                email: true
            },

            your_school: {
                required: true,
            },

            message: {
                required: true,
            }
        },
        messages: {
            email: "Oops, that email doesn't seem right. Try again?",
            name: "What's your name? This one should be easy!",
            your_school: "We are excited to hear your school name!",
            message: "Please let us know, how can we assist you?"
        },
        errorPlacement: function(error, element) {
            if (element.attr("id") == "chkTerms") {
                error.appendTo($('#chkTerms_error_box'));
            } else {
                error.appendTo(element.parent());
            }
        },
        highlight: function(element, errorClass, validClass) {
            if ($(element).attr('type') === "radio") {
                this.findByName($(element).attr('name')).addClass(errorClass).removeClass(validClass);
            } else {
                $(element).addClass(errorClass).removeClass(validClass);
                $(element).addClass("errored");
            }
        },
        unhighlight: function(element, errorClass, validClass) {
            if ($(element).attr('type') === "radio") {
                this.findByName($(element).attr('name')).removeClass(errorClass).addClass(validClass);
            } else {
                $(element).removeClass(errorClass).addClass(validClass);
                $(element).removeClass("errored");
            }
        },
        submitHandler: function(form) {
            values = $(form).serializeArray();
            $(".ajax-loader").show();
            $("input[type='submit']").attr('disabled', 'disabled');
            jQuery.ajax({
                url: $(form).attr('action'),
                type: "POST",
                data: values,
                success: function(data) {
                    console.log(data);
                    if (data.hasOwnProperty('success')) {
                        $("#message_error").html("").hide();
                        $("#message_success").show();
                        $("#contact_us_form").find("input[type='text']").val("");
                        $("#contact_us_form").find("input[type='email']").val("");
                        $("#contact_us_form").find("textarea").val("");
                        window.location.href = "thanks-for-contacting-us/";
                    } else if (data.hasOwnProperty('error')) {
                        $("input[type='submit']").removeAttr('disabled');
                        $(".g-recaptcha").prepend("<label id='captcha_error' class='error'>" + data.error + "</label>");
                    }
                },
                error: function(xhr, status, error) {
                    console.log(xhr);
                    $("#message_error").html("Something went wrong").show();
                    $("input[type='submit']").removeAttr('disabled');
                },
                complete: function(xhr, status, error) {
                    $(".ajax-loader").hide();
                    $("input[type='submit']").removeAttr('disabled');
                }
            });
        }
    });

}




function refer_school_form() {
    var $form = $("#referschool_form");

    $form.validate({
        rules: {
            name: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            confirm_email: {
                required: true,
                email: true,
                equalTo: '#email'
            },
            school_name: {
                required: true
            },
            phone: {
                required: true
            },
            school_zip: {
                required: true
            },
            school_contact_name: {
                required: true
            },
            school_contact_email: {
                required: true,
                email: true
            },
            school_contact_phone: {
                required: true
            }
        },
        errorPlacement: function(error, element) {
            if (element.attr("id") == "chkTerms") {
                error.appendTo($('#chkTerms_error_box'));
            } else {
                error.prependTo(element.parent());
            }
        },
        messages: {
            email: "Oops, that email doesn't seem right. Try again?",
            confirm_email: "To make sure we've got it right, these two emails need to match.",
            name: "What's your name? This one should be easy!",
            school_name: "Whoops! The School Name is required here.",
            phone: "To us you're number 1. But what's your phone number? ",
            school_zip: "Entering a zipcode helps us know we've got the right school.",
            school_contact_name: "Know someone at the school? Help us help them by providing a contact.",
            school_contact_email: "We need an email to get your school registered. We won't share or use this in any other way.",
            school_contact_phone: "We need a phone number for your contact. "
        },
        highlight: function(element, errorClass, validClass) {
            if ($(element).attr('type') === "radio") {
                this.findByName($(element).attr('name')).addClass(errorClass).removeClass(validClass);
            } else {
                $(element).addClass(errorClass).removeClass(validClass);
                $(element).addClass("errored");
            }
        },
        unhighlight: function(element, errorClass, validClass) {
            if ($(element).attr('type') === "radio") {
                this.findByName($(element).attr('name')).removeClass(errorClass).addClass(validClass);
            } else {
                $(element).removeClass(errorClass).addClass(validClass);
                $(element).removeClass("errored");
            }
        },
        submitHandler: function(form) {
            $(".ajax-loader").show();
            $("input[type='submit']").attr('disabled', 'disabled');
            values = $(form).serializeArray();
            jQuery.ajax({
                url: $(form).attr('action'),
                type: "POST",
                data: values,
                success: function(data) {
                    if (data.hasOwnProperty('notice')) {
                        $("#message_error").html("").hide();
                        $("#message_success").show();
                        $("#referschool_form").find("input[type='text'],input[type='number'],input[type='email']").val("");
                        window.location.href = "thanks-for-referring-a-school/";
                    } else if (data.hasOwnProperty('error')) {
                        result = data.error;
                        $("input[type='submit']").removeAttr('disabled');
                        captcha_error = result.indexOf('captcha');
                        if (captcha_error != -1) {
                            $(".g-recaptcha").prepend("<label id='captcha_error' class='error'>" + data.error + "</label>");
                        } else {
                            $("#message_error").html(data.error).show();
                        }
                    } else {
                        $("#message_error").html("Something went wrong.").show();
                    }
                },
                error: function(xhr, status, error) {
                    console.log(xhr);
                    $("#message_error").html("Something went wrong").show();
                },
                complete: function() {
                    $(".ajax-loader").hide();
                }
            });
        }
    });
}