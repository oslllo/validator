"use strict";

const { is, assert, inputs } = require("../helper");

describe("is.stringContains", () => {
	it(`works`, () => {
        assert.isTrue(is.stringContains("foobar", "foo"));
        assert.isFalse(is.stringContains("fOObar", "foo"));
        assert.isFalse(is.stringContains("fobar", "foo"));
	});
	it(`works with arguments`, () => {
		assert.isTrue(
			is.stringContains("FOObar", "Foo", {
				ignoreCase: true,
			})
		);
		assert.isFalse(
			is.stringContains("baxoof", "foo", {
				ignoreCase: true,
			})
		);
	});
});
