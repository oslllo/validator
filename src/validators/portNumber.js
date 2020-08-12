"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * portNumber
		 * @description Test if `value` is a valid port number.
		 *
		 * @param {String} value value to test
		 * @return {Boolean} true if `value is a valid port number, otherwise false.
		 * @api public
		 */
		portNumber: function (value) {
			arguments[0] = arguments[0].toString();
			return this.validator.isPort(...arguments);
		},
	});
};
