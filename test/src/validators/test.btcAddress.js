"use strict";

const { is, assert } = require("../helper");

describe("is.btcAddress", () => {
  it("works", () => {
    assert.isTrue(is.btcAddress("1MUz4VMYui5qY1mxUiG8BQ1Luv6tqkvaiL"));
    assert.isFalse(is.btcAddress("4J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy"));
  });
});
