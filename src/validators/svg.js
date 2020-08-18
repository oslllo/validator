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
         * @throws {TypeError} if `value` is not a `string`
		 * @access public
		 * @example
		 *
		 * is.svg("<svg width="100" height="100" viewBox="0 0 30 30" version="1.1"></svg>"); // => True
		 * is.svg("<div><svg></svg></div>"); // => False
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