"use strict";

const { is, assert } = require("../helper");

describe("is.rgbColor", () => {
	it(`works`, () => {
		assert.isTrue(is.rgbColor("rgb(0,0,0)"));
	});
	it(`works with arguments`, () => {
		assert.isTrue(is.rgbColor("rgb(5,5,5)", false));
		assert.isFalse(is.rgbColor("rgb(4,4,5%)", false));
	});
});
