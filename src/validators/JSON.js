"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * JSON
         * Test if `value` is valid JSON (note: uses JSON.parse).
         *
         * options is an object which defaults to { allow_primitives: false }. If allow_primitives is true, the primitives 'true', 'false' and 'null' are accepted as valid JSON values.
		 *
		 *
		 * @param {string} value value to test
		 * @param {object} options options object
		 * @return {Boolean} true if `value` is valid JSON, otherwise false.
		 * @api public
		 */
		JSON: function (value, options) {
            return this.validator.isJSON(...arguments)
        }
	});
};
