"use strict";

const { is, assert } = require("../helper");

describe("is.hex", () => {
	it(`can validate that abcdABCD1234 is hex encoded`, () => {
		assert.isTrue(is.hex("abcdABCD1234"));
	});
	it(`can validate that zero length string is hex encoded`, () => {
		assert.isTrue(is.hex(""));
	});
	it(`can validate that invalid characters are not hex encoded`, () => {
		assert.isFalse(is.hex("wxyzWXYZ1234/+=="));
	});
});
