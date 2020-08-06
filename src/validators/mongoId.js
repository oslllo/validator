"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * mongoId
		 * Test if `value` is a valid hex-encoded representation of a MongoDB ObjectId.
		 *
		 * @param {string} value value to test
		 * @return {Boolean} true if `value` is a valid hex-encoded representation of a MongoDB ObjectId, otherwise false.
		 * @api public
		 */
		mongoId: function (value) {
			return this.validator.isMongoId(...arguments);
		},
	});
};
