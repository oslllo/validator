"use strict";

const { is, assert, inputs } = require("../helper");

describe("is.whitelisted", () => {
	it(`works`, () => {
        assert.isTrue(is.whitelisted("foo", "abcdefghijklmnopqrstuvwxyz"));
        assert.isFalse(is.whitelisted("foo bar", "abcdefghijklmnopqrstuvwxyz"));
	});
});
