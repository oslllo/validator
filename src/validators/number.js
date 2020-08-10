"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * number
		 * @description Test if `value` is a number.
		 *
		 * @param {*} value value to test
		 * @return {Boolean} true if `value` is a number, false otherwise
		 * @api public
		 */
         number: function (value) {
            return this._getObjectType(value) === '[object Number]';
          },
	});
};
