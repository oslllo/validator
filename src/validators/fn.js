"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * fn
		 * @description Test if `value` is a function.
		 *
		 * @since 0.0.1
		 * @param {*} value `value` to test
		 * @return {Boolean} true if `value` is a function, false otherwise
		 * @access public
		 * @example
		 *
		 * is.fn(function () {}); // => True
		 * is.fn({}); // => False
		 *
		 */
		fn: function (value) {
			if (value === this._window.alert) {
				return true;
			}
			var type = this._getObjectType(value);

return (
				type === "[object Function]" ||
				type === "[object GeneratorFunction]" ||
				type === "[object AsyncFunction]"
			);
		},
	});
};
