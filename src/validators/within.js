"use strict";

/**
 * @name within
 * @description Test if `value` is within `start` and `finish`.
 *
 * @since 0.0.1
 * @param {Number} value `value` to test
 * @param {Number} start lower bound
 * @param {Number} finish upper bound
 * @return {Boolean} true if `value` is is within 'start' and 'finish'
 * @access public
 * @example
 *
 * is.within(2, 1, 3); // => True
 * is.within(0, -1, 1); // => True
 * is.within(2, 0, Infinity); // => True
 *
 * is.within(2, -1, 1); // => False
 *
 */

module.exports = function (value, start, finish) {
  if (this.actualNaN(value) || this.actualNaN(start) || this.actualNaN(finish)) {
    throw new TypeError("NaN is not a valid value");
  } else if (!this.number(value) || !this.number(start) || !this.number(finish)) {
    throw new TypeError("all arguments must be numbers");
  }
  var isAnyInfinite =
        this.infinite(value) || this.infinite(start) || this.infinite(finish);

  var isWithin = value >= start && value <= finish;

  return isAnyInfinite || isWithin;
};
