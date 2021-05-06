"use strict";

/**
 * @name arraylike
 * @description Test if `value` is an arraylike object.
 *
 * @since 0.0.1
 * @param {*} value `value` to test
 * @return {Boolean} true if `value` is an arraylike object, false otherwise
 * @access public
 * @example
 *
 * is.arrayLike(undefined); // => False
 * is.arrayLike(false); // => False
 * is.arrayLike({ length: -1 }); // => False
 *
 * is.arrayLike([]); // => True
 * is.arrayLike({ length: 0 }); // => True
 * is.arrayLike({ length: 1 }); // => True
 *
 */

module.exports = function (value) {
  /*eslint no-magic-numbers: "off"*/
  return (
    Boolean(value) &&
        !this.bool(value) &&
        this._internal._hasOwnProperty(value, "length") &&
        isFinite(value.length) &&
        this.number(value.length) &&
        value.length >= 0
  );
};
