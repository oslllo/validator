"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * JWT
		 * @description Test if `value` is valid JWT token.
		 *
		 * @param {String} value value to test
		 * @return {Boolean} true if `value` is valid JWT, otherwise false.
		 * @api public
		 */
		JWT: function (value) {
			return this.validator.isJWT(...arguments);
		},
	});
};
