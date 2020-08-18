"use strict";

const { is, assert, inputs } = require("../helper");

describe("is.IBAN", () => {
	it(`works`, () => {
		assert.isTrue(is.IBAN("SC52BAHL01031234567890123456USD"));
		assert.isFalse(is.IBAN("XX22YYY1234567890123"));
	});
});
