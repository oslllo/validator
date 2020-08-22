"use strict";

const { is, assert } = require("../helper");

describe("is.octal", () => {
	it(`works`, () => {
        assert.isTrue(is.octal("076543210"));
        assert.isFalse(is.octal("abcdefg"));
	});
});
