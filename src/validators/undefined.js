"use strict";

/**
 * @name undefined
 * @description Test if `value` is undefined.
 *
 * @since 0.0.1
 * @param {*} value `value` to test
 * @return {Boolean} true if `value` is undefined, false otherwise
 * @access public
 * @example
 *
 * is.undefined(undefined); // => True
 * is.undefined(null); // => False
 * is.undefined(0); // => False
 *
 */

module.exports = function (value) {
  return typeof value === "undefined";
};
