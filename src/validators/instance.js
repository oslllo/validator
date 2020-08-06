"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * instance
		 * Test if `value` is an instance of `constructor`.
		 *
		 * @param {*} value value to test
		 * @param {*} constructor constructor value
		 * @return {Boolean} true if `value` is an instance of `constructor`
		 * @api public
		 */
		instance: function (value, constructor) {
			return value instanceof constructor;
		},
	});
};
