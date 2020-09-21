"use strict";

const validator = require("validator");

/**
 * date
 * @description Test if `value` is a valid date. e.g. [2002-07-15, new Date()].
 *
 * @since 0.0.1
 * @param {String} value `value` to test
 * @param {String} [format = "YYYY/MM/DD"] date format to check with
 * @return {Boolean} true if `value` is a valid date, false otherwise
 * @throws {TypeError} if `value` is not a `string`
 * @access public
 * @example
 *
 * is.date(new Date()); // => True
 * is.date(Object(42)); // => False
 *
 * is.date("15-07-02", "DD/MM/YY"); // => True
 * is.date("15/7/2002", "DD/MM/YY"); // => False
 *
 */

module.exports = function (value, format) {
    return validator.isDate(...arguments);
};
