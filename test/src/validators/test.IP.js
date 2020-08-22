"use strict";

const { is, assert } = require("../helper");

describe("is.IP", () => {
	it(`works`, () => {
		assert.isTrue(is.IP("127.0.0.1"));
	});
	it(`works with arguments`, () => {
		assert.isTrue(is.IP("127.0.0.1", 4));
		assert.isFalse(is.IP("::1", 4));
	});
});
