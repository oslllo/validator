"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * arguments
		 * Test if `value` is an arguments object.
		 *
		 * @param {*} value value to test
		 * @return {Boolean} true if `value` is an arguments object, false otherwise
		 * @api public
		 */
		arguments: function (value) {
			var isStandardArguments =
				this._getObjectType(value) === "[object Arguments]";
			var isOldArguments =
				!this.array(value) &&
				this.arraylike(value) &&
				this.object(value) &&
				this.fn(value.callee);
			return isStandardArguments || isOldArguments;
		},
	});
};
