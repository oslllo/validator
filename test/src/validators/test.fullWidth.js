"use strict";

const { is, assert, inputs } = require("../helper");

describe("is.fullWidth", () => {
	it(`works`, () => {
		assert.isTrue(is.fullWidth("ひらがな・カタカナ、．漢字"));
	});
});
