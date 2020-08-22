"use strict";

const { is, assert } = require("../helper");

describe("is.URL", () => {
	it(`works`, () => {
		assert.isTrue(is.URL("foobar.com"));
	});
	it(`works with arguments`, () => {
		assert.isTrue(
			is.URL("rtmp://foobar.com", {
				protocols: ["rtmp"],
			})
		);
		assert.isFalse(
			is.URL("http://foobar.com", {
				protocols: ["rtmp"],
			})
		);
	});
});
