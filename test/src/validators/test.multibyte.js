"use strict";

const { is, assert, inputs } = require("../helper");

describe("is.multibyte", () => {
	it(`works`, () => {
		assert.isTrue(is.multibyte("ひらがな・カタカナ、．漢字"));
		assert.isFalse(is.multibyte("abc"));
	});
});
