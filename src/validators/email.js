"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * email
		 * @description Test if `value` is an email.
		 *
		 * options is an object which defaults to { allow_display_name: false, require_display_name: false, allow_utf8_local_part: true, require_tld: true, allow_ip_domain: false, domain_specific_validation: false }. If allow_display_name is set to true, the validator will also match Display Name <email-address>. If require_display_name is set to true, the validator will reject strings without the format Display Name <email-address>. If allow_utf8_local_part is set to false, the validator will not allow any non-English UTF8 character in email address' local part. If require_tld is set to false, e-mail addresses without having TLD in their domain will also be matched. If ignore_max_length is set to true, the validator will not check for the standard max length of an email. If allow_ip_domain is set to true, the validator will allow IP addresses in the host part. If domain_specific_validation is true, some additional validation will be enabled, e.g. disallowing certain syntactically valid email addresses that are rejected by GMail.
		 *
		 * @param {String} value value to test
		 * @param {Object} options options object
		 * @return {Boolean} true if `value` is an email, false otherwise
		 * @api public
		 */
		email: function (value, options) {
			return this.validator.isEmail(...arguments);
		},
	});
};
