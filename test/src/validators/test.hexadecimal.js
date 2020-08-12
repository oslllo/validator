"use strict";

const { is, assert, inputs } = require("../helper");

describe("is.hexadecimal", () => {
	it(`works`, () => {
        assert.isTrue(is.hexadecimal("deadBEEF"));
        assert.isFalse(is.hexadecimal("abcdefg"));
	});
});
