"use strict";

/**
 * @name args
 * @description Test if `value` is an arguments object.
 *
 * @since 0.0.1
 * @param {*} value `value` to test
 * @return {Boolean} true if `value` is an arguments object, false otherwise
 * @access public
 * @example
 *
 * var valid = (function(){ return arguments })();
 * var invalid = Object({ arguments: 1 });
 *
 * is.args(valid); // => True
 * is.args(invalid); // => False
 *
 */

module.exports = function (value) {
  var isStandardArguments =
        this._internal._getObjectType(value) === "[object Arguments]";
  var isOldArguments =
        !this.array(value) &&
        this.arrayLike(value) &&
        this.object(value) &&
        this.fn(value.callee);

  return isStandardArguments || isOldArguments;
};
