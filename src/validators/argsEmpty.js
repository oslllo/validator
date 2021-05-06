"use strict";

/**
 * @name argsEmpty
 * @description Test if `value` is an empty arguments object.
 *
 * @since 0.0.1
 * @param {*} value `value` to test
 * @return {Boolean} true if `value` is an empty arguments object, false otherwise
 * @access public
 * @example
 *
 * var emptyArgs = (function(){ return arguments })();
 * var notEmptyArgs = (function(arg1, arg2){ return arguments })(1, 2);
 *
 * is.argsEmpty(emptyArgs); // => True
 * is.argsEmpty(notEmptyArgs); // => False
 *
 */

module.exports = function (value) {
  /*eslint no-magic-numbers: "off"*/
  return this.args(value) && value.length === 0;
};
