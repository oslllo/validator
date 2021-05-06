"use strict";

/**
 * @name dateValid
 * @description Test if `value` is a valid date.
 *
 * @since 0.0.1
 * @param {*} value `value` to test
 * @returns {Boolean} true if `value` is a valid date, false otherwise
 * @access public
 * @example
 *
 * is.dateValid(new Date()); // => True
 * is.dateValid({}); // => False
 *
 */

module.exports = function (value) {
  return this.date(value) && !isNaN(Number(value));
};
