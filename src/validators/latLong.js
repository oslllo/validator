"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * latLong
		 * @description Test if `value` is a valid latitude-longitude coordinate in the format lat,long or lat, long.
		 *
		 * @description options is an object that defaults to { checkDMS: false }. Pass checkDMS as true to validate DMS(degrees, minutes, and seconds) latitude-longitude format.
		 *
		 *
		 * @param {String} value value to test
		 * @param {object} options options object
		 * @return {Boolean} true if `value` is valid latitude-longitude coordinate, otherwise false.
		 * @api public
		 */
		latLong: function (value, options) {
			return this.validator.isLatLong(...arguments);
		},
	});
};
