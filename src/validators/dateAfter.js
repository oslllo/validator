"use strict";

const validator = require("validator");

/**
 * @name dateAfter
 * @description Test if `value` is a date that's after the specified date (defaults to now).
 *
 * @since 0.0.1
 * @param {String} value starting date
 * @param {String} [date = new Date().toString()] after date
 * @return {Boolean} true if `value` is a date that's after the specified date, false otherwise
 * @throws {TypeError} if `value` is not a `string`
 * @access public
 * @example
 *
 * is.dateAfter("2011-08-04", "2011-08-03"); // True
 * is.dateAfter("2010-07-02", "2011-08-03"); // False
 *
 */

module.exports = function (value, date) {
  return validator.isAfter(...arguments);
};
