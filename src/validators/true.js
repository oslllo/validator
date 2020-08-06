"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * true
		 * Test if `value` is true.
		 *
		 * @param {*} value value to test
		 * @return {Boolean} true if `value` is true, false otherwise
		 * @api public
		 */
		true: function (value) {
			return this.bool(value) && Boolean(Number(value)) === true;
		},
	});
};
