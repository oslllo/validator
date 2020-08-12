"use strict";

const { is, assert, inputs } = require("../helper");

describe("is.ISBN", () => {
	it(`works`, () => {
        assert.isTrue(is.ISBN("9783836221191", 13));
        assert.isFalse(is.ISBN("9783836221190", 13));
	});
});
