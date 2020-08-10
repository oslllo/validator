"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * symbol
		 * @description Test if `value` is an ES6 Symbol
		 *
		 * @param {*} value value to test
		 * @return {Boolean} true if `value` is a Symbol, false otherise
		 * @api public
		 */
		symbol: function (value) {
			return (
				typeof Symbol === "function" &&
				this._getObjectType(value) === "[object Symbol]" &&
				typeof Symbol.prototype.valueOf.call(value) === "symbol"
			);
		},
	});
};
