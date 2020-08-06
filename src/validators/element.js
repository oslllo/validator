"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * element
		 * Test if `value` is an html element.
		 *
		 * @param {*} value value to test
		 * @return {Boolean} true if `value` is an HTML Element, false otherwise
		 * @api public
		 */
		element: function (value) {
			return (
				value !== undefined &&
				typeof HTMLElement !== "undefined" &&
				value instanceof HTMLElement &&
				value.nodeType === 1
			);
		},
	});
};
