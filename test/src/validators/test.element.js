"use strict";

const { is, assert, inputs, DOM } = require("../helper");

var document = DOM.document;

describe("is.element", () => {
	it(`can validate that HTMLElement is an element`, () => {
		var element = document.createElement("div");
		assert.isTrue(is.element(element));
	});
	it(`can validate that object with nodeType is not element`, () => {
		assert.isFalse(is.element({ nodeType: 1 }));
	});
});
