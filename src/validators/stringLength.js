"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * stringLength
		 * @description Test if `value's length falls in a range.
		 *
		 * @param {String} value value to test
		 * @param {object} options defaults to {min:0, max: undefined}. Note: this function takes into account surrogate pairs.
		 * @return {Boolean} true if `value`'s length falls in a range, otherwise false.
		 * @api public
		 */
		stringLength: function (value, options) {
			return this.validator.isLength(...arguments);
		},
	});
};
