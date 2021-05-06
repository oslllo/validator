"use strict";

const { is, assert } = require("../helper");

describe("is.element", () => {
  it("can validate that HTMLElement is an element", () => {
    // Use the same dom instance or test will fail
    var element = is._internal._window.document.createElement("div");
    assert.isTrue(is.element(element));
  });
  it("can validate that object with nodeType is not element", () => {
    assert.isFalse(is.element({ nodeType: 1 }));
  });
});
