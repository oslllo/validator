"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * ascii
		 * @description Test if 'value' contains ASCII chars only.
		 *
		 * @param {String} value value to test
		 * @return {Boolean} true if `value` contains ASCII chars only, false otherwise
		 * @api public
		 */
		ascii: function (value) {
			return this.validator.ascii(...arguments);
		},
	});
};
