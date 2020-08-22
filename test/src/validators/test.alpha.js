"use strict";

const { is, assert } = require("../helper");

describe("is.alpha", () => {
	it(`works`, () => {
		assert.isTrue(is.alpha("abc"));
	});
	it(`works with arguments`, () => {
		assert.isTrue(is.alpha("абв", "bg-BG"));
		assert.isFalse(is.alpha("abc1", "bg-BG"));
	});
});
