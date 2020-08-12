"use strict";

const { is, assert, inputs } = require("../helper");

describe("is.uppercase", () => {
	it(`works`, () => {
        assert.isTrue(is.uppercase("ABC"));
        assert.isFalse(is.uppercase("abc"));
	});
});
