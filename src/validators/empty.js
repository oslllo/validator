"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * empty
		 * @description Test if `value` is empty.
		 *
		 * @param {*} value value to test
		 * @return {Boolean} true if `value` is empty, false otherwise
		 * @api public
		 */
		empty: function (value) {
			var type = this._getObjectType(value);
			if (
				type === "[object Array]" ||
				type === "[object Arguments]" ||
				type === "[object String]"
			) {
				return value.length === 0;
			}

			if (type === "[object Object]") {
				for (var key in value) {
					if (this._hasOwnProperty(value, key)) {
						return false;
					}
				}
				return true;
			}

			return !value;
		},
	});
};
