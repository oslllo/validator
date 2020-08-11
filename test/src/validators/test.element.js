"use strict";

const { is, assert, inputs } = require("../helper");

if (typeof HTMLElement !== "undefined") {
	describe("is.element", () => {
		it(`can tell that HTMLElement is an element`, () => {
			var element = document.createElement("div");
			assert.isTrue(is.element(element));
		});
		it(`can tell that object with nodeType is not element`, () => {
			assert.isTrue(is.element({ nodeType: 1 }));
		});
	});
}