"use strict";

/**
 * @name equal
 * @description Test if `value` is equal to `other`.
 *
 * @since 0.0.1
 * @param {*} value `value` to test
 * @param {*} other value to compare with
 * @return {Boolean} true if `value` is equal to `other`, false otherwise
 * @example
 *
 * is.equal(true, true); // => True
 * is.equal([1, 2, 3], [2, 3]); // => False
 *
 */

module.exports = function (value, other) {
  if (value === other) {
    return true;
  }

  var type = this._internal._getObjectType(value);
  var key;

  if (type !== this._internal._getObjectType(other)) {
    return false;
  }

  if (type === "[object Object]") {
    for (key in value) {
      if (!this.equal(value[key], other[key]) || !(key in other)) {
        return false;
      }
    }
    for (key in other) {
      if (!this.equal(value[key], other[key]) || !(key in value)) {
        return false;
      }
    }

    return true;
  }

  if (type === "[object Array]") {
    key = value.length;
    if (key !== other.length) {
      return false;
    }
    while (key--) {
      if (!this.equal(value[key], other[key])) {
        return false;
      }
    }

    return true;
  }

  if (type === "[object Function]") {
    return value.prototype === other.prototype;
  }

  if (type === "[object Date]") {
    return value.getTime() === other.getTime();
  }

  return false;
};
