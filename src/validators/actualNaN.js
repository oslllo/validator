"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * actualNaN
		 * @description Test if `value` is actual NaN.
		 *
		 * @since 0.0.1
		 * @param {*} value `value` to test
		 * @return {Boolean} true if `value` is actual NaN, false otherwise
		 * @access public
		 * @example
		 *
		 * is.actualNaN(NaN); // => True
		 * is.actualNaN(null); // => False
		 * is.actualNaN(undefined); // => False
		 * is.actualNaN(0); // => False
		 *
		 */
		actualNaN: function (value) {
            /*eslint no-self-compare: "off"*/
			return value !== value;
		},
	});
};
