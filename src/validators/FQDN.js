"use strict";

const validator = require("validator");

/**
 * @name FQDN
 * @description Test if `value` is a fully qualified domain name (e.g. domain.com).
 *
 * @since 0.0.1
 * @param {String} value `value` to test
 * @param {Object} [options = { require_tld: true, allow_underscores: false, allow_trailing_dot: false, , allow_numeric_tld: false  }] options object
 * @return {Boolean} true if `value` is a fully qualified domain name (e.g. domain.com), false otherwise
 * @throws {TypeError} if `value` is not a `string`
 * @access public
 * @example
 *
 * is.FQDN("domain.com"); // True
 * is.FQDN("256.0.0.0"); // False
 *
 * is.FQDN("example.com.", { allow_trailing_dot: true }); // True
 *
 */

module.exports = function (value, options) {
  return validator.isFQDN(...arguments);
};
