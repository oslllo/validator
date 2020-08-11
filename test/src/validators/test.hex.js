"use strict";

const { is, assert, inputs } = require("../helper");

describe("is.hex", () => {
	it(`can tell that abcdABCD1234 is hex encoded`, () => {
		assert.isTrue(is.hex("abcdABCD1234"));
	});
	it(`can tell that zero length string is hex encoded`, () => {
		assert.isTrue(is.hex(""));
	});
	it(`can tell that invalid characters are not hex encoded`, () => {
		assert.isFalse(is.hex("wxyzWXYZ1234/+=="));
	});
});