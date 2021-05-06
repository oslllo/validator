"use strict";

/**
 * @name primitive
 * @description Test if `value` is a primitive.
 *
 * @since 0.0.1
 * @param {*} value `value` to test
 * @return {Boolean} true if `value` is a primitive, false otherwise
 * @access public
 * @example
 *
 * is.primitive(0); // => True
 * is.primitive(new Object()); // => False
 *
 */

module.exports = function (value) {
  if (!value) {
    return true;
  }
  if (
    typeof value === "object" ||
        this.object(value) ||
        this.fn(value) ||
        this.array(value)
  ) {
    return false;
  }

  return true;
};
