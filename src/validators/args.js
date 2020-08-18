"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * args
		 * @description Test if `value` is an arguments object.
		 *
		 * @since 0.0.1
		 * @param {*} value `value` to test
		 * @return {Boolean} true if `value` is an arguments object, false otherwise
		 * @access public
		 * @example
		 *
		 * var valid = (function(){ return arguments })();
		 * var invalid = Object({ arguments: 1 });
		 * 
		 * is.args(valid); // => True
		 * is.args(invalid); // => False
		 * 
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
