"use strict";

const { is, assert } = require("../helper");

describe("is.lowercase", () => {
	it(`works`, () => {
        assert.isTrue(is.lowercase("abc"));
        assert.isFalse(is.lowercase("123A"));
	});
});
