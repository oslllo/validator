"use strict";

/**
 * @name minimum
 * @description Test if `value` is less than `others` values.
 *
 * @since 0.0.1
 * @param {Number} value `value` to test
 * @param {Arraylike} others values to compare with
 * @return {Boolean} true if `value` is less than `others` values
 * @access public
 * @example
 *
 * is.minimum(1, [3, 2, 1]); // => True
 * is.minimum("a", ["a", "b", "c"]); // => True
 *
 * is.minimum(2, [1, 2, 3]); // => False
 * is.minimum("c", ["a", "b", "c"]); // => False
 *
 */

module.exports = function (value, others) {
  /*eslint no-magic-numbers: "off"*/
  if (this.actualNaN(value)) {
    throw new TypeError("NaN is not a valid value");
  } else if (!this.arrayLike(others)) {
    throw new TypeError("second argument must be array-like");
  }
  var len = others.length;

  while (--len >= 0) {
    if (value > others[len]) {
      return false;
    }
  }

  return true;
};
