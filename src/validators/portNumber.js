"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * portNumber
		 * Test if `value` is a valid port number.
		 *
		 * @param {string} value value to test
		 * @return {Boolean} true if `value is a valid port number, otherwise false.
		 * @api public
		 */
         portNumber: function (value) {
             return this.validator.isPort(...arguments);
         }
	});
};
