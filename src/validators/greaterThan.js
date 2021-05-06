"use strict";

/**
 * @name greaterThan
 * @description Test if `value` is greater than `other`.
 *
 * @since 0.0.1
 * @param {Number} value `value` to test
 * @param {Number} other value to compare with
 * @return {Boolean}  true if `value` is greater than `other`, false otherwise
 * @access public
 * @example
 *
 * is.greaterThan(3, 2); // => True
 * is.greaterThan("abc", "a"); // => True
 *
 * is.greaterThan(3, 3); // => False
 * is.greaterThan("a", "abc"); // => False
 *
 */

module.exports = function (value, other) {
  if (this.actualNaN(value) || this.actualNaN(other)) {
    throw new TypeError("NaN is not a valid value");
  }

  return !this.infinite(value) && !this.infinite(other) && value > other;
};
