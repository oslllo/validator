"use strict";

/**
 * @name divisibleBy
 * @description Test if `value` is divisible by `n`.
 *
 * @since 0.0.1
 * @param {Number} value `value` to test
 * @param {Number} n dividend
 * @return {Boolean} true if `value` is divisible by `n`, false otherwise
 * @access public
 * @example
 *
 * is.divisibleBy(4, 2); // => True
 * is.divisibleBy(1, 0); // => False
 *
 */

module.exports = function (value, n) {
  /*eslint no-magic-numbers: "off"*/
  var isDividendInfinite = this.infinite(value);
  var isDivisorInfinite = this.infinite(n);
  var isNonZeroNumber =
        this.number(value) &&
        !this.actualNaN(value) &&
        this.number(n) &&
        !this.actualNaN(n) &&
        n !== 0;
  var isDivisibleBy = isNonZeroNumber && value % n === 0;

  return isDividendInfinite || isDivisorInfinite || isDivisibleBy;
};
