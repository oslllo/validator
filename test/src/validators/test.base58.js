"use strict";

const { is, assert } = require("../helper");

describe("is.base58", () => {
  it("works", () => {
    assert.isTrue(is.base58("91GHkLMNtyo98"));
    assert.isFalse(is.base58("IMKLP23"));
  });
});
