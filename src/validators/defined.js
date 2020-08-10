"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * defined
		 * @description Test if `value` is defined.
		 *
		 * @param {*} value value to test
		 * @return {Boolean} true if 'value' is defined, false otherwise
		 * @api public
		 */
		defined: function (value) {
            return typeof value !== 'undefined';
		},
	});
};
