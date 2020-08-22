"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * JSON
		 * @description Test if `value` is valid JSON (note: uses JSON.parse).
		 *
		 * @since 0.0.1
		 * @param {String} value `value` to test
		 * @param {object} [options = { allow_primitives: false }] If allow_primitives
		 * is true, the primitives 'true', 'false' and 'null' are accepted as valid JSON values.
		 * @return {Boolean} true if `value` is valid JSON, otherwise false.
		 * @throws {TypeError} if `value` is not a `string`
		 * @access public
		 * @example
		 *
		 * is.JSON(`{ "key": "value" }`); // => True
		 * is.JSON(`null`); // => False
		 *
		 * is.JSON(`null`, { allow_primitives: true }); // => True
		 * is.JSON(`1234`, { allow_primitives: true }); // => False
		 *
		 */
		JSON: function (value, options) {
			return this.validator.isJSON(...arguments);
		},
	});
};
