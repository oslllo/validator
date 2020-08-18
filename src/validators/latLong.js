"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * latLong
		 * @description Test if `value` is a valid latitude-longitude coordinate 
		 * in the format lat,long or lat, long.
		 *
		 * @param {String} value `value` to test
		 * @param {Object} [options = { checkDMS: false }]  Pass checkDMS as true to validate 
		 * DMS(degrees, minutes, and seconds) latitude-longitude format.
		 * @return {Boolean} true if `value` is valid latitude-longitude coordinate, otherwise false.
         * @throws {TypeError} if `value` is not a `string`
		 * @access public
		 * @example
		 * 
		 * is.latLong("(-17.738223, 85.605469)"); // => True
		 * is.latLong("(020.000000, 010.000000000)"); // => False
		 * 
		 * is.latLong("40° 26′ 46″ N, 79° 58′ 56″ W", { checkDMS: true }); // => True
		 * is.latLong("100° 26′ 46″ N, 79° 58′ 56″ W", { checkDMS: true }); // => False
		 * 
		 */
		latLong: function (value, options) {
			return this.validator.isLatLong(...arguments);
		},
	});
};
