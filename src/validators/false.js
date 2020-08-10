"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * false
		 * @description Test if `value` is false.
		 *
		 * @param {*} value value to test
		 * @return {Boolean} true if `value` is false, false otherwise
		 * @api public
		 */
		false: function (value) {
			return this.bool(value) && Boolean(Number(value)) === false;
		},
	});
};
