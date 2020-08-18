"use strict";

const { is, assert, inputs } = require("../helper");

describe("is.MACAddress", () => {
	it(`works`, () => {
		assert.isTrue(is.MACAddress("ab:ab:ab:ab:ab:ab"));
		assert.isFalse(is.MACAddress("01:02:03:04:05"));
	});
	it(`works with arguments`, () => {
		assert.isTrue(
			is.MACAddress("abababababab", {
				no_colons: true,
			})
		);
		assert.isFalse(
			is.MACAddress("abc", {
				no_colons: true,
			})
		);
	});
});
