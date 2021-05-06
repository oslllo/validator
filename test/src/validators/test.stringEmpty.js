"use strict";

const { is, assert } = require("../helper");

describe("is.stringEmpty", () => {
  it("works", () => {
    assert.isTrue(is.stringEmpty(""));
  });
  it("works with arguments", () => {
    assert.isTrue(
      is.stringEmpty(" ", { ignore_whitespace: true })
    );
    assert.isFalse(
      is.stringEmpty("foo", { ignore_whitespace: true })
    );
  });
});
