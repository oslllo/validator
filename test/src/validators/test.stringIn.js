"use strict";

const { is, assert, inputs } = require("../helper");

describe("is.stringIn", () => {
	it(`works`, () => {
		assert.isTrue(is.stringIn("foo", "foobar"));
		assert.isFalse(is.stringIn("barfoo", "foobar"));
	});
});
