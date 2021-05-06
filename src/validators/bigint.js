"use strict";

/**
 * @name bigint
 * @description Test if `value` is an ES-proposed BigInt
 *
 * @since 0.0.1
 * @param {*} value `value` to test
 * @return {Boolean} true if `value` is a BigInt, false otherise
 * @access public
 * @example
 *
 * is.bigint(BigInt(42)); // => True
 * is.bigint(123); // => False
 *
 */

module.exports = function (value) {
  // eslint-disable-next-line valid-typeof
  var bigIntValueOf = BigInt.prototype.valueOf;

  return (
    typeof BigInt === "function" &&
        this._internal._getObjectType(value) === "[object BigInt]" &&
        typeof bigIntValueOf.call(value) === "bigint"
  );
};
