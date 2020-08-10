"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * slug
		 * @description Test if `value` is of type slug.
		 *
		 * @param {String} value value to test
		 * @param {Object} options allow a single hyphen between string. e.g. [cn-cn, cn-c-c]
		 * @return {Boolean} true if `value is of type slug, otherwise false.
		 * @api public
		 */
		slug: function (value, options) {
			return this.validator.isSlug(...arguments);
		},
	});
};
