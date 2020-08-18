"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * symbol
		 * @description Test if `value` is an ES6 Symbol
		 *
		 * @since 0.0.1
		 * @param {*} value `value` to test
		 * @return {Boolean} true if `value` is a Symbol, false otherise
		 * @access public
		 * @example
		 * 
		 * is.symbol(Symbol("foo")); // => True
		 * is.symbol(Symbol["name"]); // => False
		 * is.symbol(new Object()); // => False
		 * 
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
