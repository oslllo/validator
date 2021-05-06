"use strict";

const validator = require("validator");

/**
 * @name currency
 * @description Test if `value` is a valid currency amount.
 *
 * @since 0.0.1
 * @param {String} value `value` to test
 * @param {Object} [options = {symbol: '$', require_symbol: false, allow_space_after_symbol: false, symbol_after_digits: false, allow_negatives: true, parens_for_negatives: false, negative_sign_before_digits: false, negative_sign_after_digits: false, allow_negative_sign_placeholder: false, thousands_separator: ',', decimal_separator: '.', allow_decimal: true, require_decimal: false, digits_after_decimal: [2], allow_space_after_digits: false}]
 * The array digits_after_decimal is filled with the exact number of digits allowed not a range, for example a range 1 to 3 will be given as [1, 2, 3].
 * @return {Boolean} true if `value` is a valid currency amount, false otherwise
 * @throws {TypeError} if `value` is not a `string`
 * @access public
 * @example
 *
 * is.currency("-$10,123.45"); // => True
 * is.currency("$1.1"); // => False
 *
 * is.currency("-$10,123", { allow_decimal: false }); // => True
 * is.currency("'-$10,123.45", { allow_decimal: false }); // => False
 *
 */

module.exports = function (value, options) {
  return validator.isCurrency(...arguments);
};
