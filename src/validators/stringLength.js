"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * stringLength
		 * Test if `value's length falls in a range.
		 *
		 * options is an object which defaults to {min:0, max: undefined}. Note: this function takes into account surrogate pairs.
		 *
		 *
		 * @param {string} value value to test
		 * @param {object} options options object
		 * @return {Boolean} true if `value`'s length falls in a range, otherwise false.
		 * @api public
		 */
		stringLength: function (value, options) {
			return this.validator.isLength(...arguments);
		},
	});
};
