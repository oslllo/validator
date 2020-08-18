"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * symbol
		 * @description Test if the 'value is a buffer.
		 *
		 * @since 0.0.1
		 * @param {String} value `value` to test
		 * @return {Boolean} true if `value` is a buffer, false otherise
		 * @access public
		 * @example
		 *
		 * is.buffer(Buffer.from("123")); // => True
		 * is.buffer(new Object(123)); // => False
		 *
		 */
		buffer: function (value) {
            return value instanceof Buffer;
		},
	});
};
