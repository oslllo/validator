"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * IMEI
		 * @description Test if `value` is is a valid IMEI number. Imei should be of format ############### or ##-######-######-#.
         *
         * @description options is an object which can contain the keys allow_hyphens. Defaults to first format . If allow_hyphens is set to true, the validator will validate the second format.
		 *
		 *
		 * @param {String} value value to test
		 * @param {object} options options object
		 * @return {Boolean} true if 'value' is a valid IMEI number, false otherwise
		 * @api public
		 */
		IMEI: function (value, options) {
            return this.validator.isIMEI(...arguments)
        }
	});
};
