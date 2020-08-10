"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * surrogatePair
		 * @description Test if `value` contains any surrogate pairs chars.
		 *
		 * @param {String} value value to test
		 * @return {Boolean} true if `value; contains any surrogate pairs chars, otherwise false.
		 * @api public
		 */
		surrogatePair: function (value) {
			return this.validator.isSurrogatePair(...arguments);
		},
	});
};
