"use strict";

/**
 * @name error
 * @description Test if `value` is an error object.
 *
 * @since 0.0.1
 * @param {*} value `value` to test
 * @return {Boolean} true if `value` is an error object, false otherwise
 * @access public
 * @example
 *
 * is.error(new Error("foo")); // => True
 * is.error({ error: true }); // => False
 *
 */

module.exports = function (value) {
  return this._internal._getObjectType(value) === "[object Error]";
};
