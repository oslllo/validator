"use strict";

const { is, assert } = require("../helper");

describe("is.stringDecimal", () => {
	it(`works`, () => {
		assert.isTrue(is.stringDecimal("123"));
	});
	it(`works with arguments`, () => {
		assert.isTrue(is.stringDecimal("123", { locale: "en-AU" }));
		assert.isFalse(is.stringDecimal("1,0", { locale: "en-AU" }));
	});
});
