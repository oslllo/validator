"use strict";

/**
 * @name lessThanOrEqualTo
 * @description Test if `value` is less than or equal to `other`.
 *
 * @since 0.0.1
 * @param {Number} value `value` to test
 * @param {Number} other value to compare with
 * @return {Boolean} if `value` is less than or equal to 'other'
 * @access public
 * @example
 *
 * is.lessThanOrEqualTo(2, 3); // => True
 * is.lessThanOrEqualTo("a", "abc"); // => True
 * is.lessThanOrEqualTo("abc", "abc"); // => True
 *
 * is.lessThanOrEqualTo(3, 2); // => False
 *
 */

module.exports = function (value, other) {
  if (this.actualNaN(value) || this.actualNaN(other)) {
    throw new TypeError("NaN is not a valid value");
  }

  return !this.infinite(value) && !this.infinite(other) && value <= other;
};
