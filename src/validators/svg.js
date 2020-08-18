"use strict";

const assertString = require("validator/lib/util/assertString");

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * symbol
		 * @description Test if the string is a valid SVG.
		 *
		 * @since 0.0.1
		 * @param {String} value `value` to test
		 * @return {Boolean} true if `value` is a valid SVG, false otherise
		 * @access public
		 * @example
		 *
		 * is.symbol(Symbol("foo")); // => True
		 * is.symbol(Symbol["name"]); // => False
		 * is.symbol(new Object()); // => False
		 *
		 */
		svg: function (value) {
			assertString(value);
			const htmlCommentRegex = /<!--([\s\S]*?)-->/g;
			const cleanEntities = (value) => {
				const entityRegex = /\s*<!Entity\s+\S*\s*(?:"|')[^"]+(?:"|')\s*>/gim;
				return value.replace(entityRegex, "");
			};
			const regex = /^\s*(?:<\?xml[^>]*>\s*)?(?:<!doctype svg[^>]*\s*(?:\[?(?:\s*<![^>]*>\s*)*\]?)*[^>]*>\s*)?(?:<svg[^>]*>[^]*<\/svg>|<svg[^/>]*\/\s*>)\s*$/i;
			return regex.test(
				cleanEntities(value.toString()).replace(htmlCommentRegex, "")
			);
		},
	});
};
