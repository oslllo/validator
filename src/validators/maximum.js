"use strict";

/**
 * @name maximum
 * @description Test if `value` is greater than 'others' values.
 *
 * @since 0.0.1
 * @param {Number|String} value `value` to test
 * @param {ArrayLike} others values to compare with
 * @return {Boolean} true if `value` is greater than `others` values
 * @access public
 * @example
 *
 * is.maximum(3, [3, 2, 1]); // => True
 * is.maximum(2, [1, 2, 3]); // => False
 *
 * is.maximum("c", ["a", "b", "c"]); // => True
 * is.maximum("b", ["a", "b", "c"]); // => False
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
    if (value < others[len]) {
      return false;
    }
  }

  return true;
};
