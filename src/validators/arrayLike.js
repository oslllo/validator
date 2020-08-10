"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * arraylike
		 * @description Test if `value` is an arraylike object.
		 *
		 * @param {*} value value to test
		 * @return {Boolean} true if `value` is an arguments object, false otherwise
		 * @api public
		 */
		arrayLike: function (value) {
			return (
				!!value &&
				!this.bool(value) &&
				this._hasOwnProperty(value, "length") &&
				isFinite(value.length) &&
				this.number(value.length) &&
				value.length >= 0
			);
		},
	});
};
