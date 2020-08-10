"use strict";

module.exports = function (v) {
    Object.assign(v.prototype, {
		/**
		* bool
		* @description Test if `value` is a boolean.
		*
		* @param {*} value value to test
		* @return {Boolean} true if `value` is a boolean, false otherwise
		* @api public
		*/
        bool: function (value) {
			return this._getObjectType(value) === "[object Boolean]";
		}
    });
};
