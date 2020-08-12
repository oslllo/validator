"use strict";

const { is, assert, inputs } = require("../helper");

describe("is.lowercase", () => {
	it(`works`, () => {
        assert.isTrue(is.lowercase("abc"));
        assert.isFalse(is.lowercase("123A"));
	});
});
