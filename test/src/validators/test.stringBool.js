"use strict";

const { is, assert, inputs } = require("../helper");

describe("is.stringBool", () => {
	it(`works`, () => {
        assert.isTrue(is.stringBool("true"));
        assert.isFalse(is.stringBool("1.0"));
	});
});
