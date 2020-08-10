"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * argsEmpty
		 * Test if `value` is an empty arguments object.
		 *
		 * @param {*} value value to test
		 * @return {Boolean} true if `value` is an empty arguments object, false otherwise
		 * @api public
		 */
		 argsEmpty: function (value) {
			return this.args(value) && value.length === 0;
		},
	});
};
