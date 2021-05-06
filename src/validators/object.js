"use strict";

/**
 * @name object
 * @description Test if `value` is an object.
 *
 * @since 0.0.1
 * @param {*} value `value` to test
 * @return {Boolean} true if `value` is an object, false otherwise
 * @access public
 * @example
 *
 * is.object({}); // => True
 * is.object(new Array()); // => False
 *
 */

module.exports = function (value) {
  return this._internal._getObjectType(value) === "[object Object]";
};
