"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * objectLiteral
		 * @description Test if `value` is a hash / a plain object literal.
		 *
		 * @param {*} value value to test
		 * @return {Boolean} true if `value` is a a hash / a plain object, false otherwise
		 * @api public
		 */
		 objectLiteral: function (value) {
			 return this.object(value) && value.constructor === Object && !value.nodeType && !value.setInterval;
		},
	});
};
