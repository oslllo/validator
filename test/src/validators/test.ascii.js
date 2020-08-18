"use strict";

const { is, assert, inputs } = require("../helper");

describe("is.ascii", () => {
	it(`works`, () => {
		assert.isTrue(is.ascii("0987654321"));
		assert.isTrue(is.ascii("foobar"));
		assert.isFalse(is.ascii("ｆｏｏbar"));
		assert.isFalse(is.ascii("ｘｙｚ０９８"));
	});
});
