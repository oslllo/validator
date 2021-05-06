"use strict";

/**
 * @name empty
 * @description Test if `value` is empty.
 *
 * @since 0.0.1
 * @param {*} value `value` to test
 * @return {Boolean} true if `value` is empty, false otherwise
 * @access public
 * @example
 *
 * is.empty(NaN); // => True
 * is.empty([1, 2, 3]); // => False
 *
 */

module.exports = function (value) {
  /*eslint no-magic-numbers: "off"*/
  var type = this._internal._getObjectType(value);
  if (
    type === "[object Array]" ||
        type === "[object Arguments]" ||
        type === "[object String]"
  ) {
    return value.length === 0;
  }

  if (type === "[object Object]") {
    for (var key in value) {
      if (this._internal._hasOwnProperty(value, key)) {
        return false;
      }
    }

    return true;
  }

  return !value;
};
