!function(t,n){"use strict";var e=function(t,n){var e=t.find(".bdt-contact-form .without-recaptcha");if(e.length)return e.submit((function(t){return i(e),!1})),!1};function i(n){var e=window.ElementPackConfig.contact_form;return t.ajax({url:n.attr("action"),type:"POST",data:n.serialize(),beforeSend:function(){bdtUIkit.notification({message:"<div bdt-spinner></div> "+e.sending_msg,timeout:!1,status:"primary"})},success:function(e){var i=t(e).data("redirect"),o=t(e).data("external"),a=t(e).data("resetstatus");bdtUIkit.notification.closeAll();var r=bdtUIkit.notification({message:e});i&&"no"!=i&&bdtUIkit.util.on(document,"close",(function(t){t.detail[0]===r&&window.open(i,o)})),localStorage.setItem("bdtCouponCode",n.attr("id")),a&&"no"!==a&&n[0].reset()}}),!1}window.elementPackGICCB=function(){var n=window.ElementPackConfig.contact_form;return new Promise((function(e,o){void 0===grecaptcha&&(bdtUIkit.notification({message:"<div bdt-spinner></div> "+n.captcha_nd,timeout:!1,status:"warning"}),o());var a=grecaptcha.getResponse();a||(bdtUIkit.notification({message:"<div bdt-spinner></div> "+n.captcha_nr,timeout:!1,status:"warning"}),o());var r=t("textarea.g-recaptcha-response").filter((function(){return t(this).val()===a})).closest("form.bdt-contact-form-form"),c=r.attr("action");c&&""!==c&&i(r),grecaptcha.reset()}))},jQuery(window).on("elementor/frontend/init",(function(){elementorFrontend.hooks.addAction("frontend/element_ready/bdt-contact-form.default",e)}))}(jQuery,window.elementorFrontend);