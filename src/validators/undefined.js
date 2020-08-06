"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * undefined
		 * Test if `value` is undefined.
		 *
		 * @param {*} value value to test
		 * @return {Boolean} true if `value` is undefined, false otherwise
		 * @api public
		 */
         undefined: function (value) {
			return typeof value === 'undefined';
		},
	});
};
