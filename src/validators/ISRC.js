"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * ISRC
		 * @description Test if `value` is a ISRC.
		 *
		 * @param {String} value value to test
		 * @return {Boolean} true if `value` is a ISRC, otherwise false.
		 * @api public
		 */
		ISRC: function (value) {
			return this.validator.isISRC(...arguments);
		},
	});
};
