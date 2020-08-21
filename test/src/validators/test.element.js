"use strict";

const { is, assert, inputs } = require("../helper");

describe("is.element", () => {
	it(`can validate that HTMLElement is an element`, () => {
        var element = is._document.createElement("div");
		assert.isTrue(is.element(element));
	});
	it(`can validate that object with nodeType is not element`, () => {
		assert.isFalse(is.element({ nodeType: 1 }));
	});
});
