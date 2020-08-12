"use strict";

const { is, assert, inputs } = require("../helper");

describe("is.stringNumeric", () => {
	it(`works`, () => {
		assert.isTrue(is.stringNumeric("123"));
	});
	it(`works with arguments`, () => {
		assert.isTrue(
			is.stringNumeric("123", {
				no_symbols: true,
			})
		);
		assert.isFalse(
			is.stringNumeric("-0", {
				no_symbols: true,
			})
		);
	});
});
