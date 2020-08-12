"use strict";

const { is, assert, inputs } = require("../helper");

describe("is.variableWidth", () => {
	it(`works`, () => {
		assert.isTrue(is.variableWidth("ひらがなカタカナ漢字ABCDE"));
	});
});
