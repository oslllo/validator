"use strict";

/**
 * @name instance
 * @description Test if `value` is an instance of `constructor`.
 *
 * @since 0.0.1
 * @param {*} value `value` to test
 * @param {*} constructor constructor value
 * @return {Boolean} true if `value` is an instance of `constructor`
 * @access public
 * @example
 *
 * is.instance(new Date(), Date); // => True
 *
 *  is.instance(new Date(), Number); // => False
 *
 * var F = function () {};
 * is.instance(new F(), F); // => True
 *
 */

module.exports = function (value, constructor) {
  return value instanceof constructor;
};
