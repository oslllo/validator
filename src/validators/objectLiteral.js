"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * objectLiteral
		 * @description Test if `value` is a hash / a plain object literal.
		 *
		 * @since 0.0.1
		 * @param {*} value `value` to test
		 * @return {Boolean} true if `value` is a a hash / a plain object literal, false otherwise
		 * @access public
		 * @example
		 * 
		 * is.objectLiteral({ one: 1 }); // => True
		 * is.objectLiteral(Object(42)); // => False
		 * 
		 */
		 objectLiteral: function (value) {
			 return this.object(value) && value.constructor === Object && !value.nodeType && !value.setInterval;
		},
	});
};
