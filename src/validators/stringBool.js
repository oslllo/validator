"use strict";

module.exports = function (v) {
    Object.assign(v.prototype, {
		/**
		* bool
		* Test if `value` is a boolean.
		*
		* @param {String} value value to test
		* @return {Boolean} true if `value` is a boolean, false otherwise
		* @api public
		*/
        stringBool: function (value) {
			return this.validator.isBoolean(...arguments);
		}
    });
};
