"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * biging
		 * @description Test if `value` is an ES-proposed BigInt
		 *
		 * @param {*} value value to test
		 * @return {Boolean} true if `value` is a BigInt, false otherise
		 * @api public
		 */

		bigint: function (value) {
            // eslint-disable-next-line valid-typeof
            var bigIntValueOf = BigInt.prototype.valueOf;
			return (
				typeof BigInt === "function" &&
				this._getObjectType(value) === "[object BigInt]" &&
				typeof bigIntValueOf.call(value) === "bigint"
			);
		},
	});
};
