"use strict";

const { is, assert } = require("../helper");

describe("is.taxID", () => {
	it(`works`, () => {
		assert.isTrue(is.taxID("01-1234567"));
		assert.isFalse(is.taxID("0-11234567"));
	});
	it(`works with arguments`, () => {
		assert.throws(() => is.taxID("01-1234567", "is-NOT"), TypeError);
	});
});
