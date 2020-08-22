"use strict";

const { is, assert } = require("../helper");

describe("is.JWT", () => {
	it(`works`, () => {
		assert.isTrue(
			is.JWT(
				"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb3JlbSI6Imlwc3VtIn0.ymiJSsMJXR6tMSr8G9usjQ15_8hKPDv_CArLhxw28MI"
			)
		);
		assert.isFalse(is.JWT("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"));
	});
});
