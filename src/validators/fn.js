"use strict";

/**
 * @name fn
 * @description Test if `value` is a function.
 *
 * @since 0.0.1
 * @param {*} value `value` to test
 * @return {Boolean} true if `value` is a function, false otherwise
 * @access public
 * @example
 *
 * is.fn(function () {}); // => True
 * is.fn({}); // => False
 *
 */

module.exports = function (value) {
  var type = this._internal._getObjectType(value);

  return (
    type === "[object Function]" ||
    type === "[object GeneratorFunction]" ||
    type === "[object AsyncFunction]"
  );
};
