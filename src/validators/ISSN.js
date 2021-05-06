"use strict";

const validator = require("validator");

/**
 * @name ISSN
 * @description Test if `value` is an ISSN.
 *
 * @since 0.0.1
 * @param {String} value `value` to test
 * @param {object} [options = { case_sensitive: false, require_hyphen: false }] options object.
 * If case_sensitive is true, ISSNs with a lowercase 'x' as the check digit are rejected.
 * @return {Boolean} true if `value` is an ISSN, otherwise false.
 * @throws {TypeError} if `value` is not a `string`
 * @access public
 * @example
 *
 * is.ISSN("0000-0000"); // => True
 * is.ISSN("0378-5954"); // => False
 *
 * is.ISSN("2434-561X", { case_sensitive: true }); // => True
 * is.ISSN("2434561x", { case_sensitive: true }); // => False
 *
 */

module.exports = function (value, options) {
  return validator.isISSN(...arguments);
};
