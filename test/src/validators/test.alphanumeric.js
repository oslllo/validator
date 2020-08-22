"use strict";

const { is, assert } = require("../helper");

describe("is.alphanumeric", () => {
	it(`works`, () => {
		assert.isTrue(is.alphanumeric("abc123"));
	});
	it(`works with arguments`, () => {
		assert.isTrue(is.alphanumeric("ABC11", "en-GB"));
		assert.isFalse(is.alphanumeric("foo!!", "en-GB"));
	});
});
