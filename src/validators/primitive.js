"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * primitive
		 * Test if `value` is a primitive.
		 *
		 * @param {*} value value to test
		 * @return {Boolean} true if `value` is a primitive, false otherwise
		 * @api public
		 */
		primitive: function isPrimitive(value) {
			if (!value) {
				return true;
			}
			if (
				typeof value === "object" ||
				this.object(value) ||
				this.fn(value) ||
				this.array(value)
			) {
				return false;
			}
			return true;
		},
	});
};
