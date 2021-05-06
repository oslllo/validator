"use strict";

const { is, assert } = require("../helper");

describe("is.portNumber", () => {
  it("works", () => {
    assert.isTrue(is.portNumber(8080));
    assert.isFalse(is.portNumber(-1));
  });
});
