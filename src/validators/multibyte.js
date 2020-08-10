"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * multibyte
		 * @description Test if `value` contains one or more multibyte chars.
		 *
		 * @param {String} value value to test
		 * @return {Boolean} true if `value contains one or more multibyte chars, otherwise false.
		 * @api public
		 */
		multibyte: function (value) {
			return this.validator.isMultibyte(...arguments);
		},
	});
};
