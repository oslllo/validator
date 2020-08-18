"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * element
		 * @description Test if `value` is an html element.
		 *
		 * @since 0.0.1
		 * @param {*} value `value` to test
		 * @return {Boolean} true if `value` is an HTML Element, false otherwise
		 * @access public
		 * @example
		 * 
		 * var el = document.createElement("div");
		 * is.element(el); // => True
		 * is.element({ nodeType: 1 }); // => False
		 * 
		 */
		element: function (value) {
			var HTMLElement = this._window.HTMLElement;
			return (
				value !== undefined &&
				typeof HTMLElement !== "undefined" &&
				value instanceof HTMLElement &&
				value.nodeType === 1
			);
		},
	});
};
