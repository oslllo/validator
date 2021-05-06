"use strict";

const validator = require("validator");

/**
 * @name email
 * @description Test if `value` is an email.
 *
 * @since 0.0.1
 * @param {String} value `value` to test
 * @param {Object} [options = { allow_display_name: false, require_display_name: false, allow_utf8_local_part: true, require_tld: true, allow_ip_domain: false, domain_specific_validation: false, blacklisted_chars: '' }]
 * If allow_display_name is set to true, the validator
 * will also match Display Name <email-address>. If require_display_name is
 * set to true, the validator will reject strings without the format Display
 * Name <email-address>. If allow_utf8_local_part is set to false, the validator
 *  will not allow any non-English UTF8 character in email address' local part.
 * If require_tld is set to false, e-mail addresses without having TLD in their
 * domain will also be matched. If ignore_max_length is set to true, the validator
 * will not check for the standard max length of an email. If allow_ip_domain is
 * set to true, the validator will allow IP addresses in the host part. If
 * domain_specific_validation is true, some additional validation will be enabled,
 * e.g. disallowing certain syntactically valid email addresses that are rejected by GMail.
 * If `blacklisted_chars` recieves a string,then the validator will reject emails that include
 * any of the characters in the string, in the name part.
 * @return {Boolean} true if `value` is an email, false otherwise
 * @throws {TypeError} if `value` is not a `string`
 * @access public
 * @example
 *
 * is.email("foo@bar.com"); // => True
 * is.email("invalidemail@"); // => False
 *
 * is.email("foobar@gmail.com", { domain_specific_validation: true }); // => True
 * is.email("test@gmail.com", { domain_specific_validation: true }); // => False
 *
 */

module.exports = function (value, options) {
  return validator.isEmail(...arguments);
};
