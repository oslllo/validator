"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * false
		 * @description Test if `value` is false.
		 *
		 * @since 0.0.1
		 * @param {*} value `value` to test
		 * @return {Boolean} true if `value` is false, false otherwise
		 * @access public
		 * @example
		 * 
		 * is.false(false); // => True
		 * is.false(0); // => False
		 * 
		 */
		false: function (value) {
			return this.bool(value) && Boolean(Number(value)) === false;
		},
	});
};
