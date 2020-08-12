"use strict";

const { is, assert, inputs } = require("../helper");

describe("is.stringLength", () => {
	it(`works`, () => {
        assert.isTrue(is.stringLength("abc", { min: 2 }));
        assert.isFalse(is.stringLength("a", { min: 2 }));
	});
});
