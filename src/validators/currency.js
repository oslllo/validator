"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * currency
         * @description Test if `value` is a valid currency amount.
         *
         * @description Note: The array digits_after_decimal is filled with the exact number of digits allowed not a range, for example a range 1 to 3 will be given as [1, 2, 3].
		 *
		 * @param {String} value value to test
		 * @param {Object} options is an object which defaults to {symbol: '$', require_symbol: false, allow_space_after_symbol: false, symbol_after_digits: false, allow_negatives: true, parens_for_negatives: false, negative_sign_before_digits: false, negative_sign_after_digits: false, allow_negative_sign_placeholder: false, thousands_separator: ',', decimal_separator: '.', allow_decimal: true, require_decimal: false, digits_after_decimal: [2], allow_space_after_digits: false}.
		 * @return {Boolean} true if `value` is a valid currency amount, false otherwise
		 * @api public
		 */
		currency: function (value, options) {
			return this.validator.isCurrency(...arguments);
		},
	});
};
