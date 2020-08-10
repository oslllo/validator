"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * hosted
		 * @description Test if `value` is hosted by `host`.
		 *
		 * @param {*} value to test
		 * @param {*} host host to test with
		 * @return {Boolean} true if `value` is hosted by `host`, false otherwise
		 * @api public
		 */
		hosted: function (value, host) {
			var NON_HOST_TYPES = {
				boolean: 1,
				number: 1,
				string: 1,
				undefined: 1,
			};
			var type = typeof host[value];
			return type === "object" ? !!host[value] : !NON_HOST_TYPES[type];
		},
	});
};
