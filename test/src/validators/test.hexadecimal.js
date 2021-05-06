"use strict";

const { is, assert } = require("../helper");

describe("is.hexadecimal", () => {
  it("works", () => {
    assert.isTrue(is.hexadecimal("deadBEEF"));
    assert.isFalse(is.hexadecimal("abcdefg"));
  });
});
