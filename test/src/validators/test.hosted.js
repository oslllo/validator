"use strict";

const { is, assert, inputs, type } = require("../helper");

describe("is.hosted", () => {
	var hosted = {
		valid: [{ a: {} }, { a: [] }, { a: function () {} }],
		invalid: [
			{ a: true },
			{ a: false },
			{ a: 3 },
			{ a: undefined },
			{ a: "abc" },
			{ a: null },
		],
	};
	hosted.valid.forEach((host) => {
		it(`can tell that ${type(host.a)} is hosted`, () => {
			assert.isTrue(is.hosted("a", host));
		});
    });
    hosted.invalid.forEach((host) => {
		it(`can tell that ${type(host.a)} is NOT hosted`, () => {
			assert.isFalse(is.hosted("a", host));
		});
	});
});
