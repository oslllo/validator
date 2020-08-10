"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * dataURI
		 * @description Test if `value is a data uri format.
		 *
		 * @param {String} value value to test
		 * @return {Boolean} true if `value` is a data uri format, false otherwise
		 * @api public
		 */
		dataURI: function (value) {
			return this.validator.isDataURI(...arguments);
		},
	});
};
