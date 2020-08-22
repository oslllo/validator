"use strict";

const { is, assert } = require("../helper");

describe("is.stringInteger", () => {
	it(`works`, () => {
		assert.isTrue(is.stringInteger("123"));
	});
	it(`works with arguments`, () => {
		assert.isTrue(is.stringInteger("13", { allow_leading_zeroes: false }));
		assert.isFalse(is.stringInteger("-01", { allow_leading_zeroes: false }));
	});
});
