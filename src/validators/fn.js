"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * fn
		 * @description Test if `value` is a function.
		 *
		 * @param {*} value value to test
		 * @return {Boolean} true if `value` is a function, false otherwise
		 * @api public
		 */
		fn: function (value) {
			var alert = typeof window !== "undefined" && value === window.alert;
			if (alert) {
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
