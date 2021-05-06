"use strict";

const validator = require("validator");

/**
 * @name date
 * @description Test if `value` is a valid date. e.g. [2002-07-15, new Date()].
 *
 * @since 0.0.1
 * @param {String} value `value` to test
 * @param {String} [options] `options` is an object which can contain the keys
 * `format`, `strictMode` and/or `delimiters`<br/><br/>`format` is a string and
 * defaults to `YYYY/MM/DD`.<br/><br/>`strictMode` is a boolean and defaults to
 * `false`. If `strictMode` is set to true, the validator will reject inputs different
 * from `format`.<br/><br/> `delimiters` is an array of allowed date delimiters
 * and defaults to `['/', '-']`.
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
 * is.date("15-07-02", { format: 'DD/MM/YYYY' }); // => True
 * is.date("15/7/2002", { format: 'DD/MM/YYYY' }); // => False
 *
 * is.date("15/07/2002", { format: 'DD/MM/YYYY', strictMode: true }); // => True
 * is.date("15/7/02", { format: 'DD/MM/YYYY', strictMode: true }); // => False
 *
 * is.date("2020/01/15", { strictMode: true }); // => True
 * is.date(new Date(), { strictMode: true }); // => False
 *
 * is.date("2020/02/29", { delimiters: ['/', ' '] }); // => True
 * is.date("2020-02-29", { delimiters: ['/', ' '] }); // => False
 *
 */

module.exports = function (value, options) {
  return validator.isDate(...arguments);
};
