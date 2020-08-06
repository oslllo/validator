"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * byteLength
		 * Test if `value`'s length (in UTF-8 bytes) falls in a range.
		 *
         * @param {string} value value to test
         * @param {Object} options is an object which defaults to {min:0, max: undefined}
		 * @return {Boolean} true if `value`'s length (in UTF-8 bytes) falls in a range, false otherwise
		 * @api public
		 */
		byteLength: function (value, options) {
			return this.validator.isByteLength(...arguments);
		},
	});
};
