"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * args
		 * @description Test if `value` is an arguments object.
		 *
		 * @param {*} value value to test
		 * @return {Boolean} true if `value` is an arguments object, false otherwise
		 * @api public
		 */
		args: function (value) {
			var isStandardArguments =
				this._getObjectType(value) === "[object Arguments]";
			var isOldArguments =
				!this.array(value) &&
				this.arrayLike(value) &&
				this.object(value) &&
				this.fn(value.callee);
			return isStandardArguments || isOldArguments;
		},
	});
};
