"use strict";

const { is, assert } = require("../helper");

describe("is.byteLength", () => {
	it(`works`, () => {
        assert.isTrue(is.byteLength("abc", 2));
        assert.isFalse(is.byteLength("a", 2));
	});
});
