"use strict";

const { is, assert } = require("../helper");

describe("is.stringMatches", () => {
	it(`works`, () => {
		assert.isTrue(is.stringMatches("abc", /abc/u));
		assert.isFalse(is.stringMatches("acb", /abc/u));
	});
	it(`works with arguments`, () => {
		assert.isTrue(is.stringMatches("abc", "abc", "i"));
		assert.isFalse(is.stringMatches("acb", "abc", "i"));
	});
});
