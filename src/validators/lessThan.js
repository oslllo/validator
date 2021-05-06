"use strict";

/**
 * @name lessThan
 * @description Test if `value` is less than `other`.
 *
 * @since 0.0.1
 * @param {Number} value `value` to test
 * @param {Number} other value to compare with
 * @return {Boolean} if `value` is less than `other`
 * @access public
 * @example
 *
 * is.lessThan(2, 3); // => True
 * is.lessThan("a", "abc"); // => True
 *
 * is.lessThan("abc", "abc"); // => False
 *
 */

module.exports = function (value, other) {
  if (this.actualNaN(value) || this.actualNaN(other)) {
    throw new TypeError("NaN is not a valid value");
  }

  return !this.infinite(value) && !this.infinite(other) && value < other;
};
