"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * null
		 * @description Test if `value` is null.
		 *
		 * @param {*} value value to test
		 * @return {Boolean} true if `value` is null, false otherwise
		 * @api public
		 */
		null: function (value) {
			return value === null;
		},
	});
};
