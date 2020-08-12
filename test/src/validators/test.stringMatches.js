"use strict";

const { is, assert, inputs } = require("../helper");

describe("is.stringMatches", () => {
	it(`works`, () => {
		assert.isTrue(is.stringMatches("abc", /abc/));
		assert.isFalse(is.stringMatches("acb", /abc/));
	});
	it(`works with arguments`, () => {
		assert.isTrue(is.stringMatches("abc", "abc", "i"));
		assert.isFalse(is.stringMatches("acb", "abc", "i"));
	});
});
