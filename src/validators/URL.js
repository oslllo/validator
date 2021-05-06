"use strict";

const validator = require("validator");

/**
 * @name URL
 * @description Test if `value` is an URL.
 * require_protocol - if set as true isURL will return false if protocol is not present in the URL.
 * require_valid_protocol - isURL will check if the URL's protocol is present in the protocols option.
 * protocols - valid protocols can be modified with this option.
 * require_host - if set as false isURL will not check if host is present in the URL.
 * require_port - if set as true isURL will check if port is present in the URL.
 * allow_protocol_relative_urls - if set as true protocol relative URLs will be allowed.
 * validate_length - if set as false isURL will skip string length validation (2083 characters is IE max URL length).
 *
 * @since 0.0.1
 * @param {String} value `value` to test
 * @param {Object} options is an object which defaults to { protocols: ['http','https','ftp'],
 * require_tld: true, require_protocol: false, require_host: true, require_valid_protocol: true,
 * allow_underscores: false, host_whitelist: false, host_blacklist: false,
 * allow_trailing_dot: false, allow_protocol_relative_urls: false, disallow_auth: false }.
 * @return {Boolean} true if `value' is an URL, otherwise false.
 * @throws {TypeError} if `value` is not a `string`
 * @access public
 * @example
 *
 * is.URL("foobar.com"); // => True
 * is.URL("foobar.com", { protocols: ["rtmp"] }); // => True
 * is.URL("foobar.com", { protocols: ["rtmp"] }); // => False
 *
 */

module.exports = function (value, options) {
  return validator.isURL(...arguments);
};
