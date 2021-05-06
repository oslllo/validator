"use strict";

/**
 * @name greaterThanOrEqualTo
 * @description Test if `value` is greater than or equal to `other`.
 *
 * @since 0.0.1
 * @param {Number} value `value` to test
 * @param {Number} other value to compare with
 * @return {Boolean} true if `value` is greater than or equal to `other`, false otherwise
 * @access public
 * @example
 *
 * is.greaterThanOrEqualTo(3, 2); // => True
 * is.greaterThanOrEqualTo(3, 3); // => True
 *
 * is.greaterThanOrEqualTo(2, 3); // => False
 * is.greaterThanOrEqualTo("abc", "a"); // => False
 *
 */

module.exports = function (value, other) {
  if (this.actualNaN(value) || this.actualNaN(other)) {
    throw new TypeError("NaN is not a valid value");
  }

  return !this.infinite(value) && !this.infinite(other) && value >= other;
};
