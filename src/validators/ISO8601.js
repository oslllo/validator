"use strict";

const validator = require("validator");

/**
 * @name ISO8601
 * @description Test if `value` is a valid ISO 8601 date; for additional checks for valid dates, e.g. invalidates dates like 2009-02-29, pass options object as a second parameter with options.strict = true.
 *
 * @since 0.0.1
 * @param {String} value `value` to test
 * @param {Object} options `options` is an object which defaults to
 * `{ strict: false, strictSeparator: false }`. If `strict` is true, date
 * strings with invalid dates like `2009-02-29` will be invalid. If `strictSeparator`
 * is true, date strings with date and time separated by anything other than a T will be invalid.
 * @return {Boolean} true if `value` is a valid ISO 8601, otherwise false.
 * @throws {TypeError} if `value` is not a `string`
 * @access public
 * @example
 *
 * is.ISO8601("2009-12T12:34"); // => True
 * is.ISO8601("200905"); // => False
 *
 * is.ISO8601("2000-02-29", { strict: true }); // => True
 * is.ISO8601("2010-02-30", { strict: true }); // => False
 *
 * is.ISO8601("2009-12T12:34", { strictSeparator: true }); // => True
 * is.ISO8601("200905", { strictSeparator: true }); // => False
 *
 */

module.exports = function (value, options) {
  return validator.isISO8601(...arguments);
};
